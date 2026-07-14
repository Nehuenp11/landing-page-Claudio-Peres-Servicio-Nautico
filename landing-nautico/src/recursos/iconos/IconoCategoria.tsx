import type { Categoria } from "../../tipos";

interface Props {
  tipo: Categoria["icono"];
  className?: string;
}

/**
 * Set de íconos propio en línea (stroke, currentColor) para no depender
 * de una librería de íconos genérica ni de fotos de stock. Pensados para
 * heredar el color de texto del contenedor que los use.
 */
export function IconoCategoria({ tipo, className = "w-8 h-8" }: Props) {
  const comunes = {
    className,
    viewBox: "0 0 48 48",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (tipo) {
    case "embarcacion":
      return (
        <svg {...comunes} aria-hidden="true">
          <path d="M6 30 L42 30 L37 40 L11 40 Z" />
          <path d="M14 30 L14 14 L26 14 L30 30" />
          <path d="M14 14 L14 8" />
        </svg>
      );
    case "motor":
      return (
        <svg {...comunes} aria-hidden="true">
          <rect x="16" y="6" width="14" height="20" rx="2" />
          <path d="M23 26 L23 36" />
          <path d="M14 36 Q23 44 32 36" />
          <path d="M20 12 L26 12" />
          <path d="M20 17 L26 17" />
        </svg>
      );
    case "motoDeAgua":
      return (
        <svg {...comunes} aria-hidden="true">
          <path d="M6 32 Q14 22 24 24 Q34 26 42 20" />
          <path d="M10 32 L34 32 L38 40 L14 40 Z" />
          <circle cx="18" cy="36" r="1.4" fill="currentColor" stroke="none" />
        </svg>
      );
    case "cuatriciclo":
      return (
        <svg {...comunes} aria-hidden="true">
          <circle cx="12" cy="34" r="6" />
          <circle cx="36" cy="34" r="6" />
          <path d="M12 34 L20 20 L28 20 L36 34" />
          <path d="M20 20 L20 12 L28 12" />
        </svg>
      );
    case "utv":
      return (
        <svg {...comunes} aria-hidden="true">
          <circle cx="12" cy="36" r="5" />
          <circle cx="36" cy="36" r="5" />
          <path d="M8 31 L8 20 L40 20 L40 31" />
          <path d="M8 20 L14 12 L34 12 L40 20" />
        </svg>
      );
    case "moto":
      return (
        <svg {...comunes} aria-hidden="true">
          <circle cx="11" cy="34" r="6" />
          <circle cx="37" cy="34" r="6" />
          <path d="M11 34 L20 22 L30 22 L37 34" />
          <path d="M20 22 L16 14 L26 14" />
        </svg>
      );
    default:
      return null;
  }
}
