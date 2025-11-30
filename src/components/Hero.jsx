import React from 'react';
import '/src/styles/Hero.css';
import Countdown from './Countdown'; 
import { Link } from 'react-router-dom'; // 👈 CRÍTICO: Importar Link

const Hero = () => {
  return (
    //Titulo principal//
    <section className="hero-section">
      <div className="hero-content">
        <h1>UNDER DURO FESTIVAL</h1>
        <h2>BARCELONA, ES | 31 - 12 - 2026</h2>
        
        <Countdown /> 
        
        {/* CRÍTICO: Usar <Link> para la navegación interna */}
        <Link to="/tickets" className="btn-hero-cta">
            COMPRAR TICKETS
        </Link>
      </div>
    </section>
  );
};

export default Hero;