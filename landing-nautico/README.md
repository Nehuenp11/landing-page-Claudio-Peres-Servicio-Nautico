# Claudio Perez Servicio Nautico — Landing

Landing institucional. React + Vite + TypeScript + Tailwind CSS v4.

## Antes de publicar (pendientes marcados como TODO en el codigo)

- `src/datos/contenido.ts` -> texto de la seccion "Nosotros" y horarios de atencion.
- `src/datos/contacto.ts` -> usuarios reales de Instagram/Facebook y horarios.
- `src/componentes/secciones/Ubicacion.tsx` -> reemplazar el bloque de mapa
  por un `<iframe>` de Google Maps con la ubicacion exacta.
- `src/componentes/secciones/Taller.tsx` -> agregar fotos reales de trabajos
  (antes/despues) cuando esten disponibles.
- `src/componentes/ui/PanelDisponibilidad.tsx` -> los numeros de stock son
  de ejemplo. El componente ya esta separado justamente para que, el dia
  que exista un endpoint de solo lectura sobre SIREN, se reemplace el
  objeto `conteoEjemplo` por un `fetch` sin tocar el resto de la UI.

## Desarrollo local

Requiere Node.js 20 o superior.

```bash
npm install
npm run dev
```

Abre en `http://localhost:5173`.

```bash
npm run build    # genera la carpeta dist/ lista para produccion
npm run preview  # sirve dist/ localmente para probarla antes de publicar
npm run lint     # corre oxlint
```

## Como ponerla en linea

### 1. Subir el codigo a GitHub

```bash
git init
git add .
git commit -m "Landing inicial"
```

Crea un repositorio en GitHub (podes hacerlo desde la web) y luego:

```bash
git remote add origin <URL_DEL_REPO>
git push -u origin main
```

### 2. Desplegar en Netlify (gratis)

1. Entra a netlify.com y crea una cuenta.
2. "Add new site" -> "Import an existing project" -> conecta tu cuenta de
   GitHub -> elegi este repositorio.
3. Configuracion de build (Netlify la detecta sola, pero por si acaso):
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy. En 1-2 minutos te da una URL tipo `algo.netlify.app`.

(Vercel funciona igual de simple si lo preferis: import del repo,
detecta Vite automaticamente.)

### 3. Conectar el dominio propio

1. Compra el dominio en NIC.ar (recomendado para `.com.ar`)
   o en Namecheap/GoDaddy si preferis `.com`.
2. En Netlify: Site settings -> Domain management -> Add a domain ->
   ingresa tu dominio.
3. Netlify te va a pedir apuntar 1-2 registros DNS (generalmente un
   registro `A` o `CNAME`). Esos registros se cargan en el panel de
   NIC.ar (o el registrador que hayas usado), no en Netlify.
4. Una vez propagado el DNS (puede tardar de minutos a un par de horas),
   el sitio queda accesible en el dominio propio con HTTPS automatico.

## Estructura del proyecto

```
src/
├── componentes/
│   ├── secciones/   # Navegacion, PresentacionPrincipal, Categorias,
│   │                  Taller, Nosotros, Ubicacion, PiePagina
│   └── ui/          # Boton, BotonWhatsapp, TarjetaCategoria,
│                       DivisorHorizonte, PanelDisponibilidad
├── datos/           # contenido.ts, categorias.ts, contacto.ts
│                       (capa de datos, pensada para reemplazarse
│                       por una consulta a SIREN sin tocar componentes)
├── tipos/           # interfaces compartidas (Categoria, DatoContacto, etc.)
└── recursos/iconos/ # set propio de iconos SVG por categoria
```
