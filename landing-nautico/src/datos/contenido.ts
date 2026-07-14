import type { ServicioTaller } from "../tipos";

export const textoNosotros = `Somos un emprendimiento familiar con más de 15 años de trayectoria en la región de Colón y San José, Entre Ríos. Nos apasiona el río y el aire libre, lo que nos llevó a convertir nuestra pasión en un servicio directo para la comunidad. Nos distingue nuestro taller propio, donde garantizamos un servicio técnico sin intermediarios, un stock de referencia que buscamos mantener siempre transparente y, sobre todo, una atención cálida y directa de nuestra propia familia.`;

export const serviciosTaller: ServicioTaller[] = [
  {
    id: "service-motores",
    titulo: "Service de motores",
    descripcion:
      "Mantenimiento preventivo y reparación de motores fuera de borda y de cuatriciclos, motos y UTV.",
  },
  {
    id: "repuestos",
    titulo: "Repuestos originales",
    descripcion: "Búsqueda y provisión de repuestos para las principales marcas del mercado.",
  },
  {
    id: "diagnostico",
    titulo: "Diagnóstico técnico",
    descripcion: "Revisión antes de comprar o antes de la temporada, con presupuesto claro.",
  },
];
