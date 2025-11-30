import React from 'react';

const InfoPage = () => {
    return (
        <div style={{ paddingTop: '120px', paddingBottom: '80px', minHeight: '80vh', backgroundColor: '#111', color: '#f0f0f0', maxWidth: '900px', margin: '0 auto' }}>
            <h1 style={{ textAlign: 'center', color: '#FF4500', marginBottom: '40px' }}>INFORMACIÓN ESENCIAL</h1>
            
            <section style={{ marginBottom: '40px', padding: '0 20px' }}>
                <h2 style={{ borderBottom: '2px solid #333', paddingBottom: '10px', color: '#ddd' }}>Reglas del Festival</h2>
                <ul style={{ listStyleType: 'disc', marginLeft: '40px', lineHeight: '1.8' }}>
                    <li>Prohibido el acceso con bebidas alcohólicas externas.</li>
                    <li>Acceso solo para mayores de 18 años.</li>
                    <li>Se requiere identificación válida en la entrada.</li>
                    <li>Uso de pulsera obligatorio durante toda la duración del evento.</li>
                </ul>
            </section>

            <section style={{ padding: '0 20px' }}>
                <h2 style={{ borderBottom: '2px solid #333', paddingBottom: '10px', color: '#ddd' }}>Preguntas Frecuentes (FAQ)</h2>
                <details style={{ marginBottom: '15px', padding: '10px', border: '1px solid #333', borderRadius: '5px' }}>
                    <summary style={{ fontWeight: 'bold', color: '#FF4500', cursor: 'pointer' }}>¿Hay estacionamiento disponible?</summary>
                    <p style={{ marginTop: '10px', paddingLeft: '15px' }}>Sí, hay estacionamiento limitado. Se recomienda el uso de transporte público o taxi.</p>
                </details>
                <details style={{ marginBottom: '15px', padding: '10px', border: '1px solid #333', borderRadius: '5px' }}>
                    <summary style={{ fontWeight: 'bold', color: '#FF4500', cursor: 'pointer' }}>¿Puedo llevar mi propia comida?</summary>
                    <p style={{ marginTop: '10px', paddingLeft: '15px' }}>Solo se permite el acceso con agua embotellada sellada. Habrá múltiples opciones de comida dentro del recinto.</p>
                </details>
            </section>
        </div>
    );
};

export default InfoPage;