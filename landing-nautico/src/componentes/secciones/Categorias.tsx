import { categorias } from "../../datos/categorias";
import { TarjetaCategoria } from "../ui/TarjetaCategoria";

export function Categorias() {
  return (
    <section id="categorias" className="bg-fondo py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-xl">
          <p className="mb-2 font-mono text-xs uppercase tracking-[0.3em] text-marca-azul">
            Categorías
          </p>
          <h2 className="font-display text-3xl font-semibold text-marca-azul-oscuro">
            Todo lo que necesitás para el río y el campo
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categorias.map((categoria) => (
            <TarjetaCategoria key={categoria.id} categoria={categoria} />
          ))}
        </div>
      </div>
    </section>
  );
}
