import React from 'react';
import { Link } from 'react-router-dom';

const ScrollLink = ({ to, children, className }) => {
  const handleClick = () => {
    window.scrollTo(0, 0); // Mueve el scroll al inicio de la página
  };

  return (
    <Link to={to} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
};

export default ScrollLink;