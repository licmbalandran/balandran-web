"use client";

import { useFormState, useFormStatus } from "react-dom";
import Link from "next/link";
import type { PostFormState } from "./actions";
import type { Post } from "@/lib/posts";

function SubmitButton({ label }: { label: string }) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-ink text-papel px-6 py-3 text-sm hover:bg-acero transition-colors disabled:opacity-50"
    >
      {pending ? "Guardando..." : label}
    </button>
  );
}

export default function PostForm({
  action,
  post,
  submitLabel,
}: {
  action: (prev: PostFormState, formData: FormData) => Promise<PostFormState>;
  post?: Post;
  submitLabel: string;
}) {
  const [state, formAction] = useFormState(action, {});

  return (
    <form action={formAction} className="space-y-6 max-w-2xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="expediente-tag block mb-2">Título</label>
          <input
            type="text"
            name="title"
            required
            defaultValue={post?.title}
            className="w-full border-b hairline bg-transparent py-2 text-ink focus:outline-none focus:border-ink"
          />
        </div>
        <div>
          <label className="expediente-tag block mb-2">
            Slug (URL) — opcional, se genera del título
          </label>
          <input
            type="text"
            name="slug"
            defaultValue={post?.slug}
            placeholder="ej. caso-pama-textil"
            className="w-full border-b hairline bg-transparent py-2 text-ink focus:outline-none focus:border-ink"
          />
        </div>
      </div>

      <div>
        <label className="expediente-tag block mb-2">
          Expediente (ej. EXP. 2026-014)
        </label>
        <input
          type="text"
          name="expediente"
          required
          defaultValue={post?.expediente}
          className="w-full border-b hairline bg-transparent py-2 text-ink focus:outline-none focus:border-ink"
        />
      </div>

      <div>
        <label className="expediente-tag block mb-2">
          Resumen (aparece en la lista de casos)
        </label>
        <textarea
          name="excerpt"
          rows={2}
          required
          defaultValue={post?.excerpt}
          className="w-full border-b hairline bg-transparent py-2 text-ink focus:outline-none focus:border-ink resize-none"
        />
      </div>

      <div>
        <label className="expediente-tag block mb-2">
          Contenido completo del caso
        </label>
        <textarea
          name="content"
          rows={10}
          required
          defaultValue={post?.content}
          className="w-full border-b hairline bg-transparent py-2 text-ink focus:outline-none focus:border-ink"
        />
      </div>

      <div>
        <label className="expediente-tag block mb-2">
          Descripción para Google (150-160 caracteres)
        </label>
        <textarea
          name="meta_description"
          rows={2}
          required
          defaultValue={post?.meta_description}
          className="w-full border-b hairline bg-transparent py-2 text-ink focus:outline-none focus:border-ink resize-none"
        />
      </div>

      <div>
        <label className="expediente-tag block mb-2">
          URL de imagen de portada — opcional
        </label>
        <input
          type="text"
          name="cover_image"
          defaultValue={post?.cover_image ?? ""}
          placeholder="https://..."
          className="w-full border-b hairline bg-transparent py-2 text-ink focus:outline-none focus:border-ink"
        />
      </div>

      <label className="flex items-center gap-3 text-sm text-ink">
        <input
          type="checkbox"
          name="published"
          defaultChecked={post?.published ?? false}
          className="h-4 w-4"
        />
        Publicado (visible en el sitio)
      </label>

      {state.error && <p className="text-sm text-red-600">{state.error}</p>}

      <div className="flex items-center gap-6 pt-2">
        <SubmitButton label={submitLabel} />
        <Link
          href="/admin"
          className="text-sm text-acero hover:text-ink border-b border-linea hover:border-ink pb-1"
        >
          Cancelar
        </Link>
      </div>
    </form>
  );
}
