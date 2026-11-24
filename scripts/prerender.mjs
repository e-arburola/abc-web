// Genera el HTML de cada vista de la página principal (se ejecuta después de `vite build`).
// Resultado: dist/index.html (inicio), dist/servicios/index.html, dist/compromiso/index.html, etc.
import { execSync } from 'node:child_process';
import { readFileSync, writeFileSync, rmSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { VISTAS } from '../src/rutas.js';

const raiz = join(dirname(fileURLToPath(import.meta.url)), '..');
const salidaSSR = join(raiz, '.ssr-build');
const SITIO = 'https://abc.cr';

execSync('npx vite build --ssr src/entry-server.jsx --outDir .ssr-build --emptyOutDir', {
  cwd: raiz,
  stdio: 'inherit',
});
const { render } = await import(pathToFileURL(join(salidaSSR, 'entry-server.js')).href);

const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const plantilla = readFileSync(join(raiz, 'dist', 'index.html'), 'utf8');
const vacio = '<div id="root"></div>';
if (!plantilla.includes(vacio)) {
  throw new Error('No se encontró el contenedor #root en dist/index.html');
}

const conMetadatos = (html, v) => {
  const url = `${SITIO}${v.ruta}`;
  let h = html
    .replace(/<title>[^<]*<\/title>/, `<title>${esc(v.titulo)}</title>`)
    .replace(/(<meta\s+name="description"\s+content=")[^"]*(")/, `$1${esc(v.descripcion)}$2`)
    .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`)
    .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${esc(v.titulo)}$2`)
    .replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${esc(v.descripcion)}$2`)
    .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`);
  return h;
};

for (const v of VISTAS) {
  const marcado = render(v.id);
  const html = conMetadatos(plantilla, v).replace(vacio, `<div id="root">${marcado}</div>`);
  const destino = v.ruta === '/' ? join(raiz, 'dist', 'index.html') : join(raiz, 'dist', v.ruta, 'index.html');
  mkdirSync(dirname(destino), { recursive: true });
  writeFileSync(destino, html, 'utf8');
  console.log(`Generada ${v.ruta} (${marcado.length} caracteres)`);
}
rmSync(salidaSSR, { recursive: true, force: true });
