# Balandrán — Defensa Fiscal y Aduanera

Sitio web construido con **Next.js 14** (App Router) + **Tailwind CSS** +
**Supabase** (base de datos del blog "Casos de éxito" y panel de
administración) + **Resend** (formulario de contacto).

## 1. Correr en local

```bash
npm install
cp .env.local.example .env.local   # y llena las variables (pasos 3 y 4)
npm run dev
```

Abre http://localhost:3000

## 2. Comprar el dominio

Sugerencias de dominio (revisa disponibilidad en Namecheap, GoDaddy o
Cloudflare Registrar):

- **balandran.mx** — el más limpio y directo (recomendado)
- **balandranfiscal.mx**
- **balandran.com.mx**
- **defensabalandran.mx**

`.mx` refuerza que es un despacho mexicano y ayuda al SEO local en
León/Guanajuato. Cómpralo primero — lo necesitas para el paso 5.

## 3. Crear el proyecto en Supabase (base de datos + panel de admin)

1. Crea una cuenta gratis en https://supabase.com
2. Crea un nuevo proyecto (elige región más cercana, ej. East US / N. Virginia)
3. Ve a **SQL Editor** → pega el contenido de `supabase-schema.sql` → Run
   Esto crea la tabla `posts` con seguridad a nivel de fila (RLS): cualquiera
   puede leer posts publicados, pero solo un usuario autenticado (tú) puede
   crear, editar o borrar.
4. Ve a **Project Settings → API** y copia:
   - `Project URL` → pégalo en `.env.local` como `NEXT_PUBLIC_SUPABASE_URL`
   - `anon public key` → pégalo como `NEXT_PUBLIC_SUPABASE_ANON_KEY`
5. Ve a **Authentication → Users → Add user → Create new user** y crea tu
   usuario admin (el correo y contraseña con los que vas a entrar al panel).
   Marca **Auto Confirm User** para no tener que verificar el correo.

### Cómo subir un nuevo caso de éxito

1. Entra a `tudominio.com/admin` (o `localhost:3000/admin` en local) e inicia
   sesión con el usuario que creaste en el paso 5.
2. Clic en **+ Nuevo caso**, llena el formulario y marca **Publicado** para
   que aparezca de inmediato en el sitio (o déjalo sin marcar para guardarlo
   como borrador).
3. Desde la lista puedes **Editar**, **Publicar/Despublicar** o **Borrar**
   cualquier caso, sin tocar código ni entrar a Supabase directamente.

## 4. Conectar el formulario de contacto (Resend)

1. Crea una cuenta gratis en https://resend.com
2. Ve a **API Keys → Create API Key** y copia la llave (empieza con `re_`)
3. Pégala en `.env.local` / en las variables de entorno de Vercel como
   `RESEND_API_KEY`
4. Mientras no verifiques un dominio propio en Resend, dejas
   `CONTACT_FROM_EMAIL=onboarding@resend.dev` (remitente de pruebas de
   Resend) — con esto los correos solo llegan a la cuenta dueña de la API
   key. Para poder recibir en `lic_mbalandran@outlook.com` sin restricción:
   - Ve a **Domains → Add Domain** en Resend con tu dominio ya comprado
   - Agrega los registros DNS que te indique (TXT/MX) donde compraste el
     dominio
   - Una vez verificado, cambia `CONTACT_FROM_EMAIL` a algo como
     `contacto@balandran.mx`
5. `CONTACT_TO_EMAIL` es el correo donde quieres recibir los mensajes del
   formulario (por defecto `lic_mbalandran@outlook.com`).

## 5. Desplegar en Vercel

1. Sube este proyecto a un repositorio de GitHub
2. Entra a https://vercel.com → **New Project** → importa el repo
3. En **Environment Variables** agrega las mismas variables de `.env.local`:
   `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`,
   `RESEND_API_KEY`, `CONTACT_FROM_EMAIL`, `CONTACT_TO_EMAIL`
4. Deploy
5. En **Settings → Domains** agrega tu dominio (`balandran.mx`) y sigue las
   instrucciones para apuntar los registros DNS desde donde compraste el
   dominio (normalmente un registro `A` y uno `CNAME`)

Con esto el sitio queda en vivo, gratis (planes gratuitos de Vercel,
Supabase y Resend cubren perfectamente este tamaño de sitio).

## 6. Pendientes de contenido (marcados en el código)

- `/app/nosotros/page.tsx`: historia del despacho, filosofía, foto y datos
  del equipo — hay placeholders marcados con `[...]`
- Teléfono y correo reales en `Header`, `Footer` y `Contacto` (por ahora
  tienen datos de ejemplo)
- Imágenes reales de portada para cada caso de éxito (se agregan desde el
  panel `/admin` al crear o editar un caso, campo "URL de imagen de portada")

## 7. Seguridad del panel /admin

- El panel vive en `/admin` y está protegido por `middleware.ts`: cualquiera
  que intente entrar sin haber iniciado sesión es redirigido a
  `/admin/login`.
- Los permisos reales de lectura/escritura los aplica Supabase (Row Level
  Security), no solo el middleware — aunque alguien se saltara el
  middleware, no podría crear/editar/borrar posts sin estar autenticado.
- No hay registro público de usuarios nuevos: los usuarios admin se crean
  manualmente desde el dashboard de Supabase (Authentication → Users), así
  que solo tú controlas quién puede entrar.
