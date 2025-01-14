import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importar los estilos de AOS
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


const Products = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duración de la animación
      easing: 'ease-out', // Efecto de aceleración
      once: true, // Las animaciones solo se disparan una vez
      offset: 120, // Desplazamiento para que la animación ocurra cuando el elemento esté cerca de la vista
    });
  }, []);

    // Array con los modelos de gobos extraídos
    const gobos = [
      {
        id: 1,
        name: "H series Projection Lamp",
        image: gobo1,
        description: "Lámpara de proyección ideal para efectos de iluminación general.",
        variations: ["15W", "25W", "35W","50W"]
      },
      {
        id: 2,
        name: "Popular M series Projection Lamp",
        image: gobo2,
        description: "Proyección de patrones en alta definición.",
        variations: ["Consultar: de 15W a 100W"]
      },
      {
        id: 3,
        name: "High Power Projection Lamp",
        image: gobo3,
        description: "Efecto de proyección de ondas de agua.",
        variations: ["150W", "200W", "300W","600W"]
      },
      {
        id: 4,
        name: "Water ripple Projection Lamp",
        image: gobo4,
        description: "Lámpara de proyección con cambio de color.",
        variations: ["40W-600W"]
      },
      {
        id: 5,
        name: "Color Dynamic and Static Projection Lamp",
        image: gobo5,
        description: "Lámpara de proyección con cambio de color.",
        variations: ["15W-300W"]
      },
      {
        id: 6,
        name: "4 GOBO still projection lamp",
        image: gobo6,
        description: "Lámpara de proyección con 4 GOBOs fijos.",
        variations: ["40W-300W"]
      },
      {
        id: 7,
        name: "4 GOBO spin projection lamp",
        image: gobo7,
        description: "Lámpara de proyección con 4 GOBOs giratorios.",
        variations: ["40W-600W"]
      },
      {
        id: 8,
        name: "7 GOBO projection lamp",
        image: gobo8,
        description: "Lámpara de proyección con 7 GOBOs.",
        variations: ["60W-600W"]
      }
    ];

  // Array de productos (simulado con imágenes y nombres)
/*   const products = Array.from({ length: 25 }, (_, index) => ({
    id: index + 1,
    name: `Producto ${index + 1}`,
    image: `https://via.placeholder.com/250x250?text=Producto+${index + 1}`, // Usando imágenes más pequeñas
  })); */

  return (
    <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
      {/* Encabezado vibrante */}
      <h1 
  style={{
    
    fontSize: '3rem',
    fontWeight: '400',
    paddingBottom: '10px',
    textAlign: 'center',
    width: '100%'
  }}
>
  NUESTROS GOBOS
</h1>
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

    <div>

      <p>Ofrecemos gobos tanto para INDOOR como OUTDOOR, es por eso que tenemos para tu medida segun el wataje y lo que estes buscando</p>
    


      {/* Galería de Productos */}
{/*       <section className="py-16 px-6 md:px-12 bg-[#1a1a1a]" data-aos="fade-up">
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
      </section> */}

    <section className="py-16 px-6 md:px-12 bg-gray-900 text-white" data-aos="fade-up">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {gobos.map((gobo) => (
  <div key={gobo.id} className="bg-[#121212] p-6 rounded-lg shadow-lg w-full text-center transform hover:scale-105 transition">
    <img 
      src={gobo.image} 
      alt={gobo.name} 
      className="mb-4 h-48 object-cover rounded-lg mx-auto" 
      style={{ objectFit: 'cover' }}  // Asegura que la imagen cubra todo el espacio del contenedor
    />
    <h4 className="text-2xl font-semibold text-gray-200 mb-2">{gobo.name}</h4>
    <p className="text-lg text-gray-300">{gobo.description}</p>

    {/* Variaciones de Wataje */}
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



    </div>
  );
};

export default Products;