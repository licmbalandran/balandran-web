import { supabase } from "@/lib/supabase/public";

export type Post = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  expediente: string;
  published: boolean;
  published_at: string;
  created_at: string;
  cover_image: string | null;
  meta_description: string;
};

// Envuelve las llamadas a Supabase para que el sitio no truene si
// las variables de entorno aún no están configuradas (útil en el
// primer despliegue antes de conectar la base de datos).
export async function getLatestPosts(limit = 3): Promise<Post[]> {
  try {
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .eq("published", true)
      .order("published_at", { ascending: false })
      .limit(limit);

    if (error || !data) return [];
    return data as Post[];
  } catch {
    return [];
  }
}

export async function getAllPosts(): Promise<Post[]> {
  try {
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .eq("published", true)
      .order("published_at", { ascending: false });

    if (error || !data) return [];
    return data as Post[];
  } catch {
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .eq("slug", slug)
      .eq("published", true)
      .single();

    if (error || !data) return null;
    return data as Post;
  } catch {
    return null;
  }
}
