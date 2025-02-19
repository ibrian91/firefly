import React, { useRef, useState, useEffect } from 'react';
import { data } from '../assets/data';

const Header = () => {
  const listRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  // Función para cambiar la imagen actual
  const scrollToImage = (index) => {
    const listNode = listRef.current;
    const imgWidth = listNode ? listNode.clientWidth : 500; // Ajustar el tamaño de la imagen en base al contenedor

    setCurrentIndex(index);
    listNode.scrollTo({
      left: index * imgWidth, // Desplazar según el índice y el ancho de la imagen
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    // Función para cambiar a la siguiente imagen
    const autoSlide = () => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % data.length; // Volver al primer slide al final
        scrollToImage(nextIndex);
        return nextIndex;
      });
    };

    // Configurar el intervalo de 3 segundos para pasar automáticamente a la siguiente imagen
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          autoSlide();  // Cambiar a la siguiente imagen cuando el progreso llega a 100%
          return 0;  // Resetear el progreso
        }
        return prevProgress + 1; // Incrementar el progreso
      });
    }, 30); // 30ms por cada incremento, para llegar a 100% en 3 segundos

    return () => clearInterval(interval); // Limpiar el intervalo cuando el componente se desmonte
  }, [progress]);

  return (
    <div className="main-container">
      <div className="slider-container" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="container-images">
          <ul ref={listRef} style={{
            display: 'flex',
            overflow: 'hidden',
            padding: 0,
            margin: 0,
            width: '100%', // Aseguramos que el contenedor sea de 100% del ancho
          }}>
            {data.map((item, index) => (
              <li key={item.id} style={{ listStyle: 'none', flex: '0 0 100%' }}> {/* Mostrar solo una imagen a la vez */}
                <img 
                  src={`/assets/images/${item.imgUrl}`}
                  alt="imagen"
                  style={{
                    width: '100%', // Aseguramos que las imágenes ocupen todo el espacio
                    height: '100%', // Aseguramos que la imagen ocupe toda la altura
                    objectFit: 'contain', // Asegura que la imagen se ajuste sin recortes
                  }}
                />
                {/* Barra de progreso debajo de cada imagen */}
                <div 
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '5px',
                    backgroundColor: '#ddd',
                  }}
                >
                  <div
                    style={{
                      width: `${progress}%`,
                      height: '100%',
                      backgroundColor: '#4caf50',
                      transition: 'width 0.03s linear',
                    }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
