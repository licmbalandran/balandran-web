import { NextResponse } from "next/server";
import { Resend } from "resend";

// Envía el formulario de contacto por correo usando Resend.
// Necesita RESEND_API_KEY en las variables de entorno (ver README).
// Mientras no haya un dominio verificado en Resend, CONTACT_FROM_EMAIL
// debe quedarse como "onboarding@resend.dev" (el remitente de pruebas
// de Resend), y solo se podrá enviar a la cuenta dueña de la API key.

export async function POST(request: Request) {
  try {
    const { nombre, correo, mensaje } = await request.json();

    if (!nombre || !correo || !mensaje) {
      return NextResponse.json(
        { error: "Faltan campos por llenar." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error(
        "RESEND_API_KEY no está configurada. El correo no se envió."
      );
      return NextResponse.json(
        { error: "El formulario aún no está conectado. Inténtalo más tarde." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const from = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";
    const to = process.env.CONTACT_TO_EMAIL || "lic_mbalandran@outlook.com";

    const { error } = await resend.emails.send({
      from: `Sitio Balandrán <${from}>`,
      to,
      replyTo: correo,
      subject: `Nuevo contacto desde el sitio — ${nombre}`,
      text: `Nombre: ${nombre}\nCorreo: ${correo}\n\nMensaje:\n${mensaje}`,
    });

    if (error) {
      console.error("Error de Resend:", error);
      return NextResponse.json(
        { error: "No se pudo enviar el correo." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Error en /api/contacto:", err);
    return NextResponse.json(
      { error: "Ocurrió un error inesperado." },
      { status: 500 }
    );
  }
}
