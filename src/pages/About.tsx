import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const companyHistory = [
  { year: 2010, event: "Company founded in Taizhou, China" },
  { year: 2012, event: "Expanded product line to include magnetic materials" },
  { year: 2015, event: "Established international sales department" },
  { year: 2018, event: "Achieved ISO 9001 quality certification" },
  { year: 2020, event: "Launched new production facility with advanced technology" },
  { year: 2023, event: "Reached export markets in 30+ countries worldwide" },
];

const teamMembers = [
  {
    name: "Zhang Wei",
    position: "General Manager",
    image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=professional+businessman+in+formal+attire&sign=2a5e4d769e5f57f4c5af26fa34c57cfa",
    bio: "15+ years of experience in industrial trading with expertise in magnetic materials and international business."
  },
  {
    name: "Li Mei",
    position: "Sales Director",
    image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=professional+businesswoman+in+formal+attire&sign=8bed1a272b78fc8a5bbff6ecd0e4544a",
    bio: "Specializes in developing new markets and building long-term client relationships across Europe and America."
  },
  {
    name: "Wang Jian",
    position: "Technical Manager",
    image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=engineering+manager+in+industrial+setting&sign=3c283a8b10530ec00be0dd1b1808691c",
    bio: "Material science expert with 10 years of experience in product development and quality control."
  },
  {
    name: "Chen Hua",
    position: "Operations Director",
    image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=operations+manager+in+warehouse+setting&sign=90c3545680d2cc39274ef05f2ba92cd1",
    bio: "Logistics and supply chain specialist ensuring efficient delivery to global customers."
  }
];

const certifications = [
  { name: "ISO 9001", image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=ISO+9001+certification+badge&sign=eb581152abb1d3df34c325e8803d5077" },
  { name: "CE", image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=CE+certification+mark+logo&sign=71cee4d06043b69b517d8d6784e65f4e" },
  { name: "RoHS", image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=RoHS+certification+logo&sign=0c1d8a4d1580a7e9087a871d908fc603" },
  { name: "SGS", image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=SGS+certification+badge&sign=c3de12851b223a207b475e6a32c12ca8" }
];

export default function About() {
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
              <a href="/" className="text-2xl font-bold text-blue-900">
                Youjiu
              </a>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-blue-900 hover:text-blue-600 font-medium transition-colors">Home</a>
              <a href="/about" className="text-blue-600 font-medium border-b-2 border-blue-600 pb-1">About</a>
              <a href="/products" className="text-blue-900 hover:text-blue-600 font-medium transition-colors">Products</a>
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
        {/* Hero Banner */}
        <section className="bg-blue-900 text-white py-20">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Taizhou Youjiu Trading Co., Ltd.</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              A leading provider of magnetic materials, filters, enameled wire, and agricultural machinery with global reach
            </p>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Company</h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Taizhou Youjiu Trading Co., Ltd. is a professional trading company specializing in the export of magnetic materials, magnetic filters, enameled wire, and agricultural machinery. 
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Founded in 2010, we have grown from a local supplier to an international trading company serving clients in over 30 countries worldwide. Our commitment to quality, competitive pricing, and excellent customer service has earned us a reputation as a reliable business partner.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We work closely with carefully selected manufacturing partners who share our commitment to quality and ethical business practices. This allows us to offer a wide range of products while maintaining strict quality control standards.
                </p>
              </div>
              
              <div className="md:w-1/2 grid grid-cols-2 gap-4">
                <img 
                  src="https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=industrial+production+facility+interior&sign=e06ed4effd8f22c76a3018525ee7c536" 
                  alt="Production Facility" 
                  className="rounded-xl shadow-md w-full h-64 object-cover transform translate-y-8"
                />
                <img 
                  src="https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=warehouse+with+industrial+products+pallets&sign=96ae5fb4e130df6b0f40a6e1d465dd05" 
                  alt="Warehouse" 
                  className="rounded-xl shadow-md w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission & Vision */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                     <div className="text-blue-600 text-4xl mb-6">
                       <i className="fa-solid fa-compass"></i>
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Mission</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To provide high-quality industrial products at competitive prices while delivering exceptional customer service. We aim to build long-term partnerships with our clients by understanding their needs and exceeding their expectations.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                     <div className="text-blue-600 text-4xl mb-6">
                       <i className="fa-solid fa-eye"></i>
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Vision</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To become a global leader in the trading of magnetic materials and agricultural machinery, recognized for our integrity, innovation, and commitment to sustainable business practices.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Company History Timeline */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Journey</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                A timeline of our company's growth and achievements
              </p>
            </div>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 transform md:translate-x-px"></div>
              
              {/* Timeline items */}
              <div className="space-y-12">
                {companyHistory.map((item, index) => (
                  <div key={index} className="relative flex flex-col md:flex-row items-center">
                    {/* Timeline dot */}
                    <div className="absolute left-0 md:left-1/2 w-6 h-6 rounded-full bg-blue-600 border-4 border-white shadow-md transform -translate-x-1/2 md:translate-x-px z-10"></div>
                    
                    {/* Timeline content */}
                    <div className={`w-full md:w-1/2 px-8 ${index % 2 === 0 ? 'md:text-right md:pr-12 md:justify-end' : 'md:pl-12 md:ml-auto'}`}>
                      <div className={`p-6 rounded-xl shadow-md ${index % 2 === 0 ? 'bg-blue-50' : 'bg-blue-50'}`}>
                        <span className="inline-block bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-3">
                          {item.year}
                        </span>
                        <h3 className="text-xl font-bold text-blue-900 mb-2">{item.event}</h3>
                      </div>
                    </div>
                    
                    {/* Empty spacer for alternating layout */}
                    {index % 2 === 0 && <div className="w-full md:w-1/2"></div>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Team</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Meet the dedicated professionals behind our success
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                  <div className="h-72 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-1">{member.name}</h3>
                    <p className="text-blue-600 font-medium mb-3">{member.position}</p>
                    <p className="text-gray-600">{member.bio}</p>
                    
                    <div className="flex justify-center mt-6 space-x-3">
                      <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
232:                        <i className="fa-brands fa-linkedin"></i>
                      </a>
                      <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                       <i className="fa-solid fa-envelope"></i>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Certifications</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We maintain the highest standards of quality and compliance
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
              {certifications.map((cert, index) => (  
                <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105">
                  <img 
                    src={cert.image} 
                    alt={cert.name} 
                    className="h-24 object-contain"
                  />
                  <h3 className="text-center mt-4 font-semibold text-blue-900">{cert.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-blue-900 text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10">
              Contact us today to discuss how our products can benefit your business
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105"
            >
              Contact Us
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
                  <i className="fa-brands fa-instagram text-xl"></i>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="/" className="text-blue-200 hover:text-white transition-colors">Home</a></li>
                <li><a href="/about" className="text-white font-medium">About Us</a></li>
                <li><a href="/products" className="text-blue-200 hover:text-white transition-colors">Products</a></li>
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
                       <div className="mt-6">
                         <a href="https://www.aluew.com" className="text-white hover:text-blue-300 transition-colors">
                        <i className="fa-solid fa-globe mr-2"></i>Visit Our Official Website
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