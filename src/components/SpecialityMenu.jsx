import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { specialityData } from '../assets/assets';
import { useInView } from 'react-intersection-observer';

const SpecialityMenu = () => {
  // Estado para controlar la visibilidad del contenido después del splash screen
  const [isContentVisible, setIsContentVisible] = useState(false);

  // Simulamos el delay del splash screen (por ejemplo, 3 segundos)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsContentVisible(true);  // Mostrar contenido después de que pase el splash
    }, 3000); // Ajusta este tiempo al tiempo que dure tu splash screen
    return () => clearTimeout(timer);
  }, []);

  // Animación de entrada para el contenedor principal
  const fadeInMotion = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1.2, ease: 'easeOut' }
  };

  // Animación para cada especialidad
  const fadeInItem = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: 'easeOut' }
  };

  return (
    <motion.div
      className="flex flex-col items-center gap-4 py-16"
      id="speciality"
      variants={fadeInMotion}  // Animación para el contenedor
      initial="initial"
      animate={isContentVisible ? 'animate' : 'initial'}  // Controlamos la animación con el estado
    >
      <h1 className="text-3xl font-bold">QUE OFRECEMOS</h1>
      <p className="text-center max-w-2xl">
        Ofrecemos una amplia variedad de modelos de Gobos, diseñados para satisfacer diferentes necesidades y
        objetivos. Desde eventos corporativos hasta instalaciones artísticas.
      </p>
      <div className="flex sm:justify-center gap-6 pt-8 w-full overflow-scroll">
        {specialityData.map((data, index) => {
          // Usamos el hook useInView para cada especialidad
          const { ref, inView } = useInView({
            triggerOnce: false,  // La animación solo se dispara una vez
            threshold: 0.5,  // Se activa cuando el 50% del item es visible
          });

          return (
            <motion.div
              ref={ref}
              key={data.speciality}
              variants={fadeInItem}  // Animación individual para cada item
              initial="initial"
              animate={inView ? 'animate' : 'initial'}
              className="flex flex-col items-center text-sm cursor-pointer flex-shrink-0 hover:-translate-y-2 transition-all duration-500"
            >
              <div className="w-32 h-32 sm:w-40 sm:h-40 mb-2 rounded-lg overflow-hidden border border-gray-300 bg-white">
                <img
                  className="w-full h-full object-contain"
                  src={data.image}
                  alt={data.speciality}
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default SpecialityMenu;