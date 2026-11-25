// Vistas de la página principal y su dirección. Las usan la app, la generación de HTML
// estático (scripts/prerender.mjs) y el sitemap (scripts/generar-paginas.mjs).
export const VISTAS = [
  {
    id: 'hero',
    ruta: '/',
    titulo: 'Accounting Bytes & Consulting | CPI en Costa Rica',
    descripcion:
      'Contabilidad NIIF, IVA, renta, Formulario D-270, retenciones y RTBF para pymes y personas en Costa Rica. Eduardo Bermúdez, Contador Privado Incorporado.',
    tituloEn: 'Accounting Bytes & Consulting | CPI in Costa Rica',
    descripcionEn: 'Accounting, IFRS, VAT, income tax, Form D-270, withholdings and RTBF for SMEs and individuals in Costa Rica. Eduardo Bermúdez, Incorporated Private Accountant.',
  },
  {
    id: 'services',
    ruta: '/servicios/',
    titulo: 'Servicios Contables y Tributarios | ABC',
    descripcion:
      'Contabilidad, IVA, renta, Formulario D-270, sociedades inactivas y RTBF para personas y pymes en Costa Rica, según el alcance del Contador Privado Incorporado.',
    tituloEn: 'Accounting and Tax Services | ABC',
    descripcionEn: 'Accounting, VAT, income tax, Form D-270, inactive companies and RTBF for individuals and SMEs in Costa Rica, within the scope of the CPI.',
  },
  {
    id: 'commitment',
    ruta: '/compromiso/',
    titulo: 'Compromiso | Accounting Bytes & Consulting',
    descripcion:
      'Trabajamos con criterio técnico, confidencialidad y cercanía para brindar a personas y pymes en Costa Rica información contable y tributaria clara.',
    tituloEn: 'Our Commitment | Accounting Bytes & Consulting',
    descripcionEn: 'We work with technical rigor, confidentiality and closeness to deliver clear accounting and tax information to individuals and SMEs in Costa Rica.',
  },
  {
    id: 'profile',
    ruta: '/perfil/',
    titulo: 'Perfil Profesional | Accounting Bytes & Consulting',
    descripcion:
      'Perfil de Eduardo Bermúdez Arburola, Contador Privado Incorporado (CPI) en Costa Rica: enfoque de trabajo y servicios de contabilidad para pymes y personas.',
    tituloEn: 'Professional Profile | Accounting Bytes & Consulting',
    descripcionEn: 'Profile of Eduardo Bermúdez Arburola, Incorporated Private Accountant (CPI) in Costa Rica: approach and accounting services for SMEs and individuals.',
  },
  {
    id: 'blog',
    ruta: '/capsulas/',
    titulo: 'Información y cápsulas | ABC',
    descripcion:
      'Cápsulas sobre contabilidad y tributación en Costa Rica: Formulario D-270, factura electrónica, RTBF y sociedades inactivas, con fechas y criterios técnicos.',
    tituloEn: 'Information and Insights | ABC',
    descripcionEn: 'Insights on accounting and tax matters in Costa Rica: Form D-270, electronic invoicing, RTBF and inactive companies, with dates and technical criteria.',
  },
  {
    id: 'contact',
    ruta: '/contacto/',
    titulo: 'Contacto | Accounting Bytes & Consulting',
    descripcion:
      'Escriba por formulario, WhatsApp, teléfono o correo para consultar sobre contabilidad, asesoría fiscal y cumplimiento tributario para pymes en Costa Rica.',
    tituloEn: 'Contact | Accounting Bytes & Consulting',
    descripcionEn: 'Write to us by form, WhatsApp, phone or email for accounting, tax advisory and tax compliance in Costa Rica.',
  },
];

export const rutaDeVista = (id) => VISTAS.find((v) => v.id === id)?.ruta ?? '/';

export const vistaDeRuta = (ruta) => {
  const limpia = (ruta || '/').replace(/\/+$/, '') || '/';
  const encontrada = VISTAS.find((v) => v.ruta.replace(/\/+$/, '') === limpia);
  return encontrada ? encontrada.id : 'hero';
};
