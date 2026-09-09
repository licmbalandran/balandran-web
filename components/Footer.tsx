import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t hairline mt-32">
      <div className="mx-auto max-w-6xl px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <Image
            src="/logo-fondo-claro.png"
            alt="Balandrán — Defensa Fiscal y Aduanera"
            width={936}
            height={1174}
            className="h-24 w-auto mb-3"
          />
          <p className="text-sm text-acero mt-1 max-w-xs">
            Despacho especializado en defensa ante el SAT y autoridades
            aduaneras. León, Guanajuato.
          </p>
        </div>
        <div>
          <p className="expediente-tag mb-3">Contacto</p>
          <p className="text-sm text-acero">
            Portal Bravo &ldquo;2&rdquo;, Piso 4, Interior 419
          </p>
          <p className="text-sm text-acero">
            Jardín Principal, Zona Centro, León, Gto.
          </p>
          <p className="text-sm text-acero mt-2">lic_mbalandran@outlook.com</p>
          <p className="text-sm text-acero">044-477-273-36-72</p>
        </div>
        <div>
          <p className="expediente-tag mb-3">Despacho</p>
          <ul className="text-sm text-acero space-y-1">
            <li>Defensa fiscal</li>
            <li>Defensa aduanera (PAMA)</li>
            <li>Defensa administrativa</li>
            <li>Análisis de EFOS</li>
            <li>Derecho civil y mercantil</li>
          </ul>
        </div>
      </div>
      <div className="border-t hairline">
        <p className="mx-auto max-w-6xl px-6 py-5 text-xs text-plata">
          © {new Date().getFullYear()} Balandrán, Defensa Fiscal y Aduanera.
          Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
