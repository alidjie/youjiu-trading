import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { getAnswer } from '@/lib/aiKnowledge';
import { useLanguage, Language } from '@/contexts/LanguageContext';
import { useTranslation } from '@/hooks/useTranslation';

// 消息类型定义
interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export default function AIChatbot() {
  // 状态管理
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);  
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { language, setLanguage, supportedLanguages } = useLanguage();
  const { t } = useTranslation();
  
  // 页面加载后8秒自动打开聊天窗口
  useEffect(() => {
    const autoOpenTimer = setTimeout(() => {
      setIsOpen(true);
    }, 8000);
    
    // 组件卸载时清除定时器
    return () => clearTimeout(autoOpenTimer);
  }, []);
  
  // 多语言常见问题快捷按钮
  const commonQuestions: Record<Language, string[]> = {
    en: [
      "What products do you offer?",
      "Do you provide OEM services?",
      "What is the minimum order quantity?",
      "How to get a product quote?"
    ],
    fr: [
      "Quels produits proposez-vous?",
      "Prouvez-vous des services OEM?",
      "Quelle est la quantité de commande minimale?",
      "Comment obtenir un devis produit?"
    ],
    de: [
      "Welche Produkte bieten Sie an?",
      "Bieten Sie OEM-Dienstleistungen?",
      "Was ist die Mindestbestellmenge?",
      "Wie bekomme ich ein Produktangebot?"
    ],
    es: [
      "¿Qué productos ofrecen?",
      "¿Ofrecen servicios OEM?",
      "¿Cuál es la cantidad mínima de pedido?",
      "¿Cómo obtener un presupuesto de producto?"
    ],
    ja: [
      "どのような製品を提供していますか？",
      "OEMサービスを提供していますか？",
      "最小注文量はいくらですか？",
      "製品の見積もりを取得するにはどうすればよいですか？"
    ],
    ar: [
      "أي منتجات تقدمونها؟",
      "هل تقدمون خدمات OEM؟",
      "ما هو الحد الأدنى من كمية الطلب؟",
      "كيف تحصل على عرض سعر للمنتج؟"
    ],
    ru: [
      "Какие продукты вы предлагаете?",
      "Предоставляете ли вы услуги OEM?",
      "Какой минимальный объем заказа?",
      "Как получить котировку продукта?"
],
    it: [
      "Quale prodotti offrite?",
      "Offrite servizi OEM?",
      "Qual è la quantità minima d'ordine?",
      "Come ottenere un preventivo per il prodotto?"
    ],
    pt: [
      "Quais produtos você oferece?",
      "Você fornece serviços OEM?",
      "Qual é a quantidade mínima de pedido?",
      "Como obter um orçamento de produto?"
    ]
  };
  
  // 获取当前语言的常见问题
     const currentCommonQuestions = commonQuestions[language] || commonQuestions.en;
     
      // 当客服窗口打开时设置首选语言为English
      useEffect(() => {
        if (isOpen) {
          setLanguage('en');
        }
      }, [isOpen, setLanguage]);
      
      // 组件挂载或语言变化时发送欢迎消息
       useEffect(() => {
       const welcomeMessages: Record<Language, string> = {
         en: "Hello! I'm Customer Service from https://www.aluew.com. How can I help you today?",
         fr: "Bonjour ! Je suis le Service Client de https://www.aluew.com. Comment puis-je vous aider ?",
         de: "Hallo! Ich bin der Kundenservice von https://www.aluew.com. Wie kann ich helfen?",
         es: "¡Hola! Soy el Servicio de Atención al Cliente de https://www.aluew.com. ¿Cómo puedo ayudarte?",
         ja: "こんにちは！https://www.aluew.comのカスタマーサービスです。今日はどのようにお手伝いできますか？",
         ar: "مرحبًا! أنا خدمة العملاء من https://www.aluew.com. كيف يمكنني مساعدتك اليوم؟",
         ru: "Привет! Я служба поддержки клиентов сайта https://www.aluew.com. Чем я могу тебе помочь?",
      it: "Ciao! Sono il Servizio Clienti. Come posso aiutarti oggi?",
      pt: "Olá! Sou o Serviço de Atendimento ao Cliente. Como posso ajudá-lo hoje?"
    };
    
    const welcomeMessage: Message = {
      id: 'welcome',
      text: welcomeMessages[language] || welcomeMessages.en,
      sender: 'bot',
      timestamp: new Date()
    };
    
    // 保留用户消息，只更新欢迎消息
    setMessages(prev => {
      const userMessages = prev.filter(m => m.sender === 'user');
      return [welcomeMessage, ...userMessages];
    });
  }, [language]);
  
  // 自动滚动到最新消息
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  // 发送消息处理函数
  const handleSendMessage = () => {
    if (!input.trim()) return;
    
    // 添加用户消息
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      text: input.trim(),
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);
    
    // 清空输入框并模拟AI思考时间
    setTimeout(() => {
      // 获取AI回复 - 传入当前语言
      const botReply = getAnswer(input.trim(), language);
      
      // 添加AI回复
      const botMessage: Message = {
        id: `bot-${Date.now()}`,
        text: botReply,
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };
  
  // 快捷问题点击处理
  const handleQuickQuestion = (question: string) => {
    setInput(question);
    handleSendMessage();
  };
  
  // 处理键盘回车发送消息
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  
  return (
    <div className="fixed bottom-0 right-0 z-50 w-80 md:w-96">
      {/* 折叠状态下的按钮 */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg transition-all transform hover:scale-105"
          aria-label={t("ai_chatbot.title")}
        >
          <i className="fa-solid fa-comments text-xl"></i>
        </button>
      )}
      
      {/* 展开状态下的聊天窗口 */}
      {isOpen && (
        <div className={`bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col h-[500px] border border-gray-200 ${language === 'ar' ? 'direction-rtl' : ''}`}>
          {/* 聊天窗口头部 */}
          <div className="bg-blue-900 text-white p-4 flex justify-between items-center">
               <div className="flex items-center space-x-3">
                 <i className="fa-solid fa-user-tie text-xl"></i>
                 <h3 className="font-semibold text-lg">{t("ai_chatbot.title")}</h3>
            </div>
            
            {/* 语言选择下拉菜单 */}
             <div className="relative mr-2">
               <button
                 onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                 className="flex items-center text-white hover:text-blue-200 transition-colors"
                 aria-label={t("ai_chatbot.language")}
               >
                 <i className="fa-solid fa-globe mr-1"></i>
                 <span className="text-sm">{supportedLanguages[language]}</span>
                 <i className={`fa-solid fa-chevron-down ml-1 text-xs transition-transform ${showLanguageDropdown ? 'rotate-180' : ''}`}></i>
               </button>
               
               {showLanguageDropdown && (
                 <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg overflow-hidden z-10">
                   {Object.entries(supportedLanguages).map(([code, name]) => (
                     <button
                       key={code as Language}
                       onClick={() => {
                         setLanguage(code as Language);
                         setShowLanguageDropdown(false);
                       }}
                       className={`w-full text-left px-4 py-2 text-sm ${
                         language === code ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'
                       }`}
                     >
                       {name}
                     </button>
                   ))}
                 </div>
               )}
             </div>
            
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-blue-200 transition-colors"
              aria-label="Close chat"
            >
              <i className="fa-solid fa-times"></i>
            </button>
          </div>
          
          {/* 聊天消息区域 */}
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
            <div className="space-y-4">
              {messages.map((message) => (
                <div 
                  key={message.id} 
                  className={cn(
                    "flex",
                    message.sender === "user" ? "justify-end" : "justify-start"
                  )}
                >  
                  <div 
                    className={cn(
                      "max-w-[80%] p-3 rounded-lg shadow-sm",
                      message.sender === "user" 
                        ? "bg-blue-600 text-white rounded-br-none" 
                        : "bg-white text-gray-800 rounded-bl-none border border-gray-200"
                    )}
                  >
                    <p>{message.text}</p>
                    <p className={cn(
                      "text-xs mt-1",
                      message.sender === "user" ? "text-blue-200" : "text-gray-400"
                    )}>
                      {message.timestamp.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              ))}
              
              {/* 正在输入提示 */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white p-3 rounded-lg shadow-sm rounded-bl-none border border-gray-200 max-w-[80%]">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* 用于自动滚动的锚点 */}
              <div ref={messagesEndRef} />
            </div>
          </div>
          
          {/* 常见问题快捷按钮 */}
          <div className="px-4 py-3 bg-white border-t border-gray-200">
            <p className="text-xs text-gray-500 mb-2">{t("ai_chatbot.common_questions")}:</p>
            <div className="flex flex-wrap gap-2">
              {currentCommonQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickQuestion(question)}
                  className="text-xs bg-blue-50 hover:bg-blue-100 text-blue-700 px-3 py-1 rounded-full transition-colors"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
          
          {/* 输入区域 */}
          <div className="p-4 bg-white border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={t("ai_chatbot.placeholder")}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
              />
              <button
                onClick={handleSendMessage}
                disabled={!input.trim() || isTyping}
                className={cn(
                  "bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors",
                  (!input.trim() || isTyping) && "opacity-50 cursor-not-allowed"
                )}
                aria-label={t("ai_chatbot.send")}
              >
                <i className="fa-solid fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}