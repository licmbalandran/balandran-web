import Link from "next/link";
import type { Metadata } from "next";
import { getAllPosts } from "@/lib/posts";
import GeometricBanner from "@/components/GeometricBanner";

export const metadata: Metadata = {
  title: "Casos de éxito",
  description:
    "Casos reales de defensa fiscal y aduanera resueltos por Balandrán en León, Guanajuato: auditorías del SAT, PAMAs, litigio y amparos.",
};

export const revalidate = 3600;

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <>
    <GeometricBanner eyebrow="Archivo de expedientes" title="CASOS DE ÉXITO" />
    <section className="mx-auto max-w-6xl px-6 py-20">
      <p className="text-acero max-w-xl mb-16">
        Documentamos los asuntos que hemos resuelto para que cualquier
        empresa o persona que enfrente una situación similar sepa qué
        esperar de una defensa bien construida.
      </p>

      {posts.length === 0 ? (
        <p className="text-sm text-plata border-t hairline pt-6">
          Aún no hay casos publicados. Vuelve pronto.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-0">
          {posts.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="group border-t hairline py-8 grid grid-cols-1 md:grid-cols-[160px_1fr] gap-4 md:gap-10"
            >
              <div>
                <span className="expediente-tag">{p.expediente}</span>
                <p className="text-xs text-plata mt-2">
                  {new Date(p.published_at).toLocaleDateString("es-MX", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
              <div>
                <h2 className="font-display text-2xl text-ink group-hover:text-acero transition-colors">
                  {p.title}
                </h2>
                <p className="text-sm text-acero mt-2 max-w-2xl">
                  {p.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
    </>
  );
}
