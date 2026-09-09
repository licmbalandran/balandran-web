type Props = {
  eyebrow?: string;
  title: string;
  variant?: "cover" | "section";
};

/**
 * Banner oscuro con collage geométrico de triángulos, replicando el
 * estilo del currículum empresarial. "cover" es el hero grande de
 * Inicio; "section" es el encabezado angosto usado en otras páginas.
 *
 * Los triángulos usan tonos de gris (no fotos reales) — cuando haya
 * fotografía real del despacho (equipo, oficina), reemplazar los
 * <polygon> por <image> recortadas con el mismo clip-path.
 */
export default function GeometricBanner({
  eyebrow,
  title,
  variant = "section",
}: Props) {
  const isCover = variant === "cover";

  return (
    <div
      className={`relative overflow-hidden bg-ink ${
        isCover ? "py-24" : "py-16"
      }`}
    >
      {/* Collage geométrico */}
      <svg
        className={`absolute left-1/2 -translate-x-1/2 top-0 opacity-90 ${
          isCover ? "w-[520px]" : "w-[360px]"
        }`}
        viewBox="0 0 520 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <polygon points="0,0 130,0 65,90" fill="#6B6B6B" />
        <polygon points="130,0 260,0 195,90" fill="#8C8C8C" />
        <polygon points="260,0 390,0 325,90" fill="#4A4A4A" />
        <polygon points="390,0 520,0 455,90" fill="#7A7A7A" />
        <polygon points="65,90 195,90 130,180" fill="#3A3A3A" />
        <polygon points="195,90 325,90 260,180" fill="#5A5A5A" />
        <polygon points="325,90 455,90 390,180" fill="#2A2A2A" />
        <polygon points="130,180 260,180 195,270" fill="#4A4A4A" />
        <polygon points="260,180 390,180 325,270" fill="#6B6B6B" />
        <polygon points="195,270 325,270 260,340" fill="#8C8C8C" />
      </svg>

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center pt-24">
        {eyebrow && (
          <p className="expediente-tag text-plata mb-3">{eyebrow}</p>
        )}
        <h1
          className={`font-display font-light text-papel tracking-[0.04em] ${
            isCover ? "text-5xl md:text-6xl" : "text-3xl md:text-4xl"
          }`}
        >
          {title}
        </h1>
        <div className="mx-auto mt-6 h-px w-24 bg-plata" />
      </div>
    </div>
  );
}
