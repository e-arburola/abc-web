import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  ArrowRight,
  FileText,
  ShieldCheck,
  Calculator,
  Mail,
  User,
  Calendar,
  CheckCircle2,
  Send,
  Sun,
  Moon,
  Languages,
  MessageCircle,
  Scale,
  ArrowLeft,
  Clock,
  Phone,
  GraduationCap,
  Building2,
  Globe,
  FileSpreadsheet,
  Landmark,
  ShieldAlert,
  BellPlus,
} from 'lucide-react';

import { BLOG_POSTS } from './capsulas.js';

const WEB3FORMS_KEY = '3da531ae-766d-451e-be30-8b39a322fe1f';
const WHATSAPP_NUMBER = '50684141438';
// Clave de Web3Forms cuyo destino es tributario@abc.cr. Pendiente de crear; mientras esté vacía, el boletín no envía.
const NEWSLETTER_ACCESS_KEY = '';



const COPY = {
  es: {
    nav: {
      home: 'Inicio',
      services: 'Servicios',
      commitment: 'Compromiso',
      profile: 'Perfil',
      info: 'Información',
      contact: 'Contacto',
      talk: 'Hablemos',
    },
    hero: {
      badge: 'Contabilidad • Tributación • Asesoría',
      titleLine1: 'Conocimiento Integral y',
      titleLine2: 'Gestión Contable Clara,',
      titleLine3: 'para decidir con Tranquilidad.',
      subtitle:
        'Soluciones contables bajo normativa NIIF, gestión tributaria ante Hacienda y asesoría en Costa Rica con precisión profesional.',
      ctaPrimary: 'Explorar Servicios',
      ctaSecondary: 'Hablemos',
      legalLink: 'Aviso Legal y Privacidad',
      scheduleShort: 'Lun–Vie · 9:00 a. m. – 4:30 p. m.',
    },
    services: {
      tag: 'Alcance Profesional CPI • Costa Rica',
      title: 'Servicios Contables y Tributarios',
      subtitle:
        'Servicios estructurados para facilitar su localización y comprensión dentro del ámbito del Contador Privado Incorporado (CPI).',
      cat1Title: 'Contabilidad y Cumplimiento Societario',
      cat1Items: [
        {
          icon: Calculator,
          title: 'Contabilidad bajo Normativa NIIF',
          desc: 'Registro contable sistemático y elaboración de estados financieros para PyMEs y personas físicas con actividad lucrativa bajo estándares NIIF aplicables en Costa Rica.',
        },
        {
          icon: Building2,
          title: 'Sociedades Inactivas',
          desc: 'Preparación y presentación de la declaración informativa correspondiente a personas jurídicas inactivas, manteniendo el control documental del periodo.',
        },
        {
          icon: ShieldCheck,
          title: 'Declaración de RTBF',
          desc: 'Gestión y acompañamiento para la presentación de la declaración ante el Registro de Transparencia y Beneficiarios Finales (RTBF) conforme a los plazos establecidos.',
        },
      ],
      cat2Title: 'Declaraciones Tributarias y Comprobantes',
      cat2Items: [
        {
          icon: FileSpreadsheet,
          title: 'IVA y Renta',
          desc: 'Elaboración, revisión y presentación de declaraciones periódicas del Impuesto al Valor Agregado (IVA) y del Impuesto sobre las Utilidades / Renta.',
        },
        {
          icon: FileText,
          title: 'Formulario D-270',
          desc: 'Presentación del Formulario D-270 de Declaración Informativa Resumen Mensual de Clientes, Proveedores y Gastos Específicos sin comprobante electrónico.',
        },
        {
          icon: Landmark,
          title: 'Venta de Bienes Inmuebles',
          desc: 'Cálculo y presentación del formulario correspondiente a la venta o traspaso de bienes inmuebles y determinación del impuesto aplicable según corresponda.',
        },
        {
          icon: ShieldAlert,
          title: 'Declaraciones de Retenciones en la Fuente',
          desc: 'Control, cálculo y presentación de declaraciones por retenciones en la fuente derivadas de operaciones sujetas a retención.',
        },
        {
          icon: Globe,
          title: 'Declaraciones de Servicios Transfronterizos',
          desc: 'Identificación, liquidación y declaración de operaciones vinculadas a servicios transfronterizos adquiridas o prestadas conforme a la normativa vigente.',
        },
      ],
      requestService: 'Consultar este servicio',
    },
    commitment: {
      tag: 'Ética y Rigor Profesional',
      title: 'Compromiso',
      lead: 'En Accounting Bytes & Consulting (abc.cr) trabajamos con criterio técnico, confidencialidad y cercanía para brindar información contable y tributaria clara.',
      body1:
        'Ejercemos bajo los principios éticos y normativos que rigen al Contador Privado Incorporado en Costa Rica, asegurando que cada registro, conciliación y declaración responda a un proceso ordenado y verificable.',
      body2:
        'Nuestro enfoque combina la solidez de la normativa contable con herramientas tecnológicas prácticas para que usted tome decisiones informadas con tranquilidad.',
    },
    profile: {
      tag: 'Perfil Profesional',
      name: 'Eduardo Bermúdez Arburola',
      role: 'Contador Privado Incorporado (CPI) • Costa Rica',
      bio: 'Profesional en contaduría y administración con enfoque en gestión contable, cumplimiento tributario y organización de procesos administrativos para empresas y personas físicas en Costa Rica.',
      academicTitle: 'Formación Académica',
      education: [
        {
          degree: 'Maestría Profesional en Gerencia de Proyectos',
          institution: 'Universidad Latinoamericana de Ciencia y Tecnología (ULACIT)',
        },
        {
          degree: 'Bachillerato Universitario en Administración de Empresas con Énfasis en Contaduría',
          institution: 'Universidad Estatal a Distancia (UNED)',
        },
        {
          degree: 'Bachillerato Universitario en Administración de Empresas con Énfasis en Negocios Internacionales',
          institution: 'Universidad Estatal a Distancia (UNED)',
        },
      ],
      directEmail: 'edu.bermudez@abc.cr',
      phone: '8414-1438',
      photoPlaceholder: 'Coloca tu fotografía en public/perfil.jpg',
    },
    info: {
      tag: 'Cápsulas y Novedades',
      title: 'Información',
      subtitle:
        'Publicaciones informativas, criterios técnicos y avisos normativos para mantenerse al día.',
      backHome: 'Volver al inicio',
      readCapsule: 'Leer cápsula',
      backToList: 'Volver a todas las cápsulas',
      consultTopic: 'Consultar sobre este tema',
    },
    contact: {
      tag: 'Contacto',
      title: 'Hablemos',
      subtitle:
        'Escríbanos para consultas sobre contabilidad, declaraciones tributarias o acompañamiento para su negocio.',
      hoursLabel: 'Horario de atención',
      hoursValue: 'Lunes a Viernes de 9:00 a. m. a 4:30 p. m.',
      emailsTitle: 'Correos de atención',
      emailContact: 'contacto@abc.cr',
      emailAssistant: 'asistente@abc.cr',
      phoneLabel: 'Teléfono / WhatsApp',
      nameLabel: 'Nombre completo',
      namePlaceholder: 'Su nombre',
      emailLabel: 'Correo electrónico',
      emailPlaceholder: 'nombre@empresa.cr',
      serviceLabel: 'Tema o servicio de interés',
      messageLabel: 'Mensaje',
      messagePlaceholder: 'Cuéntenos brevemente su consulta...',
      submitBtn: 'Enviar mensaje',
      sendingBtn: 'Enviando...',
      sentSuccess: 'Mensaje enviado correctamente. Le responderemos a la brevedad.',
      sentError: 'No se pudo enviar el mensaje. Intente de nuevo o escriba a contacto@abc.cr.',
      newsletterTitle: 'Boletín informativo (Opcional)',
      newsletterDesc:
        'Si desea recibir cápsulas y avisos tributarios en nuestra lista de distribución (tributario@abc.cr), ingrese su correo y solicite su inclusión.',
      newsletterPlaceholder: 'su-correo@ejemplo.com',
      newsletterBtn: 'Agregar al newsletter',
      newsletterSending: 'Registrando...',
      newsletterSuccess:
        'Solicitud enviada para ser incluido en la lista de distribución asociada a tributario@abc.cr.',
      newsletterError: 'Ingrese un correo válido o intente nuevamente.',
      newsletterSoon: 'El boletín estará disponible muy pronto.',
      newsletterConsent: 'Acepto que mi correo se incluya en la lista de distribución tributario@abc.cr y que mis datos se traten para ese fin, según la Política Legal y Privacidad.',
      consent: 'Acepto que mis datos se traten para responder mi consulta, según la Política Legal y Privacidad.',
      legalBtn: 'Política Legal y Privacidad',
    },
    legal: {
      title: 'Aviso Legal y Política de Privacidad',
      subtitle: 'Accounting Bytes & Consulting (abc.cr) — Costa Rica',
      close: 'Cerrar',
      sections: [
        {
          heading: '1. Identidad y alcance profesional',
          text: 'Este sitio pertenece a Accounting Bytes & Consulting (abc.cr), práctica profesional ejercida en Costa Rica por Eduardo Bermúdez Arburola, Contador Privado Incorporado (CPI), CPI N.º 35066. Ofrecemos información y servicios de contabilidad privada y asesoría tributaria dentro del marco legal aplicable. No prestamos servicios de auditoría externa ni emitimos dictámenes de auditoría.',
        },
        {
          heading: '2. Confidencialidad y secreto profesional',
          text: 'Toda información contable, financiera, fiscal o documental que compartan clientes o prospectos se trata con estricta confidencialidad y bajo la ética profesional del CPI.',
        },
        {
          heading: '3. Responsable y contacto',
          text: 'El responsable del tratamiento de los datos personales es Eduardo Bermúdez Arburola. Para consultas sobre sus datos o para ejercer sus derechos, escriba a contacto@abc.cr.',
        },
        {
          heading: '4. Datos que recopilamos',
          text: 'Formulario de contacto: nombre y teléfono o WhatsApp (obligatorios); correo electrónico, servicio de interés y mensaje (facultativos). Boletín informativo: correo electrónico. En este sitio no solicitamos datos sensibles ni datos de tarjetas de pago.',
        },
        {
          heading: '5. Finalidad y base legal',
          text: 'Usamos sus datos para responder su consulta, darle seguimiento por el medio que indique y, si lo solicita, enviarle cápsulas informativas por la lista de distribución. No usamos sus datos para publicidad de terceros. La base legal es su consentimiento expreso, otorgado por escrito por medio electrónico al marcar la casilla antes de enviar el formulario. Puede revocarlo en cualquier momento, de la misma forma en que lo otorgó, sin efecto retroactivo.',
        },
        {
          heading: '6. Proveedores que procesan datos',
          text: 'Web3Forms recibe los envíos de los formularios y los reenvía a nuestros correos; su infraestructura usa Amazon Web Services, con operaciones en la Unión Europea y Estados Unidos. Cloudflare aloja el sitio y lo entrega a través de su red. La tipografía del sitio se carga desde servidores de Google Fonts. Cada proveedor aplica su propia política de privacidad.',
        },
        {
          heading: '7. Transferencias internacionales',
          text: 'Por el uso de estos proveedores, sus datos pueden procesarse fuera de Costa Rica, en particular en Estados Unidos y en la Unión Europea.',
        },
        {
          heading: '8. Conservación',
          text: 'No tenemos un plazo fijo de conservación: guardamos sus datos mientras sean necesarios para atender su consulta o enviarle la información solicitada. Web3Forms indica que conserva los envíos hasta tres años.',
        },
        {
          heading: '9. Sus derechos',
          text: 'Según la Ley N.º 8968 de protección de la persona frente al tratamiento de sus datos personales, puede solicitar acceso a sus datos, su rectificación o actualización, su supresión, y revocar el consentimiento que nos dio. Escriba a contacto@abc.cr. Si no está conforme con la respuesta, puede acudir a la Agencia de Protección de Datos de los Habitantes (PRODHAB), órgano de desconcentración máxima adscrito al Ministerio de Justicia y Paz.',
        },
        {
          heading: '10. Seguridad',
          text: 'Aplicamos medidas razonables para proteger sus datos. Ningún envío por internet es totalmente seguro.',
        },
        {
          heading: '11. Cookies y almacenamiento en el navegador',
          text: 'Este sitio no instala cookies publicitarias ni de seguimiento y no guarda datos en su navegador. Si en el futuro se activa analítica u otra herramienta que use cookies, esta sección se actualizará antes.',
        },
        {
          heading: '12. Carácter informativo del contenido',
          text: 'Las cápsulas de la sección de Información tienen fines orientativos y no sustituyen el análisis particular de cada caso concreto.',
        },
        {
          heading: '13. Créditos',
          text: 'El video de fondo del inicio proviene de Pexels (pexels.com) y se usa bajo la licencia gratuita de Pexels.',
        },
        {
          heading: '14. Actualización de esta política',
          text: 'Esta política se actualizó por última vez el 20 de noviembre de 2026.',
        },
      ],
    },
    whatsappTooltip: 'WhatsApp 8414-1438',
    whatsappMessage:
      'Hola, vi el sitio de Accounting Bytes & Consulting (abc.cr) y deseo realizar una consulta.',
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      commitment: 'Commitment',
      profile: 'Profile',
      info: 'Information',
      contact: 'Contact',
      talk: "Let's Talk",
    },
    hero: {
      badge: 'Accounting • Taxation • Advisory',
      titleLine1: 'Comprehensive Knowledge and',
      titleLine2: 'Clear Accounting Management,',
      titleLine3: 'to Decide with Peace of Mind.',
      subtitle:
        'Accounting solutions under IFRS standards, tax compliance before Costa Rica’s tax authority, and advisory with professional precision.',
      ctaPrimary: 'Explore Services',
      ctaSecondary: "Let's Talk",
      legalLink: 'Legal & Privacy Policy',
      scheduleShort: 'Mon–Fri · 9:00 AM – 4:30 PM',
    },
    services: {
      tag: 'CPI Scope of Practice • Costa Rica',
      title: 'Accounting & Tax Services',
      subtitle:
        'Clearly organized services so each practice area is easy to find and understand under the Incorporated Private Accountant (CPI) scope.',
      cat1Title: 'Accounting & Corporate Compliance',
      cat1Items: [
        {
          icon: Calculator,
          title: 'Accounting under IFRS Standards',
          desc: 'Systematic accounting bookkeeping and financial statement preparation for SMEs and independent individuals under IFRS standards applicable in Costa Rica.',
        },
        {
          icon: Building2,
          title: 'Inactive Companies',
          desc: 'Preparation and filing of the informative declaration for inactive legal entities, maintaining organized period documentation.',
        },
        {
          icon: ShieldCheck,
          title: 'RTBF Declaration',
          desc: 'Guidance and filing support for the Transparency and Beneficial Ownership Registry (RTBF) declaration within established deadlines.',
        },
      ],
      cat2Title: 'Tax Filings & Vouchers',
      cat2Items: [
        {
          icon: FileSpreadsheet,
          title: 'VAT and Income Tax',
          desc: 'Preparation, review, and filing of periodic Value Added Tax (IVA) and Income Tax returns.',
        },
        {
          icon: FileText,
          title: 'Form D-270',
          desc: 'Filing of Form D-270 Monthly Summary Informative Declaration of Customers, Suppliers, and Specific Expenses without an electronic voucher.',
        },
        {
          icon: Landmark,
          title: 'Real Estate Sales Filing',
          desc: 'Calculation and filing of the corresponding real estate transfer/sale form and applicable tax determination.',
        },
        {
          icon: ShieldAlert,
          title: 'Withholding Tax Filings',
          desc: 'Tracking, calculation, and filing of withholding tax returns arising from transactions subject to withholding.',
        },
        {
          icon: Globe,
          title: 'Cross-Border Services Filings',
          desc: 'Identification, assessment, and filing of transactions related to cross-border services under current regulations.',
        },
      ],
      requestService: 'Inquire about this service',
    },
    commitment: {
      tag: 'Ethics & Professional Rigor',
      title: 'Commitment',
      lead: 'At Accounting Bytes & Consulting (abc.cr), we work with technical judgment, confidentiality, and clarity to deliver reliable accounting and tax information.',
      body1:
        'We practice under the ethical and regulatory standards governing Incorporated Private Accountants in Costa Rica, ensuring every record, reconciliation, and filing follows an orderly and verifiable process.',
      body2:
        'Our approach combines solid accounting standards with practical technology workflows so you can make informed decisions with peace of mind.',
    },
    profile: {
      tag: 'Professional Profile',
      name: 'Eduardo Bermúdez Arburola',
      role: 'Incorporated Private Accountant (CPI) • Costa Rica',
      bio: 'Accounting and business professional focused on accounting management, tax compliance, and administrative process organization for businesses and individuals in Costa Rica.',
      academicTitle: 'Academic Background',
      education: [
        {
          degree: 'Professional Master’s Degree in Project Management',
          institution: 'Universidad Latinoamericana de Ciencia y Tecnología (ULACIT)',
        },
        {
          degree: 'Bachelor’s Degree in Business Administration with Emphasis in Accounting',
          institution: 'Universidad Estatal a Distancia (UNED)',
        },
        {
          degree: 'Bachelor’s Degree in Business Administration with Emphasis in International Business',
          institution: 'Universidad Estatal a Distancia (UNED)',
        },
      ],
      directEmail: 'edu.bermudez@abc.cr',
      phone: '8414-1438',
      photoPlaceholder: 'Place your photo at public/perfil.jpg',
    },
    info: {
      tag: 'Briefings & Updates',
      title: 'Information',
      subtitle:
        'Informative notes, technical criteria, and regulatory updates to keep you informed.',
      backHome: 'Back to home',
      readCapsule: 'Read note',
      backToList: 'Back to all notes',
      consultTopic: 'Ask about this topic',
    },
    contact: {
      tag: 'Contact',
      title: "Let's Talk",
      subtitle:
        'Reach out with questions regarding accounting, tax filings, or support for your business.',
      hoursLabel: 'Business hours',
      hoursValue: 'Monday to Friday, 9:00 AM – 4:30 PM',
      emailsTitle: 'Contact emails',
      emailContact: 'contacto@abc.cr',
      emailAssistant: 'asistente@abc.cr',
      phoneLabel: 'Phone / WhatsApp',
      nameLabel: 'Full name',
      namePlaceholder: 'Your name',
      emailLabel: 'Email address',
      emailPlaceholder: 'name@company.cr',
      serviceLabel: 'Topic or service of interest',
      messageLabel: 'Message',
      messagePlaceholder: 'Briefly describe your inquiry...',
      submitBtn: 'Send message',
      sendingBtn: 'Sending...',
      sentSuccess: 'Message sent successfully. We will get back to you shortly.',
      sentError: 'Unable to send message. Please try again or email contacto@abc.cr.',
      newsletterTitle: 'Informative Newsletter (Optional)',
      newsletterDesc:
        'If you would like to receive tax and accounting notes via our distribution list (tributario@abc.cr), enter your email to request inclusion.',
      newsletterPlaceholder: 'your-email@example.com',
      newsletterBtn: 'Add to newsletter',
      newsletterSending: 'Subscribing...',
      newsletterSuccess:
        'Request submitted to be included in the distribution list associated with tributario@abc.cr.',
      newsletterError: 'Please enter a valid email address or try again.',
      newsletterSoon: 'The newsletter will be available soon.',
      newsletterConsent: 'I agree that my email is added to the tributario@abc.cr distribution list and that my data is processed for that purpose, under the Legal & Privacy Policy.',
      consent: 'I agree that my data is processed to answer my inquiry, under the Legal & Privacy Policy.',
      legalBtn: 'Legal & Privacy Policy',
    },
    legal: {
      title: 'Legal Notice & Privacy Policy',
      subtitle: 'Accounting Bytes & Consulting (abc.cr) — Costa Rica',
      close: 'Close',
      sections: [
        {
          heading: '1. Identity and professional scope',
          text: 'This website belongs to Accounting Bytes & Consulting (abc.cr), a professional practice in Costa Rica carried out by Eduardo Bermúdez Arburola, Incorporated Private Accountant (CPI), CPI No. 35066. We provide private accounting information and services and tax advisory within applicable law. We do not provide external audit services or issue audit opinions.',
        },
        {
          heading: '2. Confidentiality and professional secrecy',
          text: 'All accounting, financial, tax, or documentary information shared by clients or prospects is handled with strict confidentiality and under the CPI professional code of ethics.',
        },
        {
          heading: '3. Controller and contact',
          text: 'The controller of personal data is Eduardo Bermúdez Arburola. For questions about your data or to exercise your rights, write to contacto@abc.cr.',
        },
        {
          heading: '4. Data we collect',
          text: 'Contact form: name and phone or WhatsApp (required); email, service of interest and message (optional). Newsletter: email address. This site does not request sensitive data or payment card data.',
        },
        {
          heading: '5. Purpose and legal basis',
          text: 'We use your data to answer your inquiry, follow up by the channel you indicate and, if you request it, send informative notes through the distribution list. We do not use your data for third-party advertising. The legal basis is your express consent, given in writing by electronic means when you tick the box before sending the form. You may revoke it at any time, in the same way you gave it, without retroactive effect.',
        },
        {
          heading: '6. Service providers that process data',
          text: 'Web3Forms receives form submissions and forwards them to our email addresses; its infrastructure uses Amazon Web Services, with operations in the European Union and the United States. Cloudflare hosts the site and delivers it through its network. Site typography is loaded from Google Fonts servers. Each provider applies its own privacy policy.',
        },
        {
          heading: '7. International transfers',
          text: 'Because of these providers, your data may be processed outside Costa Rica, in particular in the United States and the European Union.',
        },
        {
          heading: '8. Retention',
          text: 'There is no fixed retention period: we keep your data as long as needed to answer your inquiry or send the information you requested. Web3Forms states that it keeps submissions for up to three years.',
        },
        {
          heading: '9. Your rights',
          text: 'Under Costa Rican Law No. 8968 on the protection of individuals regarding the processing of their personal data, you may request access to your data, its rectification or update, its deletion, and revoke the consent you gave us. Write to contacto@abc.cr. If you are not satisfied with the answer, you may go to the Agencia de Protección de Datos de los Habitantes (PRODHAB), a body of maximum decentralization attached to the Ministry of Justice and Peace.',
        },
        {
          heading: '10. Security',
          text: 'We apply reasonable measures to protect your data. No transmission over the internet is completely secure.',
        },
        {
          heading: '11. Cookies and browser storage',
          text: 'This site does not install advertising or tracking cookies and does not store data in your browser. If analytics or another tool that uses cookies is enabled in the future, this section will be updated beforehand.',
        },
        {
          heading: '12. Informative nature of content',
          text: 'Notes in the Information section are for guidance only and do not replace the individual analysis of each specific case.',
        },
        {
          heading: '13. Credits',
          text: 'The background video on the home page comes from Pexels (pexels.com) and is used under the free Pexels license.',
        },
        {
          heading: '14. Updates to this policy',
          text: 'This policy was last updated on November 20, 2026.',
        },
      ],
    },
    whatsappTooltip: 'WhatsApp 8414-1438',
    whatsappMessage:
      'Hello, I visited Accounting Bytes & Consulting (abc.cr) and would like to inquire.',
  },
};

function CRFlag({ className = '' }) {
  return (
    <svg viewBox="0 0 30 20" width="18" height="12" className={className} aria-hidden="true" focusable="false" style={{ borderRadius: 2, flexShrink: 0 }}>
      <rect width="30" height="20" fill="#FFFFFF" />
      <rect width="30" height="5" fill="#002B7F" />
      <rect y="15" width="30" height="5" fill="#002B7F" />
      <rect y="5" width="30" height="10" fill="#CE1126" />
    </svg>
  );
}

export default function App() {
  const [lang, setLang] = useState('es');
  const [isDark, setIsDark] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // 'hero' | 'services' | 'commitment' | 'profile' | 'contact' | 'blog'
  const [activeView, setActiveView] = useState('hero');
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [legalOpen, setLegalOpen] = useState(false);

  const [logoError, setLogoError] = useState(false);
  const [photoError, setPhotoError] = useState(false);

  // Contact form state (Web3Forms)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });
  const [sendingForm, setSendingForm] = useState(false);
  const [formFeedback, setFormFeedback] = useState(null);

  // Optional Newsletter state (linked to tributario@abc.cr distribution list)
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [sendingNewsletter, setSendingNewsletter] = useState(false);
  const [newsletterFeedback, setNewsletterFeedback] = useState(null);

  const t = COPY[lang];

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const navigateTo = (view, presetService = '') => {
    setActiveView(view);
    setMobileMenuOpen(false);
    setFormFeedback(null);
    if (view !== 'blog') {
      setSelectedPostId(null);
    }
    if (presetService) {
      setFormData((prev) => ({ ...prev, service: presetService }));
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setSendingForm(true);
    setFormFeedback(null);

    try {
      const payload = {
        access_key: WEB3FORMS_KEY,
        subject: `Consulta desde abc.cr — ${formData.service || 'General'}`,
        from_name: formData.name,
        name: formData.name,
        email: formData.email,
        service: formData.service || 'Consulta general',
        message: formData.message,
      };

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (data.success) {
        setFormFeedback({ type: 'success', text: t.contact.sentSuccess });
        setFormData({ name: '', email: '', service: '', message: '' });
      } else {
        setFormFeedback({ type: 'error', text: t.contact.sentError });
      }
    } catch {
      setFormFeedback({ type: 'error', text: t.contact.sentError });
    } finally {
      setSendingForm(false);
    }
  };

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    if (!NEWSLETTER_ACCESS_KEY) {
      setNewsletterFeedback({ type: 'error', text: t.contact.newsletterSoon });
      return;
    }
    if (!newsletterEmail.trim()) {
      setNewsletterFeedback({ type: 'error', text: t.contact.newsletterError });
      return;
    }

    setSendingNewsletter(true);
    setNewsletterFeedback(null);

    try {
      const payload = {
        access_key: NEWSLETTER_ACCESS_KEY,
        subject: 'Inclusión en lista de distribución (tributario@abc.cr) — abc.cr',
        from_name: 'Suscriptor Newsletter abc.cr',
        email: newsletterEmail.trim(),
        distribution_list: 'tributario@abc.cr',
        message: `Solicitud opcional para agregar el correo ${newsletterEmail.trim()} a la lista de distribución asociada a tributario@abc.cr.`,
      };

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (data.success) {
        setNewsletterFeedback({ type: 'success', text: t.contact.newsletterSuccess });
        setNewsletterEmail('');
      } else {
        setNewsletterFeedback({ type: 'error', text: t.contact.newsletterError });
      }
    } catch {
      setNewsletterFeedback({ type: 'error', text: t.contact.newsletterError });
    } finally {
      setSendingNewsletter(false);
    }
  };

  const isOverlayOpen =
    activeView === 'services' ||
    activeView === 'commitment' ||
    activeView === 'profile' ||
    activeView === 'contact';

  const selectedPost = BLOG_POSTS.find((p) => p.id === selectedPostId) || null;
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    t.whatsappMessage
  )}`;

  return (
    <div
      className={`relative min-h-screen w-full font-geist transition-colors duration-300 ${
        isDark
          ? 'bg-[#030712] text-white selection:bg-blue-600 selection:text-white'
          : 'bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white'
      } ${activeView === 'hero' ? 'h-screen overflow-hidden' : 'overflow-x-hidden'}`}
    >
      {/* Background Video (visible on Hero & overlays, hidden on dedicated Blog page) */}
      {activeView !== 'blog' && (
        <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#030712]">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover object-[70%_center]"
          >
            <source src="/video.mp4" type="video/mp4" />
          </video>
          <div
            className={`absolute inset-0 transition-opacity duration-500 ${
              isDark
                ? 'bg-gradient-to-br from-[#02040a]/80 via-[#030712]/50 to-blue-950/45'
                : 'bg-gradient-to-br from-slate-950/70 via-slate-900/45 to-blue-950/50'
            }`}
          />
        </div>
      )}

      {/* Navbar (z-30) */}
      <header
        className={`relative z-30 flex h-20 items-center justify-between px-6 md:px-12 lg:px-16 ${
          activeView === 'blog'
            ? isDark
              ? 'border-b border-blue-950/70 bg-[#040917]/95 backdrop-blur-md'
              : 'border-b border-slate-200 bg-white/95 backdrop-blur-md'
            : 'bg-gradient-to-b from-black/65 to-transparent'
        }`}
      >
        <div className="flex items-center gap-8">
          <button
            type="button"
            onClick={() => navigateTo('hero')}
            className="flex items-center focus:outline-none"
            aria-label="Accounting Bytes & Consulting — abc.cr"
          >
            {!logoError ? (
              <img
                src="/logo.svg"
                alt="Accounting Bytes & Consulting"
                onError={() => setLogoError(true)}
                className={`h-10 w-auto sm:h-11 object-contain transition-all ${
                  isDark
                    ? 'rounded-md bg-[#E7E5E2]/95 px-2.5 py-1 shadow-sm'
                    : 'rounded-md bg-white/95 px-2.5 py-1 shadow-sm ring-1 ring-slate-200'
                }`}
              />
            ) : (
              <span
                className={`text-sm font-medium tracking-tight ${
                  activeView === 'blog' && !isDark ? 'text-slate-900' : 'text-white'
                }`}
              >
                abc.cr
              </span>
            )}
          </button>

          <nav className="hidden md:flex items-center gap-6">
            {[
              { id: 'hero', label: t.nav.home },
              { id: 'services', label: t.nav.services },
              { id: 'commitment', label: t.nav.commitment },
              { id: 'profile', label: t.nav.profile },
              { id: 'blog', label: t.nav.info },
              { id: 'contact', label: t.nav.contact },
            ].map((item) => {
              const active = activeView === item.id;
              const textClass =
                activeView === 'blog' && !isDark
                  ? active
                    ? 'text-blue-700 font-medium'
                    : 'text-slate-600 hover:text-slate-950'
                  : active
                  ? 'text-blue-400 font-medium'
                  : 'text-white/80 hover:text-white';

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => navigateTo(item.id)}
                  className={`text-sm transition-colors ${textClass}`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Desktop controls */}
        <div className="hidden md:flex items-center gap-3">
          <button
            type="button"
            onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
            className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors ${
              activeView === 'blog' && !isDark
                ? 'border-slate-300 bg-white text-slate-800 hover:bg-slate-100'
                : 'border-white/15 bg-white/10 text-white/90 hover:bg-white/20'
            }`}
            aria-label="Switch Language"
          >
            <Languages size={14} />
            <span>{lang === 'es' ? 'EN' : 'ES'}</span>
          </button>

          <button
            type="button"
            onClick={() => setIsDark(!isDark)}
            className={`inline-flex h-8 w-8 items-center justify-center rounded-lg border transition-colors ${
              activeView === 'blog' && !isDark
                ? 'border-slate-300 bg-white text-slate-800 hover:bg-slate-100'
                : 'border-white/15 bg-white/10 text-white/90 hover:bg-white/20'
            }`}
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun size={15} /> : <Moon size={15} />}
          </button>

          <button
            type="button"
            onClick={() => navigateTo('contact')}
            className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-500 hover:scale-105 transition-all"
          >
            {t.nav.talk}
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
            className="rounded-lg border border-white/15 bg-white/10 px-2.5 py-1.5 text-xs font-medium text-white"
          >
            {lang === 'es' ? 'EN' : 'ES'}
          </button>

          <button
            type="button"
            onClick={() => setIsDark(!isDark)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-white/10 text-white"
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="relative z-50 flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white active:scale-90 transition-transform"
            aria-label="Toggle Menu"
          >
            <Menu
              size={20}
              className={`absolute transition-all duration-300 ${
                mobileMenuOpen ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
              }`}
            />
            <X
              size={20}
              className={`absolute transition-all duration-300 ${
                mobileMenuOpen ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay (z-20) */}
      <div
        className={`fixed inset-x-0 top-0 z-20 bg-[#030712]/98 backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden overflow-hidden ${
          mobileMenuOpen ? 'h-screen opacity-100' : 'h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div
          className={`flex h-full flex-col justify-center gap-5 px-8 transition-all duration-500 delay-100 ${
            mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          {[
            { id: 'hero', label: t.nav.home },
            { id: 'services', label: t.nav.services },
            { id: 'commitment', label: t.nav.commitment },
            { id: 'profile', label: t.nav.profile },
            { id: 'blog', label: t.nav.info },
            { id: 'contact', label: t.nav.contact },
          ].map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => navigateTo(item.id)}
              className="text-left text-3xl font-medium text-white/90 hover:text-blue-400 transition-colors"
            >
              {item.label}
            </button>
          ))}

          <button
            type="button"
            onClick={() => navigateTo('contact')}
            className="mt-4 w-fit rounded-full bg-blue-600 px-8 py-3.5 text-base font-medium text-white hover:scale-105 transition-transform"
          >
            {t.nav.talk}
          </button>
        </div>
      </div>

      {/* HERO VIEW (Single 100vh viewport) */}
      {activeView === 'hero' && (
        <main className="relative z-10 flex h-[calc(100vh-80px)] flex-col justify-between px-6 pb-8 pt-8 sm:pb-12 sm:pt-12 md:px-12 md:pb-14 md:pt-16 lg:px-16">
          <div className="max-w-3xl">
            <p className="mb-3 sm:mb-4 text-xs sm:text-sm font-medium text-blue-300/95 animate-[fadeSlideUp_0.8s_ease_0.2s_both]">
              {t.hero.badge}
            </p>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-medium leading-[1.15] tracking-tight text-white animate-[fadeSlideUp_0.8s_ease_0.4s_both]">
              {t.hero.titleLine1}
              <br />
              {t.hero.titleLine2}
              <br />
              <span className="text-blue-300">{t.hero.titleLine3}</span>
            </h1>
          </div>

          <div className="flex flex-col gap-4">
            <p className="max-w-sm sm:max-w-lg text-sm sm:text-base leading-relaxed text-white/75 animate-[fadeSlideUp_0.8s_ease_0.7s_both]">
              {t.hero.subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4 animate-[fadeSlideUp_0.8s_ease_0.9s_both]">
              <button
                type="button"
                onClick={() => navigateTo('services')}
                className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 sm:px-6 sm:py-3 text-sm font-medium text-slate-950 hover:bg-blue-50 hover:scale-105 transition-all"
              >
                <span>{t.hero.ctaPrimary}</span>
                <ArrowRight size={16} />
              </button>

              <button
                type="button"
                onClick={() => navigateTo('contact')}
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-blue-950/50 px-5 py-2.5 sm:px-6 sm:py-3 text-sm font-medium text-white backdrop-blur-md hover:bg-blue-900/60 transition-colors"
              >
                <span>{t.hero.ctaSecondary}</span>
              </button>
            </div>

            <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-white/60">
              <span>{t.hero.scheduleShort}</span>
              <span>•</span>
              <button
                type="button"
                onClick={() => setLegalOpen(true)}
                className="underline underline-offset-4 hover:text-white transition-colors"
              >
                {t.hero.legalLink}
              </button>
            </div>
          </div>
        </main>
      )}

      {/* OVERLAY PANELS (Services, Commitment, Profile, Contact) */}
      {isOverlayOpen && (
        <div className="fixed inset-0 z-20 overflow-y-auto pt-24 pb-24 px-6 md:px-12 lg:px-16">
          <div className="mx-auto max-w-5xl">
            <div
              className={`rounded-2xl border p-6 sm:p-10 backdrop-blur-xl shadow-2xl transition-colors ${
                isDark
                  ? 'border-blue-500/20 bg-[#040918]/92 text-white'
                  : 'border-slate-200 bg-white/95 text-slate-900'
              }`}
            >
              {/* Top bar inside overlay */}
              <div className="mb-8 flex items-center justify-between border-b border-current/10 pb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-500">
                  {activeView === 'services' && t.services.tag}
                  {activeView === 'commitment' && t.commitment.tag}
                  {activeView === 'profile' && t.profile.tag}
                  {activeView === 'contact' && t.contact.tag}
                </span>

                <button
                  type="button"
                  onClick={() => navigateTo('hero')}
                  className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors ${
                    isDark
                      ? 'border-white/15 bg-white/5 text-white/80 hover:bg-white/15'
                      : 'border-slate-300 bg-slate-100 text-slate-800 hover:bg-slate-200'
                  }`}
                >
                  <X size={14} />
                  <span>{t.nav.home}</span>
                </button>
              </div>

              {/* SERVICES OVERLAY */}
              {activeView === 'services' && (
                <div>
                  <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight">
                    {t.services.title}
                  </h2>
                  <p
                    className={`mt-2 max-w-2xl text-sm sm:text-base ${
                      isDark ? 'text-slate-300' : 'text-slate-600'
                    }`}
                  >
                    {t.services.subtitle}
                  </p>

                  {/* Category 1 */}
                  <div className="mt-8">
                    <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-blue-400">
                      {t.services.cat1Title}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {t.services.cat1Items.map((srv) => {
                        const Icon = srv.icon;
                        return (
                          <div
                            key={srv.title}
                            className={`flex flex-col justify-between rounded-xl border p-5 transition-colors ${
                              isDark
                                ? 'border-blue-500/15 bg-blue-950/20 hover:border-blue-400/40'
                                : 'border-slate-200 bg-slate-50 hover:border-blue-400'
                            }`}
                          >
                            <div>
                              <Icon className="mb-3 text-blue-500" size={22} />
                              <h4 className="text-base font-semibold">{srv.title}</h4>
                              <p
                                className={`mt-2 text-xs sm:text-sm leading-relaxed ${
                                  isDark ? 'text-slate-300' : 'text-slate-600'
                                }`}
                              >
                                {srv.desc}
                              </p>
                            </div>
                            <button
                              type="button"
                              onClick={() => navigateTo('contact', srv.title)}
                              className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-blue-500 hover:underline"
                            >
                              <span>{t.services.requestService}</span>
                              <ArrowRight size={13} />
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Category 2 */}
                  <div className="mt-10">
                    <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-blue-400">
                      {t.services.cat2Title}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {t.services.cat2Items.map((srv) => {
                        const Icon = srv.icon;
                        return (
                          <div
                            key={srv.title}
                            className={`flex flex-col justify-between rounded-xl border p-5 transition-colors ${
                              isDark
                                ? 'border-blue-500/15 bg-blue-950/20 hover:border-blue-400/40'
                                : 'border-slate-200 bg-slate-50 hover:border-blue-400'
                            }`}
                          >
                            <div>
                              <Icon className="mb-3 text-blue-500" size={22} />
                              <h4 className="text-base font-semibold">{srv.title}</h4>
                              <p
                                className={`mt-2 text-xs sm:text-sm leading-relaxed ${
                                  isDark ? 'text-slate-300' : 'text-slate-600'
                                }`}
                              >
                                {srv.desc}
                              </p>
                            </div>
                            <button
                              type="button"
                              onClick={() => navigateTo('contact', srv.title)}
                              className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-blue-500 hover:underline"
                            >
                              <span>{t.services.requestService}</span>
                              <ArrowRight size={13} />
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {/* COMMITMENT OVERLAY */}
              {activeView === 'commitment' && (
                <div className="max-w-3xl space-y-5">
                  <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight">
                    {t.commitment.title}
                  </h2>
                  <p className="text-base sm:text-lg font-medium leading-relaxed text-blue-400">
                    {t.commitment.lead}
                  </p>
                  <p
                    className={`text-sm sm:text-base leading-relaxed ${
                      isDark ? 'text-slate-300' : 'text-slate-600'
                    }`}
                  >
                    {t.commitment.body1}
                  </p>
                  <p
                    className={`text-sm sm:text-base leading-relaxed ${
                      isDark ? 'text-slate-300' : 'text-slate-600'
                    }`}
                  >
                    {t.commitment.body2}
                  </p>
                </div>
              )}

              {/* PROFILE OVERLAY */}
              {activeView === 'profile' && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                  <div className="flex flex-col items-center">
                    <div
                      className={`flex h-64 w-52 items-center justify-center overflow-hidden rounded-2xl border ${
                        isDark
                          ? 'border-blue-500/25 bg-blue-950/30'
                          : 'border-slate-200 bg-slate-100'
                      }`}
                    >
                      {!photoError ? (
                        <img
                          src="/perfil.jpg"
                          alt={t.profile.name}
                          onError={() => setPhotoError(true)}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className="p-4 text-center">
                          <User className="mx-auto mb-2 text-blue-500" size={44} />
                          <p
                            className={`text-xs ${
                              isDark ? 'text-slate-400' : 'text-slate-500'
                            }`}
                          >
                            {t.profile.photoPlaceholder}
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="mt-4 w-52 space-y-2 text-xs">
                      <a
                        href={`mailto:${t.profile.directEmail}`}
                        className="flex items-center gap-2 text-blue-400 hover:underline"
                      >
                        <Mail size={14} />
                        <span>{t.profile.directEmail}</span>
                      </a>
                      <a
                        href={`tel:+506${t.profile.phone.replace('-', '')}`}
                        className={`flex items-center gap-2 ${
                          isDark ? 'text-slate-300' : 'text-slate-700'
                        }`}
                      >
                        <Phone size={14} className="text-blue-500" />
                        <span className="inline-flex items-center gap-2"><CRFlag />+506 {t.profile.phone}</span>
                      </a>
                    </div>
                  </div>

                  <div className="md:col-span-2 space-y-5">
                    <div>
                      <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight">
                        {t.profile.name}
                      </h2>
                      <p className="mt-1 text-sm font-medium text-blue-400">{t.profile.role}</p>
                    </div>

                    <p
                      className={`text-sm sm:text-base leading-relaxed ${
                        isDark ? 'text-slate-300' : 'text-slate-600'
                      }`}
                    >
                      {t.profile.bio}
                    </p>

                    <div className="pt-2">
                      <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-blue-400">
                        <GraduationCap size={17} />
                        <span>{t.profile.academicTitle}</span>
                      </h3>
                      <div className="space-y-3">
                        {t.profile.education.map((edu) => (
                          <div
                            key={edu.degree}
                            className={`rounded-xl border p-4 ${
                              isDark
                                ? 'border-blue-500/15 bg-blue-950/20'
                                : 'border-slate-200 bg-slate-50'
                            }`}
                          >
                            <p className="text-sm font-semibold">{edu.degree}</p>
                            <p
                              className={`mt-1 text-xs sm:text-sm ${
                                isDark ? 'text-slate-300' : 'text-slate-600'
                              }`}
                            >
                              {edu.institution}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* CONTACT OVERLAY */}
              {activeView === 'contact' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight">
                        {t.contact.title}
                      </h2>
                      <p
                        className={`mt-2 text-sm sm:text-base ${
                          isDark ? 'text-slate-300' : 'text-slate-600'
                        }`}
                      >
                        {t.contact.subtitle}
                      </p>
                    </div>

                    <div className="space-y-3 text-sm">
                      <div className="flex items-center gap-3">
                        <Clock className="text-blue-500" size={18} />
                        <div>
                          <p className="text-xs text-blue-400">{t.contact.hoursLabel}</p>
                          <p className="font-medium">{t.contact.hoursValue}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Mail className="mt-1 text-blue-500" size={18} />
                        <div className="space-y-1">
                          <p className="text-xs text-blue-400">{t.contact.emailsTitle}</p>
                          <p className="font-medium">{t.contact.emailContact}</p>
                          <p className="font-medium">{t.contact.emailAssistant}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <Phone className="text-blue-500" size={18} />
                        <div>
                          <p className="text-xs text-blue-400">{t.contact.phoneLabel}</p>
                          <p className="font-medium">{t.profile.phone}</p>
                        </div>
                      </div>
                    </div>

                    {/* Optional Newsletter Box */}
                    <div
                      className={`rounded-xl border p-5 ${
                        isDark
                          ? 'border-blue-500/20 bg-blue-950/25'
                          : 'border-slate-200 bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center gap-2 text-sm font-semibold text-blue-400">
                        <BellPlus size={17} />
                        <span>{t.contact.newsletterTitle}</span>
                      </div>
                      <p
                        className={`mt-1.5 text-xs leading-relaxed ${
                          isDark ? 'text-slate-300' : 'text-slate-600'
                        }`}
                      >
                        {t.contact.newsletterDesc}
                      </p>

                      <form onSubmit={handleNewsletterSubmit} className="mt-3 space-y-2">
                        <label className="flex items-start gap-2 text-xs leading-relaxed">
                          <input type="checkbox" required className="mt-0.5" />
                          <span>{t.contact.newsletterConsent}</span>
                        </label>
                        <div className="flex flex-col sm:flex-row gap-2">
                        <input
                          type="email"
                          value={newsletterEmail}
                          onChange={(e) => setNewsletterEmail(e.target.value)}
                          placeholder={t.contact.newsletterPlaceholder}
                          className={`flex-1 rounded-lg border px-3.5 py-2 text-xs sm:text-sm focus:border-blue-500 focus:outline-none ${
                            isDark
                              ? 'border-white/15 bg-[#030712] text-white'
                              : 'border-slate-300 bg-white text-slate-900'
                          }`}
                        />
                        <button
                          type="submit"
                          disabled={sendingNewsletter}
                          className="rounded-lg bg-blue-600 px-4 py-2 text-xs sm:text-sm font-medium text-white hover:bg-blue-500 transition-colors disabled:opacity-60"
                        >
                          {sendingNewsletter ? t.contact.newsletterSending : t.contact.newsletterBtn}
                        </button>
                        </div>
                      </form>

                      {newsletterFeedback && (
                        <p
                          className={`mt-2 text-xs ${
                            newsletterFeedback.type === 'success'
                              ? 'text-emerald-400'
                              : 'text-rose-400'
                          }`}
                        >
                          {newsletterFeedback.text}
                        </p>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={() => setLegalOpen(true)}
                      className="inline-flex items-center gap-2 text-xs font-medium text-blue-400 hover:underline"
                    >
                      <Scale size={15} />
                      <span>{t.contact.legalBtn}</span>
                    </button>
                  </div>

                  {/* Main Contact Form */}
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div>
                      <label className="mb-1 block text-xs font-medium text-blue-400">
                        {t.contact.nameLabel}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={t.contact.namePlaceholder}
                        className={`w-full rounded-lg border px-4 py-2.5 text-sm focus:border-blue-500 focus:outline-none ${
                          isDark
                            ? 'border-white/15 bg-[#030712] text-white'
                            : 'border-slate-300 bg-slate-50 text-slate-900'
                        }`}
                      />
                    </div>

                    <div>
                      <label className="mb-1 block text-xs font-medium text-blue-400">
                        {t.contact.emailLabel}
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder={t.contact.emailPlaceholder}
                        className={`w-full rounded-lg border px-4 py-2.5 text-sm focus:border-blue-500 focus:outline-none ${
                          isDark
                            ? 'border-white/15 bg-[#030712] text-white'
                            : 'border-slate-300 bg-slate-50 text-slate-900'
                        }`}
                      />
                    </div>

                    <div>
                      <label className="mb-1 block text-xs font-medium text-blue-400">
                        {t.contact.serviceLabel}
                      </label>
                      <input
                        type="text"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        placeholder="NIIF, IVA, Renta, D-270, RTBF..."
                        className={`w-full rounded-lg border px-4 py-2.5 text-sm focus:border-blue-500 focus:outline-none ${
                          isDark
                            ? 'border-white/15 bg-[#030712] text-white'
                            : 'border-slate-300 bg-slate-50 text-slate-900'
                        }`}
                      />
                    </div>

                    <div>
                      <label className="mb-1 block text-xs font-medium text-blue-400">
                        {t.contact.messageLabel}
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder={t.contact.messagePlaceholder}
                        className={`w-full rounded-lg border px-4 py-2.5 text-sm focus:border-blue-500 focus:outline-none ${
                          isDark
                            ? 'border-white/15 bg-[#030712] text-white'
                            : 'border-slate-300 bg-slate-50 text-slate-900'
                        }`}
                      />
                    </div>

                    <label className="flex items-start gap-2 text-xs sm:text-sm leading-relaxed">
                      <input type="checkbox" name="consent" required className="mt-0.5" />
                      <span>{t.contact.consent}</span>
                    </label>

                    <button
                      type="submit"
                      disabled={sendingForm}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-500 transition-colors disabled:opacity-60"
                    >
                      <Send size={16} />
                      <span>{sendingForm ? t.contact.sendingBtn : t.contact.submitBtn}</span>
                    </button>

                    {formFeedback && (
                      <div
                        className={`flex items-center gap-2 rounded-lg border p-3 text-xs sm:text-sm ${
                          formFeedback.type === 'success'
                            ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400'
                            : 'border-rose-500/30 bg-rose-500/10 text-rose-400'
                        }`}
                      >
                        <CheckCircle2 size={16} />
                        <span>{formFeedback.text}</span>
                      </div>
                    )}
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* DEDICATED BLOG / INFORMATION PAGE */}
      {activeView === 'blog' && (
        <main
          className={`min-h-[calc(100vh-80px)] px-6 py-12 md:px-12 lg:px-16 ${
            isDark ? 'bg-[#030712] text-white' : 'bg-slate-50 text-slate-900'
          }`}
        >
          <div className="mx-auto max-w-5xl">
            <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-blue-500">
                  {t.info.tag}
                </p>
                <h1 className="mt-1 text-3xl sm:text-4xl font-semibold tracking-tight">
                  {t.info.title}
                </h1>
                <p
                  className={`mt-2 text-sm sm:text-base ${
                    isDark ? 'text-slate-300' : 'text-slate-600'
                  }`}
                >
                  {t.info.subtitle}
                </p>
              </div>

              <button
                type="button"
                onClick={() => navigateTo('hero')}
                className={`inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-colors ${
                  isDark
                    ? 'border-white/15 bg-white/5 text-white hover:bg-white/10'
                    : 'border-slate-300 bg-white text-slate-800 hover:bg-slate-100'
                }`}
              >
                <ArrowLeft size={16} />
                <span>{t.info.backHome}</span>
              </button>
            </div>

            {!selectedPost ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {BLOG_POSTS.map((post) => (
                  <article
                    key={post.id}
                    className={`flex flex-col justify-between rounded-2xl border p-6 transition-colors ${
                      isDark
                        ? 'border-blue-500/15 bg-[#070e21] hover:border-blue-400/40'
                        : 'border-slate-200 bg-white hover:border-blue-400'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between text-xs text-blue-400">
                        <span className="inline-flex items-center gap-1.5">
                          <Calendar size={13} />
                          {post.date[lang]}
                        </span>
                        <span>{post.readTime[lang]}</span>
                      </div>

                      <h2 className="mt-3 text-lg font-semibold leading-snug">
                        {post.title[lang]}
                      </h2>

                      <p
                        className={`mt-2.5 text-sm leading-relaxed ${
                          isDark ? 'text-slate-300' : 'text-slate-600'
                        }`}
                      >
                        {post.summary[lang]}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setSelectedPostId(post.id)}
                      className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-blue-500 hover:underline"
                    >
                      <span>{t.info.readCapsule}</span>
                      <ArrowRight size={15} />
                    </button>
                  </article>
                ))}
              </div>
            ) : (
              <article
                className={`rounded-2xl border p-6 sm:p-10 ${
                  isDark ? 'border-blue-500/20 bg-[#070e21]' : 'border-slate-200 bg-white'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setSelectedPostId(null)}
                  className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-blue-500 hover:underline"
                >
                  <ArrowLeft size={15} />
                  <span>{t.info.backToList}</span>
                </button>

                <div className="flex flex-wrap items-center gap-4 text-xs text-blue-400">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar size={14} />
                    {selectedPost.date[lang]}
                  </span>
                  <span>•</span>
                  <span>{selectedPost.readTime[lang]}</span>
                </div>

                <h2 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight">
                  {selectedPost.title[lang]}
                </h2>

                <div className="mt-6 space-y-4">
                  {selectedPost.content[lang].map((paragraph, index) => (
                    <p
                      key={index}
                      className={`text-sm sm:text-base leading-relaxed ${
                        isDark ? 'text-slate-300' : 'text-slate-700'
                      }`}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="mt-8 border-t border-current/10 pt-6">
                  <button
                    type="button"
                    onClick={() => navigateTo('contact', selectedPost.title[lang])}
                    className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-500 transition-colors"
                  >
                    <span>{t.info.consultTopic}</span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              </article>
            )}
          </div>
        </main>
      )}

      {/* LEGAL & PRIVACY MODAL */}
      {legalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
          <div
            className={`max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl border p-6 sm:p-8 ${
              isDark
                ? 'border-blue-500/25 bg-[#050b1c] text-white'
                : 'border-slate-200 bg-white text-slate-900'
            }`}
          >
            <div className="flex items-start justify-between gap-4 border-b border-current/10 pb-4">
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold">{t.legal.title}</h2>
                <p className="mt-1 text-xs text-blue-400">{t.legal.subtitle}</p>
              </div>
              <button
                type="button"
                onClick={() => setLegalOpen(false)}
                className="rounded-lg border border-current/15 p-2 hover:bg-current/10"
                aria-label={t.legal.close}
              >
                <X size={18} />
              </button>
            </div>

            <div className="mt-5 space-y-5">
              {t.legal.sections.map((sec) => (
                <div key={sec.heading}>
                  <h3 className="text-sm font-semibold text-blue-400">{sec.heading}</h3>
                  <p
                    className={`mt-1 text-xs sm:text-sm leading-relaxed ${
                      isDark ? 'text-slate-300' : 'text-slate-600'
                    }`}
                  >
                    {sec.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => setLegalOpen(false)}
                className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-500"
              >
                {t.legal.close}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t.whatsappTooltip}
        title={t.whatsappTooltip}
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 text-white shadow-xl hover:scale-105 hover:bg-emerald-500 transition-all"
      >
        <MessageCircle size={26} />
      </a>
    </div>
  );
}
