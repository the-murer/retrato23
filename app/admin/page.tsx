import type { Metadata } from "next";
import Link from "next/link";
import { Plus } from "lucide-react";
import { Button } from "@/components/common/button";
import { EventRowActions, LogoutButton } from "@/components/admin/adminActions";
import { listEvents } from "@/lib/events";
import { mediaUrl, thumbKey } from "@/lib/utils";

export const metadata: Metadata = { title: "Admin - Eventos" };
export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const events = await listEvents();

  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <h1 className="text-3xl font-bold text-foreground">Eventos</h1>
        <div className="flex gap-2">
          <Button asChild>
            <Link href="/admin/events/new">
              <Plus className="h-4 w-4" />
              Novo evento
            </Link>
          </Button>
          <LogoutButton />
        </div>
      </div>

      {events.length === 0 ? (
        <p className="text-muted-foreground">Nenhum evento cadastrado ainda.</p>
      ) : (
        <ul className="divide-y divide-border rounded-lg border border-border">
          {events.map((event) => (
            <li key={event.id} className="flex flex-wrap items-center gap-4 p-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={mediaUrl(thumbKey(event.image))}
                alt=""
                className="h-16 w-16 rounded-md object-cover"
              />
              <div className="flex-1 min-w-40">
                <p className="font-medium text-foreground">{event.name}</p>
                <Link
                  href={`/events/${event.slug}`}
                  className="text-sm text-muted-foreground hover:underline"
                >
                  /events/{event.slug}
                </Link>
                <p className="text-xs text-muted-foreground">{event.photos.length} fotos</p>
              </div>
              <EventRowActions id={event.id} name={event.name} showOnLanding={event.showOnLanding} />
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
