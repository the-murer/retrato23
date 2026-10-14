import type { Metadata } from "next";
import EventForm from "@/components/admin/eventForm";

export const metadata: Metadata = { title: "Admin - Novo evento" };

export default function NewEventPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-10">
      <EventForm />
    </main>
  );
}
