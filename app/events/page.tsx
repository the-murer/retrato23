import type { Metadata } from "next";
import { GalleryShowcase } from "@/components/ui/galleryShowcase";
import { listEvents } from "@/lib/events";
import { mediaUrl, thumbKey } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Eventos",
};

// Cached; admin changes call revalidatePath("/events")
export const revalidate = 3600;

export default async function EventsPage() {
  const events = await listEvents();

  return (
    <div className="min-h-screen bg-background">
      <main>
        <GalleryShowcase
          title="Eventos"
          items={events.map((event) => ({
            id: event.id,
            title: event.name,
            description: event.description,
            imageUrl: mediaUrl(thumbKey(event.image)),
            imageAlt: event.name,
            link: `/events/${event.slug}`,
          }))}
        />
      </main>
    </div>
  );
}
