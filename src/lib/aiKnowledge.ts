// AI客服知识库
interface FAQItem {
  question: string;
  answer: {
    [key: string]: string;
  };
  keywords: string[];
  category: string;
}

// 知识库数据
export const knowledgeBase: FAQItem[] = [
  {
    question: "你们提供哪些产品？",
    answer: {
      en: "We mainly provide four categories of products: Magnetic Materials, Magnetic Filters, Enameled Wire, and Agricultural Machinery. For specific product specifications and details, please check our product page.",
      fr: "Nous proposons principalement quatre catégories de produits : matériaux magnétiques, filtres magnétiques, fil émaillé et machines agricoles. Pour les spécifications et les détails des produits, veuillez consulter notre page produit.",
      de: "Wir bieten hauptsächlich vier Produktkategorien: Magnetmaterialien, Magnetfilter, Emailldraht und landwirtschaftliche Maschinen. Für spezifische Produktspezifikationen und Details besuchen Sie bitte unsere Produktseite.",
      es: "Principalmente proporcionamos cuatro categorías de productos: Materiales magnéticos, Filtros magnéticos, Alambre esmaltado y Maquinaria agrícola. Para especificaciones y detalles de productos específicos, consulte nuestra página de productos.",
      ja: "当社は主に4つのカテゴリーの製品を提供しています：磁性材料、磁性フィルター、エナメル線、農業機械です。具体的な製品仕様と詳細については、製品ページをご覧ください。",
      ar: "نحن نقدم أساسًا أربعة فئات من المنتجات: المواد المغناطيسية، المرشحات المغناطيسية، السلك المعدني، والمعدنات الزراعية. للحصول على المواصفات والتفاصيل الخاصة بالمنتجات، يرجى التحقق من صفحة المنتجات لدينا.",
      ru: "Мы предлагаем в основном четыре категории продуктов: магнитные материалы, магнитные фильтры, эмалированный провод и сельскохозяйственная техника. Для конкретных спецификаций и деталей продуктов посетите нашу страницу продуктов.",
      it: "Offriamo principalmente quattro categorie di prodotti: Materiali magnetici, Filtri magnetici, Filo smaltato e Macchinari agricoli. Per specifiche e dettagli sui prodotti, consultare la nostra pagina prodotti.",
      pt: "Oferecemos principalmente quatro categorias de produtos: Materiais Magnéticos, Filtros Magnéticos, Fio Esmaltado e Máquinas Agrícolas. Para especificações e detalhes de produtos específicos, consulte nossa página de produtos."
    },
    keywords: ["产品", "提供", "种类", "类型"],
    category: "products"
  },
  {
  question: "你们提供OEM服务吗？",
  answer: {
    en: "Yes, we provide comprehensive OEM services. We can customize products according to your specific requirements, including design, material selection, production, and packaging. Please contact us for detailed OEM cooperation plans.",
    fr: "Oui, nous proposons des services OEM complets. Nous pouvons personnaliser les produits selon vos exigences spécifiques, y compris la conception, le choix des matériaux, la production et l'emballage. Veuillez nous contacter pour obtenir des plans de coopération OEM détaillés.",
    de: "Ja, wir bieten umfassende OEM-Dienstleistungen an. Wir können Produkte gemäß Ihren spezifischen Anforderungen anpassen, einschließlich Design, Materialauswahl, Produktion und Verpackung. Kontaktieren Sie uns für detaillierte OEM-Zusammenarbeitpläne.",
    es: "Sí, ofrecemos servicios OEM completos. Podemos personalizar productos según sus requisitos específicos, incluidos diseño, selección de materiales, producción y empaquetado. Contáctenos para obtener planes de cooperación OEM detallados.",
    ja: "はい、当社は包括的なOEMサービスを提供しています。設計、材料選択、生産、パッケージングを含め、ご具体的なご要求に応じて製品をカスタマイズすることができます。詳細なOEM協力プランについては、お問い合わせください。",
    ar: "نعم، نحن نقدم خدمات OEM شاملة. يمكننا تخصيص المنتجات وفقًا لمتطلباتك المحددة، بما في ذلك التصميم، واختيار المواد، والانتاج والتغليف. يرجى الاتصال بنا للحصول على خطط التعاون المفصلة لخدمة OEM.",
    ru: "Да, мы предоставляем полные услуги OEM. Мы можем кастомизировать продукты в соответствии с вашими конкретными требованиями, включая дизайн, выбор материалов, производство и упаковку. Свяжитесь с нами для получения детальных планов сотрудничества OEM.",
    it: "Sì, offriamo servizi OEM completi. Possiamo personalizzare i prodotti secondo le vostre esigenze specifiche, comprese progettazione, selezione dei materiali, produzione e imballaggio. Contattaci per i piani di collaborazione OEM dettagliati.",
    pt: "Sim, oferecemos serviços OEM completos. Podemos personalizar produtos de acordo com seus requisitos específicos, incluindo design, seleção de materiais, produção e embalagem. Entre em contato conosco para obter planos detalhados de cooperação OEM."
  },
  keywords: ["oem", "定制", "加工", "合作"],
  category: "services"
  },
  {
  question: "最小起订量(MOQ)是多少？",
  answer: {
    en: "Our minimum order quantity varies by product type: typically 500 kg for magnetic materials, 50 pieces for magnetic filters, 1000 meters for enameled wire, and 10 units for agricultural machinery. For large customers or long-term partners, we can consider reducing MOQ requirements.",
    fr: "Notre quantité de commande minimale varie selon le type de produit : généralement 500 kg pour les matériaux magnétiques, 50 pièces pour les filtres magnétiques, 1000 mètres pour le fil émaillé et 10 unités pour les machines agricoles.",
    de: "Unsere Mindestbestellmenge variiert je nach Produkttyp: normalerweise 500 kg für Magnetmaterialien, 50 Stück für Magnetfilter, 1000 Meter für Emailldraht und 10 Einheiten für landwirtschaftliche Maschinen.",
    es: "Nuestra cantidad mínima de pedido varía según el tipo de producto: normalmente 500 kg para materiales magnéticos, 50 piezas para filtros magnéticos, 1000 metros para alambre esmaltado y 10 unidades para maquinaria agrícola.",
    ja: "最小注文量は製品タイプによって異なります：磁性材料は通常500kg、磁性フィルターは50個、エナメル線は1000メートル、農業機械は10台です。大口顧客または長期的なパートナーの場合は、MOQ要件を緩和することを検討できます。",
    ar: "كمية الطلب الدنيا تختلف حسب نوع المنتج: عادةً 500 كجم للمواد المغناطيسية، و50 قطعة للمرشحات المغناطيسية، و1000 مترًا للسلك المعدني، و10 وحدات للمعدنات الزراعية.",
    ru: "Наша минимальная партия заказа зависит от типа продукта: обычно 500 кг для магнитных материалов, 50 штук для магнитных фильтров, 1000 метров для эмалированного провода и 10 единиц для сельскохозяйственной техники.",
    it: "La nostra quantità minima di ordine varia in base al tipo di prodotto: tipicamente 500 kg per materiali magnetici, 50 pezzi per filtri magnetici, 1000 metri per filo smaltato e 10 unità per macchinari agricoli.",
    pt: "Nossa quantidade mínima de pedido varia de acordo com o tipo de produto: tipicamente 500 kg para materiais magnéticos, 50 peças para filtros magnéticos, 1000 metros para fio esmaltado e 10 unidades para maquinário agrícola."
  },
  keywords: ["moq", "最小", "起订量", "数量"],
  category: "order"
  },
  {
  question: "你们接受哪些付款方式？",
  answer: {
    en: "We accept payment methods including: T/T wire transfer (30% advance payment, 70% against copy of bill of lading), Letter of Credit (L/C), PayPal (for small orders), and Alibaba Trade Assurance orders. Specific payment terms can be negotiated upon order confirmation.",
    fr: "Nous acceptons les méthodes de paiement suivantes : virement bancaire T/T (30% d'acompte, 70% contre copie du connaissement), lettre de crédit (L/C), PayPal (pour les petites commandes) et commandes Alibaba Trade Assurance. Les conditions de paiement spécifiques peuvent être négociées lors de la confirmation de la commande.",
    de: "Wir akzeptieren Zahlungsmethoden wie: T/T-Banküberweisung (30% Anzahlung, 70% gegen Kopie des Frachtbriefs), Letter of Credit (L/C), PayPal (für kleine Bestellungen) und Alibaba Trade Assurance-Bestellungen. Spezifische Zahlungsbedingungen können bei Bestellbestätigung verhandelt werden.",
    es: "Aceptamos métodos de pago que incluyen: transferencia bancaria T/T (30% anticipo, 70% contra copia del conocimiento de embarque), Letter of Credit (L/C), PayPal (para pedidos pequeños) y pedidos Alibaba Trade Assurance. Los términos de pago específicos pueden negociarse al confirmar el pedido.",
    ja: "当社は以下の支払い方法を受け付けています：T/T電信送金（30%前払い、70%は船荷証券コピー払い）、信用状（L/C）、PayPal（小口注文）、アリババの貿易保証注文です。具体的な支払い条件は注文確認時に協議できます。",
    ar: "نحن نقبل طرق الدفع بما في ذلك: التحويل البنكي T/T (30٪ دفعة مقدمة، 70٪ مقابل نسخة من سند الشحن)، صك الائتمان (L/C)، PayPal (للأوامر الصغيرة) وطلبات ضمان التبادل التجاري على أليبابا. يمكن التفاوض على شروط الدفع المحددة عند تأكيد الطلب.",
    ru: "Мы принимаем следующие способы оплаты: банковский перевод T/T (30% предоплата, 70% по копии накладной), аккредитив (L/C), PayPal (для мелких заказов) и заказы через Alibaba Trade Assurance. Конкретные условия оплаты могут быть согласованы при подтверждении заказа.",
    it: "Accettiamo metodi di pagamento tra cui: bonifico bancario T/T (30% anticipo, 70% contro copia della lettera di imbarco), Letter of Credit (L/C), PayPal (per ordini piccoli) e ordini Alibaba Trade Assurance. I termini di pagamento specifici possono essere negoziati al momento della conferma dell'ordine.",
    pt: "Aceitamos métodos de pagamento incluindo: transferência bancária T/T (30% adiantamento, 70% contra cópia do conhecimento de embarque), Letter of Credit (L/C), PayPal (para pedidos pequenos) e pedidos Alibaba Trade Assurance. Os termos de pagamento específicos podem ser negociados na confirmação do pedido."
  },
  keywords: ["付款", "方式", "支付", "terms"],
  category: "payment"
  },
  {
    question: "产品交货时间是多久？",
    answer: {
      en: "The delivery time for standard products is usually 15-20 days, and for customized products is 25-35 days, depending on the order quantity and product complexity. I will provide an accurate production and delivery schedule after order confirmation.",
      fr: "Le délai de livraison pour les produits standard est généralement de 15 à 20 jours et pour les produits personnalisés de 25 à 35 jours, selon la quantité commandée et la complexité du produit. Je fournirai un planning de production et de livraison précis après confirmation de la commande.",
      de: "Die Lieferzeit für Standardprodukte beträgt normalerweise 15-20 Tage und für maßgeschneiderte Produkte 25-35 Tage, abhängig von der Bestellmenge und der Produktkomplexität. Ich werde einen genauen Produktions- und Lieferplan nach Bestellbestätigung bereitstellen.",
      es: "El tiempo de entrega para productos estándar suele ser de 15-20 días y para productos personalizados de 25-35 días, dependiendo de la cantidad pedida y la complejidad del producto. Proporcionaré un cronograma de producción y entrega preciso después de confirmar el pedido.",
      ja: "標準製品の納期は通常15-20日、カスタム製品は25-35日です。これは注文数量と製品の複雑さによって異なります。注文確認後、正確な生産と納期スケジュールを提供いたします。",
      ar: "مدة توصيل المنتجات القياسية عادة 15-20 يومًا، والمنتجات المخصصة 25-35 يومًا، اعتمادًا على كمية الطلب وتعقيد المنتج. سأقدم جدول إنتاج وتوصيل دقيق بعد تأكيد الطلب.",
      ru: "Срок доставки стандартных продуктов обычно 15-20 дней, а для индивидуальных продуктов 25-35 дней в зависимости от количества заказа и сложности продукта. После подтверждения заказа я предоставлю точный график производства и доставки.",
      it: "Il tempo di consegna per i prodotti standard è solitamente 15-20 giorni e per i prodotti personalizzati 25-35 giorni, a seconda della quantità ordinata e della complessità del prodotto. Fornirò un programma di produzione e consegna accurato dopo la conferma dell'ordine.",
      pt: "O prazo de entrega para produtos padrão é geralmente de 15-20 dias e para produtos personalizados de 25-35 dias, dependendo da quantidade encomendada e complexidade do produto. Fornecerei um cronograma de produção e entrega preciso após a confirmação do pedido."
    },
    keywords: ["交货", "时间", "发货", "周期"],
    category: "delivery"
  },
  {
    question: "如何获取产品报价？",
    answer: {
      en: "You can submit a quote request through our 'Get Quote' page on the website or contact my sales team directly. To provide an accurate quote, please provide product model, specifications, quantity, and special requirements (if any). I usually respond to your quote request within 24 hours.",
      fr: "Vous pouvez soumettre une demande de devis via notre page 'Get Quote' sur le site web ou contacter directement mon équipe commerciale. Pour fournir un devis précis, veuillez fournir le modèle de produit, les spécifications, la quantité et les exigences spéciales (le cas échéant). Je réponds généralement à votre demande de devis dans les 24 heures.",
      de: "Sie können eine Angebotsanfrage über unsere 'Get Quote'-Seite auf der Website einreichen oder mein Verkaufsteam direkt kontaktieren. Um ein genaues Angebot zu erstellen, bitten wir Sie, Produktmodell, Spezifikationen, Menge und besondere Anforderungen (falls vorhanden) anzugeben. Ich antworte normalerweise innerhalb von 24 Stunden auf Ihre Angebotsanfrage.",
      es: "Puede enviar una solicitud de cotización a través de nuestra página 'Get Quote' en el sitio web o contactar directamente a mi equipo de ventas. Para proporcionar una cotización precisa, por favor proporcione el modelo de producto, especificaciones, cantidad y requisitos especiales (si los hay). Por lo general, respondo a su solicitud de cotización dentro de las 24 horas.",
      ja: "ウェブサイトの「Get Quote」ページから見積もりリクエストを送信するか、直接営業チームにご連絡いただけます。正確な見積もりを提供するために、製品モデル、仕様、数量、特別な要求事項（あれば）をご提供ください。通常、24時間以内に見積もりリクエストにお返事いたします。",
      ar: "يمكنك تقديم طلب سعر من خلال صفحة 'Get Quote' على الموقع أو الاتصال مباشرة بفريق المبيعات الخاص بي. لكي نقدم سعر دقيق، يرجى تقديم نموذج المنتج والت спецификации والكمية والتребования الخاصة (إذا كانت موجودة). عادةً ما أرد على طلب السعر الخاص بك خلال 24 ساعة.",
      ru: "Вы можете отправить запрос на котировку через нашу страницу 'Get Quote' на веб-сайте или напрямую связаться с моей sales-командой. Чтобы предоставить точную котировку, укажите модель продукта, спецификации, количество и специальные требования (если есть). Обычно я отвечаю на запросы на котировку в течение 24 часов.",
      it: "Puoi inviare una richiesta di preventivo tramite la nostra pagina 'Get Quote' sul sito web o contattare direttamente il mio team commerciale. Per fornire un preventivo accurato, si prega di indicare modello prodotto, specifiche, quantità e requisiti speciali (se presenti). Di solito rispondo alla tua richiesta di preventivo entro 24 ore.",
      pt: "Você pode enviar uma solicitação de orçamento por meio de nossa página 'Get Quote' no site ou entrar em contato diretamente com minha equipe de vendas. Para fornecer um orçamento preciso, informe modelo do produto, especificações, quantidade e requisitos especiais (se houver). Normalmente respondo à sua solicitação de orçamento dentro de 24 horas."
    },
    keywords: ["报价", "价格", "quote", "cost"],
    category: "quote"
  },
  {
    question: "你们的产品质量有保障吗？",
    answer: {
      en: "Yes, all our products comply with ISO 9001 quality management system standards and have passed CE and RoHS certifications. We conduct strict quality inspections on each batch of products to ensure they meet customer requirements.",
      fr: "Oui, tous nos produits répondent aux normes du système de management de la qualité ISO 9001 et ont passé les certifications CE et RoHS. Nous effectuons des inspections de qualité strictes sur chaque lot de produits pour nous assurer qu'ils répondent aux exigences des clients.",
      de: "Ja, alle unsere Produkte entsprechen den Standards des ISO 9001-Qualitätsmanagementsystems und haben die CE- und RoHS-Zertifizierungen bestanden. Wir führen strenge Qualitätskontrollen für jede Produktcharge durch, um sicherzustellen, dass sie den Kundenanforderungen entsprechen.",
      es: "Sí, todos nuestros productos cumplen con los estándares del sistema de gestión de calidad ISO 9001 y han pasado las certificaciones CE y RoHS. Realizamos rigurosas inspecciones de calidad en cada lote de productos para garantizar que cumplan con los requisitos de los clientes.",
      ja: "はい、当社のすべての製品はISO 9001品質管理システムの基準に準拠しており、CEおよびRoHS認証を取得しています。各製品ロットに対して厳格な品質検査を実施し、顧客の要求を満たすようにしています。",
      ar: "نعم، جميع منتجاتنا تُتوافق مع معايير نظام إدارة الجودة ISO 9001 وقد прошла الشهادات CE و RoHS. نحن نجري فحوصات جودة صارمة على كل دفعة من المنتجات لضمان أنها تُلبي متطلبات العملاء.",
      ru: "Да, все наши продукты соответствуют стандартам системы менеджмента качества ISO 9001 и имеют сертификаты CE и RoHS. Мы проводим строгую проверку качества каждого батча продукции, чтобы гарантировать соответствие требованиям клиентов.",
      it: "Sì, tutti i nostri prodotti rispettano gli standard del sistema di gestione della qualità ISO 9001 e hanno superato le certificazioni CE e RoHS. Effettuiamo controlli di qualità rigorosi su ogni lotto di prodotti per garantire che soddisfino i requisiti dei clienti.",
      pt: "Sim, todos os nossos produtos cumprem com os padrões do sistema de gestão da qualidade ISO 9001 e obtiveram certificações CE e RoHS. Realizamos inspeções de qualidade rigorosas em cada lote de produtos para garantir que atendam aos requisitos dos clientes."
    },
    keywords: ["质量", "保障", "认证", "标准"],
    category: "quality"
  },
  {
    question: "你们的产品出口哪些国家？",
    answer: {
      en: "Our products have been exported to more than 30 countries and regions worldwide, with main markets including Europe, North America, Southeast Asia, the Middle East, and Australia. We have rich international trade experience and can handle various export-related matters.",
      fr: "Nos produits ont été exportés vers plus de 30 pays et régions du monde, avec des marchés principaux en Europe, Amérique du Nord, Asie du Sud-Est, Moyen-Orient et Australie. Nous avons une riche expérience en commerce international et pouvons gérer diverses questions liées à l'exportation.",
      de: "Unsere Produkte wurden in über 30 Länder und Regionen weltweit exportiert, mit Hauptmärkten in Europa, Nordamerika, Südostasien, Naher Osten und Australien. Wir verfügen über umfangreiche Erfahrung im internationalen Handel und können verschiedene exportbezogene Angelegenheiten bewältigen.",
      es: "Nuestros productos se han exportado a más de 30 países y regiones en todo el mundo, con mercados principales que incluyen Europa, América del Norte, Sudeste Asiático, Medio Oriente y Australia. Tenemos amplia experiencia en comercio internacional y podemos manejar diversos asuntos relacionados con la exportación.",
      ja: "当社の製品は世界30以上の国と地域に輸出されており、主な市場はヨーロッパ、北米、東南アジア、中東、オーストラリアなどです。豊富な国際貿易経験があり、各種輸出関連事務を処理できます。",
      ar: "تم تصدير منتجاتنا إلى أكثر من 30 دولة ومنطقة في جميع أنحاء العالم، مع أسواق رئيسية تشمل أوروبا وأمريكا الشمالية وآسيا الجنوبية الشرقية والشرق الأوسط وأستراليا. لدينا تجربة غنية في التجارة الدولية ويمكننا التعامل مع مختلف الأمور المتعلقة بالتصدير.",
      ru: "Наши продукты экспортируются в более чем 30 стран и регионов мира, основные рынки включают Европу, Северную Америку, Юго-Восточную Азию, Ближний Восток и Австралию. У нас богатый опыт международной торговли и мы можем обработать различные вопросы, связанные с экспортом.",
      it: "I nostri prodotti sono stati esportati in oltre 30 paesi e regioni nel mondo, con mercati principali tra cui Europa, Nord America, Sud Est Asiatico, Medio Oriente e Australia. Abbiamo una ricca esperienza nel commercio internazionale e possiamo gestire diverse questioni legate all'esportazione.",
      pt: "Nossos produtos foram exportados para mais de 30 países e regiões worldwide, com principais mercados incluindo Europa, América do Norte, Sudeste Asiático, Oriente Médio e Austrália. Temos ampla experiência em comércio internacional e podemos lidar com vários assuntos relacionados à exportação."
    },
    keywords: ["出口", "国家", "市场", "地区"],
    category: "export"
  }
];

// 简单的问题匹配函数
export function getAnswer(question: string, language: string = 'en'): string {
  const lowerQuestion = question.toLowerCase();
  
  // 查找最匹配的问题
  const matchedItem = knowledgeBase.find(item => 
    item.keywords.some(keyword => lowerQuestion.includes(keyword.toLowerCase()))
  );
  
  // 如果找到匹配项，返回对应语言的答案，否则返回默认回复
  if (matchedItem) {
    // Return the translated answer for the requested language
    return matchedItem.answer[language] || matchedItem.answer['en'];
  } else {
    const defaultResponses: Record<string, string> = {
      en: "Thank you for your inquiry. We need to further confirm your question. Please describe your needs in detail through the contact form or email (info@aluew.com), and our customer service team will reply to you as soon as possible.",
      fr: "Merci pour votre demande. Nous devons confirmer davantage votre question. Veuillez décrire vos besoins en détail via le formulaire de contact ou par e-mail (info@aluew.com), et notre équipe de service clientèle vous répondra dans les plus brefs délais.",
      de: "Vielen Dank für Ihre Anfrage. Wir müssen Ihre Frage weiter bestätigen. Bitte beschreiben Sie Ihre Anforderungen im Detail über das Kontaktformular oder per E-Mail (info@aluew.com), und unser Kundenservice wird Sie so schnell wie möglich antworten.",
      es: "Gracias por su consulta. Necesitamos confirmar su pregunta. Por favor, describa sus necesidades en detalle a través del formulario de contacto o correo electrónico (info@aluew.com), y nuestro equipo de atención al cliente le responderá lo antes posible.",
      ja: "お問い合わせありがとうございます。ご質問についてはさらに確認が必要ですので、お問い合わせフォームまたはメール(info@aluew.com)より詳細なご要望をお知らせください。サービスチームが儘早にご返信いたします。",
      ar: "شكرًا لاستفسارك. نحتاج إلى تأكيد مزيد من سؤالك. يرجى وصف احتياجاتك بالتفصيل من خلال نموذج الاتصال أو البريد الإلكتروني (info@aluew.com) ، وسيرد فريق خدمة العملاء لدينا عليك في أقرب وقت ممكن.",
      ru: "Благодарим за ваш запрос. Нам нужно дополнительно подтвердить ваш вопрос. Пожалуйста, опишите ваши нужды в деталях через форму обратной связи или по электронной почте (info@aluew.com), и наш отдел обслуживания клиентов свяжется с вами в ближайшее время.",
      it: "Grazie per la vostra richiesta. Abbiamo bisogno di confermare ulteriormente la vostra domanda. Si prega di descrivere i vostri bisogni in dettaglio tramite il modulo di contatto o l'email (info@aluew.com), e il nostro team di servizio clienti vi risponderà il prima possibile.",
      pt: "Obrigado pelo seu contato. Precisamos confirmar sua pergunta. Por favor, descreva suas necessidades em detalhes por meio do formulário de contato ou e-mail (info@aluew.com), e nossa equipe de atendimento ao cliente responderá o mais rápido possível."
    };
    
    return defaultResponses[language] || defaultResponses['en'];
  }
}