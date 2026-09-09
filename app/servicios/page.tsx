import type { Metadata } from "next";
import Link from "next/link";
import GeometricBanner from "@/components/GeometricBanner";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Defensa fiscal, defensa aduanera, defensa administrativa, análisis de EFOS, derecho civil y mercantil. Despacho especializado en León, Guanajuato.",
};

const servicios = [
  {
    n: "01",
    title: "Defensa fiscal",
    items: [
      "Atención y seguimiento de visitas por parte de autoridades fiscales: SAT, IMSS, INFONAVIT y Finanzas de los Estados",
      "Asesoría fiscal, devolución de saldos a favor y multas de las autoridades",
      "Interposición de medios de defensa contra cobro de créditos fiscales, embargos de cuentas bancarias, auditorías, revisión de comprobantes fiscales",
      "Recursos administrativos, juicio contencioso y juicio de amparo directo e indirecto",
    ],
  },
  {
    n: "02",
    title: "Defensa aduanera",
    items: [
      "Atención, seguimiento y defensa en el Procedimiento Administrativo en Materia Aduanera (PAMA)",
      "Litigio contra reconocimiento aduanero, verificación de mercancías en transporte, vehículos de procedencia extranjera, visitas domiciliarias o de gabinete y glosa de documentos",
      "Defensa legal contra multas, embargos, créditos, resoluciones y liquidaciones",
      "Recursos administrativos, juicio contencioso y juicio de amparo directo e indirecto",
    ],
  },
  {
    n: "03",
    title: "Defensa administrativa",
    items: [
      "Medios de defensa legal contra actos o créditos determinados por municipios, estados o la federación",
      "Litigio contra actos o resoluciones de autoridades administrativas como STPS, PROFEPA, PROFECO, SEMARNAT, CONDUSEF, entre otras",
      "Asesoría y defensa de actos o resoluciones de secretarías federales, entidades federativas y direcciones municipales",
      "Multas, sanciones y clausura de negocios o empresas",
    ],
  },
  {
    n: "04",
    title: "Análisis de operaciones inexistentes (EFOS)",
    items: [
      "Análisis de las operaciones comerciales con proveedores de bienes y/o servicios que se consideren sensibles (Empresas que Facturan Operaciones Simuladas)",
      "Integración de expediente con documentos y pruebas que acrediten la materialidad de la operación",
      "Lineamientos para verificar que los proveedores cuenten con activos, infraestructura, personal y capacidad económica para prestar el servicio",
    ],
  },
  {
    n: "05",
    title: "Derecho civil",
    items: [
      "Asesoría, representación y litigio en asuntos relacionados con bienes, herencias, sucesiones, propiedad, daños y perjuicios",
      "Elaboración de contratos",
    ],
  },
  {
    n: "06",
    title: "Derecho mercantil",
    items: [
      "Asesoría, representación y litigio en asuntos mercantiles y contratos mercantiles",
      "Defensa contra aseguradoras e instituciones bancarias",
      "Constitución de sociedades mercantiles",
      "Elaboración de contratos",
    ],
  },
];

export default function ServiciosPage() {
  return (
    <>
      <GeometricBanner eyebrow="Áreas de práctica" title="SOLUCIONES INTEGRALES" />
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-acero max-w-xl mb-16 leading-relaxed">
          El Estado, en su ámbito municipal, estatal y federal, ejerce cada vez
          más sus facultades de fiscalización. Ante esa situación resulta
          indispensable contar con el respaldo de profesionales del derecho que
          eviten que la administración pública exceda sus funciones y vulnere
          sus derechos.
        </p>

      <div className="space-y-0">
        {servicios.map((s) => (
          <div
            key={s.n}
            className="border-t hairline py-10 grid grid-cols-1 md:grid-cols-[100px_1fr] gap-4"
          >
            <span className="font-mono text-sm text-plata">{s.n}</span>
            <div>
              <h2 className="font-display font-light text-2xl text-ink tracking-[0.01em]">
                {s.title}
              </h2>
              <ul className="mt-4 space-y-2 max-w-2xl">
                {s.items.map((item, i) => (
                  <li
                    key={i}
                    className="text-sm text-acero leading-relaxed pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-plata"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t hairline mt-4 pt-16">
        <p className="font-display font-light text-2xl text-ink mb-4">
          Creamos soluciones integrales, a tus problemas legales
        </p>
        <Link
          href="/contacto"
          className="inline-block bg-ink text-papel px-6 py-3 text-sm hover:bg-acero transition-colors"
        >
          Agendar consulta
        </Link>
      </div>
    </section>
    </>
  );
}
