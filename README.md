# Accounting Bytes & Consulting (abc.cr)

Sitio en React + Vite + Tailwind CSS. Se publica en Cloudflare Pages desde la rama `main`: cada cambio que se fusiona en `main` se publica solo.

## Cambiar logo, foto o video (sin tocar el código)
Reemplace los archivos de `public/` con los mismos nombres:
- `public/logo.svg`: logotipo.
- `public/perfil.jpg`: fotografía de perfil (JPG, formato vertical).
- `public/video.mp4`: video de fondo del inicio (MP4 H.264, opcional).

## Agregar una cápsula de Información
1. Abra `src/capsulas.js`.
2. Copie un bloque completo de cápsula, cambie `id` (fecha y título corto, por ejemplo `181126-anuncio-hacienda-cambio`), fechas, títulos, resumen y contenido.
3. Péguelo arriba del todo, para que aparezca primero.

## Boletín informativo
La clave de Web3Forms cuyo destino es `tributario@abc.cr` va en la constante `NEWSLETTER_ACCESS_KEY` de `src/App.jsx`. Mientras esté vacía, el boletín muestra "estará disponible muy pronto" y no envía nada.

## Desarrollo local
```bash
npm install
npm run dev
npm run build   # genera la carpeta dist/
```

## Configuración de Cloudflare Pages
- Framework: Vite (o "None").
- Comando de compilación: `npm run build`.
- Directorio de salida: `dist`.
- Rama de producción: `main`.
