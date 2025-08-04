import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

// Product data
const products = [
  {
    id: 1,
    name: "Neodymium Magnets",
    category: "Magnetic Materials",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Neodymium+magnet+product+photo+on+white+background&sign=acae5549158f70fc491f81e51c2a4d45",
    price: 24.50,
    rating: 4.8,
    description: "High-quality neodymium magnets with strong magnetic force and durability."
  },
  {
    id: 2,
    name: "Magnetic Filter Assembly",
    category: "Magnetic Filters",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Magnetic+filter+product+photo+on+white+background&sign=69d369d217c4d4257bcc5e85c95df069",
    price: 129.99,
    rating: 4.7,
    description: "Efficient magnetic filter assembly for industrial applications."
  },
  {
    id: 3,
    name: "Enameled Copper Wire",
    category: "Enameled Wire",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Enameled+copper+wire+spool+product+photo&sign=446b21e4064075a5cd9fd872e2a956b9",
    price: 8.75,
    rating: 4.6,
    description: "High-quality enameled copper wire for electrical applications."
  },
  {
    id: 4,
    name: "Agricultural Sprayer",
    category: "Agricultural Machinery",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Agricultural+sprayer+equipment+product+photo&sign=4c672f1b7a17334af6ebd846e274f5ab",
    price: 249.99,
    rating: 4.5,
    description: "Efficient agricultural sprayer for crop protection."
  }
];

// Product categories
const categories = [
  "All Products",
  "Magnetic Materials",
  "Magnetic Filters",
  "Enameled Wire",
  "Agricultural Machinery"
];

export default function Products() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All Products");
  const [filteredProducts, setFilteredProducts] = useState(products);
  
  // Handle scroll events for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
   // Filter products by category with null safety checks
  useEffect(() => {
    if (activeCategory === "All Products") {
      setFilteredProducts(products.filter(Boolean));
    } else {
      setFilteredProducts(
        products.filter(product => 
          product && product.category && product.category.includes(activeCategory)
        )
      );
    }
  }, [activeCategory]);
  
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
              <a href="/products" className="text-blue-600 font-medium border-b-2 border-blue-600 pb-1">Products</a>
              <a href="/quote" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full transition-all transform hover:scale-105">
                Get Quote
              </a>
            </nav>
            
            {/* Mobile menu button */}
            <button className="md:hidden text-blue-900">
              <i class="fa-solid fa-bars text-xl"></i>
            </button>
          </div>
        </div>
      </header>

      <main className="pt-24">
        {/* Hero Banner */}
        <section className="bg-blue-900 text-white py-20">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Explore our comprehensive range of high-quality industrial products
            </p>
          </div>
        </section>

        {/* Product Categories */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex overflow-x-auto pb-4 space-x-4 scrollbar-hide">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-full whitespace-nowrap transition-colors ${
                    activeCategory === category 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-white text-blue-900 hover:bg-blue-50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Product Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
               {filteredProducts
                 .filter(product => product && product.id && product.imageUrl)
                 .map((product) => (
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
                    <h3 className="text-xl font-bold text-blue-900 mb-2">{product.name}</h3>
                     <p className="text-gray-600 text-sm mb-4 line-clamp-3">{product.description} High-quality {product.name.toLowerCase()} for industrial applications. Competitive pricing and global shipping available. Contact us for custom requirements.</p>
                    
                    <div className="flex justify-between items-center">
                       <div className="flex items-center">
174:                        <i className="fa-solid fa-star text-yellow-400 mr-1"></i>
                         <span className="font-semibold">{product.rating}</span>
                      </div>
                      <span className="text-xl font-bold text-blue-900">${product.price.toFixed(2)}</span>
                    </div>
                    
                    <div className="mt-6">
                      <a 
                        href={`/products/${product.id}`}
                        className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-2 rounded-lg transition-colors"
                      >
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-20 bg-blue-900 text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">Need a Custom Solution?</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10">
              Contact us to discuss your specific requirements and get a personalized quote
            </p>
            <a 
              href="/quote" 
              className="inline-block bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105"
            >
              Request Custom Quote
            </a>
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
                  <i className="fa-brands fa-facebook text-xl"></i>
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
                <li><a href="/products" className="text-white font-medium">Products</a></li>
                <li><a href="/quote" className="text-blue-200 hover:text-white transition-colors">Get Quote</a></li>
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
                   <li class="flex items-center">
                     <i class="fa-solid fa-globe text-blue-300 mr-3"></i>
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