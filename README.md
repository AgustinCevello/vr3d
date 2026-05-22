# VR3D — Sitio Web Institucional

![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=flat-square&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.0.4-646CFF?style=flat-square&logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-7.7.0-CA4245?style=flat-square&logo=reactrouter&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![CSS](https://img.shields.io/badge/CSS-Vanilla-1572B6?style=flat-square&logo=css3&logoColor=white)

## Descripción

Sitio web institucional de **VR3D Ingeniería**, un estudio de ingeniería de Argentina abocado a la elaboración de proyectos edilicios de arquitectura y obras civiles en general. Su objetivo es contribuir a la construcción de un futuro sostenible mediante el uso racional y eficiente de la energía, a través de la construcción sustentable y desarrollando proyectos de generación distribuida de energía eléctrica.

## Secciones del sitio

| Sección | Descripción |
|---|---|
| **Quienes Somos** (About) | Hero visual con imagen de fondo + overlay degradado, título "VR3D INGENIERÍA" y texto descriptivo del estudio |
| **Nuestros Servicios** | Lista de 6 servicios: Proyectos, Planos, Cálculos estructurales, Dirección de obras, Ingeniería básica y de detalle, Instalaciones solares fotovoltaicas |
| **Proyectos Realizados** | Carrusel de proyectos con lightbox (zoom + thumbnails), soporte para imágenes y videos de YouTube embebidos |
| **Contacto** | Enlace al correo electrónico `info.VR3D@gmail.com` con ícono de Gmail + sección "Confían en nosotros" con logos de clientes (AYR, LESES, UTN, AUTOMACER) |

## Características técnicas

- ⚡ **Single Page Application** con navegación suave entre secciones (`scroll-behavior: smooth`)
- 📱 **Diseño responsive** con breakpoints en `992px`, `768px`, `480px` y `375px`
- 🖼️ **Lightbox** de imágenes con zoom, thumbnails y videos YouTube integrados (`yet-another-react-lightbox`)
- 🎠 **Carrusel nativo** con scroll-snap CSS (sin dependencias externas para el scroll)
- 🍔 **Menú hamburguesa** animado para móvil con cierre al hacer clic fuera
- ♿ **Accesibilidad**: `aria-labels`, `prefers-reduced-motion`, `focus-visible`, clase `.visually-hidden`
- 🖨️ **Estilos para impresión** incluidos

## Instalación y uso

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Compilar para producción
npm run build

# Previsualizar la build de producción
npm run preview

# Ejecutar linter
npm run lint
```

## Contacto

- **Email**: [info.VR3D@gmail.com](mailto:info.VR3D@gmail.com)

## Licencia

© 2026 VR3D. Todos los derechos reservados.
