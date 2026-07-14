interface Props {
  className?: string;
}

/**
 * Divisor de seccion que reutiliza la banda de olas real de la marca
 * (recortada de los archivos entregados) en vez de una forma generica
 * inventada. Se repite horizontalmente para cubrir cualquier ancho.
 */
export function DivisorHorizonte({ className = "" }: Props) {
  return (
    <div
      role="presentation"
      aria-hidden="true"
      className={`h-16 w-full sm:h-20 ${className}`}
      style={{
        backgroundImage: "url(/assets/marca/banda-olas.png)",
        backgroundRepeat: "repeat-x",
        backgroundSize: "auto 100%",
        backgroundPosition: "center",
      }}
    />
  );
}
