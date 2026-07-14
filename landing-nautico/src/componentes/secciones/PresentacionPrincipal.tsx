import { contacto } from "../../datos/contacto";
import { BotonWhatsapp } from "../ui/BotonWhatsapp";
import { PanelDisponibilidad } from "../ui/PanelDisponibilidad";
import { DivisorHorizonte } from "../ui/DivisorHorizonte";

export function PresentacionPrincipal() {
  return (
    <section id="inicio" className="bg-marca-azul-oscuro text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 pb-20 pt-16 md:grid-cols-[1.1fr_0.9fr] md:pt-24">
        <div>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-marca-rojo">
            {contacto.zonaCobertura}
          </p>
          <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl">
            Embarcaciones, motores y todo terreno,
            <span className="text-marca-rojo"> con service propio.</span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-white/70">
            Negocio familiar dedicado a la venta y reparación de embarcaciones,
            motores fuera de borda, motos de agua, cuatriciclos, UTV y motos.
            Taller propio, atención directa y disponibilidad real.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <BotonWhatsapp mensaje="Hola, quería hacer una consulta.">
              Consultar por WhatsApp
            </BotonWhatsapp>
            <a
              href="#categorias"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 font-display text-sm font-semibold tracking-wide text-white transition-colors hover:border-white"
            >
              Ver categorías
            </a>
          </div>
        </div>

        <div className="flex items-end">
          <PanelDisponibilidad />
        </div>
      </div>

      <DivisorHorizonte />
    </section>
  );
}
