import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

// Company data
const companyData = {
  name: "Taizhou Youjiu Trading Co., Ltd.",
  tagline: "Quality Magnetic Materials & Agricultural Machinery",
  description: "We specialize in providing high-quality magnetic materials, magnetic filters, enameled wire, and agricultural machinery to clients worldwide. With years of experience in the industry, we are committed to delivering exceptional products and services.",
  strengths: [
    { title: "Quality Products", description: "Strict quality control processes ensure superior product performance" },
    { title: "Competitive Pricing", description: "Direct manufacturing allows for competitive pricing without compromising quality" },
    { title: "Global Shipping", description: "Efficient logistics network delivers products to customers worldwide" },
    { title: "Technical Support", description: "Expert team provides comprehensive technical assistance" }
  ]
};

// Featured products
const featuredProducts = [
  {
    id: 1,
    name: "Neodymium Magnets",
    category: "Magnetic Materials",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Neodymium+magnet+product+photo+on+white+background&sign=acae5549158f70fc491f81e51c2a4d45",
    price: 24.50,
    rating: 4.8
  },
  {
    id: 2,
    name: "Magnetic Filter Assembly",
    category: "Magnetic Filters",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Magnetic+filter+product+photo+on+white+background&sign=69d369d217c4d4257bcc5e85c95df069",
    price: 129.99,
    rating: 4.7
  },
  {
    id: 3,
    name: "Enameled Copper Wire",
    category: "Enameled Wire",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Enameled+copper+wire+spool+product+photo&sign=446b21e4064075a5cd9fd872e2a956b9",
    price: 8.75,
    rating: 4.6
  }
];

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Handle scroll events for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
              <Link to="/" className="text-2xl font-bold text-blue-900">
                {companyData.name.split(' ')[0]}
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-blue-900 hover:text-blue-600 font-medium transition-colors">Home</Link>
              <Link to="/about" className="text-blue-900 hover:text-blue-600 font-medium transition-colors">About</Link>
              <Link to="/products" className="text-blue-900 hover:text-blue-600 font-medium transition-colors">Products</Link>
              <Link to="/quote" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full transition-all transform hover:scale-105">
                Get Quote
              </Link>
            </nav>
            
            {/* Mobile menu button */}
             <button className="md:hidden text-blue-900">
               <i className="fa-solid fa-bars text-xl"></i>
             </button>
          </div>
        </div>
      </header>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[80vh] bg-gradient-to-r from-blue-900 to-blue-700 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=industrial+manufacturing+background+with+machinery+and+materials&sign=c4dfacec42444d9c46fc4474226b1934')] bg-cover bg-center opacity-20"></div>
          <div className="container mx-auto px-4 md:px-6 h-full flex items-center relative z-10">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight animate-fade-in">
                Reliable Solutions for <br />
                <span className="text-blue-300">Industrial Excellence</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                {companyData.tagline}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/products" 
                  className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-3 rounded-full font-semibold text-lg transition-all transform hover:scale-105 text-center"
                >
                  Explore Products
                </Link>
                <Link 
                  to="/contact" 
                  className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-full font-semibold text-lg transition-all text-center"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
          
          {/* Wave separator */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto fill-white">
              <path d="M0,96L60,85.3C120,75,240,53,360,48C480,43,600,53,720,69.3C840,85,960,107,1080,101.3C1200,96,1320,64,1380,48L1440,32L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"></path>
            </svg>
          </div>
        </section>

        {/* Company Introduction */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">About {companyData.name}</h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                   Youjiu Trading is a leading supplier of high-quality industrial products based in Taizhou, China. Since 2010, we have been providing magnetic materials, magnetic filters, enameled wire, and agricultural machinery to businesses worldwide. Our commitment to quality and customer satisfaction has made us a trusted partner in over 30 countries.

We specialize in:
- Neodymium magnets and magnetic assemblies
- Industrial magnetic separation equipment
- Enameled copper wire for electrical applications
- Agricultural machinery and equipment

All our products meet international quality standards and are backed by our comprehensive quality control process. Whether you need standard products or custom solutions, we have the expertise to meet your requirements.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {companyData.strengths.map((strength, index) => (
                    <div key={index} className="bg-blue-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      <div className="text-blue-600 text-2xl mb-3">
                        <i class="fa-solid fa-check-circle"></i>
                      </div>
                      <h3 className="text-xl font-semibold text-blue-900 mb-2">{strength.title}</h3>
                      <p className="text-gray-600">{strength.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="md:w-1/2">
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-64 h-64 bg-blue-200 rounded-lg -z-10"></div>
                  <img 
                    src="https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=modern+industrial+factory+exterior+with+company+signage&sign=c798371e4272b3643cdc1a57361d45f7" 
                    alt="Company Factory" 
                    className="w-full h-auto rounded-xl shadow-lg relative z-10 object-cover"
                  />
                  <div className="absolute -bottom-4 -right-4 w-48 h-48 bg-blue-400 rounded-lg -z-10"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Featured Products</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Discover our most popular products trusted by customers worldwide
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredProducts.map((product) => (
                <div 
                  key={product.id} 
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={product.imageUrl} 
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
                      {product.category}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold text-blue-900">{product.name}</h3>
                      <div className="flex items-center">
                        <i class="fa-solid fa-star text-yellow-400 mr-1"></i>
                        <span className="font-semibold">{product.rating}</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center mt-6">
                      <span className="text-2xl font-bold text-blue-900">${product.price.toFixed(2)}</span>
                      <Link 
                        to={`/products/${product.id}`}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link 
                to="/products"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold text-lg"
              >
                View All Products
                <i className="fa-solid fa-arrow-right ml-2"></i>
              </Link>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-24 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10">
              Contact us today for a personalized quote or to learn more about our products and services
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/quote" 
                className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105"
              >
                Request a Quote
              </Link>
              <Link 
                to="/contact" 
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-semibold text-lg transition-all"
              >
                Contact Us
              </Link>
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
                  <i className="fa-brands fa-linkedin text-xl"></i>
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
                <li><Link to="/" className="text-blue-200 hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/about" className="text-blue-200 hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/products" className="text-blue-200 hover:text-white transition-colors">Products</Link></li>
                <li><Link to="/quote" className="text-blue-200 hover:text-white transition-colors">Get Quote</Link></li>
                <li><Link to="/contact" className="text-blue-200 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Product Categories</h4>
              <ul className="space-y-3">
                <li><Link to="/products?category=magnetic-materials" className="text-blue-200 hover:text-white transition-colors">Magnetic Materials</Link></li>
                <li><Link to="/products?category=magnetic-filters" className="text-blue-200 hover:text-white transition-colors">Magnetic Filters</Link></li>
                <li><Link to="/products?category=enameled-wire" className="text-blue-200 hover:text-white transition-colors">Enameled Wire</Link></li>
                <li><Link to="/products?category=agricultural-machinery" className="text-blue-200 hover:text-white transition-colors">Agricultural Machinery</Link></li>
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
                   <li class="flex items-center">
                     <i class="fa-solid fa-globe text-blue-300 mr-3"></i>
                     <span className="text-blue-200">https://www.aluew.com</span>
                   </li>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-blue-800 pt-8 text-center text-blue-300 text-sm">
            <p>&copy; {new Date().getFullYear()} {companyData.name}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}