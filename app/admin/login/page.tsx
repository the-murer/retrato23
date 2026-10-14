"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock } from "lucide-react";
import { Input } from "@/components/common/input";
import { Button } from "@/components/common/button";

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const res = await fetch("/api/admin/session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    }).catch(() => null);

    if (res?.ok) {
      router.replace("/admin");
      return;
    }
    setIsSubmitting(false);
    setError((await res?.json().catch(() => null))?.error ?? "Erro ao entrar");
  };

  return (
    <main className="min-h-[70vh] flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm space-y-6 p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg"
      >
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Área administrativa</h1>
        <Input
          type="password"
          label="Senha"
          autoComplete="current-password"
          autoFocus
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={error}
          leftIcon={<Lock className="h-4 w-4" />}
          isRequired
        />
        <Button type="submit" className="w-full" size="lg" disabled={isSubmitting || !password}>
          {isSubmitting ? "Entrando..." : "Entrar"}
        </Button>
      </form>
    </main>
  );
}
