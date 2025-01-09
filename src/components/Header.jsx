import React, { useRef, useState } from 'react';
import { data } from '../assets/data';

const Header = () => {
  const listRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToImage = (direction) => {
    const listNode = listRef.current;
    const imgWidth = listRef.current ? listRef.current.clientWidth : 500; 

    if (direction === 'prev') {
      setCurrentIndex((curr) => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? 0 : curr - 1;
        listNode.scrollTo({ left: newIndex * imgWidth, behavior: 'smooth' }); // Desplazamiento horizontal
        return newIndex;
      });
    } else {
      const isLastSlide = currentIndex === data.length - 1;
      if (!isLastSlide) {
        setCurrentIndex((curr) => {
          const newIndex = curr + 1;
          listNode.scrollTo({ left: newIndex * imgWidth, behavior: 'smooth' }); // Desplazamiento horizontal
          return newIndex;
        });
      }
    }
  }

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
    const imgWidth = listRef.current ? listRef.current.clientWidth : 500;
    
    listRef.current.scrollTo({
      left: slideIndex * imgWidth,
      behavior: 'smooth' // Desplazamiento suave
    });
  };

  return (

    
        <div className="main-container"> 
          <div className="slider-container" style={{ position: 'relative', overflow: 'hidden' }}>
            <div className="leftArrow" onClick={() => scrollToImage('prev')}>&#10092;</div>
            
            <div className="rightArrow" onClick={() => scrollToImage('right')}>&#10093;</div>
            
            <div className="container-images">
              <ul ref={listRef} style={{
                  display: 'flex',
                  overflow: 'hidden',
                  padding: 0,
                  margin: 0
              }}>
                {data.map((item) => (
                  <li key={item.id} style={{ listStyle: 'none'}}>
                    <img src={item.imgUrl}
                        
                          alt="imagen"
                          style={{ width: '1317px', height: '515px', maxWidth: 'unset' }}/>
                  </li>
                ))}
              </ul>
            </div>

          </div> 
          <div className="dots-container">
              {data.map((_, idx) => (
                <div
                  key={idx}
                  className={`dots-container-item ${idx === currentIndex ? 'active' : ''}`} 
                  onClick={() => goToSlide(idx)}
                >
                  &#9865;
                </div>
              ))}
            </div>
        </div>
   
  );
};

export default Header;