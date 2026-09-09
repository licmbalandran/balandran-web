import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import PostForm from "../../../PostForm";
import { updatePost } from "../../../actions";
import type { Post } from "@/lib/posts";

export default async function EditPostPage({
  params,
}: {
  params: { id: string };
}) {
  const supabase = createClient();
  const { data } = await supabase
    .from("posts")
    .select("*")
    .eq("id", params.id)
    .maybeSingle();

  const post = data as Post | null;
  if (!post) notFound();

  return (
    <div>
      <h1 className="font-display font-light text-2xl text-ink mb-8">
        Editar caso
      </h1>
      <PostForm
        action={updatePost.bind(null, post.id)}
        post={post}
        submitLabel="Guardar cambios"
      />
    </div>
  );
}
