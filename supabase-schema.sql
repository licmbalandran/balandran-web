-- Esquema para el blog "Casos de éxito" de Balandrán
-- Ejecutar en el SQL Editor de Supabase

create table if not exists posts (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  excerpt text not null,
  content text not null,
  expediente text not null,        -- ej. "EXP. 2026-014"
  cover_image text,
  meta_description text not null,  -- para SEO, 150-160 caracteres
  published boolean not null default false,
  published_at timestamptz default now(),
  created_at timestamptz not null default now()
);

create index if not exists posts_published_idx on posts (published, published_at desc);
create unique index if not exists posts_slug_idx on posts (slug);

-- Row Level Security: cualquiera puede LEER posts publicados,
-- pero solo un usuario autenticado (el dueño) puede escribir.
alter table posts enable row level security;

create policy "Posts publicados son públicos"
  on posts for select
  using (published = true);

create policy "Solo autenticados pueden insertar"
  on posts for insert
  to authenticated
  with check (true);

create policy "Solo autenticados pueden actualizar"
  on posts for update
  to authenticated
  using (true);

create policy "Solo autenticados pueden borrar"
  on posts for delete
  to authenticated
  using (true);

-- Ejemplo de un primer caso de éxito (opcional, puedes borrarlo)
insert into posts (slug, title, excerpt, content, expediente, meta_description, published)
values (
  'anulacion-pama-importacion-textil',
  'Anulación de PAMA por importación textil mal clasificada',
  'Logramos la anulación total de un Procedimiento Administrativo en Materia Aduanera derivado de una clasificación arancelaria incorrecta.',
  'Contenido completo del caso...',
  'EXP. 2026-001',
  'Caso de éxito: anulación de PAMA por clasificación arancelaria en importación textil. Defensa aduanera en León, Guanajuato.',
  true
);
