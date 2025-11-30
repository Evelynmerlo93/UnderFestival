import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

// Páginas
import HomePage from './pages/HomePage';
import TicketsPage from './pages/TicketsPage';
import InfoPage from './pages/InfoPage';
import ContactPage from './pages/ContactPage';
import ConfirmacionPage from "./pages/ConfirmacionPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App bg-black min-h-screen text-white">

        {/* HEADER FIJO */}
        <Header />

        {/* CONTENEDOR GENERAL — ESPACIO CORREGIDO */}
        <div className="pt-28 md:pt-32">
          <Routes>
            <Route path="/tickets" element={<TicketsPage />} />
            <Route path="/info" element={<InfoPage />} />
            <Route path="/contacto" element={<ContactPage />} />
            <Route path="/confirmacion" element={<ConfirmacionPage />} />

            {/* Ruta principal */}
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>

        {/* FOOTER */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
