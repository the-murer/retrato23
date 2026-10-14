import { NextResponse, type NextRequest } from "next/server";
import mongoose from "mongoose";
import Event from "@/database/models/Event";
import dbConnect from "@/database/dbConnect";
import { isAdmin, unauthorized } from "@/lib/auth";
import { deleteImages } from "@/lib/r2";
import { isDuplicateKeyError, parseEventInput, revalidateEventPages } from "@/lib/events";

type Context = { params: Promise<{ id: string }> };

const notFound = () => NextResponse.json({ error: "Evento não encontrado" }, { status: 404 });

export async function PATCH(req: NextRequest, { params }: Context) {
  if (!(await isAdmin(req))) return unauthorized();

  const parsed = parseEventInput(await req.json().catch(() => null), true);
  if ("error" in parsed) {
    return NextResponse.json({ error: parsed.error }, { status: 400 });
  }

  const { id } = await params;
  if (!mongoose.isValidObjectId(id)) return notFound();

  try {
    await dbConnect();
    const event = await Event.findById(id);
    if (!event) return notFound();

    const oldSlug: string = event.slug;
    const oldKeys: string[] = [event.image, ...event.photos];

    event.set(parsed.data);
    await event.save();

    // Only files this event used to reference can be deleted
    const kept = new Set([event.image, ...event.photos]);
    await deleteImages(oldKeys.filter((key) => !kept.has(key)));

    revalidateEventPages(oldSlug, event.slug);
    return NextResponse.json({ id, slug: event.slug });
  } catch (err) {
    if (isDuplicateKeyError(err)) {
      return NextResponse.json({ error: "Slug já existe" }, { status: 409 });
    }
    console.error(err);
    return NextResponse.json({ error: "Erro ao salvar evento" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: Context) {
  if (!(await isAdmin(req))) return unauthorized();

  const { id } = await params;
  if (!mongoose.isValidObjectId(id)) return notFound();

  try {
    await dbConnect();
    // Document first: a failed file delete leaves orphans, never a broken event
    const event = await Event.findByIdAndDelete(id);
    if (!event) return notFound();

    await deleteImages([event.image, ...event.photos]);
    revalidateEventPages(event.slug);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Erro ao excluir evento" }, { status: 500 });
  }
}
