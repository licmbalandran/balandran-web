import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

// Cliente público de solo lectura, usado para renderizar el blog en
// páginas que no necesitan la sesión del usuario (Server Components
// públicos). Para el panel /admin (que sí necesita sesión) usa
// lib/supabase/server.ts o lib/supabase/client.ts en su lugar.
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
