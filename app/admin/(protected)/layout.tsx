import Link from "next/link";
import { signOut } from "./actions";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <div className="flex items-center justify-between border-b hairline pb-6 mb-10">
        <div>
          <p className="expediente-tag mb-1">Panel privado</p>
          <Link
            href="/admin"
            className="font-display font-light text-2xl text-ink"
          >
            Casos de éxito
          </Link>
        </div>
        <form action={signOut}>
          <button
            type="submit"
            className="text-sm text-acero hover:text-ink border-b border-linea hover:border-ink pb-1"
          >
            Cerrar sesión
          </button>
        </form>
      </div>
      {children}
    </div>
  );
}
