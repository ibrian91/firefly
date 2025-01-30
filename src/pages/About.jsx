import React, { useEffect, useCallback } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importar los estilos de AOS
import Footer from './Footer';

const About = () => {
  // Inicialización de AOS optimizada con useCallback
  const initializeAOS = useCallback(() => {
    AOS.init({
      duration: 1000, // Duración de la animación
      easing: 'ease-out', // Efecto de aceleración
      once: true, // Las animaciones solo se disparan una vez
      offset: 120, // Desplazamiento para que la animación ocurra cuando el elemento esté cerca de la vista
    });
  }, []);

  useEffect(() => {
    initializeAOS();
  }, [initializeAOS]);

  return (
    <div className="bg-black text-white">

      {/* Sección Quiénes Somos con imagen */}
      <section className="py-20 bg-black text-white flex justify-center items-start space-x-12" data-aos="fade-up">
        {/* Columna de Texto alineado a la izquierda */}
        <div className="max-w-lg text-left">
          <h2 className="text-6xl font-bold uppercase tracking-wide mb-4 relative inline-block">
            QUIENES SOMOS
            <span className="block w-20 h-1 bg-[#a464ff] mt-2"></span>
          </h2>
          <p className="font-semibold mb-4">
            Somos una empresa dedicada a la importación de tecnología de vanguardia en el mercado argentino.
          </p>
          <p className="mb-4">
            Nos enfocamos en ofrecer productos innovadores que transformen la experiencia del usuario, siempre alineados con las últimas tendencias globales.
          </p>
          <p className="mb-4">
            Nuestro compromiso es brindar soluciones tecnológicas de calidad que impulsen el crecimiento y la competitividad en diversos sectores.
          </p>
          <p className="font-semibold">
            En Firefly, iluminamos el futuro de la tecnología en Argentina.
          </p>
        </div>

        {/* Cuadro a la derecha para la imagen */}
        <div className="max-w-sm">
          <img
            src="src/assets/images/tango.jpg"
            alt="Tecnología de vanguardia"
            className="rounded-lg shadow-lg object-cover w-full h-auto"
          />
        </div>
      </section>

      {/* Sección de Servicios con imágenes */}
      <section className="py-16 bg-[#1a1a1a]" data-aos="fade-up">
          <div className="flex justify-center gap-12 flex-wrap">
            {[
              { title: 'Innovación', image: 'src/assets/images/innovacion.jpeg', description:'Desarrollamos productos innovadores con tecnología de punta para transformar el futuro de la iluminación.' },
              { title: 'Calidad', image: 'src/assets/images/calidad.jpeg', description:'Nos comprometemos con los más altos estándares, asegurando productos duraderos, seguros y de alto rendimiento.' },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#121212] p-8 rounded-lg shadow-lg w-80 text-center transition transform hover:scale-105"
                data-aos="zoom-in"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="mb-4 w-[11rem] h-[11rem] mx-auto"
                />
                <h4 className="text-xl font-semibold text-gray-200 mb-4">{item.title}</h4>
                <p className="text-lg text-gray-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
    </section>

      {/* Sección de Qué Ofrecemos */}
      <section className="py-20 bg-black text-white flex justify-center items-start space-x-12" data-aos="fade-up">
        <div className="max-w-lg text-left">
          <h2 className="text-6xl font-bold uppercase tracking-wide mb-4 relative inline-block">
            QUE OFRECEMOS
            <span className="block w-20 h-1 bg-[#a464ff] mt-2"></span>
          </h2>
          <p className="mb-4">
            Ofrecemos una amplia variedad de modelos de <span className="font-bold">Gobo Projection Lamps</span>
          </p>
          <p className="mb-4">
            diseñados para satisfacer diferentes necesidades y objetivos. Desde eventos corporativos hasta instalaciones artísticas,
            contamos con soluciones versátiles que se adaptan a cada proyecto.
          </p>
        </div>

        {/* Cuadro a la derecha para la imagen */}
        <div className="max-w-full">
  <img
    src="src/assets/images/ofrecemos.jpeg"
    alt="Tecnología de vanguardia"
    className="rounded-lg shadow-lg object-cover w-full h-auto max-w-[26rem]"
  />
</div>
      </section>

      {/* Sección de Misión */}
      <section className="py-16 px-6 md:px-12 bg-[#1a1a1a]" data-aos="fade-up">
  <div className="text-center">
    <h3 className="text-3xl font-semibold text-gray-200 mb-6">
      <span data-aos="fade-up" data-aos-delay="100" className="inline-block text-white">Nuestra</span>{' '}
      <span data-aos="fade-up" data-aos-delay="200" className="inline-block text-[#a464ff]">Misión</span>
    </h3>
    <p className="text-[2rem] text-gray-400 leading-relaxed mb-6">
      <span data-aos="fade-up" data-aos-delay="300" className="font-bold text-white">Iluminar</span>{' '}
      <span data-aos="fade-up" data-aos-delay="400" className="inline-block text-white">el</span>{' '}
      <span data-aos="fade-up" data-aos-delay="500" className="inline-block text-white">futuro</span>{' '}
      <span data-aos="fade-up" data-aos-delay="600" className="inline-block text-white">con</span>{' '}
      <span data-aos="fade-up" data-aos-delay="700" className="inline-block text-white">productos</span>{' '}
      <span data-aos="fade-up" data-aos-delay="800" className="inline-block text-white">innovadores</span>
    </p>
  </div>
</section>


    <Footer/>


    </div>
  );
};

export default About;