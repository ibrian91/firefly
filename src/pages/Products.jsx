import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import productsImage from '../assets/images/products2.png';
import prodcutsImage2 from '../assets/images/products3.png';
import gobo1 from '../assets/images/gobo1.png';
import gobo2 from '../assets/images/gobo2.png';
import gobo3 from '../assets/images/gobo3.png';
import gobo4 from '../assets/images/gobo4.png';
import gobo5 from '../assets/images/gobo5.png';
import gobo6 from '../assets/images/gobo6.png';
import gobo7 from '../assets/images/gobo7.png';
import gobo8 from '../assets/images/gobo8.png';
import { Link } from 'react-router-dom';
import Footer from './Footer';


const scrollToGobosSection = () => {
  const gobosSection = document.getElementById('gobos-section');
  gobosSection.scrollIntoView({ behavior: 'smooth' });
};

const Products = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out',
      once: true,
      offset: 120,
    });
  }, []);

  const gobos = [
    { id: 1, name: "H series Projection Lamp", image: gobo1, description: "Lámpara de proyección ideal para efectos de iluminación general.", variations: ["15W", "25W", "35W", "50W"] },
    { id: 2, name: "Popular M series Projection Lamp", image: gobo2, description: "Proyección de patrones en alta definición.", variations: ["Consultar: de 15W a 100W"] },
    { id: 3, name: "High Power Projection Lamp", image: gobo3, description: "Efecto de proyección de ondas de agua.", variations: ["150W", "200W", "300W", "600W"] },
    { id: 4, name: "Water ripple Projection Lamp", image: gobo4, description: "Lámpara de proyección con cambio de color.", variations: ["40W-600W"] },
    { id: 5, name: "Color Dynamic and Static Projection Lamp", image: gobo5, description: "Lámpara de proyección con cambio de color.", variations: ["15W-300W"] },
    { id: 6, name: "4 GOBO still projection lamp", image: gobo6, description: "Lámpara de proyección con 4 GOBOs fijos.", variations: ["40W-300W"] },
    { id: 7, name: "4 GOBO spin projection lamp", image: gobo7, description: "Lámpara de proyección con 4 GOBOs giratorios.", variations: ["40W-600W"] },
    { id: 8, name: "7 GOBO projection lamp", image: gobo8, description: "Lámpara de proyección con 7 GOBOs.", variations: ["60W-600W"] }
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
      <section className="text-center my-20 relative">
  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 opacity-60"></div>
  <div className="relative z-10">
    <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold text-white leading-tight mb-6">
      <span className="block">El Arte de la Proyección</span>
      <span className="block text-yellow-400 mt-4">Descubre Nuestros Gobos</span>
    </h1>
    <p className="text-lg sm:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
      Sumérgete en la innovación de la iluminación con nuestra colección de gobos diseñados para transformar cualquier ambiente. 
    </p>
  
  </div>
</section>
      <section className="relative w-full min-h-[70vh] flex items-center justify-center text-center text-white">
        <div className="flex w-full h-full items-center justify-center space-x-4 px-6 sm:px-12 md:px-24 lg:px-32">
          <img src={productsImage} alt="Imagen de producto 1" className="w-full sm:w-2/3 md:w-1/2 lg:w-1/2 h-auto object-cover rounded-md" />
          <div className="flex flex-col items-center text-center sm:text-left max-w-lg">
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 relative">OUTDOOR</h2>
            <span className="animate-pulse" onClick={scrollToGobosSection} style={{ cursor: 'pointer' }}>
              <div className="w-12 h-12 flex items-center justify-center bg-white text-gray-800 rounded-full">
                <span className="text-2xl">&#8592;</span>
              </div>
            </span>
            <div className="my-12"></div>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 relative">INDOOR</h2>
            <span className="animate-pulse" onClick={scrollToGobosSection} style={{ cursor: 'pointer' }}>
              <div className="w-12 h-12 flex items-center justify-center bg-white text-gray-800 rounded-full">
                <span className="text-2xl">&#8594;</span>
              </div>
            </span>
          </div>
          <img src={prodcutsImage2} alt="Imagen de producto 2" className="w-full sm:w-2/3 md:w-1/2 lg:w-1/2 h-auto object-cover rounded-md" />
        </div>
      </section>

      <div id="gobos-section" style={{
    textAlign: 'center', 
    padding: '40px', 
    backgroundColor: '#1a1a1a', 
    borderRadius: '8px', 
    boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.3)', 
    marginBottom: '40px', 
    color: '#f3f4f6'
  }}>
  <p style={{
    fontSize: '1.25rem',
    lineHeight: '1.8',
    fontWeight: '500',
    maxWidth: '800px',
    margin: '0 auto',
    color: '#d1d5db',
    textTransform: 'uppercase',
    letterSpacing: '1px'
  }}>
    Ofrecemos gobos tanto para <span style={{ color: '#ff6347', fontWeight: 'bold' }}>INDOOR</span> como <span style={{ color: '#ff6347', fontWeight: 'bold' }}>OUTDOOR</span>, es por eso que tenemos lo que estas buscando.
  </p>
  <p style={{
    fontSize: '1.125rem', 
    marginTop: '20px', 
    fontWeight: '400', 
    color: '#b4b4b4',
    textAlign: 'center',
    fontStyle: 'italic'
  }}>
    Encuentra el mejor rendimiento para tus proyectos con nuestros productos diseñados específicamente para cualquier ambiente.
  </p>
</div>


      <section className="py-16 px-6 md:px-12 bg-gray-900 text-white" data-aos="fade-up">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {gobos.map((gobo) => (
            <div key={gobo.id} className="bg-[#121212] p-6 rounded-lg shadow-lg w-full text-center transform hover:scale-105 transition">
              <img src={gobo.image} alt={gobo.name} className="mb-4 h-48 object-cover rounded-lg mx-auto" style={{ objectFit: 'cover' }} />
              <h4 className="text-2xl font-semibold text-gray-200 mb-2">{gobo.name}</h4>
              <p className="text-lg text-gray-300">{gobo.description}</p>
              {gobo.variations.length > 0 && (
                <div className="mt-4">
                  <p className="font-bold mb-2">Potencia:</p>
                  <ul className="list-disc list-inside text-gray-300">
                    {gobo.variations.map((watt, index) => (
                      <li key={index}>{watt}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 text-white text-center" data-aos="zoom-in">
        <h3 className="text-3xl font-semibold mb-6">¡Adquiere el tuyo hoy mismo!</h3>
        <p className="text-lg mb-8">
          No esperes más para tener en tus manos los productos más innovadores del mercado. ¡Haz tu pedido ahora y marca la diferencia!
        </p>
        <Link 
  to="/contact" 
  className="px-8 py-4 bg-indigo-700 rounded-full text-lg hover:bg-indigo-800 transition duration-300"
>
  Contáctanos
</Link>
      </section>

      
      <Footer/>

    </div>

    
  );
};

export default Products;
