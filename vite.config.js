import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ESTA IMPORTACIÓN ES LA CLAVE para corregir el error de PostCSS en versiones modernas de Tailwind.
import tailwindcssPostcss from '@tailwindcss/postcss'
import autoprefixer from 'autoprefixer'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // SECCIÓN CRÍTICA: Configuración para que Vite procese Tailwind.
  css: {
    postcss: {
      plugins: [
        // Usamos la función importada que resuelve el problema de la dependencia.
        tailwindcssPostcss(), 
        autoprefixer(),
      ],
    },
  },
})