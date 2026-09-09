import type { Metadata } from "next";
import GeometricBanner from "@/components/GeometricBanner";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Conoce al despacho Balandrán, especializado en defensa fiscal y aduanera en León, Guanajuato.",
};

const equipo = [
  {
    nombre: "Lic. Martín de Jesús Balandrán Álvarez",
    detalle: "Maestría en Derecho Civil por la Universidad De La Salle Bajío",
    cedula: "Cédula profesional 4847131",
  },
  {
    nombre: "Lic. Martín de Jesús Balandrán Díaz",
    detalle: "Maestría en Derecho Aduanero por la Universidad De La Salle Bajío",
    cedula: "Cédula profesional 00003530",
  },
  {
    nombre: "Lic. Rafael Aguas Ángel",
    detalle: "Maestría en Derecho Fiscal por la Universidad De La Salle Bajío",
    cedula: "Cédula profesional 5161590",
  },
];

export default function NosotrosPage() {
  return (
    <>
      <GeometricBanner eyebrow="El despacho" title="¿POR QUÉ CONTRATARNOS?" />
      <section className="mx-auto max-w-6xl px-6 py-20">

      <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1px_1fr] gap-10 md:gap-14">
        <div className="text-acero leading-relaxed space-y-5 max-w-xl">
          <p>
            Actualmente el Estado, en su ámbito municipal, estatal y federal,
            se encuentra en un creciente ejercicio de sus facultades, a fin
            de comprobar que los ciudadanos cumplan con sus obligaciones
            tanto fiscales, aduaneras, administrativas, de sanidad y
            ambientales, por citar algunas.
          </p>
          <p>
            Ante esa situación resulta indispensable contar con el respaldo
            de profesionales del derecho, con el objetivo de evitar que la
            administración pública, en uso de sus facultades, exceda de sus
            funciones y vulnere los derechos de los gobernados.
          </p>
          <p>
            Por lo anterior, a nuestro despacho le complace ofrecerle los
            servicios en las áreas de derecho fiscal, aduanero y
            administrativo.
          </p>
          <p className="font-display font-light text-xl text-ink pt-4">
            Creamos soluciones integrales, a tus problemas legales.
          </p>
        </div>
        <div className="hidden md:block h-full w-px bg-linea" />
        <div>
          <p className="expediente-tag mb-4">En cifras</p>
          <div className="space-y-6">
            <div>
              <p className="font-display font-light text-4xl text-ink">
                León
              </p>
              <p className="text-sm text-acero mt-1">Guanajuato, México</p>
            </div>
            <div>
              <p className="font-display font-light text-4xl text-ink">3</p>
              <p className="text-sm text-acero mt-1">
                áreas de práctica principal: fiscal, aduanera y administrativa
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t hairline mt-20 pt-16">
        <p className="expediente-tag mb-3">Equipo</p>
        <h2 className="font-display font-light text-2xl text-ink mb-10">
          Nuestros abogados
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {equipo.map((persona) => (
            <div key={persona.nombre} className="border-t hairline pt-5">
              <p className="text-ink font-medium leading-snug">
                {persona.nombre}
              </p>
              <p className="text-sm text-acero mt-2">{persona.detalle}</p>
              <p className="expediente-tag mt-3">{persona.cedula}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
