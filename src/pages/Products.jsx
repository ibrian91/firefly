import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importar los estilos de AOS
import productsImage from '../assets/images/products2.png';
import prodcutsImage2 from '../assets/images/products3.png';

const Products = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duración de la animación
      easing: 'ease-out', // Efecto de aceleración
      once: true, // Las animaciones solo se disparan una vez
      offset: 120, // Desplazamiento para que la animación ocurra cuando el elemento esté cerca de la vista
    });
  }, []);

  // Array de productos (simulado con imágenes y nombres)
  const products = Array.from({ length: 25 }, (_, index) => ({
    id: index + 1,
    name: `Producto ${index + 1}`,
    image: `https://via.placeholder.com/250x250?text=Producto+${index + 1}`, // Usando imágenes más pequeñas
  }));

  return (
    <div>
      {/* Encabezado vibrante */}

      <section className="relative w-full min-h-[70vh] flex items-center justify-center text-center text-white">
  {/* Contenedor con flexbox para las dos imágenes */}
  <div className="flex w-full h-full items-center justify-center space-x-4 px-6 sm:px-12 md:px-24 lg:px-32">
    
    {/* Imagen 1 */}
    <img 
      src={productsImage} 
      alt="Imagen de producto 1"
      className="w-full sm:w-2/3 md:w-1/2 lg:w-1/2 h-auto object-cover rounded-md"
    />

    {/* Contenido de texto */}
<div className="flex flex-col items-center text-center sm:text-left max-w-lg">
  {/* Parte de OUTDOOR */}
  <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 relative">
    OUTDOOR
  </h2>
  {/* Círculo con flecha titilante hacia la izquierda debajo */}
  <span className="animate-pulse">
    <div className="w-12 h-12 flex items-center justify-center bg-white text-gray-800 rounded-full">
      <span className="text-2xl">&#8592;</span> {/* Flecha izquierda */}
    </div>
  </span>

  {/* Espacio entre OUTDOOR e INDOOR */}
  <div className="my-12"></div> {/* Ajusta este margen para obtener el espacio que prefieras */}

  {/* Parte de INDOOR */}
  <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 relative">
    INDOOR
  </h2>
  {/* Círculo con flecha titilante hacia la derecha debajo */}
  <span className="animate-pulse">
    <div className="w-12 h-12 flex items-center justify-center bg-white text-gray-800 rounded-full">
      <span className="text-2xl">&#8594;</span> {/* Flecha derecha */}
    </div>
  </span>
</div>

    {/* Imagen 2 */}
    <img 
      src={prodcutsImage2} 
      alt="Imagen de producto 2"
      className="w-full sm:w-2/3 md:w-1/2 lg:w-1/2 h-auto object-cover rounded-md"
    />
  </div>
</section>

      {/* Galería de Productos */}
      <section className="py-16 px-6 md:px-12 bg-[#1a1a1a]" data-aos="fade-up">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-[#121212] p-6 rounded-lg shadow-lg w-72 text-center transition transform hover:scale-105"
              data-aos="zoom-in"
            >
              <img
                src={product.image}
                alt={product.name}
                className="mb-4 w-full h-48 object-cover rounded-lg mx-auto"
              />
              <h4 className="text-xl font-semibold text-gray-200 mb-4">{product.name}</h4>
              <p className="text-lg text-gray-300">
                Producto destacado, ideal para quienes buscan lo mejor en diseño y funcionalidad.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Sección de Llamado a la acción */}
      <section className="py-16 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 text-white text-center" data-aos="zoom-in">
        <h3 className="text-3xl font-semibold mb-6">¡Adquiere el tuyo hoy mismo!</h3>
        <p className="text-lg mb-8">
          No esperes más para tener en tus manos los productos más innovadores del mercado. ¡Haz tu pedido ahora y marca la diferencia!
        </p>
        <a href="#contact" className="px-8 py-4 bg-indigo-700 rounded-full text-lg hover:bg-indigo-800 transition duration-300">
          Contáctanos
        </a>
      </section>
    </div>
  );
};

export default Products;