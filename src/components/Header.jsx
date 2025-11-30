import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    // Estado para controlar la visibilidad del menú en móviles
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Lista de enlaces de navegación
const navItems = [
    { name: 'NOSOTROS', path: '/' },
    { name: 'INFO', path: '/info' },
    { name: 'CONTACTO', path: '/contacto' },
];

    return (
        // Barra de navegación fija en la parte superior, con fondo oscuro y sombra
        <header className="fixed top-0 left-0 w-full bg-gray-900/95 backdrop-blur-sm shadow-xl z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    
                    {/* Logo/Nombre del Festival */}
                    <div className="shrink-0">
                        <NavLink to="/" className="text-2xl font-extrabold tracking-wider text-white hover:text-orange-500 transition duration-300">
                            UNDER
                        </NavLink>
                    </div>

                    {/* Menú de Escritorio (visible en pantallas grandes) */}
                    <nav className="hidden md:flex md:space-x-6 items-center">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.name}
                                to={item.path}
                                // NavLink añade automáticamente la clase 'active' si la ruta coincide
                                className={({ isActive }) => 
                                    `text-sm font-medium transition duration-300 uppercase ${
                                        isActive 
                                            ? 'text-orange-500 border-b-2 border-orange-500' 
                                            : 'text-gray-300 hover:text-white'
                                    }`
                                }
                            >
                                {item.name}
                            </NavLink>
                        ))}
                        
                        {/* Botón de Entradas (se mantiene a la derecha) */}
                        <NavLink 
                            to="/tickets" 
                            className="ml-4 px-4 py-2 text-sm font-extrabold uppercase bg-red-600 text-white rounded-lg shadow-lg hover:bg-red-700 transition duration-300 transform hover:scale-105"
                        >
                            ENTRADAS
                        </NavLink>
                    </nav>

                    {/* Botón de Menú Móvil (Hamburguesa) */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            {/* Icono de X o Hamburguesa */}
                            {isMenuOpen ? (
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>

                </div>
            </div>

            {/* Menú Móvil (desplegable) */}
            {isMenuOpen && (
                <div className="md:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.name}
                                to={item.path}
                                onClick={() => setIsMenuOpen(false)} // Cierra el menú al hacer clic
                                className={({ isActive }) => 
                                    `block px-3 py-2 rounded-md text-base font-medium uppercase ${
                                        isActive 
                                            ? 'bg-gray-900 text-orange-500' 
                                            : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                                    }`
                                }
                            >
                                {item.name}
                            </NavLink>
                        ))}
                        {/* Botón de Entradas en móvil */}
                        <NavLink 
                            to="/tickets" 
                            onClick={() => setIsMenuOpen(false)}
                            className="block w-full text-center px-3 py-2 mt-2 font-extrabold uppercase bg-red-600 text-white rounded-md hover:bg-red-700 transition"
                        >
                            ENTRADAS
                        </NavLink>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;