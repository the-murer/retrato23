import { NextResponse, type NextRequest } from "next/server";
import Event from "@/database/models/Event";
import dbConnect from "@/database/dbConnect";
import { isAdmin, unauthorized } from "@/lib/auth";
import { isDuplicateKeyError, parseEventInput, revalidateEventPages } from "@/lib/events";

export async function POST(req: NextRequest) {
  if (!(await isAdmin(req))) return unauthorized();

  const parsed = parseEventInput(await req.json().catch(() => null), false);
  if ("error" in parsed) {
    return NextResponse.json({ error: parsed.error }, { status: 400 });
  }

  try {
    await dbConnect();
    const event = await Event.create(parsed.data);
    revalidateEventPages(event.slug);
    return NextResponse.json({ id: event._id.toString(), slug: event.slug }, { status: 201 });
  } catch (err) {
    if (isDuplicateKeyError(err)) {
      return NextResponse.json({ error: "Slug já existe" }, { status: 409 });
    }
    console.error(err);
    return NextResponse.json({ error: "Erro ao criar evento" }, { status: 500 });
  }
}
