import { categorias } from "../../datos/categorias";

/**
 * Simula la lectura de stock en vivo. Hoy son datos de ejemplo;
 * la idea es que este componente sea el que, a futuro, consuma
 * un endpoint de solo lectura de SIREN y muestre disponibilidad real.
 * Se ve como un instrumento de tablero (fuente mono, punto "en vivo")
 * para anticipar visualmente esa función.
 */
const conteoEjemplo: Record<string, number> = {
  embarcaciones: 6,
  motores: 11,
  "motos-de-agua": 3,
  cuatriciclos: 5,
  utv: 4,
  motos: 8,
};

export function PanelDisponibilidad() {
  return (
    <div className="w-full rounded-xl border border-white/15 bg-marca-azul-oscuro/40 px-5 py-4 backdrop-blur-sm">
      <div className="mb-3 flex items-center justify-between gap-2">
        <span className="text-xs uppercase tracking-widest text-white/60">
          Disponibilidad de referencia
        </span>
        <span className="flex items-center gap-1.5 rounded-full bg-whatsapp/15 px-2.5 py-1 text-[11px] font-medium text-whatsapp">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-whatsapp opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-whatsapp" />
          </span>
          Sincronizado
        </span>
      </div>
      <div className="grid grid-cols-2 gap-x-4 gap-y-2 font-mono text-sm text-white sm:grid-cols-3">
        {categorias.map((cat) => (
          <div key={cat.id} className="flex items-baseline justify-between gap-2">
            <span className="truncate text-white/70">{cat.nombre}</span>
            <span className="font-medium">{conteoEjemplo[cat.id] ?? "—"}</span>
          </div>
        ))}
      </div>
      <p className="mt-3 text-[11px] text-white/40">
        * Valores de referencia — se actualiza a stock real al conectar con el sistema interno.
      </p>
    </div>
  );
}
