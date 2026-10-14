import mongoose from "mongoose";
import { cache } from "react";
import { revalidatePath } from "next/cache";
import Event from "@/database/models/Event";
import dbConnect from "@/database/dbConnect";
import { SLUG_PATTERN } from "@/lib/utils";

export type EventData = {
  id: string;
  name: string;
  slug: string;
  description: string;
  link: string;
  image: string;
  photos: string[];
  showOnLanding: boolean;
};

type EventInput = Omit<EventData, "id">;

const MAX_PHOTOS = 300;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function toEventData(doc: any): EventData {
  return {
    id: doc._id.toString(),
    name: doc.name,
    slug: doc.slug,
    description: doc.description ?? "",
    link: doc.link ?? "",
    image: doc.image,
    photos: doc.photos ?? [],
    showOnLanding: !!doc.showOnLanding,
  };
}

export async function listEvents({ landingOnly = false } = {}) {
  await dbConnect();
  const docs = await Event.find(landingOnly ? { showOnLanding: true } : {})
    .sort({ createdAt: -1 })
    .lean();
  return docs.map(toEventData);
}

// cache() dedupes the lookup between generateMetadata and the page
export const getEventBySlug = cache(async (slug: string) => {
  await dbConnect();
  const doc = await Event.findOne({ slug }).lean();
  return doc ? toEventData(doc) : null;
});

export async function getEventById(id: string) {
  if (!mongoose.isValidObjectId(id)) return null;
  await dbConnect();
  const doc = await Event.findById(id).lean();
  return doc ? toEventData(doc) : null;
}

const isKey = (v: unknown): v is string =>
  typeof v === "string" && v.length > 0 && v.length <= 300 && !v.includes("..");

// Validates a create (partial = false) or update (partial = true) request body.
export function parseEventInput(
  body: unknown,
  partial: boolean
): { data: Partial<EventInput> } | { error: string } {
  if (!body || typeof body !== "object") return { error: "Corpo inválido" };
  const b = body as Record<string, unknown>;
  const data: Partial<EventInput> = {};
  const has = (field: string) => b[field] !== undefined || !partial;

  if (has("name")) {
    if (typeof b.name !== "string" || b.name.trim().length < 3) return { error: "Nome inválido" };
    data.name = b.name.trim();
  }
  if (has("slug")) {
    if (typeof b.slug !== "string" || !SLUG_PATTERN.test(b.slug)) return { error: "Slug inválido" };
    data.slug = b.slug;
  }
  if (b.description !== undefined) {
    if (typeof b.description !== "string") return { error: "Descrição inválida" };
    data.description = b.description.trim();
  }
  if (b.link !== undefined) {
    if (typeof b.link !== "string" || (b.link && !/^https?:\/\/.+/.test(b.link))) {
      return { error: "Link inválido" };
    }
    data.link = b.link;
  }
  if (b.showOnLanding !== undefined) {
    if (typeof b.showOnLanding !== "boolean") return { error: "showOnLanding inválido" };
    data.showOnLanding = b.showOnLanding;
  }
  if (has("image")) {
    if (!isKey(b.image)) return { error: "Foto principal obrigatória" };
    data.image = b.image;
  }
  if (b.photos !== undefined) {
    if (!Array.isArray(b.photos) || b.photos.length > MAX_PHOTOS || !b.photos.every(isKey)) {
      return { error: "Fotos inválidas" };
    }
    data.photos = b.photos;
  }

  return { data };
}

export function isDuplicateKeyError(err: unknown) {
  return (err as { code?: number })?.code === 11000;
}

export function revalidateEventPages(...slugs: string[]) {
  revalidatePath("/");
  revalidatePath("/events");
  for (const slug of new Set(slugs)) revalidatePath(`/events/${slug}`);
}
