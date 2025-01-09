import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';
import About from './pages/About';
import NavBar from './components/NavBar';
import Preloader from './components/PreLoader/Preloader';
import Faq from './pages/Faq';

const App = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Preloader />
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;