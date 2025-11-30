// src/components/ArtistCard.jsx
import React from 'react';

const ArtistCard = ({ artist }) => {
    const imageUrl = artist.image || 'https://placehold.co/400x400/000/FFF?text=Artista';

    return (
        <div className="artist-card">
            <img 
                src={imageUrl} 
                alt={artist.name} 
                className="artist-image" 
                onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src="https://placehold.co/400x400/FF4500/111?text=Artista";
                }}
            />
            <div className="artist-details"> {/* <-- Asegúrate de que este div existe */}
                <h3 className="artist-name">{artist.name}</h3>
                <p className="artist-stage">{artist.stage}</p>
                <span className="artist-day">{artist.day}</span>
            </div>
        </div>
    );
};

export default ArtistCard;