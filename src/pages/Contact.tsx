import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';
import { AuthContext } from '@/contexts/authContext';

// Form validation schema
const validateContactForm = (formData: any) => {
  const errors: any = {};
  
  if (!formData.name) errors.name = 'Name is required';
  if (!formData.email) {
    errors.email = 'Email is required';
  } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
    errors.email = 'Invalid email format';
  }
  
  if (!formData.subject) errors.subject = 'Subject is required';
  if (!formData.message) errors.message = 'Message is required';
  if (formData.message && formData.message.length < 10) {
    errors.message = 'Message must be at least 10 characters';
  }
  
  return errors;
};

// Contact information
const contactInfo = [
  {
    title: "Visit Us",
    icon: "fa-solid fa-map-marker-alt",
    content: "Taizhou, Zhejiang Province, China",
    link: "https://maps.google.com"
  },
  {
    title: "Call Us",
    icon: "fa-solid fa-phone",
    content: "+86 123 4567 8910",
    link: "tel:+8612345678910"
  },
  {
    title: "Email Us",
    icon: "fa-solid fa-envelope",
    content: "info@aluew.com",
    link: "mailto:info@aluew.com"
  },
  {
    title: "Working Hours",
    icon: "fa-solid fa-clock",
    content: "Monday - Friday: 9:00 AM - 6:00 PM",
    link: "#"
  }
];

export default function Contact() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<any>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  
  // Handle scroll events for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Pre-fill form with user data if logged in
  useEffect(() => {
    if (currentUser) {
      setFormData(prev => ({
        ...prev,
        name: currentUser.name || '',
        email: currentUser.email || '',
        company: currentUser.company || ''
      }));
    }
  }, [currentUser]);
  
  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when field is modified
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };
  
  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const formErrors = validateContactForm(formData);
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    
    try {
      setIsSubmitting(true);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Show success message
      toast.success('Your message has been sent successfully!', {
        description: 'We will get back to you within 24 hours.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: ''
      });
      
      // Redirect after submission
      setTimeout(() => {
        navigate('/');
      }, 2000);
      
    } catch (error) {
      toast.error('Failed to send message', {
        description: 'Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      )}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <a href="/" className="text-2xl font-bold text-blue-900">
                Youjiu
              </a>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-blue-900 hover:text-blue-600 font-medium transition-colors">Home</a>  
              <a href="/about" className="text-blue-900 hover:text-blue-600 font-medium transition-colors">About</a>
              <a href="/products" className="text-blue-900 hover:text-blue-600 font-medium transition-colors">Products</a>
              <a href="/contact" className="text-blue-600 font-medium border-b-2 border-blue-600 pb-1">Contact</a>
              <a href="/quote" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full transition-all transform hover:scale-->105">
                Get Quote
              </a>
            </nav>
            
            {/* Mobile menu button */}
            <button className="md:hidden text-blue-900">
               <i className="fa-solid fa-bars text-xl"></i>
            </button>
          </div>
        </div>
      </header>

      <main className="pt-24">
        {/* Hero Banner */}
        <section className="bg-blue-900 text-white py-20">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Have questions or need assistance? Our team is here to help
            </p>
          </div>
        </section >

        {/* Contact Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              {/* Contact Information */}
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold text-blue-900 mb-8">Get in Touch</h2>
                
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="bg-blue-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                 <div className="text-blue-600 text-2xl mb-4">
                         <i className={item.icon}></i>
                       </div>
                      <h3 className="text-xl font-semibold text-blue-900 mb-2">{item.title}</h3>
                      <p className="text-gray-700 mb-4">{item.content}</p>
                      <a 
                        href={item.link} 
                        className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
                        target={item.link.startsWith('http') ? '_blank' : '_self'}
                        rel={item.link.startsWith('http') ? 'noopener noreferrer' : ''}
                      >
214:                        Contact <i className="fa-solid fa-arrow-right ml-2"></i>
                      </a>
                    </div>
                  ))}
                </div>
                
                <div className="mt-12 bg-blue-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-blue-900 mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white w-12 h-12 rounded-full flex items-center justify-center transition-colors">
                      <i class="fa-brands fa-linkedin"></i>
                    </a>
                    <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white w-12 h-12 rounded-full flex items-center justify-center transition-colors">
                      <i class="fa-brands fa-facebook"></i>
                    </a>
                    <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white w-12 h-12 rounded-full flex items-center justify-center transition-colors">
                      <i class="fa-brands fa-instagram"></i>
                    </a>
                    <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white w-12 h-12 rounded-full flex items-center justify-center transition-colors">
                      <i class="fa-brands fa-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="lg:col-span-3">
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <h2 className="text-3xl font-bold text-blue-900 mb-6">Send Us a Message</h2>
                  <p className="text-gray-600 mb-8">
                    Fill out the form below and our team will get back to you as soon as possible.
                  </p>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors`}
                          placeholder="Your name"
                          required
                        />
                        {errors.name && (
                          <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                        )}
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors`}
                          placeholder="Your email"
                          required
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                        )}
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="Your company"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${errors.subject ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors`}
                        placeholder="Message subject"
                        required
                      />
                      {errors.subject && (
                        <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none`}
                        placeholder="Your message here..."
                        required
                      ></textarea>
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                      )}
                    </div>
                    
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
                      >
                        {isSubmitting ? (
                          <>
                            <i class="fa-solid fa-spinner fa-spin mr-2"></i> Sending...
                          </>
                        ) : (
                          <>
                            Send Message <i class="fa-solid fa-paper-plane ml-2"></i>
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="h-[400px] bg-gray-200 relative overflow-hidden">
          {/* This would be where you'd place a map */}
          <div className="absolute inset-0 bg-[url('https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=map+showing+china+location+with+marker&sign=f32faba65c6e281704d71db2d9911e0e')] bg-cover bg-center opacity-70"></div>
          <div className="absolute inset-0 bg-blue-900 opacity-20"></div>
          <div className="relative h-full flex items-center justify-center">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <h3 className="text-xl font-bold text-blue-900 mb-2">Our Location</h3>
              <p className="text-gray-700 mb-4">Taizhou, Zhejiang Province, China</p>
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                View on Google Maps
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Youjiu Trading</h3>
              <p className="text-blue-200 mb-6">
                Providing high-quality industrial products and exceptional service to clients worldwide.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-blue-200 hover:text-white transition-colors">
                  <i class="fa-brands fa-linkedin text-xl"></i>
                </a>
                <a href="#" className="text-blue-200 hover:text-white transition-colors">
                  <i class="fa-brands fa-facebook text-xl"></i>
                </a>
                <a href="#" className="text-blue-200 hover:text-white transition-colors">
                  <i class="fa-brands fa-instagram text-xl"></i>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3"><li><a href="/" className="text-blue-200 hover:text-white transition-colors">Home</a></li>
                <li><a href="/about" className="text-blue-200 hover:text-white transition-colors">About Us</a></li>
                <li><a href="/products" className="text-blue-200 hover:text-white transition-colors">Products</a></li>
                <li><a href="/quote" className="text-blue-200 hover:text-white transition-colors">Get Quote</a></li>
                <li><a href="/contact" className="text-white font-medium">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Product Categories</h4>
              <ul className="space-y-3">
                <li><a href="/products?category=magnetic-materials" className="text-blue-200 hover:text-white transition-colors">Magnetic Materials</a></li>
                <li><a href="/products?category=magnetic-filters" className="text-blue-200 hover:text-white transition-colors">Magnetic Filters</a></li>
                <li><a href="/products?category=enameled-wire" className="text-blue-200 hover:text-white transition-colors">Enameled Wire</a></li>
                <li><a href="/products?category=agricultural-machinery" className="text-blue-200 hover:text-white transition-colors">Agricultural Machinery</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <i class="fa-solid fa-map-marker-alt text-blue-300 mt-1 mr-3"></i>
                  <span className="text-blue-200">Taizhou, Zhejiang Province, China</span>
                </li>
                <li className="flex items-center">
                  <i class="fa-solid fa-phone text-blue-300 mr-3"></i>
                  <span className="text-blue-200">+86 123 4567 8910</span>
                </li>
                <li className="flex items-center">
                  <i class="fa-solid fa-envelope text-blue-300 mr-3"></i>
                   <span className="text-blue-200">info@aluew.com</span>
                   <div class="mt-6">
                     <a href="https://www.aluew.com" class="text-white hover:text-blue-300 transition-colors">
                       <i class="fa-solid fa-globe mr-2"></i>https://www.aluew.com
                     </a>
                   </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-blue-800 pt-8 text-center text-blue-300 text-sm">
            <p>&copy; {new Date().getFullYear()} Taizhou Youjiu Trading Co., Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}