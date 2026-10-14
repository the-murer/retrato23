"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AlertCircle, Calendar, FileText, Link as LinkIcon, Save, X } from "lucide-react";
import { Input } from "@/components/common/input";
import { Button } from "@/components/common/button";
import { mediaUrl, SLUG_PATTERN, thumbKey } from "@/lib/utils";
import { uploadImages } from "@/lib/upload";
import type { EventData } from "@/lib/events";

type Fields = Pick<EventData, "name" | "slug" | "description" | "link">;
type FormErrors = Partial<Record<keyof Fields | "image", string>>;

const fileInputClass =
  "block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-primary file:text-primary-foreground hover:file:bg-primary/90 cursor-pointer";

export default function EventForm({ event }: { event?: EventData }) {
  const router = useRouter();
  const [fields, setFields] = useState<Fields>({
    name: event?.name ?? "",
    slug: event?.slug ?? "",
    description: event?.description ?? "",
    link: event?.link ?? "",
  });
  const [showOnLanding, setShowOnLanding] = useState(event?.showOnLanding ?? false);
  const [image, setImage] = useState(event?.image ?? "");
  const [photos, setPhotos] = useState<string[]>(event?.photos ?? []);
  const [errors, setErrors] = useState<FormErrors>({});
  const [progress, setProgress] = useState<{ done: number; total: number } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleInputChange = (field: keyof Fields, value: string) => {
    setFields((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  // ponytail: photos upload as soon as they're picked, so abandoning the form leaves
  // orphan files in R2. Add a cleanup script if bucket usage ever matters.
  const upload = async (input: HTMLInputElement, onUploaded: (keys: string[]) => void) => {
    const files = [...(input.files ?? [])];
    input.value = "";
    if (files.length === 0) return;

    setMessage("");
    setProgress({ done: 0, total: files.length });
    try {
      onUploaded(await uploadImages(files, (done) => setProgress({ done, total: files.length })));
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Erro no upload");
    } finally {
      setProgress(null);
    }
  };

  const validateForm = () => {
    const newErrors: FormErrors = {};
    if (fields.name.trim().length < 3) newErrors.name = "Nome deve ter pelo menos 3 caracteres";
    if (!SLUG_PATTERN.test(fields.slug)) {
      newErrors.slug = "Use apenas letras minúsculas, números e hífens (ex: casamento-ana)";
    }
    if (fields.link && !/^https?:\/\/.+/.test(fields.link)) {
      newErrors.link = "Por favor, insira uma URL válida (http:// ou https://)";
    }
    if (!image) newErrors.image = "Foto principal é obrigatória";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setMessage("");
    const res = await fetch(event ? `/api/admin/events/${event.id}` : "/api/admin/events", {
      method: event ? "PATCH" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...fields, showOnLanding, image, photos }),
    }).catch(() => null);
    setIsSubmitting(false);

    if (res?.ok) {
      router.push("/admin");
    } else if (res?.status === 409) {
      setErrors((prev) => ({ ...prev, slug: "Já existe um evento com esse slug" }));
    } else {
      setMessage((await res?.json().catch(() => null))?.error ?? "Erro ao salvar evento");
    }
  };

  const busy = isSubmitting || progress !== null;

  return (
    <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        {event ? "Editar evento" : "Criar novo evento"}
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          label="Nome do Evento"
          placeholder="Digite o nome do evento"
          value={fields.name}
          onChange={(e) => handleInputChange("name", e.target.value)}
          error={errors.name}
          leftIcon={<Calendar className="h-4 w-4" />}
          isRequired
        />

        <Input
          label="Slug do Evento"
          placeholder="casamento-ana-e-joao"
          value={fields.slug}
          onChange={(e) => handleInputChange("slug", e.target.value)}
          error={errors.slug}
          leftIcon={<FileText className="h-4 w-4" />}
          helperText={`Endereço público: /events/${fields.slug || "..."}`}
          isRequired
        />

        <Input
          label="Descrição"
          placeholder="Descreva o evento"
          value={fields.description}
          onChange={(e) => handleInputChange("description", e.target.value)}
          leftIcon={<FileText className="h-4 w-4" />}
        />

        <Input
          label="Link externo"
          placeholder="https://exemplo.com/evento"
          value={fields.link}
          onChange={(e) => handleInputChange("link", e.target.value)}
          error={errors.link}
          leftIcon={<LinkIcon className="h-4 w-4" />}
          helperText="Opcional. Mostra o botão 'Visualizar fotos' na página do evento"
        />

        <label className="flex items-center gap-2 text-sm font-medium">
          <input
            type="checkbox"
            checked={showOnLanding}
            onChange={(e) => setShowOnLanding(e.target.checked)}
            className="h-4 w-4 accent-primary"
          />
          Mostrar na página inicial
        </label>

        <div className="space-y-2">
          <label htmlFor="event-image" className="text-sm font-medium leading-none">
            Foto principal
            <span className="text-destructive ml-1">*</span>
          </label>
          {image && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={mediaUrl(thumbKey(image))}
              alt="Foto principal"
              className="h-48 w-full rounded-md object-cover"
            />
          )}
          <input
            id="event-image"
            type="file"
            accept="image/*"
            disabled={busy}
            onChange={(e) =>
              upload(e.currentTarget, ([key]) => {
                setImage(key);
                setErrors((prev) => ({ ...prev, image: undefined }));
              })
            }
            className={fileInputClass}
          />
          {errors.image && (
            <p className="text-sm text-destructive" role="alert">
              {errors.image}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="event-photos" className="text-sm font-medium leading-none">
            Fotos do evento ({photos.length})
          </label>
          {photos.length > 0 && (
            <ul className="grid grid-cols-3 sm:grid-cols-4 gap-2">
              {photos.map((key, index) => (
                <li key={key} className="relative aspect-square">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={mediaUrl(thumbKey(key))}
                    alt={`Foto ${index + 1}`}
                    loading="lazy"
                    className="h-full w-full rounded-md object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => setPhotos((prev) => prev.filter((k) => k !== key))}
                    aria-label={`Remover foto ${index + 1}`}
                    className="absolute top-1 right-1 rounded-full bg-black/60 p-1 text-white hover:bg-black/80"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </li>
              ))}
            </ul>
          )}
          <input
            id="event-photos"
            type="file"
            accept="image/*"
            multiple
            disabled={busy}
            onChange={(e) => upload(e.currentTarget, (keys) => setPhotos((prev) => [...prev, ...keys]))}
            className={fileInputClass}
          />
          <p className="text-sm text-muted-foreground">
            As fotos são redimensionadas no navegador antes do envio. Formatos: JPG, PNG.
          </p>
        </div>

        {progress && (
          <p className="text-sm text-muted-foreground" role="status">
            Enviando fotos {progress.done}/{progress.total}...
          </p>
        )}

        {message && (
          <div className="flex items-center gap-2 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md">
            <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
            <p className="text-sm text-red-800 dark:text-red-200" role="alert">
              {message}
            </p>
          </div>
        )}

        <div className="flex gap-3">
          <Button asChild variant="outline" size="lg">
            <Link href="/admin">Cancelar</Link>
          </Button>
          <Button type="submit" disabled={busy} className="flex-1" size="lg">
            <Save className="h-4 w-4" />
            {isSubmitting ? "Salvando..." : "Salvar evento"}
          </Button>
        </div>
      </form>
    </div>
  );
}
