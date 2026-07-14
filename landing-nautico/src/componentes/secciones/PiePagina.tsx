import { contacto } from "../../datos/contacto";

export function PiePagina() {
  const anioActual = new Date().getFullYear();

  return (
    <footer className="bg-fondo-suave py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 text-sm text-tinta/60 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <img
            src="/assets/marca/logo-horizontal-transparente.png"
            alt="Claudio Pérez Servicio Náutico"
            className="h-8 w-auto"
          />
          <p className="mt-2">{contacto.direccion} — {contacto.zonaCobertura}</p>
        </div>

        <div className="flex gap-6">
          {contacto.instagram && (
            <a
              href={contacto.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-marca-azul-oscuro"
            >
              Instagram
            </a>
          )}
          {contacto.facebook && (
            <a
              href={contacto.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-marca-azul-oscuro"
            >
              Facebook
            </a>
          )}
        </div>

        <p>© {anioActual} Claudio Pérez Servicio Náutico</p>
      </div>
    </footer>
  );
}
