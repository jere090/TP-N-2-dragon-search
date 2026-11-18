# TP-N-2-dragon-search

# Dragon Search - Catálogo de Dragon Ball

Trabajo Práctico Nº2 de Programación III. Aplicación web multi-página desarrollada con Vite, JavaScript vanilla y estilos personalizados que consume una API pública de Dragon Ball.

## Tema Elegido

Un buscador y catálogo interactivo de personajes del universo de Dragon Ball, mostrando sus características principales (Ki, Ki Máximo, Raza y Afiliación).

## API Utilizada

Se consume la API pública y gratuita de Dragon Ball:

Endpoint principal: [https://web.dragonball-api.com/api/characters?limit=58](https://web.dragonball-api.com/)

## ¿Cómo funciona Vite en este proyecto?

Este proyecto utiliza Vite como empaquetador y servidor de desarrollo local. Sus características principales son:

1. **Entorno de desarrollo ultra rápido:** Levanta un servidor local con recarga en caliente (HMR) gracias a la compilación bajo demanda mediante módulos nativos de ES (`import`/`export`).
2. **Configuración Multi-página:** Mediante el archivo `vite.config.js` (`rollupOptions.input`), el proyecto está configurado para manejar múltiples puntos de entrada (`index.html` y `catalogo.html`), permitiendo navegar de manera fluida entre la página principal y el catálogo.
3. **Optimización para Producción (`build`):** Empaqueta, minifica y optimiza todos los recursos (JS, CSS e imágenes) dejándolos listos en la carpeta `dist/` para ser desplegados en cualquier servidor estático.

## Cómo correr el proyecto localmente

Sigue estos pasos en tu terminal para clonar, instalar y ejecutar el proyecto en tu computadora:

1. **Clonar o descargar el repositorio** en tu equipo.
2. Abrir la carpeta del proyecto en tu terminal (por ejemplo, en VS Code).
3. **Instalar las dependencias** necesarias ejecutando:
   bash
   npm install

## Iniciar el servidor de desarrollo local

Bash
npm run dev
Esto te da una URL local para abrirlo en el navegador.

## Generar la versión de producción (build):

Para empaquetar el sitio optimizado en la carpeta dist/, ejecuta:

Bash
npm run build

## Previsualizar la versión de producción:

Bash
npm run preview

## Funcionalidades Principales

Estructura Multi-Página: Navegación fluida entre la página de inicio (index.html) y el catálogo interactivo (catalogo.html).

Consumo de API con Fetch: Petición asíncrona a la Dragon Ball API para la obtención dinámica de los personajes.

Buscador en tiempo real: Campo de búsqueda interactivo (input) que filtra los personajes al instante a medida que el usuario escribe su nombre.

Diseño Responsivo (Mobile-First): Estilos adaptados mediante CSS Grid, Flexbox y Media Queries para que se vea perfectamente tanto en computadoras como en teléfonos celulares.

Manejo de errores y estados: Mensajes visuales de "Cargando..." o "Sin resultados" según el estado de la red o la búsqueda.
