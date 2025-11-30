import React, { useState } from 'react';

const ContactPage = () => {
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica de envío de formulario (simulación)
        setStatus('Enviando...');
        setTimeout(() => {
            // Aquí iría el código real para enviar datos a un servidor
            setStatus('¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.');
            e.target.reset(); // Limpia el formulario
        }, 2000);
    };

    const inputStyle = {
        width: '100%',
        padding: '12px',
        marginBottom: '20px',
        border: '1px solid #444',
        borderRadius: '5px',
        backgroundColor: '#222',
        color: '#f0f0f0',
        fontSize: '1em',
    };

    return (
        <div style={{ paddingTop: '120px', paddingBottom: '80px', minHeight: '80vh', backgroundColor: '#111', color: '#f0f0f0', maxWidth: '600px', margin: '0 auto', paddingLeft: '20px', paddingRight: '20px' }}>
            <h1 style={{ textAlign: 'center', color: '#FF4500', marginBottom: '40px' }}>CONTACTA CON NOSOTROS</h1>
            
            <form onSubmit={handleSubmit} style={{ background: '#1a1a1a', padding: '40px', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)' }}>
                
                <label htmlFor="name" style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Nombre</label>
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    style={inputStyle} 
                />

                <label htmlFor="email" style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Email</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    style={inputStyle} 
                />

                <label htmlFor="message" style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Mensaje</label>
                <textarea 
                    id="message" 
                    name="message" 
                    rows="5" 
                    required 
                    style={{ ...inputStyle, resize: 'vertical' }} 
                ></textarea>

                <button 
                    type="submit" 
                    style={{ 
                        width: '100%', 
                        padding: '15px', 
                        backgroundColor: '#FF4500', 
                        color: 'white', 
                        border: 'none', 
                        borderRadius: '5px', 
                        fontSize: '1.1em', 
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        transition: 'background-color 0.2s'
                    }}
                >
                    ENVIAR MENSAJE
                </button>
                
                {status && <p style={{ marginTop: '20px', textAlign: 'center', color: status.startsWith('¡Mensaje') ? '#32CD32' : '#FF4500' }}>{status}</p>}
            </form>
        </div>
    );
};

export default ContactPage;