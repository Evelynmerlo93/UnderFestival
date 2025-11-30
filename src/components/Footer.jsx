// src/components/Footer.jsx

import React from 'react';
import '/src/styles/Footer.css'; 

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="main-footer">
      <div className="footer-content">
        {/* ... contenido del footer ... */}
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} FUTURE SOUNDS FESTIVAL. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

// ¡ESTO ES LO CRÍTICO!
export default Footer; // 👈 Asegúrate de que esta sea la última línea, sin punto y coma.