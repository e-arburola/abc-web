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
El formulario del boletín usa la clave de Web3Forms con destino `tributario@abc.cr`, guardada en `NEWSLETTER_ACCESS_KEY` en `src/App.jsx`.

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

## Estándar para imágenes
- Todas las imágenes tienen `alt` descriptivo (o `alt=""` si son decorativas).
- Todas las imágenes indican `width` y `height` con el tamaño real del archivo, para evitar saltos de diseño al cargar. Para el logo SVG, use el `viewBox` del archivo (`public/logo.svg`: 1740 × 620).
- Las imágenes que están debajo del primer pantallazo llevan `loading="lazy"` y `decoding="async"`. Las que se ven al abrir la página (logo, video de inicio) no llevan `lazy`.
- Logotipos en SVG. Fotografías en JPG, de 512 px de lado como mínimo y sin pasar de 1200 px.

