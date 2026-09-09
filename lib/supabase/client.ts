import { createBrowserClient } from "@supabase/ssr";

// Cliente de Supabase para usarse en componentes de cliente ("use client"),
// por ejemplo el formulario de login del panel /admin.
export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL as string,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
  );
}
