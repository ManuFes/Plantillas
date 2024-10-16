## Descripción del Proyecto

Este proyecto presenta ejemplos prácticos sobre los fundamentos de JavaScript (ES6) aplicados en el desarrollo web del lado del cliente. El objetivo principal es proporcionar una base sólida de JavaScript mediante ejercicios interactivos, incluyendo la implementación de funcionalidades como el inicio de sesión con validación de credenciales.

## Estructura del Proyecto

El proyecto está compuesto por los siguientes archivos y directorios principales:

- `index.html`: Página principal que contiene el diseño de la interfaz y enlaces a ejercicios prácticos de JavaScript.
- `login.js`: Lógica de la aplicación para el inicio de sesión y manejo de cookies, permitiendo acceso a ejercicios solo después de una validación exitosa.
- `style.css`: Hojas de estilo que definen la apariencia visual de la página y los componentes, como el formulario de login y las tarjetas de ejercicios.

### Archivos clave:
1. **index.html**
   - Estructura básica de la página web.
   - Incluye un formulario de inicio de sesión y un contenedor para los ejercicios.
   - Uso de etiquetas semánticas y enlaces a recursos externos como [W3Schools](https://www.w3schools.com/js/default.asp), [JavaScript Info](https://es.javascript.info/js), y [MDN](https://developer.mozilla.org/es/docs/Web/JavaScript).
   
2. **login.js**
   - Script que gestiona la autenticación de usuario utilizando cookies para guardar el estado de inicio de sesión.
   - Si el usuario proporciona credenciales correctas, se muestra el contenido de los ejercicios y un botón de cierre de sesión.
   - Se utiliza la validación de cookies para recordar al usuario si ya había iniciado sesión previamente.

3. **style.css**
   - Estilos personalizados para la página, incluyendo:
     - Apariencia del formulario de inicio de sesión.
     - Diseño de tarjetas interactivas para cada ejercicio.
     - Responsive design para dispositivos móviles.
     - Diseño visual atractivo con colores, fondos y efectos de hover.

## Funcionalidades

- **Inicio de sesión**: El formulario permite a los usuarios autenticarse con un nombre de usuario y contraseña. Las credenciales correctas (`manu` y `1234`) permiten el acceso a los ejercicios.
- **Manejo de sesiones**: Se utilizan cookies para mantener la sesión activa y recordar si el usuario ha iniciado sesión previamente.
- **Acceso a ejercicios**: Los usuarios pueden acceder a varios ejercicios después de iniciar sesión.
- **Cierre de sesión**: Un botón en la esquina superior derecha permite al usuario cerrar sesión, eliminando la cookie de sesión y recargando la página.

## Requisitos

Para visualizar este proyecto correctamente, se necesita un navegador moderno que soporte JavaScript ES6 y el uso de cookies.

## Instrucciones de Uso

1. Clona el repositorio desde [GitHub](https://github.com/ManuFes/Plantillas).
2. Abre `index.html` en tu navegador.
3. Inicia sesión con las credenciales proporcionadas.
4. Accede a los ejercicios disponibles después de iniciar sesión correctamente.

## Créditos

Proyecto desarrollado por Manuel Festa Palma.