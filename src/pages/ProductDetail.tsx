import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

// Product data
const products = [
  {
    id: 1,
     name: "Neodymium Magnets",
     category: "Magnetic Materials",
     materials: "Rare earth neodymium-iron-boron (NdFeB) alloy with nickel-copper-nickel coating",
     applications: "Electronics manufacturing, automotive industry, renewable energy systems, medical equipment",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Neodymium+magnet+product+photo+on+white+background&sign=acae5549158f70fc491f81e51c2a4d45",
    price: 24.50,
    rating: 4.8,
    description: "High-quality neodymium magnets with strong magnetic force and durability. These magnets are perfect for industrial applications requiring powerful magnetic properties.",
    specifications: [
      "Material: NdFeB",
       "Coating: Ni-Cu-Ni",
       "Temperature resistance: 80°C",
       "Various sizes available"
     ],
     gallery: [
       {
         imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Neodymium+magnet+closeup+photo&sign=1a463aa332b323fb9af3715920ba61b8",
         description: "High-quality neodymium magnet with superior magnetic properties and durability"
       },
       {
         imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Neodymium+magnets+application+example&sign=92465b48a90789e34890ee4bb36fd5b5",
         description: "Ideal for industrial applications requiring strong magnetic force"
       }
     ]
   },
  {
     id: 2,
     name: "Magnetic Filter Assembly",
     materials: "Stainless steel housing with high-grade neodymium magnets and synthetic filter media",
     applications: "Hydraulic systems, industrial filtration, chemical processing, food and beverage production",
    category: "Magnetic Filters",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Magnetic+filter+product+photo+on+white+background&sign=69d369d217c4d4257bcc5e85c95df069",
    price: 129.99,
    rating: 4.7,
    description: "Efficient magnetic filter assembly for industrial applications. Removes ferrous contaminants from liquids and slurries in various manufacturing processes.",
    specifications: [
       "Flow rate: Up to 500 L/min",
       "Pressure rating: 10 bar",
       "Magnetic strength: 12,000 Gauss",
       "Stainless steel construction"
     ],
     gallery: [
       {
         imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Magnetic+filter+closeup+photo&sign=99a15fb1e76dc97b60a0e85f28330ad0",
         description: "Efficient magnetic filter with high-intensity magnetic circuits"
       },
       {
         imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Magnetic+filter+installation+example&sign=d020e1c054c7305ec7d7879b867e7355",
         description: "Easy integration into industrial pipeline systems"
       }
     ]
  },
  {
     id: 3,
     name: "Enameled Copper Wire",
     materials: "High-purity oxygen-free copper conductor with polyesterimide enamel insulation",
     applications: "Transformers, electric motors, generators, electronic components, automotive electronics",
    category: "Enameled Wire",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Enameled+copper+wire+spool+product+photo&sign=446b21e4064075a5cd9fd872e2a956b9",
    price: 8.75,
    rating: 4.6,
    description: "High-quality enameled copper wire for electrical applications. Provides excellent insulation and conductivity for transformers, motors, and other electrical components.",
    specifications: [
       "Conductor: Oxygen-free copper",
       "Insulation: Polyesterimide",
       "Temperature class: 180°C",
       "Diameter: 0.1mm to 5.0mm"
     ],
     gallery: [
       {
         imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Enameled+copper+wire+closeup+photo&sign=a5a9878e27c31925b848d8b10d416818",
         description: "High-quality enamel insulation for excellent electrical performance"
       },
       {
         imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Enameled+wire+spools+various+sizes&sign=95dcc438b37945a8d48d91288c9c7ab2",
         description: "Available in various gauges to meet different application requirements"
       }
     ]
  },
  {
    id: 4,
     name: "Agricultural Sprayer",
     category: "Agricultural Machinery",
     materials: "Reinforced polyethylene tank, stainless steel spray boom, brass nozzles",
     applications: "Crop protection, orchards, vineyards, greenhouse farming, large-scale agricultural operations",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Agricultural+sprayer+equipment+product+photo&sign=4c672f1b7a17334af6ebd846e274f5ab",
    price: 249.99,
    rating: 4.5,
    description: "Efficient agricultural sprayer for crop protection. Designed for uniform coverage and reduced chemical waste in various farming applications.",
    specifications: [
       "Tank capacity: 200L",
       "Spray width: 12 meters",
       "Power: 4HP gasoline engine",
       "Nozzle quantity: 16"
     ],
     gallery: [
       {
         imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Agricultural+sprayer+closeup+photo&sign=4a972e16720c139727b8a8c63bf2cb3d",
         description: "Efficient agricultural sprayer for uniform crop coverage"
       },
       {
         imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Agricultural+sprayer+in+field+application&sign=925d55f36095ae7312ddba4231d968e8",
         description: "Designed for reduced chemical waste and optimal crop protection"
       }
     ]
  }
];

export default function ProductDetail() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('materials');
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = products.find(p => p.id === parseInt(id as string));

  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState<any>(() => {
    // Set initial selected image to product main image
    return {
  imageUrl: product?.imageUrl || '',
  description: product?.name || ''
    };
  });
  
   
  // Handle scroll events for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // If product not found, redirect to products page
  useEffect(() => {
    if (!product && id) {
      navigate('/products');
    }
  }, [product, id, navigate]);
  
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <i className="fa-solid fa-circle-exclamation text-5xl text-red-500 mb-4"></i>
          <h1 className="text-3xl font-bold text-blue-900 mb-2">Product Not Found</h1>
          <p className="text-gray-600 mb-6">The requested product could not be found.</p>
          <button 
            onClick={() => navigate('/products')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
          >
            View All Products
          </button>
        </div>
      </div>
    );
  }
  
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
              <i className="fa-solid fa-bars text-xl"></i>
            </button>
          </div>
        </div>
      </header>

      <main className="pt-24">
        {/* Product Detail Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

               {/* Product Image Gallery - E-commerce Style */}
               <div className="mb-8">
                 {/* Main Image */}
                 <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-4 border border-gray-100">
                   <img 
                     src={selectedImage.imageUrl} 
                     alt={selectedImage.description || product.name}
                      className="w-full h-[400px] object-contain p-4 lazy-load"
                   />
                 </div>
                 
                 {/* Thumbnail Images */}
                 <div className="flex space-x-3 overflow-x-auto pb-2">
                   <div 
                     onClick={() => setSelectedImage({
  imageUrl: product?.imageUrl || '',
  description: product?.name || ''
                     })}
                     className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden cursor-pointer border-2 ${selectedImage.imageUrl === product.imageUrl ? 'border-blue-600' : 'border-transparent hover:border-gray-300'}`}
                   >
                     <img 
                       src={product.imageUrl} 
                      alt={`${product.name} - ${product.category} by Youjiu Trading`}
                       className="w-full h-full object-cover"
                     />
                   </div>
                   
                   {product.gallery.map((item, index) => (
                     <div 
                       key={index}
                       onClick={() => setSelectedImage(item)}
                       className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden cursor-pointer border-2 ${selectedImage.imageUrl === item.imageUrl ? 'border-blue-600' : 'border-transparent hover:border-gray-300'}`}
                     >
                       <img 
                         src={item.imageUrl} 
                          alt={`${product.name} ${item.description.toLowerCase()}`}
                         className="w-full h-full object-cover"
                       />
                     </div>
                   ))}
                 </div>
               </div>

               
               {/* Product Information */}
              <div>

                 <div className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full mb-4">
                   {product.category}
                 </div>
                 <h1 className="text-3xl font-bold text-blue-900 mb-3">{product.name}</h1>
                 
                 <div className="flex items-center mb-6">
                   <div className="flex items-center mr-4">
                     <i className="fa-solid fa-star text-yellow-400 mr-1"></i>
                     <span className="font-semibold">{product.rating}</span>
                     <span className="text-gray-500 ml-1">(128 reviews)</span>
                   </div>
                   <div className="text-gray-500">
                     <i className="fa-solid fa-eye mr-1"></i> 2.4k views
                   </div>
                 </div>
                 
                 <div className="text-3xl font-bold text-blue-900 mb-6">${product.price.toFixed(2)}</div>

                


                
                <p className="text-gray-700 mb-8 leading-relaxed">{product.description}</p>
                
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-blue-900 mb-3">Specifications</h3>
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    {product.specifications.map((spec, index) => {
                      const parts = spec.split(':').map(item => item.trim());
                      const key = parts[0] || 'Specification';
                      const value = parts[1] || spec;
                      return (
                        <div key={index} className="flex justify-between py-3 border-b border-gray-100 last:border-0">
                          <span className="font-medium text-gray-700">{key}</span>
                          <span className="text-blue-900">{value}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
                

                 <div className="mb-6">
                   <div className="flex items-center text-sm text-gray-500 mb-2">
                     <i className="fa-solid fa-check-circle text-green-500 mr-2"></i>
                     <span>In Stock - Ready to Ship</span>
                   </div>
                   
                   <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mt-8">
                     <div className="flex items-center border border-gray-300 rounded-lg">
                       <button 
                         onClick={() => setQuantity(Math.max(1, quantity - 1))}
                         className="px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors"
                       >
                         <i className="fa-solid fa-minus"></i>
                       </button>
                       <span className="px-4 py-2 border-x border-gray-300 min-w-[60px] text-center">
                         {quantity}
                       </span>
                       <button 
                         onClick={() => setQuantity(quantity + 1)}
                         className="px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors"
                       >
                         <i className="fa-solid fa-plus"></i>
                       </button>
                     </div>
                     
                     <button 
                       onClick={() => {
                         toast.success('Added to Cart', {
                           description: `${product.name} added to your cart`
                         });
                       }}
                       className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors flex-1 sm:flex-none text-center"
                     >
                       <i className="fa-solid fa-shopping-cart mr-2"></i> Add to Cart
                     </button>
                     
                     <button 
                       onClick={() => {
                         toast.info('Proceeding to checkout', {
                           description: `Checkout with ${quantity} x ${product.name}`
                         });
                       }}
                       className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg transition-colors flex-1 sm:flex-none text-center"
                     >
                       <i className="fa-solid fa-bolt mr-2"></i> Buy Now
                     </button>
                   </div>
                 </div>

              </div>
            </div>
          </div>
        </section>
        
         {/* Product Details Section */}
         <section className="py-16 bg-white">
           <div className="container mx-auto px-4 md:px-6">
             <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">Product Details</h2>
             
             {/* Tabs Navigation */}
             <div className="border-b border-gray-200 mb-10">
               <div className="flex flex-wrap -mb-px">
                  <button 
                    id="materials-tab" 
                    className={`tab-button py-4 px-6 font-semibold ${activeTab === 'materials' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 border-b-2 border-transparent hover:text-blue-500'}`}
                    onClick={() => setActiveTab('materials')}
                  >
                    <i className="fa-solid fa-microchip mr-2"></i>Material Characteristics
                  </button>
                  <button 
                    id="applications-tab" 
                    className={`tab-button py-4 px-6 font-semibold ${activeTab === 'applications' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 border-b-2 border-transparent hover:text-blue-500'}`}
                    onClick={() => setActiveTab('applications')}
                  >
                    <i className="fa-solid fa-industry mr-2"></i>Application Scenarios
                  </button>
                  <button 
                    id="video-tab" 
                    className={`tab-button py-4 px-6 font-semibold ${activeTab === 'video' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 border-b-2 border-transparent hover:text-blue-500'}`}
                    onClick={() => setActiveTab('video')}
                  >
                    <i className="fa-solid fa-video mr-2"></i>Video Demonstration
                  </button>
                  <button 
                    id="specs-tab" 
                    className={`tab-button py-4 px-6 font-semibold ${activeTab === 'specs' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 border-b-2 border-transparent hover:text-blue-500'}`}
                    onClick={() => setActiveTab('specs')}
                  >
                    <i className="fa-solid fa-table mr-2"></i>Technical Specifications
                  </button>
               </div>
             </div>
             
             {/* Tab Content */}
              <div className={`tab-content ${activeTab === 'materials' ? '' : 'hidden'}`} id="materials-content">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div>
                   <h3 className="text-2xl font-bold text-blue-900 mb-4">{product.name} Materials</h3>
                   <p className="text-gray-700 mb-6 leading-relaxed">
                     Our {product.name.toLowerCase()} is constructed using high-grade materials that ensure durability and optimal performance in various industrial environments.
                   </p>
                   
                   <ul className="space-y-4">
                     <li className="flex items-start">
                       <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                         <i className="fa-solid fa-check text-blue-600"></i>
                       </div>
                       <div>
                         <h4 className="font-semibold text-blue-900">High-Quality Base Material</h4>
                         <p className="text-gray-600">Manufactured using premium raw materials for enhanced durability and performance.</p>
                       </div>
                     </li>
                     <li className="flex items-start">
                       <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                         <i className="fa-solid fa-check text-blue-600"></i>
                       </div>
                       <div>
                         <h4 className="font-semibold text-blue-900">Specialized Coatings</h4>
                         <p className="text-gray-600">Protective coatings provide resistance to corrosion, wear, and environmental factors.</p>
                       </div>
                     </li>
                     <li className="flex items-start">
                       <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                         <i className="fa-solid fa-check text-blue-600"></i>
                       </div>
                       <div>
                         <h4 className="font-semibold text-blue-900">Heat Resistance</h4>
                         <p className="text-gray-600">Maintains structural integrity and performance in high-temperature environments.</p>
                       </div>
                     </li>
                   </ul>
                 </div>
                 <div className="relative">
                   <img 
                     src={`https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=%24%7BencodeURIComponent%28product.name&sign=2f264403e43564f47b6614d8528b8c05`} 
                     alt={`${product.name} material closeup`}
                     className="w-full h-auto rounded-xl shadow-lg"
                   />
                   <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-4 rounded-xl shadow-lg max-w-xs">
                     <p className="font-semibold">Material certification available upon request</p>
                   </div>
                 </div>
               </div>
             </div>
             
              <div className={`tab-content ${activeTab === 'applications' ? '' : 'hidden'}`} id="applications-content">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="col-span-1 md:col-span-2">
                   <h3 className="text-2xl font-bold text-blue-900 mb-4">Application Scenarios</h3>
                   <p className="text-gray-700 mb-6 leading-relaxed">
                     The {product.name.toLowerCase()} is designed for versatile applications across multiple industries, providing reliable performance and efficiency.
                   </p>
                   
                   <div className="space-y-6">
                     <div className="bg-blue-50 p-6 rounded-xl">
                       <h4 className="font-semibold text-blue-900 text-lg mb-2">Manufacturing Industry</h4>
                       <p className="text-gray-600 mb-3">Ideal for use in production lines, assembly processes, and quality control systems.</p>
                       <ul className="list-disc pl-5 text-gray-600 space-y-1">
                         <li>Automated production systems</li>
                         <li>Material handling equipment</li>
                         <li>Quality inspection stations</li>
                       </ul>
                     </div>
                     
                     <div className="bg-blue-50 p-6 rounded-xl">
                       <h4 className="font-semibold text-blue-900 text-lg mb-2">Engineering Applications</h4>
                       <p className="text-gray-600 mb-3">Suitable for various engineering projects requiring precision and durability.</p>
                       <ul className="list-disc pl-5 text-gray-600 space-y-1">
                         <li>Mechanical engineering systems</li>
                         <li>Construction machinery</li>
                         <li>Industrial automation</li>
                       </ul>
                     </div>
                   </div>
                 </div>
                 
                 <div className="space-y-6">
                   <div className="rounded-xl overflow-hidden shadow-lg">
                     <img 
                       src={`https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=%24%7BencodeURIComponent%28product.name&sign=2f264403e43564f47b6614d8528b8c05`} 
                       alt={`${product.name} in industrial application`}
                       className="w-full h-auto"
                     />
                     <div className="p-4 bg-gray-50">
                       <p className="text-sm text-gray-600 italic text-center">Industrial manufacturing application</p>
                     </div>
                   </div>
                   
                   <div className="rounded-xl overflow-hidden shadow-lg">
                     <img 
                       src={`https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=%24%7BencodeURIComponent%28product.name&sign=2f264403e43564f47b6614d8528b8c05`} 
                       alt={`${product.name} in engineering application`}
                       className="w-full h-auto"
                     />
                     <div className="p-4 bg-gray-50">
                       <p className="text-sm text-gray-600 italic text-center">Engineering application scenario</p>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
             
              <div className={`tab-content ${activeTab === 'video' ? '' : 'hidden'}`} id="video-content">
                <div className="flex flex-col items-center justify-center py-8">
                  <div className="relative w-full max-w-3xl aspect-video bg-gray-100 rounded-xl overflow-hidden mb-8 group">
                   <img 
                     src={`https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=%24%7BencodeURIComponent%28product.name&sign=5d3369d4a775ae836040fa13ae4c8f58`} 
                     alt={`${product.name} demonstration video thumbnail`}
                     className="w-full h-full object-cover"
                   />
                   <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group-hover:bg-opacity-50 transition-colors">
                     <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center cursor-pointer transform group-hover:scale-110 transition-transform">
                       <i className="fa-solid fa-play text-blue-600 text-2xl ml-1"></i>
                     </div>
                   </div>
                 </div>
                 <h3 className="text-2xl font-bold text-blue-900 mb-2 text-center">Product Demonstration Video</h3>
                 <p className="text-gray-600 text-center max-w-2xl">
                   Watch our product experts demonstrate the features, installation, and operation of the {product.name.toLowerCase()}.
                 </p>
                 <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl">
                   <div className="bg-blue-50 p-4 rounded-lg text-center cursor-pointer hover:bg-blue-100 transition-colors">
                     <i className="fa-solid fa-circle-play text-blue-600 text-3xl mb-2"></i>
                     <p className="font-medium text-blue-900">Introduction</p>
                   </div>
                   <div className="bg-blue-50 p-4 rounded-lg text-center cursor-pointer hover:bg-blue-100 transition-colors">
                     <i className="fa-solid fa-cogs text-blue-600 text-3xl mb-2"></i>
                     <p className="font-medium text-blue-900">Operation Guide</p>
                   </div>
                   <div className="bg-blue-50 p-4 rounded-lg text-center cursor-pointer hover:bg-blue-100 transition-colors">
                     <i className="fa-solid fa-question-circle text-blue-600 text-3xl mb-2"></i>
                     <p className="font-medium text-blue-900">FAQ & Troubleshooting</p>
                   </div>
                 </div>
               </div>
             </div>
             
              <div className={`tab-content ${activeTab === 'specs' ? '' : 'hidden'}`} id="specs-content">
                <h3 className="text-2xl font-bold text-blue-900 mb-6">Technical Specifications</h3>
                <div className="overflow-x-auto">
                 <table className="min-w-full bg-white border border-gray-200 rounded-xl">
                   <thead>
                     <tr className="bg-blue-900 text-white">
                       <th className="py-4 px-6 text-left rounded-tl-xl">Parameter</th>
                       <th className="py-4 px-6 text-left">Specification</th>
                       <th className="py-4 px-6 text-left rounded-tr-xl">Unit</th>
                     </tr>
                   </thead>
                   <tbody className="divide-y divide-gray-200">
                     {product.specifications.map((spec, index) => {
                       const parts = spec.split(':').map(item => item.trim());
                       const key = parts[0] || 'Specification';
                       const value = parts[1] || spec;
                       
                       // Extract unit from value if possible
                       const unitMatch = value.match(/[^\d\s]+$/);
                       const unit = unitMatch ? unitMatch[0] : '-';
                       const cleanValue = unitMatch ? value.replace(unitMatch[0], '').trim() : value;
                       
                       return (
                         <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                           <td className="py-4 px-6 font-medium text-blue-900">{key}</td>
                           <td className="py-4 px-6 text-gray-700">{cleanValue}</td>
                           <td className="py-4 px-6 text-gray-500">{unit}</td>
                         </tr>
                       );
                     })}
                     <tr className={product.specifications.length % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                       <td className="py-4 px-6 font-medium text-blue-900">Operating Temperature</td>
                       <td className="py-4 px-6 text-gray-700">-20 to +80</td>
                       <td className="py-4 px-6 text-gray-500">°C</td>
                     </tr>
                     <tr className={product.specifications.length % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                       <td className="py-4 px-6 font-medium text-blue-900">Weight</td>
                       <td className="py-4 px-6 text-gray-700">{(product.id * 1.5).toFixed(1)}</td>
                       <td className="py-4 px-6 text-gray-500">kg</td>
                     </tr>
                     <tr className={product.specifications.length % 2 === 0 ? 'bg-gray-50 rounded-bl-xl' : 'bg-white rounded-bl-xl'}>
                       <td className="py-4 px-6 font-medium text-blue-900">Dimensions</td>
                       <td className="py-4 px-6 text-gray-700">{product.id * 10} x {product.id * 15} x {product.id * 5}</td>
                       <td className="py-4 px-6 text-gray-500">mm</td>
                     </tr>
                   </tbody>
                 </table>
               </div>
               <div className="mt-8 bg-blue-50 p-6 rounded-xl">
                 <h4 className="font-semibold text-blue-900 mb-2">Additional Information</h4>
                 <p className="text-gray-600">
                   All specifications are subject to change without notice. For detailed technical documentation or custom specifications, please contact our technical support team.
                 </p>
               </div>
             </div>
           </div>
         </section>
         
         {/* Related Products */}
         <section className="py-16 bg-gray-50">
           <div className="container mx-auto px-4 md:px-6">
             <h2 className="text-2xl font-bold text-blue-900 mb-8">Related Products</h2>
             
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
               {products
                 .filter(p => p.id !== product.id)
                 .slice(0, 4)
                 .map((relatedProduct) => (
                   <div 
                     key={relatedProduct.id} 
                     className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                   >
                     <div className="relative h-48 overflow-hidden">
                       <img 
                         src={relatedProduct.imageUrl} 
                         alt={relatedProduct.name}
                         className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                       />
                     </div>
                     
                     <div className="p-6">
                       <h3 className="text-lg font-bold text-blue-900 mb-1">{relatedProduct.name}</h3>
                       <div className="flex justify-between items-center">
                         <span className="text-lg font-bold text-blue-900">${relatedProduct.price.toFixed(2)}</span>
                         <a 
                           href={`/products/${relatedProduct.id}`}
                           className="text-blue-600 hover:text-blue-800 transition-colors"
                         >
                           View Details <i className="fa-solid fa-arrow-right ml-1"></i>
                         </a>
                       </div>
                     </div>
                   </div>
                 ))}
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
                  <i className="fa-brands fa-facebook text-xl"></i>
                </a>
                <a href="#" className="text-blue-200 hover:text-white transition-colors">
                  <i className="fa-brands fa-instagram text-xl"></i>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><Link to="/" className="text-blue-200 hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/about" className="text-blue-200 hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/products" className="text-white font-medium">Products</Link></li>
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
                  <i className="fa-solid fa-map-marker-alt text-blue-300 mt-1 mr-3"></i>
                  <span className="text-blue-200">Taizhou, Zhejiang Province, China</span>
                </li>
                <li className="flex items-center">
                  <i className="fa-solid fa-phone text-blue-300 mr-3"></i>
                  <span className="text-blue-200">+86 123 4567 8910</span>
                </li>
                <li className="flex items-center">
                  <i className="fa-solid fa-envelope text-blue-300 mr-3"></i>
                   <span className="text-blue-200">info@aluew.com</span>
                   <li className="flex items-center">
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
       {/* SEO Structured Data */}
       <script type="application/ld+json">
       {JSON.stringify({
         "@context": "https://schema.org/",
         "@type": "Product",
         "name": product.name,
         "image": product.imageUrl,
         "description": product.description,
         "brand": {
           "@type": "Brand",
           "name": "Youjiu Trading"
         },
         "offers": {
           "@type": "Offer",
           "url": `https://www.aluew.com/products/${product.id}`,
           "priceCurrency": "USD",
           "price": product.price,
           "availability": "https://schema.org/InStock",
           "seller": {
             "@type": "Organization",
             "name": "Youjiu Trading"
           }
         }
       })}
       </script>
    </div>
  );
}