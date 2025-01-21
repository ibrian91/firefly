import React from 'react';
import modelos from '../assets/images/modelos.jpg';

const ModelosMenu = () => {
  return (
    <div className="flex flex-col items-center gap-4 py-16" id="speciality">
      <h1 className="text-3xl font-bold">MAS DE 25 MODELOS</h1>
      
      {/* Contenedor de los modelos */}
      <div className="w-full max-w-6xl px-4">
        {/* Contenedor de filas con dos columnas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Columna izquierda (Imagen) */}
          <div className="flex flex-col items-center text-sm cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500 rounded-lg border border-gray-300 p-4">
            <div className="w-full h-full bg-gray-200 rounded-lg mb-4 overflow-hidden">
              {/* Imagen del modelo */}
              <img
                className="w-full h-full object-cover rounded-lg"
                src={modelos}  // Ruta de la imagen
                alt="Modelos Gobo"
                loading="lazy"  // Agregar lazy loading para mejorar el rendimiento
              />
            </div>
          </div>

          {/* Columna derecha (Secciones) */}
          <div className="flex flex-col gap-4">
            {/* Sección 1 */}
            <div className="flex-1 rounded-lg border border-gray-300 p-4">
              <h3 className="font-semibold mb-2" style={{ color: '#9982bd' }}>Iluminación Estándar</h3>
              <p>
              •	Modelos: I15, I25, I35, I50, I60, I80, O80.
              
              </p>

              <p>
              •	Uso: Ideal para espacios pequeños o medianos, proyectos interiores o con bajo presupuesto. Son compactos y ligeros.
              
              </p>
             
            </div>

            {/* Sección 2 */}
            <div className="flex-1 rounded-lg border border-gray-300 p-4">
              <h3 className="font-semibold mb-2"style={{ color: '#9982bd' }}>Iluminación Profesional</h3>
              <p>
              •	Modelos: O150, O200, O300, O600, W40-100, W150, W200, W300, W600.
              </p>
              <p>
              •	Uso: Diseñados para eventos, teatros o exteriores. Potentes y versátiles para configuraciones complejas.
              </p>
            </div>

            {/* Sección 3 */}
            <div className="flex-1 rounded-lg border border-gray-300 p-4">
              <h3 className="font-semibold mb-2 from-indigo-500" style={{ color: '#9982bd' }}> Iluminación de Alta Tecnología</h3>
              <p>
              •	Modelos: G4-040100, G4-O200, G4-O300, G7-X60150, G4-X40150, DJ-015100, PD-015100, BS-015300, G7-X200600, G4-X200600.
              </p>
              <p>
              •	Uso: Soluciones avanzadas para espectáculos, mappings e instalaciones urbanas. Alta precisión y tecnología innovadora para efectos únicos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelosMenu;