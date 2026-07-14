import type { Categoria } from "../../tipos";
import { IconoCategoria } from "../../recursos/iconos/IconoCategoria";
import { BotonWhatsapp } from "./BotonWhatsapp";

interface Props {
  categoria: Categoria;
}

export function TarjetaCategoria({ categoria }: Props) {
  return (
    <article className="group flex flex-col justify-between rounded-2xl border border-marca-azul-oscuro/10 bg-white/60 p-6 transition-shadow duration-150 hover:shadow-lg hover:shadow-marca-azul-oscuro/5">
      <div>
        <div className="mb-4 text-marca-rojo">
          <IconoCategoria tipo={categoria.icono} />
        </div>
        <h3 className="font-display text-lg font-semibold text-marca-azul-oscuro">{categoria.nombre}</h3>
        <p className="mt-2 text-sm leading-relaxed text-tinta/70">{categoria.descripcion}</p>
      </div>
      <BotonWhatsapp mensaje={categoria.mensajeConsulta} className="mt-6 self-start">
        Consultar disponibilidad
      </BotonWhatsapp>
    </article>
  );
}
