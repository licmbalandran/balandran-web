import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts();
  const base = "https://www.balandran.mx";

  const staticRoutes = ["", "/nosotros", "/servicios", "/blog", "/contacto"].map(
    (route) => ({
      url: `${base}${route}`,
      lastModified: new Date(),
    })
  );

  const postRoutes = posts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.published_at),
  }));

  return [...staticRoutes, ...postRoutes];
}
