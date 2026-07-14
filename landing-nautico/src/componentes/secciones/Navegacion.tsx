import { BotonWhatsapp } from "../ui/BotonWhatsapp";

const enlaces = [
  { href: "#categorias", texto: "Categorías" },
  { href: "#taller", texto: "Taller" },
  { href: "#nosotros", texto: "Nosotros" },
  { href: "#ubicacion", texto: "Ubicación" },
];

export function Navegacion() {
  return (
    <header className="sticky top-0 z-40 border-b border-arena/10 bg-noche/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#inicio" className="flex items-center">
          <img
            src="/assets/marca/logo-horizontal-oscuro.png"
            alt="Claudio Pérez Servicio Náutico"
            className="h-10 w-auto"
          />
        </a>

        <nav className="hidden gap-8 md:flex" aria-label="Navegación principal">
          {enlaces.map((enlace) => (
            <a
              key={enlace.href}
              href={enlace.href}
              className="text-sm text-arena/80 transition-colors hover:text-arena"
            >
              {enlace.texto}
            </a>
          ))}
        </nav>

        <BotonWhatsapp mensaje="Hola, quería hacer una consulta." className="!px-4 !py-2 !text-xs">
          WhatsApp
        </BotonWhatsapp>
      </div>
    </header>
  );
}
