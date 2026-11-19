import { useState, useEffect } from 'react';
import { data } from '../assets/data';

const Header = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (data.length < 2) return undefined;

    const interval = setInterval(() => {
      setCurrentIndex((index) => (index + 1) % data.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="main-container">
      <div className="slider-container" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="container-images">
          <ul style={{
            display: 'flex',
            flex: '0 0 auto',
            padding: 0,
            margin: 0,
            width: `${data.length * 100}%`,
            height: '100%',
            transform: `translateX(-${(currentIndex * 100) / data.length}%)`,
            transition: 'transform 0.5s ease',
          }}>
            {data.map((item) => (
              <li
                key={item.id}
                style={{
                  listStyle: 'none',
                  flex: `0 0 ${100 / data.length}%`,
                  height: '100%',
                }}
              >
                <img 
                  src={item.imgUrl}
                  alt="Proyección de gobos"
                  style={{
                    width: '100%', // Aseguramos que las imágenes ocupen todo el espacio
                    height: '100%', // Aseguramos que la imagen ocupe toda la altura
                    objectFit: 'contain', // Asegura que la imagen se ajuste sin recortes
                  }}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
