// AI客服知识库
interface FAQItem {
  question: string;
  answer: string | Record<string, string>;
  keywords: string[];
  category: string;
}

// 知识库数据 - 预留扩展空间
export const knowledgeBase: FAQItem[] = [
  {
    question: "你们提供哪些产品？",
    answer: "我们主要提供四大类产品：磁性材料(Magnetic Materials)、磁性过滤器(Magnetic Filters)、漆包线(Enameled Wire)和农业机械(Agricultural Machinery)。具体产品规格和详情可查看我们的产品页面。",
    keywords: ["产品", "提供", "种类", "类型"],
    category: "products"
  },
  {
  question: "你们提供OEM服务吗？",
   answer: "是的，我们提供全面的OEM服务。我们可以根据您的具体要求定制产品，包括设计、材料选择、生产和包装。请联系我们获取详细的OEM合作方案。",
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
   answer: "我们接受的付款方式包括：T/T电汇(30%预付款，70%见提单副本)、信用证(L/C)、PayPal(小额订单)以及阿里巴巴信用保障订单。具体付款条件可在订单确认时协商。",
    keywords: ["付款", "方式", "支付", "terms"],
    category: "payment"
  },
  {
    question: "产品交货时间是多久？",
     answer: "标准产品的交货时间通常为15-20天，定制产品为25-35天，具体取决于订单数量和产品复杂度。我会在订单确认后提供准确的生产和交货时间表。",
    keywords: ["交货", "时间", "发货", "周期"],
    category: "delivery"
  },
  {
    question: "如何获取产品报价？",
     answer: "您可以通过我们网站的'Get Quote'页面提交报价请求，或直接联系我的销售团队。为了提供准确报价，请提供产品型号、规格、数量和特殊要求(如有)。我通常会在24小时内回复您的报价请求。",
    keywords: ["报价", "价格", "quote", "cost"],
    category: "quote"
  },
  {
    question: "你们的产品质量有保障吗？",
    answer: "是的，我们所有产品均符合ISO 9001质量管理体系标准，并通过CE和RoHS认证。我们对每批产品进行严格的质量检测，确保产品质量符合客户要求。",
    keywords: ["质量", "保障", "认证", "标准"],
    category: "quality"
  },
  {
    question: "你们的产品出口哪些国家？",
    answer: "我们的产品已出口到全球30多个国家和地区，主要市场包括欧洲、北美、东南亚、中东和澳大利亚等。我们拥有丰富的国际贸易经验，可处理各种出口相关事宜。",
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
     if (matchedItem && matchedItem.answer) {
       // @ts-expect-error 处理动态语言键访问
        return matchedItem.answer[language] || matchedItem.answer['en'];
     } else {
     const defaultResponses: Record<string, string> = {
      en: "Thank you for your inquiry. We need to further confirm your question. Please describe your needs in detail through the contact form or email (info@aluew.com), and our customer service team will reply to you as soon as possible.",
      fr: "Merci pour votre demande. Nous devons confirmer davantage votre question. Veuillez décrire vos besoins en détail via le formulaire de contact ou par e-mail (info@aluew.com), et notre équipe de service clientèle vous répondra dans les plus brefs délais.",
      de: "Vielen Dank für Ihre Anfrage. Wir müssen Ihre Frage weiter bestätigen. Bitte beschreiben Sie Ihre Anforderungen im Detail über das Kontaktformular oder per E-Mail (info@aluew.com), und unser Kundenservice wird Sie so schnell wie möglich antworten.",
      es: "Gracias por su consulta. Necesitamos confirmar进一步 su pregunta. Por favor, describa sus necesidades en detalle a través del formulario de contacto o correo electrónico (info@aluew.com), y nuestro equipo de atención al cliente le responderá lo antes posible.",
      ja: "お問い合わせありがとうございます。ご質問についてはさらに確認が必要ですので、お問い合わせフォームまたはメール(info@aluew.com)より詳細なご要望をお知らせください。サービスチームが儘早にご返信いたします。",
      ar: "شكرًا لاستفسارك. نحتاج إلى تأكيد مزيد من سؤالك. يرجى وصف احتياجاتك بالتفصيل من خلال نموذج الاتصال أو البريد الإلكتروني (info@aluew.com) ، وسيرد فريق خدمة العملاء لدينا عليك في أقرب وقت ممكن.",
      ru: "Благодарим за ваш запрос. Нам нужно дополнительно подтвердить ваш вопрос. Пожалуйста, опишите ваши нужды в деталях через форму обратной связи или по электронной почте (info@aluew.com), и наш отдел обслуживания клиентов свяжется с вами в ближайшее время.",
      it: "Grazie per la vostra richiesta. Abbiamo bisogno di confermare ulteriormente la vostra domanda. Si prega di descrivere i vostri bisogni in dettaglio tramite il modulo di contatto o l'email (info@aluew.com), e il nostro team di servizio clienti vi risponderà il prima possibile.",
      pt: "Obrigado pelo seu contato. Precisamos confirmar进一步 sua pergunta. Por favor, descreva suas necessidades em detalhes por meio do formulário de contato ou e-mail (info@aluew.com), e nossa equipe de atendimento ao cliente responderá o mais rápido possível."
    };
    
    return defaultResponses[language] || defaultResponses['en'];
  }
}