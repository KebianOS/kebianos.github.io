# KebianOS

Sitio web de presentación de KebianOS, una distribución Linux basada en Debian y KDE, pensada para equipos de recursos modestos y para personas que se acercan a Linux por primera vez.

## Estructura

- `index.html`: contenido, secciones, navegación y metadatos de la página.
- `styles.css`: paleta, tipografía, composición, estados interactivos y adaptación a pantallas pequeñas.
- `logo.png`: imagen de marca utilizada en la navegación, el escritorio ilustrativo y el icono del sitio.
- `kebianos-logo.png`: recurso grafico original conservado en el repositorio.

## Ver el sitio

Abre `index.html` directamente en un navegador. El sitio es estatico: no requiere instalacion, compilacion, JavaScript ni dependencias externas.

Para probarlo con un servidor local de Python, ejecuta `python3 -m http.server 8000` desde la carpeta del proyecto y visita `http://localhost:8000`.

## Editar el contenido

Modifica el texto y los enlaces de sección en `index.html`. Los enlaces de la navegación apuntan a `#filosofia`, `#experiencia` y `#proyecto`; si cambias esos destinos, actualiza también el `id` de la sección correspondiente. Sustituye `logo.png` por el icono de marca que quieras publicar, manteniendo ese nombre, o actualiza las referencias de imagen y el icono del sitio.

## Editar el diseno

En `styles.css`, las variables de `:root` concentran colores, tipografías y medidas comunes. Las reglas están agrupadas por zonas de la página. Los puntos de quiebre adaptan la navegación y las columnas a móviles; la preferencia del sistema para reducir movimiento se respeta mediante `prefers-reduced-motion`.

## Accesibilidad y alcance

La página incluye idioma, regiones semánticas, encabezados ordenados, enlace para saltar al contenido, foco visible, etiquetas de navegación y estilos de movimiento reducido. El escritorio de la portada es una ilustración hecha con HTML y CSS, no una captura ni una función interactiva del sistema operativo. La web no anuncia una descarga ni especificaciones que el proyecto aún no documenta.
