import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Star, 
  Wrench, 
  Shield, 
  Award, 
  Users, 
  Menu, 
  X,
  ChevronRight,
  Zap,
  Droplets,
  Car,
  Scissors,
  Wind,
  Settings,
  MessageCircle
} from 'lucide-react';

import { useNavigate } from 'react-router-dom';



const Landingpage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showWhatsAppTooltip, setShowWhatsAppTooltip] = useState(false);
  const navigate = useNavigate()

    // WhatsApp configuration
    const whatsappNumber = "254722552636"; // Using the office line number
    const whatsappMessage = "Hello! I'm interested in your power equipment. Can you help me?";
  
    const openWhatsApp = () => {
      const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
      window.open(url, '_blank');
    };

  const products = [
    {
      category: "Sawing & Cutting",
      items: ["Chainsaws", "Pole Saws"],
      icon: <Scissors className="w-8 h-8" />
    },
    {
      category: "Lawn Care",
      items: ["Lawn Mowers", "Brush Cutters", "Hedge Trimmers"],
      icon: <Wind className="w-8 h-8" />
    },
    {
      category: "Power Solutions", 
      items: ["Generators", "Water Pumps"],
      icon: <Zap className="w-8 h-8" />
    },
    {
      category: "Cleaning",
      items: ["Car Wash Machines", "Leaf Blowers"],
      icon: <Car className="w-8 h-8" />
    },
    {
      category: "Parts & Service",
      items: ["Capacitors", "Spare Parts"],
      icon: <Settings className="w-8 h-8" />
    }
  ];

  const brands = ["Husqvarna", "Oregon"];

  const whyChoose = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Trusted Legacy",
      description: "15+ years of service with integrity"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Quality Assured", 
      description: "Genuine, branded, high-performance products"
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Expert Support",
      description: "Technical advice, installation help, and after-sales service"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Affordable Prices",
      description: "Competitive without compromising quality"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Wide Reach",
      description: "Two Nairobi locations + delivery option"
    }
  ];

  const locations = [
    {
      name: "Main Shop",
      address: "Menengai House 1, Ground Floor",
      details: "Opp. Rubis Petrol Station, St. River Road, Nairobi"
    },
    {
      name: "Branch",
      address: "Malindi House, River Road", 
      details: "Kumasi Road Junction, Nairobi"
    }
  ];

  function handleClick() {
    navigate("/product")
  }

  function handleContact() {
    navigate("/contact")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50" style={{backgroundColor: '#F3F3F3'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-3" style={{backgroundColor: '#A32424'}}>
                <Zap className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold" style={{color: '#A32424'}}>Masafi Enterprises</h1>
                <p className="text-sm" style={{color: '#625A62'}}>Your Trusted Power Equipment Partner</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="hover:opacity-80 transition-opacity" style={{color: '#625A62'}}>Home</a>
              
              <a href="#about" className="hover:opacity-80 transition-opacity" style={{color: '#625A62'}}>About</a>
              <a href="#products" className="hover:opacity-80 transition-opacity" style={{color: '#625A62'}}>Products</a>
              <a href="#locations" className="hover:opacity-80 transition-opacity" style={{color: '#625A62'}}>Locations</a>
              <a href="#contact" className="hover:opacity-80 transition-opacity" style={{color: '#625A62'}}>Contact</a>
            </nav>

            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <nav className="flex flex-col space-y-4">
                <a href="#home" className="hover:opacity-80 transition-opacity" style={{color: '#625A62'}}>Home</a>
                <a href="#about" className="hover:opacity-80 transition-opacity" style={{color: '#625A62'}}>About</a>
                <a href="#products" className="hover:opacity-80 transition-opacity" style={{color: '#625A62'}}>Products</a>
                <a href="#locations" className="hover:opacity-80 transition-opacity" style={{color: '#625A62'}}>Locations</a>
                <a href="#contact" className="hover:opacity-80 transition-opacity" style={{color: '#625A62'}}>Contact</a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative py-20 px-4" style={{backgroundColor: '#A32424'}}>
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Power Equipment Excellence
          </h2>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
            Serving East Africa since 2008 with premium power tools, generators, and industrial equipment
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105" style={{backgroundColor: '#C17671', color: 'white'}} onClick={handleClick}>
              Explore Products
            </button>
            <button className="px-8 py-4 bg-white rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105" style={{color: '#A32424'}} onClick={handleContact}>
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{color: '#A32424'}}>About Masafi Enterprises</h2>
            <p className="text-xl max-w-3xl mx-auto" style={{color: '#625A62'}}>
              Founded in 2008, we are a proudly Kenyan-owned company and leading supplier of power equipment and industrial tools across East Africa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6" style={{color: '#A32424'}}>Our Story</h3>
              <p className="text-lg mb-6" style={{color: '#625A62'}}>
                With over 15 years of experience, we have earned the trust of thousands of clients through top-quality products, dependable after-sales service, and custom equipment solutions.
              </p>
              <p className="text-lg mb-6" style={{color: '#625A62'}}>
                Our deep understanding of the regional market, along with partnerships with top global brands, enables us to supply durable, affordable, and high-performing equipment for both personal and commercial use.
              </p>
              
              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-4" style={{color: '#A32424'}}>Authorized Dealers</h4>
                <div className="flex flex-wrap gap-4">
                  {brands.map((brand, index) => (
                    <div key={index} className="px-6 py-3 rounded-lg font-semibold" style={{backgroundColor: '#C17671', color: 'white'}}>
                      {brand}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 rounded-lg" style={{backgroundColor: '#F3F3F3'}}>
                <div className="text-3xl font-bold mb-2" style={{color: '#A32424'}}>15+</div>
                <div style={{color: '#625A62'}}>Years Experience</div>
              </div>
              <div className="text-center p-6 rounded-lg" style={{backgroundColor: '#F3F3F3'}}>
                <div className="text-3xl font-bold mb-2" style={{color: '#A32424'}}>1000+</div>
                <div style={{color: '#625A62'}}>Happy Clients</div>
              </div>
              <div className="text-center p-6 rounded-lg" style={{backgroundColor: '#F3F3F3'}}>
                <div className="text-3xl font-bold mb-2" style={{color: '#A32424'}}>2</div>
                <div style={{color: '#625A62'}}>Locations</div>
              </div>
              <div className="text-center p-6 rounded-lg" style={{backgroundColor: '#F3F3F3'}}>
                <div className="text-3xl font-bold mb-2" style={{color: '#A32424'}}>100%</div>
                <div style={{color: '#625A62'}}>Genuine Products</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-4" style={{backgroundColor: '#F3F3F3'}}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{color: '#A32424'}}>Our Products</h2>
            <p className="text-xl max-w-3xl mx-auto" style={{color: '#625A62'}}>
              Comprehensive range of power equipment and industrial tools for all your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-lg mr-4" style={{backgroundColor: '#A32424', color: 'white'}}>
                    {product.icon}
                  </div>
                  <h3 className="text-xl font-bold" style={{color: '#A32424'}}>{product.category}</h3>
                </div>
                <ul className="space-y-2">
                  {product.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center" style={{color: '#625A62'}}>
                      <ChevronRight className="w-4 h-4 mr-2" style={{color: '#C17671'}} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{color: '#A32424'}}>Why Choose Masafi?</h2>
            <p className="text-xl max-w-3xl mx-auto" style={{color: '#625A62'}}>
              Five key reasons why thousands of clients trust us with their power equipment needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChoose.map((reason, index) => (
              <div key={index} className="text-center p-8 rounded-xl hover:shadow-lg transition-shadow duration-300" style={{backgroundColor: '#F3F3F3'}}>
                <div className="inline-flex p-4 rounded-full mb-6" style={{backgroundColor: '#A32424', color: 'white'}}>
                  {reason.icon}
                </div>
                <h3 className="text-xl font-bold mb-4" style={{color: '#A32424'}}>{reason.title}</h3>
                <p style={{color: '#625A62'}}>{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4" style={{backgroundColor: '#C17671'}}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-lg text-white leading-relaxed">
                To empower individuals and businesses in East Africa with reliable, high-quality equipment that boosts productivity, safety, and efficiency.
              </p>
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
              <p className="text-lg text-white leading-relaxed">
                To become East Africa's leading one-stop shop for power tools and machinery — known for excellence in product quality, service, and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section id="locations" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{color: '#A32424'}}>Our Locations</h2>
            <p className="text-xl max-w-3xl mx-auto" style={{color: '#625A62'}}>
              Visit us at either of our convenient Nairobi locations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {locations.map((location, index) => (
              <div key={index} className="p-8 rounded-xl shadow-lg" style={{backgroundColor: '#F3F3F3'}}>
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 mr-3" style={{color: '#A32424'}} />
                  <h3 className="text-2xl font-bold" style={{color: '#A32424'}}>{location.name}</h3>
                </div>
                <p className="text-lg mb-2" style={{color: '#625A62'}}>{location.address}</p>
                <p style={{color: '#625A62'}}>{location.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4" style={{backgroundColor: '#A32424'}}>
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Get In Touch</h2>
          <p className="text-xl text-white mb-12 max-w-3xl mx-auto">
            Ready to find the perfect power equipment for your needs? Contact us today for expert advice and competitive prices.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <div className="p-4 bg-white rounded-full mb-4">
                <Phone className="w-8 h-8" style={{color: '#A32424'}} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Office Line</h3>
              <p className="text-white">0714222255</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="p-4 bg-white rounded-full mb-4">
                <Phone className="w-8 h-8" style={{color: '#A32424'}} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Direct Lines</h3>
              <p className="text-white">0723863306</p>
              <p className="text-white">0722552636</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="p-4 bg-white rounded-full mb-4">
                <Mail className="w-8 h-8" style={{color: '#A32424'}} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Email</h3>
              <p className="text-white">masafient@yahoo.com</p>
            </div>
          </div>

         
        </div>
      </section>

      {/* Footer with WhatsApp Integration */}
      <footer className="py-12 px-4" style={{backgroundColor: '#625A62'}}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-3" style={{backgroundColor: '#A32424'}}>
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Masafi Enterprises Ltd</h3>
                  <p className="text-gray-300">Your Trusted Power Equipment Partner Since 2008</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Leading supplier of power equipment and industrial tools across East Africa. 
                Serving thousands of satisfied customers with quality products and excellent service.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#products" className="text-gray-300 hover:text-white transition-colors">Products</a></li>
                <li><a href="#locations" className="text-gray-300 hover:text-white transition-colors">Locations</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Contact & WhatsApp */}
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Get In Touch</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-gray-300 mr-3" />
                  <span className="text-gray-300">0714 22 22 55</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-gray-300 mr-3" />
                  <span className="text-gray-300">masafient@yahoo.com</span>
                </div>
                
                {/* WhatsApp Button in Footer */}
                <button 
                  onClick={openWhatsApp}
                  className="flex items-center w-full px-4 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 mt-4"
                  style={{backgroundColor: '#25D366', color: 'white'}}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chat on WhatsApp
                </button>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-600 pt-8 text-center">
            <p className="text-gray-300">
              © 2024 Masafi Enterprises Ltd. All rights reserved. | Serving East Africa with Excellence
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative">
          {/* Tooltip */}
          {showWhatsAppTooltip && (
            <div className="absolute bottom-16 right-0 bg-black text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap">
              Chat with us on WhatsApp!
              <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black"></div>
            </div>
          )}
          
          {/* WhatsApp Button */}
          <button
            onClick={openWhatsApp}
            onMouseEnter={() => setShowWhatsAppTooltip(true)}
            onMouseLeave={() => setShowWhatsAppTooltip(false)}
            className="w-16 h-16 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center animate-pulse"
            style={{backgroundColor: '#25D366'}}
          >
            <MessageCircle className="w-8 h-8 text-white" />
          </button>
        </div>
      </div>
    </div>
  
  );
};

export default Landingpage;