// src/components/Countdown.jsx
import React, { useState, useEffect } from 'react';

// Define la fecha de tu evento (Formato: Año, Mes-1, Día)
// Ejemplo para: 30 de Agosto de 2026
const EVENT_DATE = new Date('2025-12-31T23:00:00');

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Función para calcular el tiempo restante
    const calculateTimeLeft = () => {
      const difference = EVENT_DATE - new Date();
      let timeLeft = {};

      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
      }
      return timeLeft;
    };

    // Inicializa y establece un intervalo para actualizar cada segundo
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Limpia el intervalo cuando el componente se desmonte
    return () => clearInterval(timer);
  }, []);

  // Función auxiliar para asegurar que los números tengan dos dígitos
  const addLeadingZeros = (value) => {
    return String(value).padStart(2, '0');
  };

  return (
    <div className="countdown-timer">
      {/* Muestra un mensaje si el tiempo ha pasado */}
      {EVENT_DATE < new Date() ? (
        <span className="event-passed">¡EL EVENTO ESTÁ EN CURSO!</span>
      ) : (
        // Renderiza el tiempo restante
        <span>
          {addLeadingZeros(timeLeft.days)} Días | {addLeadingZeros(timeLeft.hours)} Horas | {addLeadingZeros(timeLeft.minutes)} Minutos
        </span>
      )}
    </div>
  );
};

export default Countdown;