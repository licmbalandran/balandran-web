import type { Metadata } from "next";
import GeometricBanner from "@/components/GeometricBanner";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Agenda una consulta con Balandrán, despacho de defensa fiscal y aduanera en León, Guanajuato.",
};

export default function ContactoPage() {
  return (
    <>
      <GeometricBanner eyebrow="Hablemos de tu caso" title="CONTACTO" />
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-acero max-w-xl mb-14 leading-relaxed">
          Esperamos que esta información le sea de utilidad. Denos la
          oportunidad de servirle: tendrá un respaldo confiable en decisiones
          trascendentales para su persona o negocio.
        </p>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_1px_1.2fr] gap-10 md:gap-14">
        <div className="space-y-8">
          <div>
            <p className="expediente-tag mb-2">Oficina</p>
            <p className="text-acero">
              Portal Bravo &ldquo;2&rdquo;, Piso 4, Interior 419
            </p>
            <p className="text-acero">
              Jardín Principal, Zona Centro, León, Gto. México
            </p>
          </div>
          <div>
            <p className="expediente-tag mb-2">Correo</p>
            <p className="text-acero">lic_mbalandran@outlook.com</p>
          </div>
          <div>
            <p className="expediente-tag mb-2">Teléfono</p>
            <p className="text-acero">044-477-273-36-72</p>
          </div>
          <div>
            <p className="expediente-tag mb-2">Atiende</p>
            <p className="text-acero">Lic. Martín de Jesús Balandrán Díaz</p>
            <p className="text-sm text-plata">Abogado</p>
          </div>
        </div>

        <div className="hidden md:block h-full w-px bg-linea" />

        <ContactForm />
      </div>
    </section>
    </>
  );
}
