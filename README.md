🎧 UnderFestival - Plataforma de Venta de Entradas

<img width="3999" height="2719" alt="image" src="https://github.com/user-attachments/assets/8ea176c0-881a-4467-8038-4edd0866a43b" />


Plataforma de comercio electrónico (e-commerce) minimalista y responsive diseñada para la venta de entradas de festivales o eventos musicales, con un enfoque en la experiencia de usuario (UX) para la selección y checkout.

Este proyecto se centra en la simulación de un flujo de compra de entradas, manejo de estado del carrito en tiempo real y validación de formularios.
---

🚀 Tecnologías Clave

El proyecto está desarrollado como una aplicación de una sola página (SPA) utilizando el ecosistema moderno de JavaScript.

Categoría

Tecnología

Descripción

Framework

React (Hooks, useMemo)

Biblioteca principal para construir la interfaz de usuario. Uso intensivo de useState, useEffect y useMemo para la gestión de estado y optimización de cálculos del carrito.

Build Tool

Vite

Empaquetador de módulos ultrarrápido utilizado para el entorno de desarrollo y la compilación.

Estilos

Tailwind CSS

Framework CSS utility-first para un diseño rápido, moderno y completamente responsive.

Lenguaje

JavaScript (ES6+)

Lógica funcional para el carrito, cálculos de impuestos y validación de formularios.
--- 

✨ Características Destacadas

Flujo de Compra en Dos Pasos: Navegación sencilla entre la Selección de Entradas (Carrito) y el Formulario de Comprador (Checkout).

Cálculo en Tiempo Real: Subtotal, impuestos (10%) y total final calculados dinámicamente utilizando useMemo para optimizar el rendimiento.

Diseño Dark Mode Inmersivo: Estilo moderno con temática oscura que resalta la identidad visual del evento (colores naranja/verde neón).

Notificaciones No Intrusivas: Implementación de un sistema de notificaciones toast (no alert()) para informar al usuario sobre errores de validación o la confirmación de la compra simulada.

Responsive Design: Diseño optimizado para una perfecta visualización y usabilidad tanto en dispositivos móviles como en escritorios.

---
🛠️ Instalación y Configuración

Para poner en marcha el proyecto localmente, sigue estos sencillos pasos:

1. Clonar el Repositorio

Abre tu terminal y clona el proyecto:

git clone [https://github.com/Evelynmerlo93/UnderFestival.git](https://github.com/Evelynmerlo93/UnderFestival.git)
cd UnderFestival


2. Instalar Dependencias

Instala todas las dependencias necesarias de Node.js:

npm install
# o
yarn install


3. Ejecutar el Servidor de Desarrollo

Inicia el servidor de desarrollo de Vite. Esto abrirá la aplicación en tu navegador (normalmente en http://localhost:5173).

npm run dev
# o
yarn dev


4. Construir para Producción (Opcional)

Si deseas generar los archivos estáticos listos para desplegar (en la carpeta dist/):

npm run build
# o
yarn build

---

📄 Estructura del Proyecto

La lógica principal de la aplicación reside en el componente de página de entradas:

/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── App.jsx            # Contenedor principal de la aplicación.
│   ├── main.jsx           # Punto de entrada de React (montaje de la App).
│   └── pages/
│       └── TicketsPage.jsx # Componente principal de selección y checkout.
├── index.css              # Estilos base y directivas de Tailwind.
├── tailwind.config.js     # Configuración de Tailwind CSS.
├── package.json
└── README.md              # Este archivo.

--- 
 
🤝 Contribución

¡Las contribuciones son bienvenidas! Si deseas mejorar el proyecto, sigue estos pasos:

Haz un fork del repositorio.

Crea una rama para tu característica (git checkout -b feature/nueva-caracteristica).

Realiza tus cambios y haz commit (git commit -m 'feat: Añadir nueva característica').

Sube tus cambios a la rama (git push origin feature/nueva-caracteristica).

Abre un Pull Request.

⚖️ Licencia

Este proyecto está bajo la Licencia MIT.
