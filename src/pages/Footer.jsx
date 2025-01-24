import React from "react";
import ScrollLink from "../components/ScroolLink";
import icon_Instagram from "../assets/icons/instagram_icon.png";
import icon_WhatsApp from "../assets/icons/whatsapp_icon.png"; // Asegúrate de importar el ícono de WhatsApp.

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4 md:px-10">
        {/* Contenedor principal con flex y espaciado */}
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-stretch space-y-8 md:space-y-0">
          {/* Columna 1: Descripción */}
          <div className="flex-1 text-center md:text-left flex flex-col">
            <h4 className="text-lg font-bold mb-2">Sobre Nosotros</h4>
            <div className="border-b-2 border-gray-500 mb-4"></div> {/* Línea continua debajo del título */}
            <p className="text-gray-400 leading-relaxed">
              Nos especializamos en ofrecer proyectores y gobos de alta calidad,
              ideales para personalizar eventos y destacar tu marca en cualquier lugar.
            </p>
          </div>

          {/* Columna 2: Enlaces rápidos */}
          <div className="flex-1 text-center flex flex-col justify-between">
            <h4 className="text-lg font-bold mb-2">Enlaces Rápidos</h4>
            <div className="border-b-2 border-gray-500 mb-4"></div> {/* Línea continua debajo del título */}
            <ul className="space-y-2">
              <li>
                <ScrollLink to="/" className="text-gray-400 hover:text-white">
                  Inicio
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="/products" className="text-gray-400 hover:text-white">
                  Productos
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="/about" className="text-gray-400 hover:text-white">
                  Sobre Nosotros
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="/contact" className="text-gray-400 hover:text-white">
                  Contacto
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="/faq" className="text-gray-400 hover:text-white">
                  ¿Dudas?
                </ScrollLink>
              </li>
            </ul>
          </div>

          {/* Columna 3: Redes sociales */}
          <div className="flex-1 text-center md:text-right flex flex-col">
            <h4 className="text-lg font-bold mb-2">Seguinos</h4>
            <div className="border-b-2 border-gray-500 mb-4"></div> {/* Línea continua debajo del título */}
            <div className="space-y-4">
              {/* Instagram */}
              <div className="flex justify-center md:justify-end items-center space-x-3">
                <img src={icon_Instagram} alt="Instagram" className="w-6 h-6" />
                <a
                  href="https://www.instagram.com/firefly.proyecciones/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  Instagram
                </a>
              </div>

              {/* WhatsApp */}
              <div className="flex justify-center md:justify-end items-center space-x-3">
                <img src={icon_WhatsApp} alt="WhatsApp" className="w-6 h-6" />
                <a
                  href="https://wa.me/123456789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-700" />

        <div className="text-center text-gray-400">
          © {new Date().getFullYear()} FIREFLY. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;