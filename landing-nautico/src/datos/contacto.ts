import type { DatoContacto } from "../tipos";

// TODO: confirmar horarios exactos y redes (se dejó lo que hay hoy: IG e FB).
export const contacto: DatoContacto = {
  telefonoWhatsapp: "5493442463236",
  direccion: "Ex Ruta 26, Km 5",
  zonaCobertura: "Entre Colón y San José, Entre Ríos",
  horarios: [
    { dias: "Lunes a viernes", horario: "08:00 a 12:00 y 15:30 a 19:30 hs" },
    { dias: "Sábados", horario: "08:00 a 12:30 hs" },
  ],
  instagram: "https://instagram.com/TODO_usuario",
  facebook: "https://facebook.com/TODO_pagina",
};

export function enlaceWhatsapp(mensaje: string): string {
  return `https://wa.me/${contacto.telefonoWhatsapp}?text=${encodeURIComponent(mensaje)}`;
}
