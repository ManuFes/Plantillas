# Ejercicios Desarrollo Web en Entorno de Cliente

## Proyecto de Plataforma de Ejercicios con Autenticación y Gestión de Matrices

Este proyecto es una plataforma educativa que permite al usuario acceder a una serie de ejercicios interactivos y funcionalidades avanzadas, como la generación y manipulación de matrices. Incluye un sistema de autenticación mediante login que utiliza **IndexedDB** para almacenar el estado de sesión del usuario, asegurando que el contenido de la página sea accesible solo tras iniciar sesión. 

El proyecto está desarrollado con **HTML**, **CSS**, y **JavaScript** en ES6, lo que permite una estructura modular, un diseño responsivo y una interfaz intuitiva.

---

## 📋 Características Principales

- **Login persistente con IndexedDB**: 
  - Utiliza IndexedDB para almacenar de manera segura el estado de sesión del usuario, permitiendo que, al iniciar sesión, el usuario continúe autenticado incluso al recargar la página.
- **Interfaz de ejercicios interactivos**:
  - Contiene ejercicios de JavaScript que incluyen ejemplos y prácticas con números, cadenas y, específicamente, operaciones con matrices.
- **Generador de matrices**:
  - Una funcionalidad avanzada permite al usuario crear matrices cuadradas con valores aleatorios y realizar operaciones de **suma**, **resta** y **multiplicación** de matrices.
- **Persistencia de sesión mejorada**:
  - Al cerrar sesión, se elimina el estado almacenado en IndexedDB, restringiendo nuevamente el acceso al contenido.
  
---

## 📂 Estructura del Proyecto

Este proyecto está organizado en los siguientes archivos y carpetas:

### Archivos HTML y JavaScript Principales

- **`index.html`**:
  - Archivo principal que contiene la estructura HTML general. Incluye el formulario de inicio de sesión y la sección de ejercicios, así como la barra de navegación que permite acceder a diferentes recursos y secciones del proyecto, como la sección de **Matrices**.

- **`main.js`**:
  - Controla el flujo de la aplicación, inicializa la página según el estado de sesión, y maneja eventos para alternar entre los formularios de login y registro.

### Sistema de Autenticación

- **`auth.js`**:
  - Implementa la autenticación del usuario utilizando IndexedDB en lugar de cookies. Comprueba el estado de sesión, permite el inicio y cierre de sesión, y se asegura de que solo los usuarios autenticados puedan acceder a los ejercicios.
  
- **`register.js`**:
  - Contiene la lógica para manejar el registro de nuevos usuarios, incluyendo validaciones de contraseña y retroalimentación visual en caso de error.
  
- **`formValidation.js`**:
  - Incluye funciones para validar los datos de entrada del usuario, asegurando que los formularios de login y registro se completen correctamente.

### Funcionalidad de Matrices

- **`ui.js`**:
  - Contiene funciones para manejar la interfaz de usuario, como ocultar o mostrar contenedores específicos y mostrar mensajes de error.
  
- **`script.js`** (en la carpeta de matrices):
  - Controla la generación y manipulación de matrices cuadradas. Permite definir el tamaño de la matriz y los valores mínimos y máximos, generando matrices aleatorias que el usuario puede sumar, restar o multiplicar.

### Estilos CSS

- **`style.css`**:
  - Proporciona los estilos para la presentación de la página, diseñando el formulario de login, la interfaz de ejercicios y el generador de matrices. Incluye un diseño adaptativo y moderno que asegura que el proyecto sea accesible y visualmente atractivo en diferentes dispositivos.

---

## 🌐 Navegación en la Plataforma

La barra de navegación contiene enlaces a recursos externos de JavaScript (W3Schools, JavaScript Info, MDN) y a los ejercicios disponibles en la plataforma:

1. **Minicalculadora**: Ejercicio interactivo para realizar operaciones aritméticas básicas.
2. **Cambio de Base**: Herramienta para convertir números entre distintas bases.
3. **Ejemplos de Strings**: Ejercicios con cadenas de texto.
4. **Matrices**: Sección dedicada a la generación y manipulación de matrices cuadradas.

---


