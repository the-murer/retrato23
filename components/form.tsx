"use client";
import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./common/button";
import {
  Upload,
  Calendar,
  Link,
  FileText,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

interface FormData {
  name: string;
  description: string;
  link: string;
  file: File | null;
  slug: string;
}

interface FormErrors {
  name?: string;
  description?: string;
  link?: string;
  file?: string;
  slug?: string;
}

export default function UploadForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    description: "",
    link: "",
    file: null,
    slug: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [imageId, setImageId] = useState<string>("");

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Nome do evento é obrigatório";
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "Nome deve ter pelo menos 3 caracteres";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Descrição é obrigatória";
    } else if (formData.description.trim().length < 10) {
      newErrors.description = "Descrição deve ter pelo menos 10 caracteres";
    }

    if (!formData.slug.trim()) {
      newErrors.slug = "Slug é obrigatório";
    } else if (formData.slug.trim().length < 3) {
      newErrors.slug = "Slug deve ter pelo menos 3 caracteres";
    }

    if (!formData.link.trim()) {
      newErrors.link = "Link é obrigatório";
    } else {
      const urlPattern = /^https?:\/\/.+/;
      if (!urlPattern.test(formData.link)) {
        newErrors.link =
          "Por favor, insira uma URL válida (http:// ou https://)";
      }
    }

    if (!formData.file) {
      newErrors.file = "Arquivo é obrigatório";
    } else if (formData.file.size > 5 * 1024 * 1024) {
      newErrors.file = "Arquivo deve ter no máximo 5MB";
    } else if (!formData.file.type.startsWith("image/")) {
      newErrors.file = "Por favor, selecione apenas arquivos de imagem";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    field: keyof FormData,
    value: string | File | null
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const submitFormData = new FormData();
      submitFormData.append("file", formData.file!);
      submitFormData.append("eventName", formData.name);
      submitFormData.append("eventSlug", formData.slug);
      submitFormData.append("eventDescription", formData.description);
      submitFormData.append("eventLink", formData.link);

      const res = await fetch("/api/event", {
        method: "POST",
        body: submitFormData,
      });

      if (!res.ok) {
        throw new Error("Erro ao enviar formulário");
      }

      const { id } = await res.json();
      setImageId(id);
      setSubmitStatus("success");

      // Reset form
      setFormData({
        name: "",
        description: "",
        link: "",
        file: null,
        slug: "",
      });
    } catch (error) {
      console.error("Erro:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Criar Novo Evento
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Preencha os dados abaixo para criar um novo evento
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          label="Nome do Evento"
          placeholder="Digite o nome do evento"
          value={formData.name}
          onChange={(e) => handleInputChange("name", e.target.value)}
          error={errors.name}
          leftIcon={<Calendar className="h-4 w-4" />}
          isRequired
        />

        <Input
          label="Slug do Evento"
          placeholder="Digite o slug do evento (será um identificador único)"
          value={formData.slug}
          onChange={(e) => handleInputChange("slug", e.target.value)}
          error={errors.slug}
          leftIcon={<FileText className="h-4 w-4" />}
          isRequired
        />

        <Input
          label="Descrição"
          placeholder="Descreva o evento em detalhes"
          value={formData.description}
          onChange={(e) => handleInputChange("description", e.target.value)}
          error={errors.description}
          leftIcon={<FileText className="h-4 w-4" />}
          isRequired
        />

        <Input
          label="Link do Evento"
          placeholder="https://exemplo.com/evento"
          value={formData.link}
          onChange={(e) => handleInputChange("link", e.target.value)}
          error={errors.link}
          leftIcon={<Link className="h-4 w-4" />}
          isRequired
          helperText="Inclua http:// ou https:// no início da URL"
        />

        <div className="space-y-2">
          <label className="text-sm font-medium leading-none">
            Imagem do Evento
            <span className="text-destructive ml-1">*</span>
          </label>
          <div className="relative">
            <input
              type="file"
              accept="image/*"
              onChange={(e) =>
                handleInputChange("file", e.target.files?.[0] || null)
              }
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-primary file:text-primary-foreground hover:file:bg-primary/90 cursor-pointer"
            />
          </div>
          {errors.file && (
            <p className="text-sm text-destructive" role="alert">
              {errors.file}
            </p>
          )}
          <p className="text-sm text-muted-foreground">
            Formatos aceitos: JPG, PNG, GIF. Tamanho máximo: 5MB
          </p>
        </div>

        {submitStatus === "success" && (
          <div className="flex items-center gap-2 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-md">
            <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
            <p className="text-sm text-green-800 dark:text-green-200">
              Evento cadastrado com sucesso!
            </p>
          </div>
        )}

        {submitStatus === "error" && (
          <div className="flex items-center gap-2 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md">
            <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
            <p className="text-sm text-red-800 dark:text-red-200">
              Erro ao criar evento. Tente novamente.
            </p>
          </div>
        )}

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full"
          size="lg"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
              Criando Evento...
            </>
          ) : (
            <>
              <Upload className="h-4 w-4" />
              Criar Evento
            </>
          )}
        </Button>
      </form>
    </div>
  );
}
