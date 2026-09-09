import Link from "next/link";
import Image from "next/image";
import MobileNav from "./MobileNav";

const links = [
  { href: "/nosotros", label: "Nosotros" },
  { href: "/servicios", label: "Servicios" },
  { href: "/blog", label: "Casos de éxito" },
  { href: "/contacto", label: "Contacto" },
];

export default function Header() {
  return (
    <header className="border-b hairline sticky top-0 z-40 bg-white">
      <div className="mx-auto max-w-6xl px-6 flex items-center justify-between flex-wrap gap-y-3 py-1.5">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo-fondo-claro.png"
            alt="Balandrán — Defensa Fiscal y Aduanera"
            width={936}
            height={1174}
            className="h-12 w-auto"
            priority
          />
        </Link>
        <div className="hidden lg:flex items-center flex-wrap gap-y-3 gap-x-8 justify-end">
          <nav className="flex items-center gap-8 flex-wrap">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-acero hover:text-ink transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/contacto"
            className="border border-ink px-5 py-2 text-sm hover:bg-ink hover:text-papel transition-colors"
          >
            Agendar consulta
          </Link>
        </div>
        <MobileNav />
      </div>
    </header>
  );
}
