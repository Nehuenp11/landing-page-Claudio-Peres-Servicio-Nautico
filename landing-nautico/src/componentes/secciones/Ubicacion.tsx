import { contacto } from "../../datos/contacto";

const DIRECCION_MAPS = "Ex Ruta 26 Km 5, Colón, Entre Ríos";
const MAPA_EMBED_SRC = `https://www.google.com/maps?q=${encodeURIComponent(
  DIRECCION_MAPS,
)}&z=13&output=embed`;
const MAPA_DIRECCIONES_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  DIRECCION_MAPS,
)}`;

export function Ubicacion() {
  return (
    <section id="ubicacion" className="bg-marca-azul-oscuro py-20 text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2">
        <div>
          <p className="mb-2 font-mono text-xs uppercase tracking-[0.3em] text-marca-rojo">
            Ubicación
          </p>
          <h2 className="font-display text-3xl font-semibold">Dónde encontrarnos</h2>

          <div className="mt-8 space-y-6 text-sm">
            <div>
              <p className="text-white/50">Dirección</p>
              <p className="mt-1 text-base">{contacto.direccion}</p>
              <p className="text-white/70">{contacto.zonaCobertura}</p>
            </div>

            <div>
              <p className="text-white/50">Horarios</p>
              {contacto.horarios.map((h) => (
                <p key={h.dias} className="mt-1">
                  {h.dias}: {h.horario}
                </p>
              ))}
            </div>
          </div>

          <a
            href={MAPA_DIRECCIONES_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-marca-rojo px-6 py-3 font-display text-sm font-semibold tracking-wide text-white transition-colors duration-150 hover:bg-marca-rojo-hover"
          >
            Preguntar cómo llegar
          </a>
        </div>

        <iframe
          title="Ubicación de Claudio Pérez Servicio Náutico en el mapa"
          src={MAPA_EMBED_SRC}
          width="100%"
          height="350"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-2xl"
        />
      </div>
    </section>
  );
}
