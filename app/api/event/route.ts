import { NextResponse } from "next/server";
import { s3 } from "@/lib/s3";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { v4 as uuid } from "uuid";
import Event from "@/database/models/Event";
import dbConnect from "@/database/dbConnect";

async function parseFormData(req: Request): Promise<{
  file: File | null;
  name: string;
  description: string;
  link: string;
  slug: string;
}> {
  const formData = await req.formData();

  const file = formData.get("file") as File | null;

  const name = (formData.get("eventName") as string) || "";
  const description = (formData.get("eventDescription") as string) || "";
  const link = (formData.get("eventLink") as string) || "";
  const slug = (formData.get("eventSlug") as string) || "";

  return {
    file,
    name,
    description,
    link,
    slug,
  };
}

export async function POST(req: Request) {
  try {
    const { file, name, description, link, slug } = await parseFormData(req);

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    if (!name || !link || !slug) {
      return NextResponse.json({ error: "Faltou coisa" }, { status: 409 });
    }

    const imageKey = `${uuid()}-${file.name}`;
    const fileBuffer = await file.arrayBuffer();

    await s3.send(
      new PutObjectCommand({
        Bucket: process.env.AWS_S3_BUCKET!,
        Key: imageKey,
        Body: Buffer.from(fileBuffer),
        ContentType: file.type || "application/octet-stream",
      })
    );

    await dbConnect();
    const event = await Event.create({
      image: imageKey,
      contentType: file.type,
      name: name,
      description: description,
      link: link,
      slug: slug,
    });

    return NextResponse.json({ id: event._id.toString(), name, slug });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
