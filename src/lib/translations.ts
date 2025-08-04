// 翻译文本接口定义
interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

// 多语言翻译数据
const translations: Translations = {
  en: {
    "welcome": "Welcome to Youjiu Trading",
    "ai_chatbot.title": "Customer Service",
    "ai_chatbot.greeting": "Hello! I'm Youjiu Trading's AI assistant. How can I help you today?",
    "ai_chatbot.placeholder": "Type your question...",
    "ai_chatbot.common_questions": "Common Questions",
    "ai_chatbot.send": "Send",
    "ai_chatbot.language": "Language",
    "products.magnetic_materials": "Magnetic Materials",
    "products.magnetic_filters": "Magnetic Filters",
    "products.enameled_wire": "Enameled Wire",
    "products.agricultural_machinery": "Agricultural Machinery",
    "nav.home": "Home",
    "nav.about": "About",
    "nav.products": "Products",
    "nav.quote": "Get Quote",
    "nav.contact": "Contact"
  },
  fr: {
    "welcome": "Bienvenue chez Youjiu Trading",
    "ai_chatbot.title": "Service client",
    "ai_chatbot.greeting": "Bonjour ! Je suis l'assistant AI de Youjiu Trading. Comment puis-je vous aider aujourd'hui ?",
    "ai_chatbot.placeholder": "Tapez votre question...",
    "ai_chatbot.common_questions": "Questions fréquentes",
    "ai_chatbot.send": "Envoyer",
    "ai_chatbot.language": "Langue",
    "products.magnetic_materials": "Matériaux magnétiques",
    "products.magnetic_filters": "Filtres magnétiques",
    "products.enameled_wire": "Fil émaillé",
    "products.agricultural_machinery": "Machinerie agricole",
    "nav.home": "Accueil",
    "nav.about": "À propos",
    "nav.products": "Produits",
    "nav.quote": "Demander un devis",
    "nav.contact": "Contact"
  },
  de: {
    "welcome": "Willkommen bei Youjiu Trading",
    "ai_chatbot.title": "Kunden-Service",
    "ai_chatbot.greeting": "Hallo! Ich bin der KI-Assistent von Youjiu Trading. Wie kann ich Ihnen heute helfen?",
    "ai_chatbot.placeholder": "Geben Sie Ihre Frage ein...",
    "ai_chatbot.common_questions": "Häufig gestellte Fragen",
    "ai_chatbot.send": "Senden",
    "ai_chatbot.language": "Sprache",
    "products.magnetic_materials": "Magnetmaterialien",
    "products.magnetic_filters": "Magnetfilter",
    "products.enameled_wire": "Emaille draht",
    "products.agricultural_machinery": "Landwirtschaftliche Maschinen",
    "nav.home": "Startseite",
    "nav.about": "Über uns",
    "nav.products": "Produkte",
    "nav.quote": "Angebot anfordern",
    "nav.contact": "Kontakt"
  },
  es: {
    "welcome": "Bienvenido a Youjiu Trading",
    "ai_chatbot.title": "Servicio de Atención al Cliente AI",
    "ai_chatbot.greeting": "¡Hola! Soy el asistente AI de Youjiu Trading. ¿Cómo puedo ayudarte hoy?",
    "ai_chatbot.placeholder": "Escribe tu pregunta...",
    "ai_chatbot.common_questions": "Preguntas frecuentes",
    "ai_chatbot.send": "Enviar",
    "ai_chatbot.language": "Idioma",
    "products.magnetic_materials": "Materiales magnéticos",
    "products.magnetic_filters": "Filtros magnéticos",
    "products.enameled_wire": "Hilo esmaltado",
    "products.agricultural_machinery": "Maquinaria agrícola",
    "nav.home": "Inicio",
    "nav.about": "Acerca de",
    "nav.products": "Productos",
    "nav.quote": "Solicitar cotización",
    "nav.contact": "Contacto"
  },
  ja: {
    "welcome": "Youjiu Tradingへようこそ",
    "ai_chatbot.title": "AIカスタマーサービス",
    "ai_chatbot.greeting": "こんにちは！Youjiu TradingのAIアシスタントです。今日はどのようにお手伝いできますか？",
    "ai_chatbot.placeholder": "ご質問を入力してください...",
    "ai_chatbot.common_questions": "よくある質問",
    "ai_chatbot.send": "送信",
    "ai_chatbot.language": "言語",
    "products.magnetic_materials": "磁性材料",
    "products.magnetic_filters": "磁気フィルター",
    "products.enameled_wire": "エナメル線",
    "products.agricultural_machinery": "農業機械",
    "nav.home": "ホーム",
    "nav.about": "会社概要",
    "nav.products": "製品",
    "nav.quote": "見積もりを取得",
    "nav.contact": "お問い合わせ"
  },
  // 其他语言的翻译...
  ar: {
    "welcome": "مرحبًا بك في Youjiu Trading",
    "ai_chatbot.title": "خدمة العملاء الالكترونية",
    "ai_chatbot.greeting": "مرحبًا! أنا مساعد الذكاء الاصطناعي لشركة Youjiu Trading. كيف يمكنني مساعدتك اليوم؟",
    "ai_chatbot.placeholder": "اكتب سؤالك...",
    "ai_chatbot.common_questions": "الأسئلة الشائعة",
    "ai_chatbot.send": "إرسال",
    "ai_chatbot.language": "اللغة",
    "products.magnetic_materials": "المواد المغناطيسية",
    "products.magnetic_filters": "مرشحات مغناطيسية",
    "products.enameled_wire": "السلك المعدني",
    "products.agricultural_machinery": "المعدنات الزراعية",
    "nav.home": "الرئيسية",
    "nav.about": "حول الشركة",
    "nav.products": "المنتجات",
    "nav.quote": "احصل على عرض سعر",
    "nav.contact": "اتصل بنا"
  },
  ru: {
    "welcome": "Добро пожаловать в Youjiu Trading",
    "ai_chatbot.title": "AI-клиентская поддержка",
    "ai_chatbot.greeting": "Привет! Я AI-ассистент Youjiu Trading. Чем я могу тебе помочь сегодня?",
    "ai_chatbot.placeholder": "Введите ваш вопрос...",
    "ai_chatbot.common_questions": "Частые вопросы",
    "ai_chatbot.send": "Отправить",
    "ai_chatbot.language": "Язык",
    "products.magnetic_materials": "Магнитные материалы",
    "products.magnetic_filters": "Магнитные фильтры",
    "products.enameled_wire": "Эмалированный провод",
    "products.agricultural_machinery": "Сельскохозяйственная техника",
    "nav.home": "Главная",
    "nav.about": "О нас",
    "nav.products": "Продукты",
    "nav.quote": "Получить котировку",
    "nav.contact": "Контакт"
  }
};

export default translations;
