import React, { useState } from 'react';
import AOS from 'aos'; 
import 'aos/dist/aos.css'; 

const PreguntasFrecuentes = () => {
  const [searchTerm, setSearchTerm] = useState(''); // Estado del buscador
  const [activeIndex, setActiveIndex] = useState(null); // Para manejar el acordeón

  // Preguntas y respuestas
  const faqs = [
    { 
      question: '¿Qué es un Gobo?', 
      answer: 'Un Gobo es un dispositivo de proyección que permite crear imágenes, patrones o logotipos proyectados con iluminación en eventos o producciones.' 
    },
    { 
      question: '¿Cómo puedo solicitar un diseño personalizado?', 
      answer: 'Para solicitar un diseño personalizado, simplemente contáctanos a través de nuestro formulario o por teléfono, y trabajaremos contigo para crear algo único.' 
    },
    { 
      question: '¿Ofrecen servicios de alquiler de equipos?', 
      answer: 'Sí, ofrecemos alquiler de proyectores y gobos para cualquier tipo de evento. Puedes elegir entre diferentes opciones según tus necesidades.' 
    },
    { 
      question: '¿Puedo elegir patrones ya diseñados?', 
      answer: 'Sí, tenemos un catálogo con cientos de diseños predefinidos que puedes elegir para tu evento, ya sea para bodas, conciertos, etc.' 
    },
    { 
      question: '¿Realizan la instalación de los equipos?', 
      answer: 'Sí, ofrecemos servicios de instalación profesional para asegurarnos de que tu evento cuente con la mejor calidad de iluminación.' 
    },
    { 
      question: '¿Qué materiales se utilizan para fabricar los gobos?', 
      answer: 'Los gobos se fabrican con materiales como vidrio, metal o plástico, dependiendo de la durabilidad y la calidad de proyección deseada.' 
    },
    { 
      question: '¿Cuánto tiempo se tarda en recibir un gobo personalizado?', 
      answer: 'El tiempo de entrega depende de la complejidad del diseño, pero generalmente toma entre 5 y 10 días hábiles desde la aprobación del diseño.' 
    },
    { 
      question: '¿Qué diferencias hay entre gobos de vidrio y de metal?', 
      answer: 'Los gobos de vidrio permiten detalles más complejos y colores, mientras que los de metal son ideales para patrones más simples en blanco y negro.' 
    },
    { 
      question: '¿Se pueden utilizar gobos al aire libre?', 
      answer: 'Sí, pero necesitas un proyector adecuado para exteriores y protección contra las condiciones climáticas para evitar daños.' 
    },
    { 
      question: '¿Cómo garantizan la nitidez de las proyecciones?', 
      answer: 'Utilizamos equipos de alta calidad y ajustamos el enfoque del proyector para garantizar que las imágenes sean nítidas y claras.' 
    }
  ];

  // Filtrar las preguntas basadas en el término de búsqueda
  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Manejar el clic en las preguntas (acordeón)
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-900 py-12 text-white" id="preguntas-frecuentes">
      <div className="container mx-auto px-4 sm:px-6">
        <h1 className="text-2xl sm:text-3xl font-semibold text-center mb-8" data-aos="fade-up">
          Preguntas Frecuentes
        </h1>

        {/* Barra de búsqueda */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Buscar una pregunta..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 border border-gray-600 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            data-aos="fade-up"
          />
        </div>

        {/* Contenido de preguntas */}
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg shadow-md"
                data-aos="fade-up"
              >
                <div
                  className="p-4 cursor-pointer"
                  onClick={() => toggleAccordion(index)}
                >
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                </div>
                {activeIndex === index && (
                  <div className="p-4 text-gray-300">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">
              No se encontraron resultados para tu búsqueda.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PreguntasFrecuentes;