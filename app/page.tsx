import Link from "next/link";
import Image from "next/image";
import { getLatestPosts } from "@/lib/posts";
import { ServiceCircle } from "@/components/ServiceCircle";

const servicios = [
  {
    n: "01",
    title: "Defensa fiscal",
    desc: "Atención a auditorías y requerimientos del SAT, IMSS, INFONAVIT y Finanzas de los Estados.",
    image: "/service-01-fiscal.jpg",
  },
  {
    n: "02",
    title: "Defensa aduanera",
    desc: "Impugnación de PAMAs y asuntos de comercio exterior.",
    image: "/service-02-aduanera.jpg",
  },
  {
    n: "03",
    title: "Defensa administrativa",
    desc: "Litigio contra actos de STPS, PROFEPA, PROFECO, SEMARNAT y otras autoridades.",
    image: "/service-03-administrativa.jpg",
  },
];

export default async function Home() {
  const posts = await getLatestPosts(3);

  return (
    <>
      {/* Foto + portada, en un solo contenedor continuo (sin costura) */}
      <div className="bg-ink -mt-2">
        <div className="relative w-full overflow-hidden leading-none text-[0px]">
          <Image
            src="/hero-handshake.jpg"
            alt="Balandrán — Defensa Fiscal y Aduanera"
            width={2535}
            height={753}
            className="w-full h-auto scale-[1.03]"
            priority
          />
        </div>

        <section className="relative -mt-1 overflow-hidden pb-10">

        <div className="relative z-10 pt-14 text-center">
          <Image
            src="/logo-fondo-oscuro.png"
            alt="Balandrán — Defensa Fiscal y Aduanera"
            width={959}
            height={1042}
            className="mx-auto w-32 md:w-36 h-auto"
            priority
          />

          <div className="mx-auto mt-5 h-px w-16 bg-plata" />
          <p className="text-papel/90 font-display font-light text-xl mt-4 max-w-lg mx-auto px-6">
            Creamos soluciones integrales, a tus problemas legales
          </p>

          <div className="mt-5 flex justify-center gap-4">
            <Link
              href="/contacto"
              className="bg-papel text-ink px-6 py-3 text-sm hover:bg-plata transition-colors"
            >
              Agendar consulta
            </Link>
            <Link
              href="/servicios"
              className="border border-papel text-papel px-6 py-3 text-sm hover:bg-papel hover:text-ink transition-colors"
            >
              Ver servicios
            </Link>
          </div>
        </div>
        </section>
      </div>

      {/* Soluciones integrales — círculos tipo foto, como el currículum */}
      <section className="border-b hairline">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="text-center mb-16">
            <h2 className="font-display font-light text-4xl text-ink tracking-[0.03em]">
              SOLUCIONES INTEGRALES
            </h2>
            <p className="expediente-tag mt-2">Servicios</p>
            <div className="mx-auto mt-4 h-px w-16 bg-linea" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
            {servicios.map((s) => (
              <ServiceCircle key={s.n} {...s} />
            ))}
          </div>
          <div className="text-center mt-14">
            <Link
              href="/servicios"
              className="text-sm text-acero hover:text-ink border-b border-linea hover:border-ink pb-1"
            >
              Ver los 6 servicios completos →
            </Link>
          </div>
        </div>
      </section>

      {/* ¿Por qué contratarnos? — banner oscuro con franja diagonal */}
      <section className="relative overflow-hidden bg-ink">
        <svg
          className="absolute right-0 top-0 w-[300px] opacity-70"
          viewBox="0 0 300 260"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <polygon points="300,0 300,130 170,0" fill="#4A4A4A" />
          <polygon points="300,130 300,260 170,130" fill="#6B6B6B" />
          <polygon points="170,0 300,130 170,130" fill="#2A2A2A" />
        </svg>
        <div className="relative z-10 mx-auto max-w-6xl px-6 py-20">
          <h2 className="font-display font-light text-3xl md:text-4xl text-papel tracking-[0.02em] max-w-xl">
            ¿Por qué contratarnos?
          </h2>
          <div className="h-px w-16 bg-plata mt-6 mb-8" />
          <p className="text-papel/80 max-w-2xl leading-relaxed">
            Ante el creciente ejercicio de facultades de fiscalización por
            parte de la autoridad, resulta indispensable contar con el
            respaldo de profesionales del derecho que eviten que la
            administración pública exceda sus funciones y vulnere sus
            derechos.
          </p>
          <div className="mt-8 flex items-center gap-4 bg-acero/30 px-6 py-4 max-w-md">
            <span className="h-3 w-3 rounded-full bg-plata flex-shrink-0" />
            <p className="text-papel text-sm">
              Creamos soluciones integrales, a tus problemas legales
            </p>
          </div>
        </div>
      </section>

      {/* Casos de éxito recientes */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="flex items-end justify-between mb-14">
            <div>
              <p className="expediente-tag mb-3">Expedientes recientes</p>
              <h2 className="font-display font-light text-3xl text-ink">
                Casos de éxito
              </h2>
            </div>
            <Link
              href="/blog"
              className="text-sm text-acero hover:text-ink hidden md:block"
            >
              Ver todos →
            </Link>
          </div>

          {posts.length === 0 ? (
            <p className="text-sm text-plata">
              Próximamente publicaremos los primeros casos documentados.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {posts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="block border-t hairline pt-5 group"
                >
                  <span className="expediente-tag">{p.expediente}</span>
                  <h3 className="font-display text-lg text-ink mt-3 group-hover:text-acero transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-sm text-acero mt-2 line-clamp-3">
                    {p.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
