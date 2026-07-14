import type { ReactNode } from "react";

interface Props {
  href: string;
  children: ReactNode;
  variante?: "principal" | "secundario";
  className?: string;
}

export function Boton({ href, children, variante = "principal", className = "" }: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-display font-semibold text-sm tracking-wide transition-colors duration-150";

  const estilos =
    variante === "principal"
      ? "bg-marca-rojo text-white hover:bg-marca-rojo-hover"
      : "bg-transparent text-marca-azul-oscuro border border-marca-azul-oscuro/30 hover:border-marca-azul-oscuro";

  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className={`${base} ${estilos} ${className}`}
    >
      {children}
    </a>
  );
}
