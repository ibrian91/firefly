import { assets } from '../assets/assets';
import { useState } from 'react';
import { NavLink, useLocation, Link } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const links = [
    { to: '/', label: 'HOME' },
    { to: '/products', label: 'PRODUCTOS' },
    { to: '/industrial', label: 'SEÑALETICA INDUSTRIAL' },
    { to: '/about', label: 'SOBRE NOSOTROS' },
    { to: '/contact', label: 'CONTACTO' },
    { to: '/faq', label: '¿DUDAS?' },
  ];

  return (
    <nav className="relative z-50 mb-5 border-b border-gray-400 bg-gray-900 px-4 py-4 text-sm md:px-8 lg:h-24 lg:px-16">
      <div className="flex items-center justify-between lg:absolute lg:left-16 lg:top-1/2 lg:-translate-y-1/2">
        <Link to="/">
          <img
            className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16"
            src={assets.logo}
            alt="Logo"
          />
        </Link>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-white/20 p-2 text-white transition hover:bg-white/10 lg:hidden"
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className="text-xl leading-none" aria-hidden="true">
            {isMenuOpen ? '×' : '☰'}
          </span>
        </button>
      </div>

      <ul
        id="primary-navigation"
        className={`${isMenuOpen ? 'flex' : 'hidden'} absolute left-0 right-0 top-full flex-col gap-1 border-b border-white/10 bg-gray-900 px-4 py-3 shadow-xl lg:absolute lg:inset-x-0 lg:top-1/2 lg:flex lg:w-full lg:-translate-y-1/2 lg:flex-row lg:flex-nowrap lg:justify-center lg:gap-x-6 lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:shadow-none`}
      >
        {links.map((link) => (
          <li key={link.to} className="relative">
            <NavLink
              to={link.to}
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `block whitespace-nowrap px-3 py-2 text-white transition-all duration-300 hover:text-blue-400 lg:px-0 lg:py-0 ${
                  isActive ? 'font-bold' : 'font-normal'
                }`
              }
            >
              {link.label}
            </NavLink>
            <div
              className={`absolute left-1/2 mt-1 hidden h-2 w-2 -translate-x-1/2 rounded-full bg-white ${
                location.pathname === link.to ? 'lg:block' : ''
              }`}
            ></div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;