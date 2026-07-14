/**
 * Contratos de datos del sitio.
 *
 * `Categoria` está pensada para migrar de datos estáticos a una
 * respuesta real de la API de SIREN sin tocar los componentes que
 * la consumen: el día que exista ese endpoint, solo cambia quién
 * llena este tipo, no su forma.
 */

export interface Categoria {
  id: string;
  nombre: string;
  descripcion: string;
  /** Nombre del ícono a renderizar, ver src/recursos/iconos */
  icono: "embarcacion" | "motor" | "motoDeAgua" | "cuatriciclo" | "utv" | "moto";
  /** Texto prearmado para el mensaje de WhatsApp al consultar esta categoría */
  mensajeConsulta: string;
}

export interface DatoContacto {
  telefonoWhatsapp: string;
  direccion: string;
  zonaCobertura: string;
  horarios: HorarioAtencion[];
  instagram?: string;
  facebook?: string;
}

export interface HorarioAtencion {
  dias: string;
  horario: string;
}

export interface ServicioTaller {
  id: string;
  titulo: string;
  descripcion: string;
}
