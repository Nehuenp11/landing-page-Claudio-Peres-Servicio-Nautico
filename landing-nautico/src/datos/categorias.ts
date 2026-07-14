import type { Categoria } from "../tipos";

/**
 * Datos estáticos de arranque. Cuando exista un endpoint de solo
 * lectura sobre SIREN, este arreglo se reemplaza por el resultado
 * de un fetch, sin cambiar `Categoria` ni los componentes que la usan.
 */
export const categorias: Categoria[] = [
  {
    id: "embarcaciones",
    nombre: "Embarcaciones",
    descripcion: "Lanchas y embarcaciones para uso deportivo, pesca y paseo.",
    icono: "embarcacion",
    mensajeConsulta:
      "Hola! Vengo de la web y me interesa consultar por la disponibilidad de embarcaciones.",
  },
  {
    id: "motores",
    nombre: "Motores fuera de borda",
    descripcion: "Venta, service y repuestos de motores fuera de borda.",
    icono: "motor",
    mensajeConsulta:
      "Hola! Me gustaría consultar por el service o disponibilidad de motores fuera de borda.",
  },
  {
    id: "motos-de-agua",
    nombre: "Motos de agua",
    descripcion: "Motos de agua nuevas y usadas, con service propio.",
    icono: "motoDeAgua",
    mensajeConsulta: "Hola! Quisiera consultar por las motos de agua disponibles.",
  },
  {
    id: "cuatriciclos",
    nombre: "Cuatriciclos",
    descripcion: "Cuatriciclos para trabajo y recreación.",
    icono: "cuatriciclo",
    mensajeConsulta: "Hola! Me interesa recibir información sobre los cuatriciclos.",
  },
  {
    id: "utv",
    nombre: "UTV",
    descripcion: "Utilitarios todo terreno para trabajo rural y recreación.",
    icono: "utv",
    mensajeConsulta: "Hola! Quisiera consultar la disponibilidad y precios de los UTV.",
  },
  {
    id: "motos",
    nombre: "Motos",
    descripcion: "Motos nuevas y usadas, con taller de service propio.",
    icono: "moto",
    mensajeConsulta: "Hola! Me interesa consultar por el stock o service de motos.",
  },
];
