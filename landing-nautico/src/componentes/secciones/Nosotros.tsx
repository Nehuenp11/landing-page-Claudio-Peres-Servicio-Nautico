import { textoNosotros } from "../../datos/contenido";

export function Nosotros() {
  return (
    <section id="nosotros" className="bg-fondo py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.3em] text-marca-azul">
          Nosotros
        </p>
        <h2 className="font-display text-3xl font-semibold text-marca-azul-oscuro">
          Un negocio de familia, a la orilla del río
        </h2>
        <p className="mt-6 whitespace-pre-line text-base leading-relaxed text-tinta/70">
          {textoNosotros}
        </p>
      </div>
    </section>
  );
}
