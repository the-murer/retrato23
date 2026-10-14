// Browser-side: resizes photos and uploads them straight to R2 through presigned URLs.
// JPEG rather than WebP because Safari's canvas can't encode WebP.

const FULL_EDGE = 2400;
const THUMB_EDGE = 600;
const QUALITY = 0.85;
const BATCH = 20; // must match MAX_BATCH in /api/admin/uploads
const CONCURRENCY = 3; // decoded photos are large; keeps memory in check

type SignedUpload = { key: string; url: string; thumbUrl: string };

function toJpeg(bitmap: ImageBitmap, maxEdge: number): Promise<Blob> {
  const scale = Math.min(1, maxEdge / Math.max(bitmap.width, bitmap.height));
  const canvas = document.createElement("canvas");
  canvas.width = Math.round(bitmap.width * scale);
  canvas.height = Math.round(bitmap.height * scale);

  const ctx = canvas.getContext("2d")!;
  ctx.fillStyle = "#fff"; // transparent PNGs would otherwise turn black
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(bitmap, 0, 0, canvas.width, canvas.height);

  return new Promise((resolve, reject) =>
    canvas.toBlob(
      (blob) => (blob ? resolve(blob) : reject(new Error("Erro ao processar imagem"))),
      "image/jpeg",
      QUALITY
    )
  );
}

async function put(url: string, body: Blob) {
  const res = await fetch(url, { method: "PUT", headers: { "Content-Type": "image/jpeg" }, body });
  if (!res.ok) throw new Error(`Upload falhou (${res.status})`);
}

async function uploadOne(file: File, target: SignedUpload) {
  // Also strips EXIF (GPS etc.) since only pixels are re-encoded
  const bitmap = await createImageBitmap(file).catch(() => {
    throw new Error(`Formato não suportado: ${file.name}. Use JPG ou PNG.`);
  });
  try {
    const [full, thumb] = await Promise.all([toJpeg(bitmap, FULL_EDGE), toJpeg(bitmap, THUMB_EDGE)]);
    await Promise.all([put(target.url, full), put(target.thumbUrl, thumb)]);
  } finally {
    bitmap.close();
  }
}

// Returns the R2 keys of the uploaded photos, in the same order as `files`.
export async function uploadImages(files: File[], onProgress?: (done: number) => void) {
  const keys: string[] = [];
  let done = 0;

  for (let start = 0; start < files.length; start += BATCH) {
    const batch = files.slice(start, start + BATCH);

    const res = await fetch("/api/admin/uploads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ count: batch.length }),
    });
    if (res.status === 401) throw new Error("Sessão expirada. Faça login novamente.");
    if (!res.ok) throw new Error("Erro ao preparar upload");
    const { uploads }: { uploads: SignedUpload[] } = await res.json();

    let next = 0;
    const worker = async () => {
      while (next < batch.length) {
        const i = next++;
        await uploadOne(batch[i], uploads[i]);
        onProgress?.(++done);
      }
    };
    await Promise.all(Array.from({ length: Math.min(CONCURRENCY, batch.length) }, worker));

    keys.push(...uploads.map((upload) => upload.key));
  }

  return keys;
}
