"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export type PostFormState = {
  error?: string;
};

const DIACRITICS = new RegExp("[\\u0300-\\u036f]", "g");

function slugify(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(DIACRITICS, "") // quita acentos
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function revalidateBlog() {
  revalidatePath("/");
  revalidatePath("/blog");
  revalidatePath("/admin");
}

export async function createPost(
  _prev: PostFormState,
  formData: FormData
): Promise<PostFormState> {
  const supabase = createClient();

  const title = String(formData.get("title") || "").trim();
  let slug = String(formData.get("slug") || "").trim();
  if (!slug) slug = slugify(title);
  else slug = slugify(slug);

  const post = {
    title,
    slug,
    excerpt: String(formData.get("excerpt") || "").trim(),
    content: String(formData.get("content") || "").trim(),
    expediente: String(formData.get("expediente") || "").trim(),
    meta_description: String(formData.get("meta_description") || "").trim(),
    cover_image: String(formData.get("cover_image") || "").trim() || null,
    published: formData.get("published") === "on",
  };

  if (!post.title || !post.slug) {
    return { error: "El título y el slug son obligatorios." };
  }

  const { error } = await supabase.from("posts").insert(post);

  if (error) {
    return { error: error.message };
  }

  revalidateBlog();
  redirect("/admin");
}

export async function updatePost(
  id: string,
  _prev: PostFormState,
  formData: FormData
): Promise<PostFormState> {
  const supabase = createClient();

  const title = String(formData.get("title") || "").trim();
  const slug = slugify(String(formData.get("slug") || "").trim() || title);

  const post = {
    title,
    slug,
    excerpt: String(formData.get("excerpt") || "").trim(),
    content: String(formData.get("content") || "").trim(),
    expediente: String(formData.get("expediente") || "").trim(),
    meta_description: String(formData.get("meta_description") || "").trim(),
    cover_image: String(formData.get("cover_image") || "").trim() || null,
    published: formData.get("published") === "on",
  };

  if (!post.title || !post.slug) {
    return { error: "El título y el slug son obligatorios." };
  }

  const { error } = await supabase.from("posts").update(post).eq("id", id);

  if (error) {
    return { error: error.message };
  }

  revalidateBlog();
  redirect("/admin");
}

export async function deletePost(id: string) {
  const supabase = createClient();
  await supabase.from("posts").delete().eq("id", id);
  revalidateBlog();
}

export async function togglePublished(id: string, published: boolean) {
  const supabase = createClient();
  await supabase.from("posts").update({ published }).eq("id", id);
  revalidateBlog();
}

export async function signOut() {
  const supabase = createClient();
  await supabase.auth.signOut();
  redirect("/admin/login");
}
