import Image from "next/image";

type ServiceCircleProps = {
  n: string;
  title: string;
  desc: string;
  image: string;
};

/**
 * Tarjeta de servicio con círculo tipo "foto", replicando el layout
 * de "Soluciones Integrales" del currículum. Usa una fotografía real
 * recortada en círculo por servicio.
 */
export function ServiceCircle({ n, title, desc, image }: ServiceCircleProps) {
  return (
    <div className="text-center">
      <div className="relative mx-auto mb-5 h-28 w-28">
        <div className="relative h-28 w-28 overflow-hidden rounded-full border-2 border-papel shadow-[0_0_0_1px_var(--linea)]">
          <Image
            src={image}
            alt={title}
            fill
            sizes="112px"
            className="object-cover"
          />
        </div>
        <span className="absolute -bottom-1 -left-1 h-4 w-4 rounded-full bg-acero border-2 border-papel" />
      </div>
      <p className="font-mono text-xs text-plata mb-1">{n}</p>
      <h3 className="font-display font-medium text-lg text-ink uppercase tracking-wide">
        {title}
      </h3>
      <p className="text-sm text-acero mt-2 max-w-[220px] mx-auto leading-relaxed">
        {desc}
      </p>
    </div>
  );
}
