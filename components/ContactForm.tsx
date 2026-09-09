"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = {
      nombre: (form.elements.namedItem("nombre") as HTMLInputElement).value,
      correo: (form.elements.namedItem("correo") as HTMLInputElement).value,
      mensaje: (form.elements.namedItem("mensaje") as HTMLTextAreaElement)
        .value,
    };

    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error();
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "ok") {
    return (
      <div className="border hairline p-8 text-center">
        <p className="expediente-tag mb-3">Mensaje enviado</p>
        <p className="text-ink">
          Gracias por escribirnos. Te responderemos a la brevedad.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="expediente-tag block mb-2">Nombre</label>
        <input
          type="text"
          name="nombre"
          required
          className="w-full border-b hairline bg-transparent py-2 text-ink focus:outline-none focus:border-ink"
        />
      </div>
      <div>
        <label className="expediente-tag block mb-2">Correo</label>
        <input
          type="email"
          name="correo"
          required
          className="w-full border-b hairline bg-transparent py-2 text-ink focus:outline-none focus:border-ink"
        />
      </div>
      <div>
        <label className="expediente-tag block mb-2">Cuéntanos tu caso</label>
        <textarea
          name="mensaje"
          rows={5}
          required
          className="w-full border-b hairline bg-transparent py-2 text-ink focus:outline-none focus:border-ink resize-none"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">
          No se pudo enviar tu mensaje. Intenta de nuevo o escríbenos
          directamente a lic_mbalandran@outlook.com.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="bg-ink text-papel px-6 py-3 text-sm hover:bg-acero transition-colors disabled:opacity-50"
      >
        {status === "loading" ? "Enviando..." : "Enviar"}
      </button>
    </form>
  );
}
