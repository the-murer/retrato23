import type { Metadata } from "next";
import { notFound } from "next/navigation";
import EventForm from "@/components/admin/eventForm";
import { getEventById } from "@/lib/events";

export const metadata: Metadata = { title: "Admin - Editar evento" };
export const dynamic = "force-dynamic";

export default async function EditEventPage({ params }: { params: Promise<{ id: string }> }) {
  const event = await getEventById((await params).id);
  if (!event) notFound();

  return (
    <main className="max-w-2xl mx-auto px-4 py-10">
      <EventForm event={event} />
    </main>
  );
}
