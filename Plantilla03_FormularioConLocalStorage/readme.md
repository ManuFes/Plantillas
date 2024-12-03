# Ejercicios Desarrollo Web en Entorno de Cliente

## Plataforma de Gestión de Pilas, Colas y Listas con Persistencia

Este proyecto educativo incluye una plataforma interactiva que permite la manipulación de estructuras de datos como **pilas**, **colas** y **listas**, combinadas con un sistema CRUD. Además, cada estructura de datos cuenta con persistencia de información mediante `LocalStorage`, asegurando que los datos se mantengan tras recargar la página.

---

## 📋 Características Principales

### Gestión de Estructuras de Datos

#### **Pilas**
- **Apilar y desapilar**:
  - Los elementos se apilan y desapilan siguiendo la lógica LIFO (último en entrar, primero en salir).
- **Persistencia**:
  - Los datos apilados permanecen disponibles tras recargar la página.
- **Visualización dinámica**:
  - Los elementos se muestran apilados verticalmente en el contenedor correspondiente.

#### **Colas**
- **Encolar y desencolar**:
  - Los elementos se procesan siguiendo la lógica FIFO (primero en entrar, primero en salir).
- **Persistencia**:
  - Los datos encolados permanecen disponibles tras recargar la página.
- **Visualización horizontal**:
  - Los elementos se muestran en línea, separados por comas, dentro del contenedor.

#### **Listas**
- **Añadir, eliminar y acceder**:
  - Permite gestionar elementos con posiciones específicas.
- **Persistencia**:
  - Los datos en la lista permanecen disponibles tras recargar la página.
- **Visualización numerada**:
  - Los elementos se muestran enumerados, indicando su posición en la lista.

---

### Carga de Datos Aleatorios
- **Base de Datos de Tareas**:
  - Botón para cargar tareas predefinidas, como "Fregar", "Tender", "Estudiar", de forma aleatoria.
- **Cargar uno por uno**:
  - Cada vez que se presiona el botón, se añade una tarea aleatoria.

---

## 🌟 Sistema CRUD

### Interfaz de Gestión
- **Formulario dinámico**:
  - Permite gestionar las estructuras de datos directamente desde la interfaz.
- **Visualización interactiva**:
  - Los cambios realizados en pilas, colas o listas se reflejan dinámicamente.

---

## 🌐 Persistencia de Datos
- **`LocalStorage`**:
  - Garantiza que los datos de pilas, colas y listas se mantengan tras cerrar o recargar la página.
- **Sin necesidad de backend**:
  - Toda la lógica y el almacenamiento se manejan en el navegador.

---

## 🎨 Diseño de Interfaz
- **Centrado responsivo**:
  - La tarjeta de manejo y el contenedor de cada estructura están centrados en la pantalla.
- **Adaptación a dispositivos móviles**:
  - El diseño responde a diferentes tamaños de pantalla, asegurando una experiencia óptima en cualquier dispositivo.
- **Estilo moderno**:
  - Fondo dinámico y contenedores con sombras y bordes redondeados.

---

## 📂 Estructura del Proyecto

### Archivos HTML y JavaScript Principales
- **`pila.html`, `cola.html`, `lista.html`**:
  - Contienen la estructura para manipular pilas, colas y listas respectivamente.
- **`script.js`**:
  - Implementa la lógica principal para cada estructura de datos, incluyendo la persistencia en `LocalStorage`.
- **`style.css`**:
  - Proporciona un diseño uniforme y responsivo.

---

## 🚀 Cómo Usar
1. Clonar el repositorio.
2. Abrir cualquier archivo HTML (`pila.html`, `cola.html`, `lista.html`) en el navegador.
3. Usar los formularios para añadir, eliminar o acceder a elementos.
4. Los datos se mantendrán tras recargar la página gracias a `LocalStorage`.

---

## 📦 Requisitos Previos
- Navegador web moderno compatible con `LocalStorage`.
- Editor de texto como Visual Studio Code para realizar modificaciones.

---

## 📜 Licencia
Este proyecto se distribuye con fines educativos bajo la licencia MIT.

