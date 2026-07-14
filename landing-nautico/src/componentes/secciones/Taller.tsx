import { serviciosTaller } from "../../datos/contenido";
import { BotonWhatsapp } from "../ui/BotonWhatsapp";

export function Taller() {
  return (
    <section id="taller" className="bg-marca-azul py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-xl">
          <p className="mb-2 font-mono text-xs uppercase tracking-[0.3em] text-white/70 font-semibold">
            Taller propio
          </p>
          <h2 className="font-display text-3xl font-semibold">
            Service y reparación, sin intermediarios
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {serviciosTaller.map((servicio, i) => (
            <div key={servicio.id} className="border-t border-white/20 pt-4">
              <span className="font-mono text-xs text-white/50">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 font-display text-lg font-semibold">{servicio.titulo}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{servicio.descripcion}</p>
            </div>
          ))}
        </div>

        {/*
          TODO: cuando haya fotos reales del taller (antes/después de
          reparaciones), agregar acá una galería. Se dejó afuera a
          propósito para no publicar imágenes de relleno genéricas.
        */}

        <div className="mt-12">
          <BotonWhatsapp mensaje="Hola! Quisiera coordinar un turno para el taller de service.">
            Consultar por un service
          </BotonWhatsapp>
        </div>
      </div>
    </section>
  );
}
