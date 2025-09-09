import { NextResponse } from "next/server";
import { s3 } from "@/lib/s3";
import { GetObjectCommand } from "@aws-sdk/client-s3";
import Event from "@/database/models/Event";
import dbConnect from "@/database/dbConnect";

export async function GET(
  req: Request,
  { params }: { params: { eventId: string } }
) {
  try {
    await dbConnect();

    const { eventId } = await params;
    console.log("🚀 ~ GET ~ eventId => ", eventId);
    const event = await Event.findOne({ slug: eventId });
    
    if (!event) {
      return NextResponse.json({ error: "Event not found" }, { status: 404 });
    }

    const command = new GetObjectCommand({
      Bucket: process.env.AWS_S3_BUCKET!,
      Key: event.image,
    });

    const response = await s3.send(command);
    
    const chunks: Uint8Array[] = [];
    const stream = response.Body as any;
    
    for await (const chunk of stream) {
      chunks.push(chunk);
    }
    
    const buffer = Buffer.concat(chunks);
    const base64Image = buffer.toString('base64');

    return NextResponse.json({
      id: event._id,
      name: event.name,
      description: event.description,
      image: `data:${event.contentType};base64,${base64Image}`,
      link: event.link,
    });
  } catch (error) {
    console.error('Error fetching event:', error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
