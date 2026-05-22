# CONTEXT.md — Contexto de Marca y Diseño de VR3D

## Identidad de marca

| Atributo | Valor |
|---|---|
| **Nombre** | VR3D Ingeniería |
| **Rubro** | Estudio de ingeniería — Proyectos edilicios, obras civiles y energía solar |
| **País** | Argentina |
| **Tono** | Profesional, técnico, institucional |
| **Idioma del sitio** | Español (es) |
| **Tipografías** | `"Poppins"` (headings) / `"Inter"` (body text), cargadas desde Google Fonts |

---

## Paleta de colores

### Colores primarios (escala de azules)

| Variable | Hex | Uso |
|---|---|---|
| `--color-primary-900` | `#1a202c` | Fondo del header, footer, sección de contacto |
| `--color-primary-700` | `#2c5282` | Títulos h2/h3, botones, bordes hover en servicios |
| `--color-primary-500` | `#4299e1` | Focus de inputs, gradientes, línea decorativa bajo títulos |
| `--color-primary-300` | `#90cdf4` | Azul claro (sin uso directo detectado) |
| `--color-primary-100` | `#ebf4ff` | Background hover en servicios, gradiente del hero original |

### Colores de acento (teal)

| Variable | Hex | Uso |
|---|---|---|
| `--color-accent-500` | `#38b2ac` | Gradientes decorativos, required fields, overlay del hero |
| `--color-accent-400` | `#4fd1c7` | Hover de links en nav, subtítulo "INGENIERÍA" en hero |

### Colores neutros

| Variable | Hex | Uso |
|---|---|---|
| `--color-neutral-900` | `#1a202c` | Igual a primary-900, fondo oscuro |
| `--color-neutral-800` | `#2d3748` | Color de texto principal |
| `--color-neutral-700` | `#4a5568` | Texto secundario |
| `--color-neutral-600` | `#718096` | Texto muted |
| `--color-neutral-500` | `#a0aec0` | Copyright del footer |
| `--color-neutral-400` | `#cbd5e0` | Bordes de inputs y servicios |
| `--color-neutral-300` | `#e2e8f0` | Bordes de secciones |
| `--color-neutral-200` | `#edf2f7` | Background gradient |
| `--color-neutral-100` | `#f7fafc` | Surface secondary |
| `--color-neutral-50` | `#ffffff` | Surface principal, texto inverso |

### Colores de estado (hardcodeados)

| Color | Hex | Uso |
|---|---|---|
| Error | `#e53e3e` | Validación de formulario, campos inválidos |
| Éxito | `#38a169` | Campos válidos del formulario |

---

## Servicios reales del negocio

Extraídos de `ServicesSection.jsx`:

1. Proyectos
2. Planos
3. Cálculos estructurales
4. Dirección de obras
5. Elaboración de ingeniería básica e ingeniería de detalle
6. Proyecto y ejecución de instalaciones solares fotovoltaicas

---

## Proyectos realizados

Extraídos de `ProjectsSection.jsx`:

| Proyecto | Ubicación | Descripción | Detalles |
|---|---|---|---|
| Instalación Fotovoltaica | San Justo, Provincia de Buenos Aires | Instalación fotovoltaica residencial de 6,35 kWp | Enero de 2026 |
| Edificio Barbotto | Buenos Aires, Argentina | Cálculo de la estructura de hormigón armado y sus fundaciones | 10 niveles |
| Edificio Colombo | Buenos Aires, Argentina | Cálculo de la estructura de hormigón armado y sus fundaciones | 3 niveles |
| Edificio Gutierrez | Buenos Aires, Argentina | Cálculo de la estructura de hormigón armado y sus fundaciones | 4 niveles |
| Base Transformador | Buenos Aires, Argentina | Cálculo estructural, planos de encofrados y armaduras | Base para transformador de media tensión |

---

## Clientes que confían en VR3D

Extraídos de `ContactSection.jsx` (sección "Confían en nosotros"):

- **AYR** (`logoayr.jpg`)
- **LESES** (`logoleses.png`)
- **UTN** (Universidad Tecnológica Nacional) (`logoutn.jpg`)
- **AUTOMACER** (`LogoAutomacer.png`)

---

## Decisiones de diseño observadas

### Efectos visuales
- **Overlay con degradado** en la imagen hero de AboutSection: `linear-gradient(135deg, rgba(26,32,44,0.7), rgba(44,82,130,0.6), rgba(56,178,172,0.5))`
- **Línea decorativa bajo títulos h2**: gradiente horizontal `linear-gradient(90deg, primary-500, accent-500)` con `border-radius: 9999px`
- **Underline animado en nav links**: gradiente de `--color-primary-500` a `--color-accent-500`, se expande al hacer hover con `width: 0 → 100%`
- **Backdrop-filter** en el header (`blur(8px)`) y el lightbox (`blur(6px)`)
- **Sombra escalonada** con 5 niveles: `xs`, `sm`, `md`, `lg`, `xl`

### Animaciones y transiciones
- **Hamburguesa animada**: barras se transforman en X con `rotate(45deg)` / `rotate(-45deg)` y la barra central desaparece con `scaleX(0)`
- **Hover en servicios**: `translateX(8px)` + cambio de borde y fondo
- **Hover en about-text**: `translateY(-3px)` + cambio de color de borde
- **Hover en logos de clientes**: `translateY(-5px)` + sombra
- **Hover en botón submit**: `translateY(-2px)` + icono de envío se mueve `translateX(4px)`
- **Transiciones con cubic-bezier**: `cubic-bezier(0.4, 0, 0.2, 1)` en 3 velocidades: `150ms` (fast), `300ms` (normal), `500ms` (slow)
- **fadeIn keyframe**: `opacity: 0 → 1` + `translateY(20px → 0)` en 1s
- **Respeto de `prefers-reduced-motion`**: todas las animaciones se desactivan para usuarios que lo prefieran

### Carrusel de proyectos
- Carrusel nativo con `scroll-snap-type: x mandatory` (sin librería de carrusel)
- Botones de navegación prev/next circulares con sombra
- Dots indicadores con dot activo que se expande (`width: 10px → 28px`)
- Lightbox con `yet-another-react-lightbox`: plugins de Zoom y Thumbnails
- Soporte para slides de tipo YouTube con iframe embebido

### Formulario de contacto
- **Actualmente eliminado del render** — el JSX del formulario no se renderiza, solo queda el enlace a email y la sección de logos
- Validaciones client-side implementadas para nombre, email, teléfono y motivo (500 caracteres máximo)
- Validación en tiempo real con `handleBlur` y estados CSS (`:valid`, `:invalid`, `:placeholder-shown`)

---

## Datos de contacto del negocio

| Canal | Dato |
|---|---|
| **Email** | info.VR3D@gmail.com |
| **Teléfono** | <!-- TODO: completar — no detectado en el código actual --> |
| **Dirección** | <!-- TODO: completar — no detectada en el código actual --> |
| **Redes sociales** | <!-- TODO: completar — no detectadas en el código actual --> |
