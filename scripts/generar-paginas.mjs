// Genera las páginas estáticas de cada cápsula y el sitemap.xml.
// Se ejecuta antes de `vite build` (ver "build" en package.json).
// Carpetas: public/capsulas/<id>/ (español) y public/en/capsulas/<id>/ (inglés).
// El nombre de cada carpeta es el id de la cápsula: DDMMAA-titulo-corto.
import { mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { BLOG_POSTS } from '../src/capsulas.js';
import { VISTAS } from '../src/rutas.js';
import { REDES } from '../src/redes.js';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { Youtube, Facebook, Instagram } from 'lucide-react';

const ICONOS_REDES = { youtube: Youtube, facebook: Facebook, instagram: Instagram };
const redesHTML = REDES.map(
  (red) =>
    `<a href="${red.url}" target="_blank" rel="noopener noreferrer" aria-label="${red.nombre}" title="${red.nombre}">${renderToStaticMarkup(createElement(ICONOS_REDES[red.icono], { size: 20 }))}</a>`,
).join('');

const raiz = join(dirname(fileURLToPath(import.meta.url)), '..');
const pub = join(raiz, 'public');
const SITIO = 'https://abc.cr';
const NOMBRE = 'Accounting Bytes & Consulting';

const esc = (s) =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

// "181126-..." -> "2026-11-18" (DDMMAA)
const fechaISO = (id) => {
  const d = id.slice(0, 2), m = id.slice(2, 4), a = id.slice(4, 6);
  return `20${a}-${m}-${d}`;
};

const ruta = (lang, id) => (lang === 'en' ? `/en/capsulas/${id}/` : `/capsulas/${id}/`);

const pagina = (post, lang) => {
  const otro = lang === 'es' ? 'en' : 'es';
  const url = `${SITIO}${ruta(lang, post.id)}`;
  const titulo = post.title[lang];
  // Título de la pestaña: se agrega la marca solo si cabe en 60 caracteres.
  const tituloDocumento = titulo.length + 6 <= 60 ? `${titulo} | ABC` : titulo;
  const resumen = post.summary[lang];
  const volverA = lang === 'es' ? '/capsulas/' : '/capsulas/?lang=en';
  const volver = lang === 'es' ? 'Volver a cápsulas' : 'Back to insights';
  const etiquetaIdioma = lang === 'es' ? 'English' : 'Español';
  // Las URLs del texto se muestran como enlaces.
  const conEnlaces = (texto) =>
    esc(texto).replace(
      /https?:\/\/[^\s|]+/g,
      (url) => `<a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>`,
    );
  const parrafos = post.content[lang]
    .map((p) => `        <p>${conEnlaces(p)}</p>`)
    .join('\n');
  const consultaTexto = lang === 'es' ? 'Solicitar información' : 'Request information';
  const consultaHref = lang === 'es' ? '/contacto/' : '/contacto/?lang=en';
  const avisoTexto =
    lang === 'es'
      ? 'Esta información es de carácter general y no sustituye una asesoría personalizada.'
      : 'This information is for general guidance only and does not replace personalized advice.';
  const jsonld = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: titulo,
    description: resumen,
    datePublished: fechaISO(post.id),
    dateModified: fechaISO(post.id),
    inLanguage: lang === 'es' ? 'es-CR' : 'en',
    url,
    mainEntityOfPage: url,
    author: { '@type': 'Person', name: 'Eduardo Bermúdez Arburola', jobTitle: 'Contador Privado Incorporado' },
    publisher: { '@type': 'Organization', name: NOMBRE, url: `${SITIO}/` },
  };
  return `<!doctype html>
<html lang="${lang === 'es' ? 'es' : 'en'}" class="dark">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${esc(tituloDocumento)}</title>
    <meta name="description" content="${esc(resumen)}" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="${url}" />
    <link rel="alternate" hreflang="${lang === 'es' ? 'es-CR' : 'en'}" href="${url}" />
    <link rel="alternate" hreflang="${otro === 'es' ? 'es-CR' : 'en'}" href="${SITIO}${ruta(otro, post.id)}" />
    <meta property="og:type" content="article" />
    <meta property="og:site_name" content="${NOMBRE}" />
    <meta property="og:title" content="${esc(titulo)}" />
    <meta property="og:description" content="${esc(resumen)}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:locale" content="${lang === 'es' ? 'es_CR' : 'en_US'}" />
    <meta name="twitter:card" content="summary" />
    <link rel="icon" href="/favicon.png" type="image/png" />
    <script>
      try {
        if (localStorage.getItem('abc-tema') === 'claro') {
          document.documentElement.classList.remove('dark');
        }
      } catch (e) {}
    </script>
    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
    <script type="application/ld+json">
${JSON.stringify(jsonld, null, 2)}
    </script>
    <style>
      :root { color-scheme: dark; }
      body { margin: 0; background: #030712; color: #f1f5f9; font-family: Geist, system-ui, sans-serif; line-height: 1.7; }
      .wrap { max-width: 44rem; margin: 0 auto; padding: 1.5rem 1rem 4rem; }
      header { display: flex; align-items: center; justify-content: space-between; gap: 1rem; padding-bottom: 1.5rem; border-bottom: 1px solid rgba(59,130,246,.2); }
      header img { height: 3.5rem; width: auto; background: #fff; border-radius: .5rem; padding: .25rem .5rem; }
      a { color: #60a5fa; }
      .meta { display: flex; gap: 1rem; font-size: .875rem; color: #93c5fd; margin-top: 2rem; }
      h1 { font-size: clamp(1.6rem, 4vw, 2.2rem); line-height: 1.25; letter-spacing: -.01em; margin: .75rem 0 1.5rem; font-weight: 600; }
      p { margin: 0 0 1.1rem; font-size: 1.0625rem; color: #cbd5e1; }
      .volver { display: inline-block; font-weight: 500; }
      .acciones { display: flex; flex-wrap: wrap; align-items: center; gap: 1rem 1.5rem; margin-top: 2.5rem; }
      .boton { display: inline-flex; align-items: center; min-height: 44px; padding: 0 1.25rem; border-radius: .5rem; background: #2563eb; color: #fff; font-weight: 500; text-decoration: none; }
      .boton:hover { background: #1d4ed8; }
      .aviso { margin-top: 2rem; font-size: .875rem; color: #94a3b8; }
      html:not(.dark) .aviso { color: #475569; }
      html:not(.dark) body { background: #f8fafc; color: #0f172a; }
      html:not(.dark) header { border-bottom-color: rgba(37,99,235,.25); }
      html:not(.dark) p { color: #334155; }
      html:not(.dark) .meta { color: #1d4ed8; }
      html:not(.dark) footer { color: #475569; border-top-color: rgba(37,99,235,.25); }
      .redes { display: flex; gap: .75rem; margin-top: 1rem; }
      .redes a { display: flex; align-items: center; justify-content: center; width: 2.75rem; height: 2.75rem; border: 1px solid rgba(96,165,250,.3); border-radius: .5rem; color: #60a5fa; }
      html:not(.dark) .redes a { border-color: rgba(37,99,235,.35); color: #2563eb; }
      footer { margin-top: 3rem; padding-top: 1.5rem; border-top: 1px solid rgba(59,130,246,.2); font-size: .875rem; color: #94a3b8; }
    </style>
  </head>
  <body>
    <div class="wrap">
      <header>
        <a href="/"><img src="/logo.svg" alt="${NOMBRE}" width="1740" height="620" /></a>
        <a href="${ruta(otro, post.id)}" hreflang="${otro === 'es' ? 'es-CR' : 'en'}">${etiquetaIdioma}</a>
      </header>
      <main>
        <div class="meta"><span>${esc(post.date[lang])}</span><span>${esc(post.readTime[lang])}</span></div>
        <h1>${esc(titulo)}</h1>
${parrafos}
        <p class="aviso">${avisoTexto}</p>
        <div class="acciones">
          <a class="boton" href="${consultaHref}">${consultaTexto}</a>
          <a class="volver" href="${volverA}">← ${volver}</a>
        </div>
      </main>
      <footer>
        <p>© ${new Date().getFullYear()} ${NOMBRE}. Contador Privado Incorporado, Costa Rica.</p>
        <nav class="redes" aria-label="Redes sociales">${redesHTML}</nav>
      </footer>
    </div>
  </body>
</html>
`;
};

// Limpia y regenera las carpetas de cápsulas
rmSync(join(pub, 'capsulas'), { recursive: true, force: true });
rmSync(join(pub, 'en', 'capsulas'), { recursive: true, force: true });

for (const post of BLOG_POSTS) {
  for (const lang of ['es', 'en']) {
    const dir = join(pub, lang === 'es' ? 'capsulas' : 'en/capsulas', post.id);
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, 'index.html'), pagina(post, lang), 'utf8');
  }
}

// Sitemap: inicio, inicio en inglés y todas las cápsulas en ambos idiomas
const masReciente = BLOG_POSTS.map((p) => fechaISO(p.id)).sort().at(-1);
const urls = [
  ...VISTAS.map((v) => ({ loc: `${SITIO}${v.ruta}`, prioridad: v.id === 'hero' ? '1.0' : '0.9', cambio: 'weekly', fecha: masReciente })),
  ...BLOG_POSTS.flatMap((p) => [
    { loc: `${SITIO}${ruta('es', p.id)}`, prioridad: '0.8', cambio: 'monthly', fecha: fechaISO(p.id) },
    { loc: `${SITIO}${ruta('en', p.id)}`, prioridad: '0.6', cambio: 'monthly', fecha: fechaISO(p.id) },
  ]),
];
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.fecha}</lastmod>
    <changefreq>${u.cambio}</changefreq>
    <priority>${u.prioridad}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`;
writeFileSync(join(pub, 'sitemap.xml'), xml, 'utf8');
console.log(`Páginas generadas: ${BLOG_POSTS.length * 2}. Sitemap con ${urls.length} URL.`);
