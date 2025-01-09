import React, { useEffect } from 'react';
import './Preloader.css';
import { preLoaderAnim } from '../../animations';
import { assets } from '../../assets/assets';

const Preloader = () => {

    useEffect(() => {
        preLoaderAnim();
    }, []);

  return (
    <div className="preloader">
        <div className="logo-container">
            <img src={assets.logo} alt="logo preloader" className='preloader-image' />
        </div>
        <div className="texts-container">
            <span className='linea-vertical'></span>
            <span>Transforma tus ideas en experiencias visuales impactantes</span>
            <span className="dot">.</span> {/* Aquí está el punto titilante */}
        </div>
    </div>
  );
}

export default Preloader;