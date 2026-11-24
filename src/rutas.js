// Vistas de la página principal y su dirección. Las usan la app, la generación de HTML
// estático (scripts/prerender.mjs) y el sitemap (scripts/generar-paginas.mjs).
export const VISTAS = [
  {
    id: 'hero',
    ruta: '/',
    titulo: 'Accounting Bytes & Consulting | CPI en Costa Rica',
    descripcion:
      'Contabilidad NIIF, IVA, renta, Formulario D-270, retenciones y RTBF para pymes y personas en Costa Rica. Eduardo Bermúdez, Contador Privado Incorporado.',
  },
  {
    id: 'services',
    ruta: '/servicios/',
    titulo: 'Servicios Contables y Tributarios | ABC',
    descripcion:
      'Contabilidad, IVA, renta, Formulario D-270, sociedades inactivas y RTBF para personas y pymes en Costa Rica, según el alcance del Contador Privado Incorporado.',
  },
  {
    id: 'commitment',
    ruta: '/compromiso/',
    titulo: 'Compromiso | Accounting Bytes & Consulting',
    descripcion:
      'Trabajamos con criterio técnico, confidencialidad y cercanía para brindar a personas y pymes en Costa Rica información contable y tributaria clara.',
  },
  {
    id: 'profile',
    ruta: '/perfil/',
    titulo: 'Perfil Profesional | Accounting Bytes & Consulting',
    descripcion:
      'Perfil de Eduardo Bermúdez Arburola, Contador Privado Incorporado (CPI) en Costa Rica: enfoque de trabajo y servicios de contabilidad para pymes y personas.',
  },
  {
    id: 'blog',
    ruta: '/capsulas/',
    titulo: 'Información y cápsulas | ABC',
    descripcion:
      'Cápsulas sobre contabilidad y tributación en Costa Rica: Formulario D-270, factura electrónica, RTBF y sociedades inactivas, con fechas y criterios técnicos.',
  },
  {
    id: 'contact',
    ruta: '/contacto/',
    titulo: 'Contacto | Accounting Bytes & Consulting',
    descripcion:
      'Escriba por formulario, WhatsApp, teléfono o correo para consultar sobre contabilidad, asesoría fiscal y cumplimiento tributario para pymes en Costa Rica.',
  },
];

export const rutaDeVista = (id) => VISTAS.find((v) => v.id === id)?.ruta ?? '/';

export const vistaDeRuta = (ruta) => {
  const limpia = (ruta || '/').replace(/\/+$/, '') || '/';
  const encontrada = VISTAS.find((v) => v.ruta.replace(/\/+$/, '') === limpia);
  return encontrada ? encontrada.id : 'hero';
};
