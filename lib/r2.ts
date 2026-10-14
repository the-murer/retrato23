// Cloudflare R2 speaks the S3 API, so the AWS SDK client is reused with an R2 endpoint.
import { DeleteObjectsCommand, S3Client } from "@aws-sdk/client-s3";
import { thumbKey } from "@/lib/utils";

import dotenv from "dotenv";

dotenv.config({ path: ".env" });

const R2_ACCOUNT_ID = process.env.R2_ACCOUNT_ID!;
const R2_ACCESS_KEY_ID = process.env.R2_ACCESS_KEY_ID!;
const R2_SECRET_ACCESS_KEY = process.env.R2_SECRET_ACCESS_KEY!;
export const R2_BUCKET = process.env.R2_BUCKET!;

export const r2 = new S3Client({
  region: "auto",
  endpoint: `https://${R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: R2_ACCESS_KEY_ID,
    secretAccessKey: R2_SECRET_ACCESS_KEY,
  },
  // Keeps SDK checksum params out of presigned URLs, as Cloudflare recommends for R2.
  requestChecksumCalculation: "WHEN_REQUIRED",
  responseChecksumValidation: "WHEN_REQUIRED",
});

// Deletes photos and their thumbnails. Never throws: the DB is the source of truth,
// a failed delete only leaves orphan files behind.
export async function deleteImages(keys: string[]) {
  const all = [...new Set(keys.flatMap((key) => [key, thumbKey(key)]))];
  if (all.length === 0) return;

  try {
    await r2.send(
      new DeleteObjectsCommand({
        Bucket: R2_BUCKET,
        Delete: { Objects: all.map((Key) => ({ Key })), Quiet: true },
      })
    );
  } catch (err) {
    console.error("R2 delete failed", all, err);
  }
}
