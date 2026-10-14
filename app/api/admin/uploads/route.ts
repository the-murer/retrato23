import { NextResponse, type NextRequest } from "next/server";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { r2, R2_BUCKET } from "@/lib/r2";
import { isAdmin, unauthorized } from "@/lib/auth";
import { thumbKey } from "@/lib/utils";

const MAX_BATCH = 20;
const URL_TTL_SECONDS = 15 * 60;

const signPut = (Key: string) =>
  getSignedUrl(r2, new PutObjectCommand({ Bucket: R2_BUCKET, Key, ContentType: "image/jpeg" }), {
    expiresIn: URL_TTL_SECONDS,
  });

// Returns presigned PUT URLs so the browser uploads straight to R2 (Vercel caps bodies at 4.5 MB).
export async function POST(req: NextRequest) {
  if (!(await isAdmin(req))) return unauthorized();

  const { count } = await req.json().catch(() => ({}));
  if (!Number.isInteger(count) || count < 1 || count > MAX_BATCH) {
    return NextResponse.json({ error: `count deve ser entre 1 e ${MAX_BATCH}` }, { status: 400 });
  }

  const uploads = await Promise.all(
    Array.from({ length: count }, async () => {
      const key = `events/${crypto.randomUUID()}.jpg`;
      const [url, thumbUrl] = await Promise.all([signPut(key), signPut(thumbKey(key))]);
      return { key, url, thumbUrl };
    })
  );

  return NextResponse.json({ uploads });
}
