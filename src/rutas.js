// Vistas de la página principal y su dirección. Las usan la app, la generación de HTML
// estático (scripts/prerender.mjs) y el sitemap (scripts/generar-paginas.mjs).
export const VISTAS = [
  {
    id: 'hero',
    ruta: '/',
    titulo: 'Accounting Bytes & Consulting | Contador Privado Incorporado en Costa Rica',
    descripcion:
      'Contabilidad, NIIF, IVA, renta, Formulario D-270, retenciones y RTBF para pymes y personas en Costa Rica. Servicio de Eduardo Bermúdez, Contador Privado Incorporado.',
  },
  {
    id: 'services',
    ruta: '/servicios/',
    titulo: 'Servicios Contables y Tributarios | Accounting Bytes & Consulting',
    descripcion:
      'Servicios contables y tributarios para personas y pymes en Costa Rica, bajo el alcance del Contador Privado Incorporado (CPI).',
  },
  {
    id: 'commitment',
    ruta: '/compromiso/',
    titulo: 'Compromiso | Accounting Bytes & Consulting',
    descripcion:
      'Trabajamos con criterio técnico, confidencialidad y cercanía para brindar información contable y tributaria clara.',
  },
  {
    id: 'profile',
    ruta: '/perfil/',
    titulo: 'Perfil Profesional | Accounting Bytes & Consulting',
    descripcion:
      'Perfil profesional de Eduardo Bermúdez Arburola, Contador Privado Incorporado en Costa Rica.',
  },
  {
    id: 'blog',
    ruta: '/capsulas/',
    titulo: 'Información: cápsulas y novedades | Accounting Bytes & Consulting',
    descripcion:
      'Publicaciones informativas, criterios técnicos y avisos normativos de contabilidad y tributación en Costa Rica.',
  },
  {
    id: 'contact',
    ruta: '/contacto/',
    titulo: 'Hablemos | Contacto | Accounting Bytes & Consulting',
    descripcion:
      'Solicite información sobre servicios de contabilidad y asesoría fiscal en Costa Rica por formulario, WhatsApp o correo.',
  },
];

export const rutaDeVista = (id) => VISTAS.find((v) => v.id === id)?.ruta ?? '/';

export const vistaDeRuta = (ruta) => {
  const limpia = (ruta || '/').replace(/\/+$/, '') || '/';
  const encontrada = VISTAS.find((v) => v.ruta.replace(/\/+$/, '') === limpia);
  return encontrada ? encontrada.id : 'hero';
};
