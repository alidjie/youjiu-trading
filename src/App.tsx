 import { Routes, Route, useLocation } from "react-router-dom";
 import { useEffect } from "react";
import { useState } from "react";
import { AuthContext } from '@/contexts/authContext';
import { LanguageProvider } from '@/contexts/LanguageContext';

// Pages
import Home from "@/pages/Home";
import Contact from "@/pages/Contact";
import About from "@/pages/About";
import Products from "@/pages/Products";
import Quote from "@/pages/Quote";
import ProductDetail from "@/pages/ProductDetail";
import AIChatbot from "@/components/AIChatbot";




export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState<any>(null);

  const login = (userData: any) => {
    setIsAuthenticated(true);
    setCurrentUser(userData);
    // Store user data in localStorage for persistence
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const logout = () => {
    setIsAuthenticated(false);
    setCurrentUser(null);
    localStorage.removeItem('user');
  };

  // Check for stored user data on app load
  useState(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        const userData = JSON.parse(storedUser);
        setIsAuthenticated(true);
        setCurrentUser(userData);
      } catch (error) {
        localStorage.removeItem('user');
      }
    }
  }, []);

   const location = useLocation();
   
   // Update document title based on current route
    useEffect(() => {
      const pageMetadata = {
        '/': {
          title: 'Home | Youjiu Trading - Industrial Products Supplier',
          description: 'Leading supplier of magnetic materials, magnetic filters, enameled wire, and agricultural machinery with global shipping and OEM services.'
        },
        '/about': {
          title: 'About Us | Youjiu Trading - Trusted Industrial Supplier',
          description: 'Learn about Youjiu Trading\'s experience in supplying high-quality industrial products to global markets since 2010.'
        },
        '/contact': {
          title: 'Contact Us | Youjiu Trading',
          description: 'Get in touch with Youjiu Trading for inquiries, quotes, or technical support regarding our industrial products.'
        },
        '/products': {
          title: 'Industrial Products | Magnetic Materials & Machinery',
          description: 'Browse our complete product catalog including magnetic materials, filters, enameled wire, and agricultural machinery.'
        },
        '/quote': {
          title: 'Get a Quote | Youjiu Trading',
          description: 'Request a competitive quote for magnetic materials, filters, enameled wire, or agricultural machinery from Youjiu Trading.'
        }
      };
      
      const currentPath = location.pathname.split('/')[1] || '/';
      const metadata = pageMetadata[currentPath as keyof typeof pageMetadata] || pageMetadata['/'];
      
      // Update title
      document.title = metadata.title;
      
      // Update meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', metadata.description);
      }
    }, [location]);
   
   return (
    <LanguageProvider>
      <AuthContext.Provider
        value={{ isAuthenticated, currentUser, login, logout }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
        <AIChatbot />
      </AuthContext.Provider>
    </LanguageProvider>
  );
}