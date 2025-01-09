import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importar los estilos de AOS

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duración de la animación
      easing: 'ease-out', // Efecto de aceleración
      once: true, // Las animaciones solo se disparan una vez
      offset: 120, // Desplazamiento para que la animación ocurra cuando el elemento esté cerca de la vista
    });
  }, []);

  return (
    <div className="bg-black text-white">

      {/* Sección de encabezado vibrante */}
      <section className="py-24 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 text-white text-center" data-aos="fade-up">
        <h2 className="text-5xl font-extrabold mb-6">Sobre Nosotros</h2>
        <p className="text-lg max-w-4xl mx-auto mb-8">
          En <strong>Firefly</strong>, nos especializamos en soluciones tecnológicas innovadoras que transforman la experiencia de nuestros clientes. Con un enfoque en calidad y sostenibilidad, lideramos el futuro de la iluminación avanzada y gobos.
        </p>
        <a href="#contact" className="px-8 py-4 bg-indigo-700 rounded-full text-lg hover:bg-indigo-800 transition duration-300">Contáctanos</a>
      </section>

      {/* Sección de Servicios con imágenes */}
      <section className="py-16 bg-[#1a1a1a]" data-aos="fade-up">
        <div className="flex justify-center gap-12">
          <div className="bg-[#121212] p-8 rounded-lg shadow-lg w-80 text-center transition transform hover:scale-105" data-aos="zoom-in">
            <img src="https://via.placeholder.com/150" alt="Innovación" className="mb-4 w-24 h-24 mx-auto"/>
            <h4 className="text-xl font-semibold text-gray-200 mb-4">Innovación</h4>
            <p className="text-lg text-gray-300">
              Desarrollamos productos innovadores con tecnología de punta para transformar el futuro de la iluminación.
            </p>
          </div>
          <div className="bg-[#121212] p-8 rounded-lg shadow-lg w-80 text-center transition transform hover:scale-105" data-aos="zoom-in">
            <img src="https://via.placeholder.com/150" alt="Calidad" className="mb-4 w-24 h-24 mx-auto"/>
            <h4 className="text-xl font-semibold text-gray-200 mb-4">Calidad</h4>
            <p className="text-lg text-gray-300">
              Nos asociamos con los mejores proveedores para garantizar la más alta calidad en cada uno de nuestros productos.
            </p>
          </div>
          <div className="bg-[#121212] p-8 rounded-lg shadow-lg w-80 text-center transition transform hover:scale-105" data-aos="zoom-in">
            <img src="https://via.placeholder.com/150" alt="Sostenibilidad" className="mb-4 w-24 h-24 mx-auto"/>
            <h4 className="text-xl font-semibold text-gray-200 mb-4">Sostenibilidad</h4>
            <p className="text-lg text-gray-300">
              Nos comprometemos a proporcionar soluciones ecológicas y energéticamente eficientes que respeten el medio ambiente.
            </p>
          </div>
        </div>
      </section>

      {/* Sección de Misión */}
      <section className="py-16 px-6 md:px-12 bg-[#1a1a1a]" data-aos="fade-up">
        <div className="text-center">
          <h3 className="text-3xl font-semibold text-gray-200 mb-6">Nuestra Misión</h3>
          <p className="text-lg text-gray-400 leading-relaxed mb-6">
            Iluminar el futuro con productos innovadores que mejoren la experiencia de nuestros clientes.
          </p>
        </div>
      </section>

      {/* Sección de Valores */}
      <section className="py-16 px-6 md:px-12 bg-[#1a1a1a]" data-aos="fade-up">
        <div className="text-center">
          <h3 className="text-3xl font-semibold text-gray-200 mb-6">Nuestros Valores</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-[#121212] p-8 rounded-lg shadow-lg transition transform hover:scale-105" data-aos="zoom-in">
              <i className="fas fa-rocket text-4xl text-indigo-600 mb-4"></i> {/* Icono de cohete */}
              <h4 className="text-xl font-semibold text-gray-200 mb-4">Innovación</h4>
              <p className="text-lg text-gray-300">Lideramos con ideas que rompen esquemas y llevan el mercado hacia nuevas fronteras.</p>
            </div>
            <div className="bg-[#121212] p-8 rounded-lg shadow-lg transition transform hover:scale-105" data-aos="zoom-in">
              <i className="fas fa-check-circle text-4xl text-indigo-600 mb-4"></i> {/* Icono de check */}
              <h4 className="text-xl font-semibold text-gray-200 mb-4">Calidad</h4>
              <p className="text-lg text-gray-300">Nos enfocamos en calidad superior para que nuestros productos siempre superen las expectativas.</p>
            </div>
            <div className="bg-[#121212] p-8 rounded-lg shadow-lg transition transform hover:scale-105" data-aos="zoom-in">
              <i className="fas fa-leaf text-4xl text-indigo-600 mb-4"></i> {/* Icono de hoja */}
              <h4 className="text-xl font-semibold text-gray-200 mb-4">Sostenibilidad</h4>
              <p className="text-lg text-gray-300">Nuestro compromiso con el medio ambiente se refleja en cada producto que desarrollamos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de contacto */}
      <section id="contact" className="py-16 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 text-white text-center" data-aos="zoom-in">
        <h3 className="text-3xl font-semibold mb-6">¿Te gustaría trabajar con nosotros?</h3>
        <p className="text-lg mb-8">Si estás interesado en nuestras soluciones o tienes alguna pregunta, no dudes en ponerte en contacto con nosotros. ¡Estamos aquí para ayudarte!</p>
        <a href="mailto:contacto@firefly.com" className="px-8 py-4 bg-indigo-700 rounded-full text-lg hover:bg-indigo-800 transition duration-300">Contáctanos</a>
      </section>

    </div>
  );
}

export default About;