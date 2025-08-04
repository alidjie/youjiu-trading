import { useState, useEffect, useContext } from 'react';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';
import { AuthContext } from '@/contexts/authContext';

// Product options for quote form
const productOptions = [
  { id: 1, name: "Neodymium Magnets", category: "Magnetic Materials", price: 24.50 },
  { id: 2, name: "Magnetic Filter Assembly", category: "Magnetic Filters", price: 129.99 },
  { id: 3, name: "Enameled Copper Wire", category: "Enameled Wire", price: 8.75 },
  { id: 4, name: "Agricultural Sprayer", category: "Agricultural Machinery", price: 249.99 }
];

// Form validation
const validateQuoteForm = (formData: any) => {
  const errors: any = {};
  
  if (!formData.productId) errors.productId = 'Product is required';
  if (!formData.quantity || formData.quantity <= 0) errors.quantity = 'Valid quantity is required';
  if (!formData.name) errors.name = 'Name is required';
  if (!formData.email) {
    errors.email = 'Email is required';
  } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
    errors.email = 'Invalid email format';
  }
  if (!formData.company) errors.company = 'Company name is required';
  
  return errors;
};

export default function Quote() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [formData, setFormData] = useState({
    productId: '',
    quantity: 1,
    customization: '',
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState<any>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [quoteSummary, setQuoteSummary] = useState<any>(null);
  const { currentUser } = useContext(AuthContext);
  
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
  
  // Calculate estimated price based on selected product and quantity
  const calculateEstimatedPrice = () => {
    const selectedProduct = productOptions.find(p => p.id.toString() === formData.productId);
    if (!selectedProduct) return 0;
    
    return selectedProduct.price * formData.quantity;
  };
  
  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ 
      ...prev, 
      [name]: name === 'quantity' ? parseInt(value) || 1 : value 
    }));
    
    // Clear error when field is modified
    if (errors[name]) {
      setErrors((prev: Record<string, string>) => ({ ...prev, [name]: undefined }));
    }
  };
  
  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const formErrors = validateQuoteForm(formData);
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    
    try {
      setIsSubmitting(true);
      
      // Simulate API call for quote generation
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Generate mock quote summary
      const selectedProduct = productOptions.find(p => p.id.toString() === formData.productId);
      const estimatedPrice = calculateEstimatedPrice();
      
      setQuoteSummary({
        id: Math.random().toString(36).substr(2, 9).toUpperCase(),
        date: new Date().toLocaleDateString(),
        product: selectedProduct?.name,
        quantity: formData.quantity,
        unitPrice: selectedProduct?.price,
        estimatedTotal: estimatedPrice,
        status: "Pending"
      });
      
      // Show success message
      toast.success('Quote request submitted successfully!', {
        description: 'We will send you a detailed quote via email within 24 hours.'
      });
      
    } catch (error) {
      toast.error('Failed to submit quote request', {
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
              <a href="/quote" className="text-blue-600 font-medium border-b-2 border-blue-600 pb-1">Get Quote</a>
              <a href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full transition-all transform hover:scale-105">
                Contact Us
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Request a Quote</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Fill out the form below to get a personalized quote for our products
            </p>
          </div>
        </section>

        {/* Quote Form Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Quote Form */}
              <div>
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <h2 className="text-3xl font-bold text-blue-900 mb-6">Get a Custom Quote</h2>
                  <p className="text-gray-600 mb-8">
                    Fill out the form with your requirements and we'll get back to you with a personalized quote.
                  </p>
                  
                  {!quoteSummary ? (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="productId" className="block text-sm font-medium text-gray-700 mb-2">
                          Product <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="productId"
                          name="productId"
                          value={formData.productId}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg border ${errors.productId ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors`}
                          required
                        >
                          <option value="">Select a product</option>
                          {productOptions.map(product => (
                            <option key={product.id} value={product.id}>
                              {product.name} - ${product.price.toFixed(2)}
                            </option>
                          ))}
                        </select>
                        {errors.productId && (
                          <p className="mt-1 text-sm text-red-500">{errors.productId}</p>
                        )}
                      </div>
                      
                      <div>
                        <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">
                          Quantity <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="number"
                          id="quantity"
                          name="quantity"
                          min="1"
                          value={formData.quantity}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg border ${errors.quantity ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors`}
                          required
                        />
                        {errors.quantity && (
                          <p className="mt-1 text-sm text-red-500">{errors.quantity}</p>
                        )}
                      </div>
                      
                      <div>
                        <label htmlFor="customization" className="block text-sm font-medium text-gray-700 mb-2">
                          Customization Requirements
                        </label>
                        <textarea
                          id="customization"
                          name="customization"
                          value={formData.customization}
                          onChange={handleChange}
                          rows={3}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                          placeholder="Any specific requirements or customizations needed"
                        ></textarea>
                      </div>
                      
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
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                            Company Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 rounded-lg border ${errors.company ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors`}
                            placeholder="Your company"
                            required
                          />
                          {errors.company && (
                            <p className="mt-1 text-sm text-red-500">{errors.company}</p>
                          )}
                        </div>
                        
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                            placeholder="Your phone number"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                          Additional Information
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                          placeholder="Any other information we should know"
                        ></textarea>
                      </div>
                      
                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
                        >
                          {isSubmitting ? (
                            <>
                              <i className="fa-solid fa-spinner fa-spin mr-2"></i> Submitting...
                            </>
                          ) : (
                            <>
                              Get Quote <i class="fa-solid fa-arrow-right ml-2"></i>
                            </>
                          )}
                        </button>
                      </div>
                    </form>
                  ) : (
                    <div className="bg-blue-50 p-8 rounded-xl">
                      <div className="text-center mb-6">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-4">
                          <i class="fa-solid fa-check text-2xl"></i>
                        </div>
                        <h3 className="text-2xl font-bold text-blue-900">Quote Request Submitted</h3>
                        <p className="text-gray-600">Thank you for your inquiry. We'll contact you shortly.</p>
                      </div>
                      
                      <div className="border-t border-blue-200 pt-6">
                        <h4 className="text-lg font-semibold text-blue-900 mb-4">Quote Summary</h4>
                        
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div>
                            <p className="text-sm text-gray-500">Quote ID</p>
                            <p className="font-semibold text-blue-900">{quoteSummary.id}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Date</p>
                            <p className="font-semibold text-blue-900">{quoteSummary.date}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Product</p>
                            <p className="font-semibold text-blue-900">{quoteSummary.product}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Quantity</p>
                            <p className="font-semibold text-blue-900">{quoteSummary.quantity}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Unit Price</p>
                            <p className="font-semibold text-blue-900">${quoteSummary.unitPrice.toFixed(2)}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Estimated Total</p>
                            <p className="font-semibold text-blue-900">${quoteSummary.estimatedTotal.toFixed(2)}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Status</p>
                            <p className="font-semibold text-yellow-600">{quoteSummary.status}</p>
                          </div>
                        </div>
                        
                        <div className="text-center">
                          <button
                            onClick={() => setQuoteSummary(null)}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors mr-4"
                          >
                            Request Another Quote
                          </button>
                          <a
                            href="/contact"
                            className="bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-2 rounded-lg transition-colors"
                          >
                            Contact Sales Team
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Quote Information */}
              <div>
                <h2 className="text-3xl font-bold text-blue-900 mb-6">Why Choose Our Quoting Process</h2>
                
                <div className="space-y-8">
                  <div className="bg-blue-50 p-6 rounded-xl shadow-sm">
                    <div className="text-blue-600 text-2xl mb-4">
                      <i className="fa-solid fa-clock"></i>
                    </div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">Fast Response Time</h3>
                    <p className="text-gray-700">
                      We typically respond to quote requests within 24 hours during business days, ensuring you get the information you need quickly.
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 p-6 rounded-xl shadow-sm">
                    <div className="text-blue-600 text-2xl mb-4">
                      <i className="fa-solid fa-hand-holding-dollar"></i>
                    </div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">Competitive Pricing</h3>
                    <p className="text-gray-700">
                      As a direct importer and exporter, we can offer competitive pricing without compromising on product quality.
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 p-6 rounded-xl shadow-sm">
                    <div className="text-blue-600 text-2xl mb-4">
                      <i class="fa-solid fa-cogs"></i>
                    </div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">Custom Solutions</h3>
                    <p className="text-gray-700">
                      We specialize in providing customized solutions tailored to your specific requirements and industry needs.
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 p-6 rounded-xl shadow-sm">
                    <div className="text-blue-600 text-2xl mb-4">
                      <i class="fa-solid fa-globe"></i>
                    </div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">Global Shipping</h3>
                    <p className="text-gray-700">
                      We offer reliable shipping options to over 30 countries worldwide with competitive rates and delivery times.
                    </p>
                  </div>
                </div>
                
                <div className="mt-12 bg-blue-900 text-white p-8 rounded-xl">
                  <h3 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h3>
                  <p className="mb-6">
                    Our sales team is available to help with your quote request or answer any questions you may have.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <i class="fa-solid fa-phone text-blue-300 mr-3 text-xl"></i>
                      <span>+86 123 4567 8910</span>
                    </div>
                    <div className="flex items-center">
                      <i class="fa-solid fa-envelope text-blue-300 mr-3 text-xl"></i>
                      <span>sales@aluew.com</span>
                    </div>
                    <div className="flex items-center">
                      <i class="fa-solid fa-clock text-blue-300 mr-3 text-xl"></i>
                      <span>Monday - Friday: 9:00 AM - 6:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
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
              <ul className="space-y-3">
                <li><a href="/" className="text-blue-200 hover:text-white transition-colors">Home</a></li>
                <li><a href="/about" className="text-blue-200 hover:text-white transition-colors">About Us</a></li>
                <li><a href="/products" className="text-blue-200 hover:text-white transition-colors">Products</a></li>
                <li><a href="/quote" className="text-white font-medium">Get Quote</a></li>
                <li><a href="/contact" className="text-blue-200 hover:text-white transition-colors">Contact</a></li>
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
                    <li className="flex items-center">
                      <i className="fa-solid fa-globe text-blue-300 mr-3"></i>
                     <span className="text-blue-200">https://www.aluew.com</span>
                   </li>
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
