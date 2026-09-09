import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { deletePost, togglePublished } from "./actions";
import DeleteButton from "./DeleteButton";
import type { Post } from "@/lib/posts";

export const dynamic = "force-dynamic";

export default async function AdminPostsPage() {
  const supabase = createClient();
  const { data } = await supabase
    .from("posts")
    .select("*")
    .order("created_at", { ascending: false });

  const posts = data as Post[] | null;

  return (
    <div>
      <div className="flex items-center justify-between mb-10">
        <p className="text-sm text-acero">
          {posts?.length ?? 0} caso{posts?.length === 1 ? "" : "s"} en total
        </p>
        <Link
          href="/admin/posts/new"
          className="bg-ink text-papel px-5 py-2.5 text-sm hover:bg-acero transition-colors"
        >
          + Nuevo caso
        </Link>
      </div>

      {!posts || posts.length === 0 ? (
        <p className="text-sm text-plata border-t hairline pt-6">
          Aún no has publicado ningún caso. Crea el primero con &ldquo;+
          Nuevo caso&rdquo;.
        </p>
      ) : (
        <div className="divide-y divide-linea border-t hairline">
          {posts.map((post) => (
            <div
              key={post.id}
              className="py-5 flex items-center justify-between gap-6"
            >
              <div className="min-w-0">
                <div className="flex items-center gap-3">
                  <span className="expediente-tag">{post.expediente}</span>
                  <span
                    className={`text-xs px-2 py-0.5 ${
                      post.published
                        ? "bg-ink text-papel"
                        : "bg-linea text-acero"
                    }`}
                  >
                    {post.published ? "Publicado" : "Borrador"}
                  </span>
                </div>
                <h2 className="font-display text-lg text-ink mt-1 truncate">
                  {post.title}
                </h2>
                <p className="text-xs text-plata mt-1">/blog/{post.slug}</p>
              </div>

              <div className="flex items-center gap-4 flex-shrink-0">
                <form
                  action={togglePublished.bind(null, post.id, !post.published)}
                >
                  <button
                    type="submit"
                    className="text-sm text-acero hover:text-ink border-b border-linea hover:border-ink pb-1"
                  >
                    {post.published ? "Despublicar" : "Publicar"}
                  </button>
                </form>
                <Link
                  href={`/admin/posts/${post.id}/edit`}
                  className="text-sm text-acero hover:text-ink border-b border-linea hover:border-ink pb-1"
                >
                  Editar
                </Link>
                <DeleteButton
                  action={deletePost.bind(null, post.id)}
                  postTitle={post.title}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
