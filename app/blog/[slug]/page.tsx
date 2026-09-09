import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, getPostBySlug } from "@/lib/posts";

export const revalidate = 3600;

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.meta_description,
    openGraph: {
      title: post.title,
      description: post.meta_description,
      type: "article",
      publishedTime: post.published_at,
      images: post.cover_image ? [post.cover_image] : undefined,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <Link href="/blog" className="text-sm text-acero hover:text-ink">
        ← Casos de éxito
      </Link>

      <div className="mt-8 border-t hairline pt-6">
        <span className="expediente-tag">{post.expediente}</span>
        <h1 className="font-display text-4xl text-ink mt-3 leading-tight">
          {post.title}
        </h1>
        <p className="text-xs text-plata mt-3">
          {new Date(post.published_at).toLocaleDateString("es-MX", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>

      <div className="prose prose-neutral max-w-none mt-10 text-acero leading-relaxed whitespace-pre-line">
        {post.content}
      </div>

      <div className="border-t hairline mt-16 pt-8">
        <p className="text-sm text-acero mb-4">
          ¿Enfrentas una situación similar?
        </p>
        <Link
          href="/contacto"
          className="inline-block bg-ink text-papel px-6 py-3 text-sm hover:bg-acero transition-colors"
        >
          Agendar consulta
        </Link>
      </div>
    </article>
  );
}
