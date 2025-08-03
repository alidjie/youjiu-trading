import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from 'sonner';
import App from "./App.tsx";
import "./index.css";
 
 // 确保Tailwind CSS正确加载
 if (process.env.NODE_ENV === 'development') {
   console.log('Tailwind CSS loaded successfully');
 }

// 从localStorage获取保存的语言或使用默认语言
const savedLang = localStorage.getItem('preferred_language') || 'en';
document.documentElement.lang = savedLang;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <Toaster />
    </BrowserRouter>
  </StrictMode>
);
