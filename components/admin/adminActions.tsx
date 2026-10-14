"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/common/button";

type EventRowActionsProps = {
  id: string;
  name: string;
  showOnLanding: boolean;
};

export function EventRowActions({ id, name, showOnLanding }: EventRowActionsProps) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);

  const send = async (init: RequestInit) => {
    setBusy(true);
    const res = await fetch(`/api/admin/events/${id}`, init).catch(() => null);
    setBusy(false);
    if (!res?.ok) alert("Não foi possível salvar. Tente novamente.");
    router.refresh();
  };

  const toggleLanding = (checked: boolean) =>
    send({
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ showOnLanding: checked }),
    });

  const remove = () => {
    if (confirm(`Excluir "${name}"? Todas as fotos do evento serão apagadas.`)) {
      send({ method: "DELETE" });
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-3">
      <label className="flex items-center gap-2 text-sm">
        <input
          type="checkbox"
          checked={showOnLanding}
          disabled={busy}
          onChange={(e) => toggleLanding(e.target.checked)}
          className="h-4 w-4 accent-primary"
        />
        Página inicial
      </label>
      <Button asChild variant="outline" size="sm">
        <Link href={`/admin/events/${id}`}>Editar</Link>
      </Button>
      <Button variant="destructive" size="sm" disabled={busy} onClick={remove}>
        Excluir
      </Button>
    </div>
  );
}

export function LogoutButton() {
  const router = useRouter();

  const logout = async () => {
    await fetch("/api/admin/session", { method: "DELETE" });
    router.push("/admin/login");
  };

  return (
    <Button variant="outline" onClick={logout}>
      Sair
    </Button>
  );
}
