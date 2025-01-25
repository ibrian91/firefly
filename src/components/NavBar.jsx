import React from 'react';
import { assets } from '../assets/assets';
import { NavLink, useLocation,Link } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation(); // Obtén la ubicación actual

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-gray-400 px-4 md:px-8 lg:px-16 bg-gray-900">
      {/* Logo alineado a la izquierda */}
      <div className="flex-shrink-0">
        <Link to="/">
          <img
            className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16"
            src={assets.logo}
            alt="Logo"
          />
        </Link>
      </div>

      {/* Menú centrado */}
      <ul className="flex-grow flex justify-center space-x-4 md:space-x-6 lg:space-x-8">
        {[
          { to: '/', label: 'HOME' },
          { to: '/products', label: 'PRODUCTOS' },
          { to: '/about', label: 'SOBRE NOSOTROS' },
          { to: '/contact', label: 'CONTACTO' },
          { to: '/faq', label: '¿DUDAS?' },
        ].map((link) => (
          <li key={link.to} className="relative">
            <NavLink
              to={link.to}
              className={({ isActive }) =>
                `text-white hover:text-blue-400 transition-all duration-300 ${
                  isActive ? 'font-bold' : 'font-normal'
                }`
              }
            >
              {link.label}
            </NavLink>
            {/* Indicador de página activa (el punto debajo) */}
            <div
              className={`absolute left-1/2 transform -translate-x-1/2 mt-1 w-2 h-2 bg-white rounded-full ${
                location.pathname === link.to ? 'block' : 'hidden'
              }`}
            ></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;