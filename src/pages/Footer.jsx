import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Columna 1: Descripción */}
          <div>
            <h4 className="text-lg font-bold mb-4">Sobre Nosotros</h4>
            <p className="text-gray-400">
              Nos especializamos en ofrecer proyectores y gobos de alta calidad, ideales para personalizar eventos 
              y destacar tu marca en cualquier lugar.
            </p>
          </div>

          {/* Columna 2: Enlaces rápidos */}
          <div>
            <h4 className="text-lg font-bold mb-4">Enlaces Rápidos</h4>
            <ul>
              <li className="mb-2">
                <a href="#home" className="text-gray-400 hover:text-white">Inicio</a>
              </li>
              <li className="mb-2">
                <a href="#services" className="text-gray-400 hover:text-white">Servicios</a>
              </li>
              <li className="mb-2">
                <a href="#faq" className="text-gray-400 hover:text-white">Preguntas Frecuentes</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white">Contacto</a>
              </li>
            </ul>
          </div>

          {/* Columna 3: Redes sociales */}
          <div>
            <h4 className="text-lg font-bold mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <i className="fab fa-facebook fa-lg"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <i className="fab fa-twitter fa-lg"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <i className="fab fa-instagram fa-lg"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <i className="fab fa-linkedin fa-lg"></i>
              </a>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-700" />

        <div className="text-center text-gray-400">
          © {new Date().getFullYear()} Tu Empresa. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;