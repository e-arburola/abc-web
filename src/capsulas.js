// Cápsulas informativas: la más reciente primero.
// Para agregar una: copie un bloque completo, cambie id, fecha, títulos, resumen y contenido, y péguelo arriba.

export const BLOG_POSTS = [
  {
    id: '211126-declaraciones-iva-datos-contador',
    date: { es: '21 de noviembre de 2026', en: 'November 21, 2026' },
    readTime: { es: '3 min de lectura', en: '3 min read' },
    title: {
      es: 'Declaraciones de IVA: datos del contador que las elabora',
      en: 'VAT Returns: Details of the Accountant Who Prepares Them',
    },
    summary: {
      es: 'A partir del 1 de febrero de 2027, los formularios de IVA piden identificar al contador que elaboró la declaración.',
      en: 'From February 1, 2027, VAT forms ask for the identification of the accountant who prepared the return.',
    },
    content: {
      es: [
        'La Resolución MH-DGT-RES-0033-2026 agrega una sección a los formularios de IVA 150, 151, 152 y 157. En ella se indica si la declaración fue elaborada por un profesional en ciencias contables o económicas y, en ese caso, se consignan su número de identificación (cédula de identidad, DIMEX o NITE), su nombre, el colegio profesional al que está incorporado y su número de carné de agremiado.',
        'Aplica a las declaraciones de IVA que se presenten a partir de su entrada en vigor, sea que el contribuyente las presente directamente o por medio de un tercero autorizado. No aplica a las rectificativas de periodos anteriores. Rige a partir del 1 de febrero de 2027.',
        'La Administración Tributaria busca dar trazabilidad a las declaraciones y detectar posibles anomalías. La resolución aclara que no cambia la responsabilidad del contribuyente sobre sus estados financieros, registros contables ni control interno.',
        'Si su contador elabora sus declaraciones de IVA, será él quien complete esta sección con sus propios datos. Conviene conversar con él desde ahora sobre cómo se hará, para que cada declaración salga completa desde el primer periodo. El Código de Normas y Procedimientos Tributarios sanciona la información incompleta o incorrecta en las declaraciones; consulte con su contador.',
        'Fuente: Resolución MH-DGT-RES-0033-2026 (21 de octubre de 2026), La Gaceta Alcance N.º 154 a La Gaceta N.º 220, del 19 de noviembre de 2026: https://www.imprentanacional.go.cr/pub/2026/11/19/ALCA154_19_11_2026.pdf',
      ],
      en: [
        'Resolution MH-DGT-RES-0033-2026 adds a section to VAT forms 150, 151, 152 and 157. It states whether the return was prepared by a professional in accounting or economic sciences and, if so, records that professional’s identification number (cédula de identidad, DIMEX or NITE), name, the professional association they belong to, and their membership card number.',
        'It applies to VAT returns filed from its entry into force, whether the taxpayer files them directly or through an authorized third party. It does not apply to corrective returns for earlier periods. It takes effect on February 1, 2027.',
        'The Tax Administration seeks traceability in returns and to detect possible irregularities. The resolution makes clear that it does not change the taxpayer’s responsibility for financial statements, accounting records or internal control.',
        'If your accountant prepares your VAT returns, they will complete this section with their own details. It is worth discussing with them now how this will be handled, so each return is complete from the first period. The Código de Normas y Procedimientos Tributarios penalizes incomplete or incorrect information in returns; consult your accountant.',
        'Source: Resolution MH-DGT-RES-0033-2026 (October 21, 2026), La Gaceta Alcance No. 154 to La Gaceta No. 220, of November 19, 2026: https://www.imprentanacional.go.cr/pub/2026/11/19/ALCA154_19_11_2026.pdf',
      ],
    },
  },
  {
    id: '181126-modificacion-facturaelectronica',
    date: { es: '18 de noviembre de 2026', en: 'November 18, 2026' },
    readTime: { es: '4 min de lectura', en: '4 min read' },
    title: {
      es: 'Nuevos códigos de referencia en Factura Electrónica (versión 4.4)',
      en: 'New Reference Codes in Electronic Invoicing (Version 4.4)',
    },
    summary: {
      es: 'Desde el 1 de noviembre de 2026, los códigos 13 a 16 y 19 indican el motivo por el que se anula, corrige o sustituye un comprobante electrónico.',
      en: 'Since November 1, 2026, codes 13 to 16 and 19 state the reason an electronic voucher is cancelled, corrected, or replaced.',
    },
    content: {
      es: [
        'A partir del 1 de noviembre de 2026, los comprobantes electrónicos deben incluir los nuevos códigos de referencia de los Anexos y Estructuras de comprobantes electrónicos versión 4.4. Cada código indica el motivo por el que se anula, corrige o sustituye un documento:',
        'Código 13: anula un documento de referencia por error material, por ejemplo una factura de un mes anterior. Código 14: corrige el monto por error material, en una Nota de Crédito o Débito, sin emitir un comprobante nuevo. Código 15: sustituye un comprobante electrónico por error material. Código 16: sustituye un comprobante electrónico rechazado, sin necesidad de Nota de Crédito. Código 19: referencia a la Factura Electrónica de Exportación.',
        'Los códigos 01 (anula documento de referencia en el mismo mes) y 07 (sustituye comprobante electrónico) siguen vigentes. Ejemplo: si una factura de mayo se emitió con un monto errado, se anula con el código 13 y se emite una nueva con el código 15.',
        'Efecto contable: cuando se usan los códigos 13, 14 o 15 para corregir un error material, el efecto debe registrarse en el periodo del comprobante original. Esto puede afectar periodos contables cerrados y declaraciones ya presentadas, por lo que puede requerirse rectificar declaraciones y pagar diferencias de impuestos e intereses. La declaración de IVA de periodos anteriores solo se rectifica si hay error en los montos declarados o en la clasificación de las líneas del formulario.',
        'Recomendaciones: confirme con su proveedor de facturación electrónica que el sistema ya incorpora los nuevos códigos y que permite aplicarlos. Revise también si el sistema acepta cédulas jurídicas alfanuméricas, que ya no deben rechazarse. Un uso incorrecto de los códigos puede generar sanciones y recargos tributarios.',
      ],
      en: [
        'Since November 1, 2026, electronic vouchers must include the new reference codes of the Electronic Voucher Annexes and Structures, version 4.4. Each code states the reason a document is cancelled, corrected, or replaced:',
        'Code 13: cancels a reference document for a material error, for example an invoice from a prior month. Code 14: corrects the amount for a material error, on a Credit or Debit Note, without issuing a new voucher. Code 15: replaces an electronic voucher for a material error. Code 16: replaces a rejected electronic voucher, without a Credit Note. Code 19: references the Electronic Export Invoice.',
        'Codes 01 (cancels a reference document in the same month) and 07 (replaces an electronic voucher) remain in force. Example: if a May invoice was issued with a wrong amount, cancel it with code 13 and issue a new one with code 15.',
        'Accounting effect: when codes 13, 14, or 15 are used to correct a material error, the effect must be recorded in the period of the original voucher. This can affect closed accounting periods and filed returns, so returns may need to be rectified and tax differences and interest paid. A prior-period VAT return is rectified only when the declared amounts or the classification of the form lines contain an error.',
        'Recommendations: confirm with your e-invoicing provider that the system includes the new codes and allows their use. Also check that it accepts alphanumeric legal-entity IDs, which must no longer be rejected. Incorrect use of the codes can lead to tax penalties and surcharges.',
      ],
    },
  },
  {
    id: '041126-control-d270-retenciones',
    date: { es: '4 de noviembre de 2026', en: 'November 4, 2026' },
    readTime: { es: '3 min de lectura', en: '3 min read' },
    title: {
      es: 'Orden documental para Formulario D-270, retenciones y operaciones transfronterizas',
      en: 'Documentary Order for Form D-270, Withholdings, and Cross-Border Operations',
    },
    summary: {
      es: 'Formulario D-270 (resolución MH-DGT-RES-0010-2026): presentación de compras y pagos sin comprobante electrónico validado, con plazo de enero de 2027 para 2026 y presentación mensual desde 2027.',
      en: 'Form D-270 (Resolution MH-DGT-RES-0010-2026): reporting purchases and payments without a validated electronic receipt, due January 2027 for 2026 and monthly from 2027.',
    },
    content: {
      es: [
        'El Formulario D-270 es una declaración informativa que se presenta según la Resolución MH-DGT-RES-0010-2026. Su objetivo es informar a Tributación sobre las compras y los pagos que no cuentan con un comprobante electrónico validado.',
        'Debe presentarla, entre otros, quien pague intereses y comisiones no sujetos a IVA a entidades financieras supervisadas (excepto seguros), y quien compre bienes o servicios a instituciones públicas que no están obligadas a emitir comprobante electrónico, como municipalidades, la CCSS, el Banco Central, el Poder Judicial, el TSE y las universidades públicas para actividades no sujetas a IVA. Aplica a personas físicas y jurídicas, fideicomisos, condominios, ONG y partidos políticos.',
        'No incluye las importaciones ni las exportaciones, las operaciones respaldadas por comprobante electrónico, las operaciones ya reportadas en declaraciones de autoliquidación, ni los montos sujetos a retención que se informan en el formulario D-150. Reportar una compra en el D-270 no sustituye la factura electrónica obligatoria.',
        'Plazo: para las operaciones de 2026 se presenta una sola declaración consolidada, a más tardar dentro de los primeros 25 días naturales de enero de 2027. Esta opción de presentación única aplica solo al periodo 2026. A partir de 2027, la declaración se presenta mensualmente, dentro de los primeros 25 días naturales del mes siguiente al periodo informado.',
        'Multas: omitir información, presentarla tarde o con datos incorrectos puede generar sanciones según el Código de Normas y Procedimientos Tributarios, desde tres salarios base (¢1.386.600) hasta cien salarios base (¢46.220.000), según los montos vigentes en 2026.',
        'Orden documental recomendado: identifique las operaciones con anticipación, separe los comprobantes electrónicos de las operaciones sin comprobante, y conserve organizada la documentación de respaldo de cada pago y cada retención. Revise el registro cada mes para no acumular operaciones pendientes.',
      ],
      en: [
        'Form D-270 is an informational return filed under Resolution MH-DGT-RES-0010-2026. Its purpose is to inform Tax Administration about purchases and payments that do not have a validated electronic receipt.',
        'It must be filed, among others, by whoever pays interest and commissions not subject to VAT to supervised financial entities (except insurance), and by whoever buys goods or services from public institutions not required to issue electronic receipts, such as municipalities, the CCSS, the Central Bank, the Judiciary, the TSE, and public universities for activities not subject to VAT. It applies to individuals and legal entities, trusts, condominiums, NGOs, and political parties.',
        'It excludes imports and exports, operations backed by electronic receipts, operations already reported in self-assessment returns, and amounts subject to withholding that are reported on form D-150. Reporting a purchase on the D-270 does not replace the mandatory electronic invoice.',
        'Deadline: for 2026 operations, a single consolidated return is filed no later than the first 25 natural days of January 2027. This single-filing option applies only to the 2026 period. From 2027, the return is filed monthly, within the first 25 natural days of the month following the period reported.',
        'Fines: omitting information, filing late, or submitting incorrect data may result in penalties under the Código de Normas y Procedimientos Tributarios, from three base salaries (¢1,386,600) up to one hundred base salaries (¢46,220,000), based on amounts in effect for 2026.',
        'Recommended documentary order: identify operations in advance, separate electronic receipts from operations without a receipt, and keep the supporting documents for each payment and withholding organized. Review the record monthly so pending operations do not accumulate.',
      ],
    },
  },
  {
    id: '201026-sociedades-inactivas-rtbf',
    date: { es: '20 de octubre de 2026', en: 'October 20, 2026' },
    readTime: { es: '3 min de lectura', en: '3 min read' },
    title: {
      es: 'Seguimiento de cumplimiento en Sociedades Inactivas y RTBF',
      en: 'Compliance Tracking for Inactive Companies and RTBF',
    },
    summary: {
      es: 'Cada 30 de abril: declaración informativa D-272 de sociedades inactivas y declaración ordinaria anual del Registro de Transparencia y Beneficiarios Finales (RTBF).',
      en: 'Every April 30: informational return D-272 for inactive companies and the annual ordinary declaration of the Transparency and Beneficial Ownership Registry (RTBF).',
    },
    content: {
      es: [
        'Sociedad inactiva no significa sociedad sin obligaciones. Una sociedad inactiva también debe presentar su declaración informativa anual ante Hacienda, con el formulario D-272, según la Resolución MH-DGT-RES-0013-2025. Se presenta a través de TRIBU-CR, a más tardar el 30 de abril de cada año, y solo durante el periodo que establece la normativa.',
        'El Registro de Transparencia y Beneficiarios Finales (RTBF) es obligatorio según la Ley 9416 y la Circular DPJ-002-2026 del Registro Nacional. La declaración ordinaria anual vence el 30 de abril de cada año, y solo durante el periodo que establece la normativa. Si la entidad no cumple, el Registro Nacional no emite certificaciones de personería jurídica ni inscribe documentos, y el incumplimiento debe anotarse en las certificaciones notariales.',
        'El incumplimiento puede generar una multa equivalente al 2% de la cifra de los ingresos brutos del periodo fiscal anterior, con un mínimo de tres salarios base (¢1.386.600) y un máximo de cien salarios base (¢46.220.000), según los montos vigentes en 2026.',
        'Recomendación: antes de marzo de cada año, verifique si la sociedad es activa o inactiva, qué declaraciones le aplican y si su información en el RTBF está actualizada.',
      ],
      en: [
        'An inactive company is not a company without obligations. An inactive company must also file its annual informational return with Hacienda, form D-272, under Resolution MH-DGT-RES-0013-2025. It is filed through TRIBU-CR no later than April 30 of each year, and only during the period set by the regulations.',
        'The Transparency and Beneficial Ownership Registry (RTBF) is mandatory under Law 9416 and Circular DPJ-002-2026 of the National Registry. The annual ordinary declaration is due April 30 of each year, and only during the period set by the regulations. If the entity does not comply, the National Registry does not issue legal-capacity certificates or record documents, and the non-compliance must be noted on notarial certificates.',
        'Non-compliance may result in a fine equal to 2% of gross income for the prior fiscal period, with a minimum of three base salaries (¢1,386,600) and a maximum of one hundred base salaries (¢46,220,000), based on amounts in effect for 2026.',
        'Recommendation: before March of each year, check whether the company is active or inactive, which declarations apply to it, and whether its RTBF information is up to date.',
      ],
    },
  },
];
