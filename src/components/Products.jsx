// import React, { useState } from 'react';
// import { 
//   Phone, 
//   Mail, 
//   MapPin, 
//   Star, 
//   Wrench, 
//   Shield, 
//   Award, 
//   Menu, 
//   X,
//   ChevronRight,
//   Zap,
//   Droplets,
//   Car,
//   Scissors,
//   Wind,
//   Settings,
//   Filter,
//   Search,
//   Eye,
//   ShoppingCart,
//   ArrowLeft,
//   Fuel,
//   Battery,
//   Gauge,
//   Package
// } from 'lucide-react';
// import img420 from '../assets/420.png'
// import { useNavigate } from 'react-router-dom';

// const ProductsPage = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [selectedCategory, setSelectedCategory] = useState('All');
//   const [searchTerm, setSearchTerm] = useState('');
//   const navigate = useNavigate()

//   const categories = [
//     'All',
//     'Sawing & Cutting',
//     'Lawn Care',
//     'Power Solutions',
//     'Cleaning Equipment',
//     'Parts & Accessories'
//   ];

//   const products = [
//     // Sawing & Cutting
//     {
//       id: 1,
//       name: "Husqvarna 420 Chainsaw",
//       category: "Sawing & Cutting",
//       brand: "Husqvarna",
//       // price: "KSh 45,000",
//       features: ["18\" bar length", "50.2cc engine", "X-Torq technology", "LowVib system"],
//       description: "Professional-grade chainsaw perfect for felling, limbing and bucking.",
//       image: img420,
//       inStock: true,
//       popular: true
//     },
//     {
//       id: 2,
//       name: "Husqvarna 120 Mark II Chainsaw",
//       category: "Sawing & Cutting",
//       brand: "Husqvarna",
//       price: "KSh 28,000",
//       features: ["14\" bar length", "38.2cc engine", "Easy start", "Low emissions"],
//       description: "Lightweight chainsaw ideal for homeowners and occasional use.",
//       image: "/api/placeholder/300/250",
//       inStock: true,
//       popular: false
//     },
//     {
//       id: 3,
//       name: "Oregon Pole Saw PS250",
//       category: "Sawing & Cutting",
//       brand: "Oregon",
//       price: "KSh 35,000",
//       features: ["8ft extension", "25cc engine", "Automatic oiler", "Anti-vibration"],
//       description: "Perfect for pruning high branches safely from the ground.",
//       image: "/api/placeholder/300/250",
//       inStock: true,
//       popular: false
//     },

//     // Lawn Care
//     {
//       id: 4,
//       name: "Husqvarna LC 347V Lawn Mower",
//       category: "Lawn Care",
//       brand: "Husqvarna",
//       price: "KSh 85,000",
//       features: ["Variable speed", "47cm cutting width", "Honda engine", "Mulching capability"],
//       description: "Self-propelled lawn mower with superior cutting performance.",
//       image: "/api/placeholder/300/250",
//       inStock: true,
//       popular: true
//     },
//     {
//       id: 5,
//       name: "Husqvarna 525RX Brush Cutter",
//       category: "Lawn Care",
//       brand: "Husqvarna",
//       price: "KSh 42,000",
//       features: ["25.4cc engine", "Bike handle", "Tap 'n' go head", "Easy start"],
//       description: "Heavy-duty brush cutter for thick grass and light brush.",
//       image: "/api/placeholder/300/250",
//       inStock: true,
//       popular: false
//     },
//     {
//       id: 6,
//       name: "Husqvarna 122HD45 Hedge Trimmer",
//       category: "Lawn Care",
//       brand: "Husqvarna",
//       price: "KSh 32,000",
//       features: ["18\" blade", "21.7cc engine", "Double-sided cutting", "Low noise"],
//       description: "Professional hedge trimmer for precise shaping and trimming.",
//       image: "/api/placeholder/300/250",
//       inStock: true,
//       popular: false
//     },

//     // Power Solutions
//     {
//       id: 7,
//       name: "5KVA Petrol Generator",
//       category: "Power Solutions",
//       brand: "Masafi",
//       price: "KSh 75,000",
//       features: ["5000W output", "Electric start", "12hr runtime", "Voltage regulator"],
//       description: "Reliable backup power for homes and small businesses.",
//       image: "/api/placeholder/300/250",
//       inStock: true,
//       popular: true
//     },
//     {
//       id: 8,
//       name: "2KVA Silent Generator",
//       category: "Power Solutions",
//       brand: "Masafi",
//       price: "KSh 45,000",
//       features: ["2000W output", "Silent operation", "Fuel efficient", "Compact design"],
//       description: "Quiet generator perfect for residential areas and camping.",
//       image: "/api/placeholder/300/250",
//       inStock: true,
//       popular: false
//     },
//     {
//       id: 9,
//       name: "3\" Water Pump",
//       category: "Power Solutions",
//       brand: "Masafi",
//       price: "KSh 35,000",
//       features: ["3\" inlet/outlet", "26m max head", "600L/min flow", "Self-priming"],
//       description: "High-capacity water pump for irrigation and construction.",
//       image: "/api/placeholder/300/250",
//       inStock: true,
//       popular: false
//     },
//     {
//       id: 10,
//       name: "2\" Water Pump",
//       category: "Power Solutions",
//       brand: "Masafi",
//       price: "KSh 28,000",
//       features: ["2\" inlet/outlet", "20m max head", "400L/min flow", "Lightweight"],
//       description: "Portable water pump ideal for farms and emergency use.",
//       image: "/api/placeholder/300/250",
//       inStock: true,
//       popular: false
//     },

//     // Cleaning Equipment
//     {
//       id: 11,
//       name: "High Pressure Car Wash",
//       category: "Cleaning Equipment",
//       brand: "Masafi",
//       price: "KSh 55,000",
//       features: ["180 bar pressure", "Electric motor", "Foam cannon", "20m hose"],
//       description: "Professional car wash system for commercial use.",
//       image: "/api/placeholder/300/250",
//       inStock: true,
//       popular: true
//     },
//     {
//       id: 12,
//       name: "Husqvarna 125BVx Leaf Blower",
//       category: "Cleaning Equipment",
//       brand: "Husqvarna",
//       price: "KSh 38,000",
//       features: ["28cc engine", "170 mph air speed", "Cruise control", "Low weight"],
//       description: "Powerful leaf blower for yard cleanup and maintenance.",
//       image: "/api/placeholder/300/250",
//       inStock: true,
//       popular: false
//     },

//     // Parts & Accessories
//     {
//       id: 13,
//       name: "Chainsaw Chains (Various Sizes)",
//       category: "Parts & Accessories",
//       brand: "Oregon",
//       price: "From KSh 2,500",
//       features: ["Multiple sizes", "Sharp cutting", "Durable steel", "Easy installation"],
//       description: "Replacement chains for all chainsaw models we sell.",
//       image: "/api/placeholder/300/250",
//       inStock: true,
//       popular: false
//     },
//     {
//       id: 14,  
//       name: "Generator Capacitors",
//       category: "Parts & Accessories",
//       brand: "Universal",
//       price: "From KSh 1,800",
//       features: ["Various ratings", "High quality", "Long lasting", "Easy replacement"],
//       description: "Quality capacitors for generator maintenance and repair.",
//       image: "/api/placeholder/300/250",
//       inStock: true,
//       popular: false
//     },
//     {
//       id: 15,
//       name: "Air Filters & Spark Plugs",
//       category: "Parts & Accessories",
//       brand: "Universal",
//       price: "From KSh 500",
//       features: ["OEM quality", "Multiple models", "Easy installation", "Performance boost"],
//       description: "Essential maintenance parts for optimal equipment performance.",
//       image: "/api/placeholder/300/250",
//       inStock: true,
//       popular: false
//     }
//   ];

//   const filteredProducts = products.filter(product => {
//     const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
//     const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          product.brand.toLowerCase().includes(searchTerm.toLowerCase());
//     return matchesCategory && matchesSearch;
//   });

//   const getCategoryIcon = (category) => {
//     switch(category) {
//       case 'Sawing & Cutting': return <Scissors className="w-5 h-5" />;
//       case 'Lawn Care': return <Wind className="w-5 h-5" />;
//       case 'Power Solutions': return <Zap className="w-5 h-5" />;
//       case 'Cleaning Equipment': return <Car className="w-5 h-5" />;
//       case 'Parts & Accessories': return <Settings className="w-5 h-5" />;
//       default: return <Package className="w-5 h-5" />;
//     }
//   };

//   function handleClick () {
//     navigate("/")
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <header className="bg-white shadow-lg sticky top-0 z-50" style={{backgroundColor: '#F3F3F3'}}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center py-4">
//             <div className="flex items-center">
//               <button className="mr-4 p-2 hover:bg-gray-200 rounded-lg" onClick={handleClick}>
//                 <ArrowLeft className="w-6 h-6" style={{color: '#625A62'}} />
//               </button>
//               <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-3" style={{backgroundColor: '#A32424'}}>
//                 <Zap className="w-8 h-8 text-white" />
//               </div>
//               <div>
//                 <h1 className="text-2xl font-bold" style={{color: '#A32424'}}>Masafi Products</h1>
//                 <p className="text-sm" style={{color: '#625A62'}}>Premium Power Equipment Catalog</p>
//               </div>
//             </div>
            
//             {/* Desktop Navigation */}
//             <nav className="hidden md:flex items-center space-x-6">
//               <div className="flex items-center space-x-2">
//                 <Phone className="w-4 h-4" style={{color: '#A32424'}} />
//                 <span className="text-sm font-medium" style={{color: '#625A62'}}>0714 22 22 55</span>
//               </div>
//               {/* <button className="px-4 py-2 rounded-lg font-medium transition-colors" style={{backgroundColor: '#A32424', color: 'white'}}>
//                 Contact Us
//               </button> */}
//             </nav>

//             {/* Mobile menu button */}
//             <button 
//               className="md:hidden p-2"
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//             >
//               {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section className="py-16 px-4" style={{backgroundColor: '#A32424'}}>
//         <div className="max-w-7xl mx-auto text-center">
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
//             Premium Power Equipment
//           </h2>
//           <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
//             Discover our comprehensive range of professional-grade tools and equipment from trusted brands like Husqvarna and Oregon
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//             <div className="text-white text-lg">
//               <span className="font-semibold">{products.length}</span> Products Available
//             </div>
//             <div className="text-white text-lg">
//               <span className="font-semibold">15+</span> Years Experience
//             </div>
//             <div className="text-white text-lg">
//               <span className="font-semibold">100%</span> Genuine Parts
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Filters and Search */}
//       <section className="py-8 px-4 bg-white border-b">
//         <div className="max-w-7xl mx-auto">
//           <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
//             {/* Search */}
//             <div className="relative flex-1 max-w-md">
//               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" style={{color: '#625A62'}} />
//               <input
//                 type="text"
//                 placeholder="Search products..."
//                 className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
//                 style={{focusRingColor: '#A32424'}}
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//               />
//             </div>

//             {/* Category Filter */}
//             <div className="flex flex-wrap gap-2">
//               {categories.map((category) => (
//                 <button
//                   key={category}
//                   onClick={() => setSelectedCategory(category)}
//                   className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 ${
//                     selectedCategory === category
//                       ? 'text-white shadow-md'
//                       : 'bg-gray-100 hover:bg-gray-200'
//                   }`}
//                   style={{
//                     backgroundColor: selectedCategory === category ? '#A32424' : undefined,
//                     color: selectedCategory === category ? 'white' : '#625A62'
//                   }}
//                 >
//                   {category !== 'All' && getCategoryIcon(category)}
//                   {category}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <div className="mt-4 text-center" style={{color: '#625A62'}}>
//             Showing {filteredProducts.length} of {products.length} products
//             {selectedCategory !== 'All' && ` in ${selectedCategory}`}
//           </div>
//         </div>
//       </section>

//       {/* Products Grid */}
//       <section className="py-12 px-4">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//             {filteredProducts.map((product) => (
//               <div key={product.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                
//                 {/* Product Image */}
//                 <div className="relative overflow-hidden">
                  
//                   <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
//                     <div className="text-center" style={{color: '#625A62'}}>
//                       {/* <Package className="w-16 h-16 mx-auto mb-2 opacity-40" />
//                       <p className="text-sm opacity-60">Product Image</p> */}
//                       <img 
//                       src='{product.image}'
//                       alt='{product.name}'
//                       />
//                     </div>
//                   </div>
                  
//                   {/* Badges */}
//                   <div className="absolute top-3 left-3 flex flex-col gap-2">
//                     {product.popular && (
//                       <span className="px-2 py-1 text-xs font-bold text-white rounded-full" style={{backgroundColor: '#A32424'}}>
//                         Popular
//                       </span>
//                     )}
//                     {product.inStock && (
//                       <span className="px-2 py-1 text-xs font-bold text-white rounded-full" style={{backgroundColor: '#C17671'}}>
//                         In Stock
//                       </span>
//                     )}
//                   </div>

//                   {/* Hover Actions */}
//                   {/* <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
//                     <div className="flex gap-3">
//                       <button className="p-3 bg-white rounded-full hover:scale-105 transition-transform">
//                         <Eye className="w-5 h-5" style={{color: '#A32424'}} />
//                       </button>
//                       <button className="p-3 rounded-full hover:scale-105 transition-transform" style={{backgroundColor: '#A32424'}}>
//                         <ShoppingCart className="w-5 h-5 text-white" />
//                       </button>
//                     </div>
//                   </div> */}
//                 </div>

//                 {/* Product Info */}
//                 <div className="p-6">
//                   <div className="flex items-center justify-between mb-2">
//                     <span className="text-sm font-medium px-2 py-1 rounded" style={{backgroundColor: '#F3F3F3', color: '#625A62'}}>
//                       {product.brand}
//                     </span>
//                     <div className="flex items-center gap-1">
//                       {getCategoryIcon(product.category)}
//                     </div>
//                   </div>
                  
//                   <h3 className="text-lg font-bold mb-2 line-clamp-2" style={{color: '#A32424'}}>
//                     {product.name}
//                   </h3>
                  
//                   <p className="text-sm mb-4 line-clamp-2" style={{color: '#625A62'}}>
//                     {product.description}
//                   </p>

//                   {/* Features */}
//                   <div className="mb-4">
//                     <h4 className="text-sm font-semibold mb-2" style={{color: '#625A62'}}>Key Features:</h4>
//                     <ul className="text-xs space-y-1">
//                       {product.features.slice(0, 3).map((feature, index) => (
//                         <li key={index} className="flex items-center" style={{color: '#625A62'}}>
//                           <ChevronRight className="w-3 h-3 mr-1" style={{color: '#C17671'}} />
//                           {feature}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>

//                   {/* Price and Actions */}
//                   {/* <div className="flex items-center justify-between pt-4 border-t" style={{borderColor: '#F3F3F3'}}>
//                     <div>
//                       <span className="text-2xl font-bold" style={{color: '#A32424'}}>
//                         {product.price}
//                       </span>
//                     </div>
//                     <button className="px-4 py-2 rounded-lg font-medium text-white transition-all duration-200 hover:scale-105" style={{backgroundColor: '#A32424'}}>
//                       Inquire
//                     </button>
//                   </div> */}
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* No Results */}
//           {filteredProducts.length === 0 && (
//             <div className="text-center py-16">
//               <Package className="w-16 h-16 mx-auto mb-4 opacity-40" style={{color: '#625A62'}} />
//               <h3 className="text-xl font-semibold mb-2" style={{color: '#625A62'}}>No Products Found</h3>
//               <p style={{color: '#625A62'}}>Try adjusting your search or filter criteria</p>
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Featured Brands */}
//       <section className="py-16 px-4" style={{backgroundColor: '#F3F3F3'}}>
//         <div className="max-w-7xl mx-auto text-center">
//           <h2 className="text-3xl font-bold mb-8" style={{color: '#A32424'}}>Authorized Dealer</h2>
//           <p className="text-lg mb-12 max-w-3xl mx-auto" style={{color: '#625A62'}}>
//             We are proud authorized dealers of industry-leading brands, ensuring you get genuine products with full manufacturer warranties.
//           </p>
          
//           <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
//             <div className="p-8 bg-white rounded-xl shadow-lg">
//               <div className="w-16 h-16 mx-auto mb-4 rounded-lg flex items-center justify-center" style={{backgroundColor: '#A32424'}}>
//                 <Award className="w-8 h-8 text-white" />
//               </div>
//               <h3 className="text-2xl font-bold mb-4" style={{color: '#A32424'}}>Husqvarna</h3>
//               <p style={{color: '#625A62'}}>World leader in outdoor power products for forest, park and garden care</p>
//             </div>
            
//             <div className="p-8 bg-white rounded-xl shadow-lg">
//               <div className="w-16 h-16 mx-auto mb-4 rounded-lg flex items-center justify-center" style={{backgroundColor: '#C17671'}}>
//                 <Shield className="w-8 h-8 text-white" />
//               </div>
//               <h3 className="text-2xl font-bold mb-4" style={{color: '#A32424'}}>Oregon</h3>
//               <p style={{color: '#625A62'}}>Premium cutting systems and outdoor power equipment accessories</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-16 px-4" style={{backgroundColor: '#A32424'}}>
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-3xl font-bold text-white mb-4">Ready to Purchase?</h2>
//           <p className="text-xl text-white mb-8">
//             Get expert advice and competitive pricing on all our products. Visit our showrooms or contact us directly.
//           </p>
          
//           <div className="grid md:grid-cols-3 gap-6 mb-8">
//             <div className="flex items-center justify-center text-white">
//               <Phone className="w-6 h-6 mr-3" />
//               <div>
//                 <div className="font-semibold">Call Us</div>
//                 <div className="text-sm opacity-90">0714 22 22 55</div>
//               </div>
//             </div>
            
//             <div className="flex items-center justify-center text-white">
//               <Mail className="w-6 h-6 mr-3" />
//               <div>
//                 <div className="font-semibold">Email Us</div>
//                 <div className="text-sm opacity-90">masafient@yahoo.com</div>
//               </div>
//             </div>
            
//             <div className="flex items-center justify-center text-white">
//               <MapPin className="w-6 h-6 mr-3" />
//               <div>
//                 <div className="font-semibold">Visit Us</div>
//                 <div className="text-sm opacity-90">2 Nairobi Locations</div>
//               </div>
//             </div>
//           </div>

//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button className="px-8 py-4 bg-white rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105" style={{color: '#A32424'}}>
//               Contact Sales Team
//             </button>
//             <button className="px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105" style={{backgroundColor: '#C17671', color: 'white'}}>
//               Request Quote
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="py-8 px-4" style={{backgroundColor: '#625A62'}}>
//         <div className="max-w-7xl mx-auto text-center">
//           <div className="flex items-center justify-center mb-4">
//             <div className="w-10 h-10 rounded-lg flex items-center justify-center mr-3" style={{backgroundColor: '#A32424'}}>
//               <Zap className="w-6 h-6 text-white" />
//             </div>
//             <div>
//               <h3 className="text-lg font-bold text-white">Masafi Enterprises Ltd</h3>
//               <p className="text-gray-300 text-sm">Your Trusted Power Equipment Partner Since 2008</p>
//             </div>
//           </div>
//           <p className="text-gray-300 text-sm">
//             © 2024 Masafi Enterprises Ltd. All rights reserved.
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default ProductsPage;

import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Star, 
  Wrench, 
  Shield, 
  Award, 
  Menu, 
  X,
  ChevronRight,
  Zap,
  Droplets,
  Car,
  Scissors,
  Wind,
  Settings,
  Filter,
  Search,
  Eye,
  ShoppingCart,
  ArrowLeft,
  Fuel,
  Battery,
  Gauge,
  Package
} from 'lucide-react';
import { Navigate, useNavigate } from 'react-router-dom';

// Import images from assets folder
import img420 from '../assets/420.png';
import img272 from '../assets/272.png';
import oregonPolesaw from '../assets/ps250.jpg';
import lawnMower from '../assets/LC151.webp';
import brushCutter from '../assets/129R.webp';
import hedgeTrimmer from '../assets/522HD60S.webp';
import G1300P from '../assets/G1300P.webp';
import G8500P from '../assets/G8500P.webp';
import W40P from '../assets/W40P.webp';
import W80P from '../assets/W80P.webp';
import pressureWasher from '../assets/480pw.webp'
import carWash from '../assets/pw125.webp';
import leafBlower from '../assets/120ib.webp';
import chainsawChains from '../assets/chain.png';
import capacitors from '../assets/capacitor.jpeg';
import airFilters from '../assets/Airfilter.jpeg';

const ProductsPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate()
  
  // Mock navigate function for demo
  // const navigate = (path) => {
  //   console.log(`Navigate to: ${path}`);
  // };

  const categories = [
    'All',
    'Sawing & Cutting',
    'Lawn Care',
    'Power Solutions',
    'Cleaning Equipment',
    'Parts & Accessories'
  ];

  const products = [
    // Sawing & Cutting
    {
      id: 1,
      name: "Husqvarna 420 Chainsaw",
      category: "Sawing & Cutting",
      brand: "Husqvarna",
      features: ["18\" bar length", "50.2cc engine", "X-Torq technology", "LowVib system"],
      description: "Professional-grade chainsaw perfect for felling, limbing and bucking.",
      image: img420,
      inStock: true,
      popular: true
    },
    {
      id: 2,
      name: "Husqvarna 120 Mark II Chainsaw",
      category: "Sawing & Cutting",
      brand: "Husqvarna",
      price: "KSh 28,000",
      features: ["14\" bar length", "38.2cc engine", "Easy start", "Low emissions"],
      description: "Lightweight chainsaw ideal for homeowners and occasional use.",
      image: img272,
      inStock: true,
      popular: false
    },
    {
      id: 3,
      name: "Oregon Pole Saw PS250",
      category: "Sawing & Cutting",
      brand: "Oregon",
      price: "KSh 35,000",
      features: ["8ft extension", "25cc engine", "Automatic oiler", "Anti-vibration"],
      description: "Perfect for pruning high branches safely from the ground.",
      image: oregonPolesaw,
      inStock: true,
      popular: false
    },

    // Lawn Care
    {
      id: 4,
      name: "Husqvarna LC 151 Lawn Mower",
      category: "Lawn Care",
      brand: "Husqvarna",
      price: "KSh 85,000",
      features: ["Engine cooling: Air", "51cm cutting width", "Engine lubrication type: Splash", "Mulching capability"],
      description: "Self-propelled lawn mower with superior cutting performance.",
      image: lawnMower,
      inStock: true,
      popular: true
    },
    {
      id: 5,
      name: "Husqvarna 129R Brush Cutter",
      category: "Lawn Care",
      brand: "Husqvarna",
      price: "KSh 42,000",
      features: ["Cylinder displacement  27.6 cm³","Output shaft power; 0.85 kW", "Fuel tank volume 0.45 l", "Easy start"],
      description: "Heavy-duty brush cutter for thick grass and light brush.",
      image: brushCutter,
      inStock: true,
      popular: false
    },
    {
      id: 6,
      name: "Husqvarna 522HD60S Hedge Trimmer",
      category: "Lawn Care",
      brand: "Husqvarna",
      price: "KSh 32,000",
      features: ["21.7 cm³ Cylinder displacement ", "21.7cc engine", "knife length 60cm", "Low noise"],
      description: "Professional hedge trimmer for precise shaping and trimming.",
      image: hedgeTrimmer,
      inStock: true,
      popular: false
    },

    // Power Solutions
    {
      id: 7,
      name: "Husqvarna G1300 P",
      category: "Power Solutions",
      brand: "Masafi",
      price: "KSh 75,000",
      features: ["800W output", "Recoil starter", "Fuel consumption 395 g/kWh", "Voltage regulator"],
      description: "Reliable backup power for homes and small businesses.",
      image: G1300P,
      inStock: true,
      popular: true
    },
    {
      id: 8,
      name: "Husqvarna G8500 P",
      category: "Power Solutions",
      brand: "Masafi",
      price: "KSh 45,000",
      features: ["2Power 7,500 W", "Cylinder displacement 459 cm³","Fuel tank volume 27 l"],
      description: "Big, powerful and efficient generator designed for powering work sites and homes",
      image: G8500P,
      inStock: true,
      popular: false
    },
    {
      id: 9,
      name: "3\" Water Pump",
      category: "Power Solutions",
      brand: "Masafi",
      price: "KSh 35,000",
      features: ["12,000 l/h Max delivery capacity","15 m Max delivery head","97 cm³ Cylinder displacement"],
      description: "Portable water pump ideal for farms and emergency use.",
      image: W40P,
      inStock: true,
      popular: false
    },
    {
      id: 10,
      name: "2\" Water Pump",
      category: "Power Solutions",
      brand: "Masafi",
      price: "KSh 28,000",
      features: ["54,000 l/h Max delivery capacity","28 m Max delivery head","196 cm³ Cylinder displacement"],
      description: " High-capacity water pump for irrigation and construction.",
      image: W80P,
      inStock: true,
      popular: false
    },

    // Cleaning Equipment
    {
      id: 11,
      name: "Husqvarna PW 125",
      category: "Cleaning Equipment",
      brand: "husqvarna",
      price: "KSh 55,000",
      features: ["180 bar pressure", "Electric motor", "Foam cannon", "20m hose"],
      description: "A compact high-pressure washer with strong cleaning power, ideal for patios and garden tools.",
      image: carWash,
      inStock: true,
      popular: true
    },
    {
      id: 12,
      name: "Husqvarna PW 480",
      category: "Cleaning Equipment",
      brand: "husqvarna",
      price: "KSh 55,000",
      features: ["180 bar pressure","540-610 l/h Water flow","brass head pump","Induction motor", "Foam cannon", "reenforced high pressure hose"],
      description: "A compact high-pressure washer with strong cleaning power, ideal for patios and garden tools.",
      image: pressureWasher,
      inStock: true,
      popular: true
    },
    {
      id: 13,
      name: "HUSQVARNA 120iB with battery and charger",
      category: "Cleaning Equipment",
      brand: "Husqvarna",
      price: "KSh 38,000",
      features: [ "9.6N Max Blow force","2 kg Weight (excl. battery)","36V Battery voltage"],
      description: "Powerful leaf blower for yard cleanup and maintenance.",
      image: leafBlower,
      inStock: true,
      popular: false
    },
    {
      id: 14,
      name: "HUSQVARNA 125BVx petrol leafblower",
      category: "Cleaning Equipment",
      brand: "Husqvarna",
      price: "KSh 38,000",
      features: [ "12.5N Max Blow force","4.35 kg Weight (complete product w/o side packed articles)"],
      description: "Powerful leaf blower for yard cleanup and maintenance.",
      image: leafBlower,
      inStock: true,
      popular: false
    },


    // Parts & Accessories
    {
      id: 15,
      name: "Chainsaw Chains (Various Sizes)",
      category: "Parts & Accessories",
      brand: "Oregon",
      price: "From KSh 2,500",
      features: ["Multiple sizes", "Sharp cutting", "Durable steel", "Easy installation"],
      description: "Replacement chains for all chainsaw models we sell.",
      image: chainsawChains,
      inStock: true,
      popular: false
    },
    {
      id: 16,  
      name: "Generator Capacitors",
      category: "Parts & Accessories",
      brand: "Universal",
      price: "From KSh 1,800",
      features: ["Various ratings", "High quality", "Long lasting", "Easy replacement"],
      description: "Quality capacitors for generator maintenance and repair.",
      image: capacitors,
      inStock: true,
      popular: false
    },
    {
      id: 17,
      name: "Air Filters & Spark Plugs",
      category: "Parts & Accessories",
      brand: "Universal",
      price: "From KSh 500",
      features: ["OEM quality", "Multiple models", "Easy installation", "Performance boost"],
      description: "Essential maintenance parts for optimal equipment performance.",
      image: airFilters,
      inStock: true,
      popular: false
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.brand.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'Sawing & Cutting': return <Scissors className="w-5 h-5" />;
      case 'Lawn Care': return <Wind className="w-5 h-5" />;
      case 'Power Solutions': return <Zap className="w-5 h-5" />;
      case 'Cleaning Equipment': return <Car className="w-5 h-5" />;
      case 'Parts & Accessories': return <Settings className="w-5 h-5" />;
      default: return <Package className="w-5 h-5" />;
    }
  };

  function handleClick () {
    navigate("/")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50" style={{backgroundColor: '#F3F3F3'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <button className="mr-4 p-2 hover:bg-gray-200 rounded-lg" onClick={handleClick}>
                <ArrowLeft className="w-6 h-6" style={{color: '#625A62'}} />
              </button>
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-3" style={{backgroundColor: '#A32424'}}>
                <Zap className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold" style={{color: '#A32424'}}>Masafi Products</h1>
                <p className="text-sm" style={{color: '#625A62'}}>Premium Power Equipment Catalog</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" style={{color: '#A32424'}} />
                <span className="text-sm font-medium" style={{color: '#625A62'}}>0714222255</span>
              </div>
            </nav>

            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4" style={{backgroundColor: '#A32424'}}>
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Premium Power Equipment
          </h2>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Discover our comprehensive range of professional-grade tools and equipment from trusted brands like Husqvarna and Oregon
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="text-white text-lg">
              <span className="font-semibold">{products.length}</span> Products Available
            </div>
            <div className="text-white text-lg">
              <span className="font-semibold">15+</span> Years Experience
            </div>
            <div className="text-white text-lg">
              <span className="font-semibold">100%</span> Genuine Parts
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 px-4 bg-white border-b">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" style={{color: '#625A62'}} />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                style={{focusRingColor: '#A32424'}}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 ${
                    selectedCategory === category
                      ? 'text-white shadow-md'
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                  style={{
                    backgroundColor: selectedCategory === category ? '#A32424' : undefined,
                    color: selectedCategory === category ? 'white' : '#625A62'
                  }}
                >
                  {category !== 'All' && getCategoryIcon(category)}
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-4 text-center" style={{color: '#625A62'}}>
            Showing {filteredProducts.length} of {products.length} products
            {selectedCategory !== 'All' && ` in ${selectedCategory}`}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                {/* Product Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      // Fallback to placeholder if image fails to load
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  {/* Fallback placeholder */}
                  <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center" style={{display: 'none'}}>
                    <div className="text-center" style={{color: '#625A62'}}>
                      <Package className="w-16 h-16 mx-auto mb-2 opacity-40" />
                      <p className="text-sm opacity-60">Product Image</p>
                    </div>
                  </div>
                  
                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-2">
                    {product.popular && (
                      <span className="px-2 py-1 text-xs font-bold text-white rounded-full" style={{backgroundColor: '#A32424'}}>
                        Popular
                      </span>
                    )}
                    {product.inStock && (
                      <span className="px-2 py-1 text-xs font-bold text-white rounded-full" style={{backgroundColor: '#C17671'}}>
                        In Stock
                      </span>
                    )}
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium px-2 py-1 rounded" style={{backgroundColor: '#F3F3F3', color: '#625A62'}}>
                      {product.brand}
                    </span>
                    <div className="flex items-center gap-1">
                      {getCategoryIcon(product.category)}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold mb-2 line-clamp-2" style={{color: '#A32424'}}>
                    {product.name}
                  </h3>
                  
                  <p className="text-sm mb-4 line-clamp-2" style={{color: '#625A62'}}>
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2" style={{color: '#625A62'}}>Key Features:</h4>
                    <ul className="text-xs space-y-1">
                      {product.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-center" style={{color: '#625A62'}}>
                          <ChevronRight className="w-3 h-3 mr-1" style={{color: '#C17671'}} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <Package className="w-16 h-16 mx-auto mb-4 opacity-40" style={{color: '#625A62'}} />
              <h3 className="text-xl font-semibold mb-2" style={{color: '#625A62'}}>No Products Found</h3>
              <p style={{color: '#625A62'}}>Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Featured Brands */}
      <section className="py-16 px-4" style={{backgroundColor: '#F3F3F3'}}>
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8" style={{color: '#A32424'}}>Authorized Dealer</h2>
          <p className="text-lg mb-12 max-w-3xl mx-auto" style={{color: '#625A62'}}>
            We are proud authorized dealers of industry-leading brands, ensuring you get genuine products with full manufacturer warranties.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="p-8 bg-white rounded-xl shadow-lg">
              <div className="w-16 h-16 mx-auto mb-4 rounded-lg flex items-center justify-center" style={{backgroundColor: '#A32424'}}>
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{color: '#A32424'}}>Husqvarna</h3>
              <p style={{color: '#625A62'}}>World leader in outdoor power products for forest, park and garden care</p>
            </div>
            
            <div className="p-8 bg-white rounded-xl shadow-lg">
              <div className="w-16 h-16 mx-auto mb-4 rounded-lg flex items-center justify-center" style={{backgroundColor: '#C17671'}}>
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{color: '#A32424'}}>Oregon</h3>
              <p style={{color: '#625A62'}}>Premium cutting systems and outdoor power equipment accessories</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4" style={{backgroundColor: '#A32424'}}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Purchase?</h2>
          <p className="text-xl text-white mb-8">
            Get expert advice and competitive pricing on all our products. Visit our showrooms or contact us directly.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center justify-center text-white">
              <Phone className="w-6 h-6 mr-3" />
              <div>
                <div className="font-semibold">Call Us</div>
                <div className="text-sm opacity-90">0714 22 22 55</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center text-white">
              <Mail className="w-6 h-6 mr-3" />
              <div>
                <div className="font-semibold">Email Us</div>
                <div className="text-sm opacity-90">masafient@yahoo.com</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center text-white">
              <MapPin className="w-6 h-6 mr-3" />
              <div>
                <div className="font-semibold">Visit Us</div>
                <div className="text-sm opacity-90">2 Nairobi Locations</div>
              </div>
            </div>
          </div>

          
            {/* <button className="px-8 py-4 bg-white rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105" style={{color: '#A32424'}}>
              Contact Sales Team
            </button>
            <button className="px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105" style={{backgroundColor: '#C17671', color: 'white'}}>
              Request Quote
            </button> */}
          
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4" style={{backgroundColor: '#625A62'}}>
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center mr-3" style={{backgroundColor: '#A32424'}}>
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Masafi Enterprises Ltd</h3>
              <p className="text-gray-300 text-sm">Your Trusted Power Equipment Partner Since 2008</p>
            </div>
          </div>
          <p className="text-gray-300 text-sm">
            © 2025 Masafi Enterprises Ltd. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ProductsPage;