import React from 'react';

const ServiciosMenu = () => {
  return (
    <div className="bg-gray-100 py-16 text-gray-800" id="servicios">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Nuestros Servicios</h1>

        {/* Contenedor de los servicios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Servicio 1: Diseño Personalizado */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:scale-105 transition-all duration-300">
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-800">Diseño Personalizado</h3>
            </div>
            <p className="text-gray-600">
              Creamos gobos exclusivos a partir de tus ideas, logotipos o diseños únicos.
            </p>
          </div>

          {/* Servicio 2: Alquiler y Venta de Equipos */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:scale-105 transition-all duration-300">
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-800">Alquiler y Venta de Equipos</h3>
            </div>
            <p className="text-gray-600">
              Proyectores y gobos para cualquier tipo de evento o producción.
            </p>
          </div>

          {/* Servicio 3: Instalación Profesional */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:scale-105 transition-all duration-300">
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-800">Asesoramiento Profesional</h3>
            </div>
            <p className="text-gray-600">
              Brindamos el soporte técnico necesario para la instalación y uso de nuestros productos.
            </p>
          </div>

          {/* Servicio 4: Catálogo de Diseños Listos para Usar */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:scale-105 transition-all duration-300">
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-800">Catálogo de Diseños Listos para Usar</h3>
            </div>
            <p className="text-gray-600">
              Elige entre cientos de patrones y efectos predefinidos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiciosMenu;