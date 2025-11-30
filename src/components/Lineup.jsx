// src/components/Lineup.jsx

import React, { useState } from 'react';
import ArtistCard from "./ArtistCard";
// Importamos los datos y los días desde el archivo recién creado
import { LINEUP_DATA, DAYS } from "../data/lineup";
import "/src/styles/Lineup.css";

const Lineup = () => {
    // El estado sigue siendo necesario para mantener el botón "TODOS" activo
    const [selectedDay, setSelectedDay] = useState("TODOS");
    
    // Función para manejar el clic en los botones de día (solo "TODOS" estará disponible)
    const handleDayClick = (day) => {
        setSelectedDay(day);
    };

    // La lógica de filtrado ahora siempre devuelve toda la lista
    const filteredArtists = LINEUP_DATA; 

    return (
        <section id="lineup" className="lineup-section">
            <h2 className="lineup-title">LINEUP 2026</h2>

            {/* Contenedor de los botones de día: ahora solo muestra "TODOS" */}
            <div className="day-filters">
                {DAYS.map((day) => (
                    <button
                        key={day}
                        onClick={() => handleDayClick(day)}
                        // Aplica la clase 'active' si el día está seleccionado (será "TODOS")
                        className={selectedDay === day ? "day-button active" : "day-button"}
                    >
                        {day}
                    </button>
                ))}
            </div>

            {/* Contenedor de las tarjetas de artistas filtradas */}
            <div className="artist-cards-container">
                {filteredArtists.map((artist) => (
                    <ArtistCard key={artist.id} artist={artist} />
                ))}
            </div>

            <button className="view-full-lineup-button">
                VER LINEUP COMPLETO
            </button>
        </section>
    );
};

export default Lineup;