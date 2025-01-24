import React from "react";
import ScrollLink from "../components/ScroolLink";
import icon_Instagram from "../assets/icons/instagram_icon.png";
import icon_WhatsApp from "../assets/icons/whatsapp_icon.png"; // Asegúrate de importar el ícono de WhatsApp.

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Columna 1: Descripción */}
          <div>
            <h4 className="text-lg font-bold mb-4">Sobre Nosotros</h4>
            <p className="text-gray-400">
              Nos especializamos en ofrecer proyectores y gobos de alta calidad,
              ideales para personalizar eventos y destacar tu marca en cualquier
              lugar.
            </p>
          </div>

          {/* Columna 2: Enlaces rápidos */}
          <div>
            <h4 className="text-lg font-bold mb-4">Enlaces Rápidos</h4>
            <ul>
              <li className="mb-2">
                <ScrollLink to="/" className="text-gray-400 hover:text-white">
                  Inicio
                </ScrollLink>
              </li>

              <li className="mb-2">
                <ScrollLink
                  to="/products"
                  className="text-gray-400 hover:text-white"
                >
                  Productos
                </ScrollLink>
              </li>

              <li className="mb-2">
                <ScrollLink
                  to="/about"
                  className="text-gray-400 hover:text-white"
                >
                  Sobre Nosotros
                </ScrollLink>
              </li>

              <li className="mb-2">
                <ScrollLink
                  to="/contact"
                  className="text-gray-400 hover:text-white"
                >
                  Contacto
                </ScrollLink>
              </li>

              <li className="mb-2">
                <ScrollLink
                  to="/faq"
                  className="text-gray-400 hover:text-white"
                >
                  ¿Dudas?
                </ScrollLink>
              </li>
            </ul>
          </div>

          {/* Columna 3: Redes sociales */}
          <div>
            <h4 className="text-lg font-bold mb-4">Síguenos</h4>
            <div className="space-y-4">
              {/* Instagram */}
              <div className="flex items-center space-x-2">
                <img
                  src={icon_Instagram}
                  alt="Instagram"
                  className="w-6 h-6"
                />
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
              <div className="flex items-center space-x-2">
                <img
                  src={icon_WhatsApp}
                  alt="WhatsApp"
                  className="w-6 h-6"
                />
                <a
                  href="https://wa.me/123456789" // Reemplaza con el enlace de WhatsApp correcto.
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
          © {new Date().getFullYear()} Tu Empresa. Todos los derechos
          reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;