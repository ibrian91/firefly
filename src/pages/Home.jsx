import React from 'react';
import Header from '../components/Header';
import SpecialityMenu from '../components/SpecialityMenu';
import descripcion from '../assets/images/descripcion.png';
import nuestros_servicios from '../assets/images/nuestros_servicios.png';
import Modelos from '../components/Modelos';
import ServiciosMenu from '../components/Servicios';
import PreguntasFrecuentes from '../components/PreguntasFrecuentes';

const Home = () => {
  return (
    <div>
      <Header />
      <br />
      <br />
      <SpecialityMenu />
      <br />

      <div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-10">
          {/* Sección: ¿Qué son los Gobos? */}
          <div className="bg-gray-200 p-6 rounded-lg max-w-md mx-auto">
            <h4 className="text-2xl text-gray-900 mb-4">¿Qué son los Gobos?</h4>
            <div className="w-full aspect-[10/5] overflow-hidden rounded-md">
              <img src={descripcion} alt="Descripción de los Gobos" className="w-full h-full object-cover" />
            </div>
            <p className="text-gray-700 mt-4">
              Un gobo es un accesorio de iluminación que proyecta imágenes, patrones o logotipos mediante luz. 
              Son ideales para personalizar eventos, crear ambientes únicos y destacar marcas en cualquier espacio.
            </p>
          </div>

          {/* Sección: Nuestros Servicios */}
          <div className="bg-gray-200 p-6 rounded-lg max-w-md mx-auto">
            <h4 className="text-2xl text-gray-900 mb-4">Nuestros Servicios</h4>
            <div className="w-full aspect-[10/5] overflow-hidden rounded-md">
              <img src={nuestros_servicios} alt="Nuestros servicios" className="w-full h-full object-cover" />
            </div>
            <p className="text-gray-700 mt-4">
              Proyectores y gobos para cualquier tipo de evento o producción. Contamos con soluciones personalizadas 
              para satisfacer todas tus necesidades.
            </p>
          </div>
        </div>
      </div>
      <br />
      <div>
      <Modelos />

      </div>

      

      <br />
      <div>
      <ServiciosMenu/>
      </div>
     
      <br />

     
    </div>
  );
};

export default Home;