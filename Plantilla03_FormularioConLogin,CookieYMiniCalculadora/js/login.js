"use strick"
window.onload = function() {
    const loginForm = document.getElementById('loginForm');
    const loginContainer = document.getElementById('loginContainer');
    const ejerciciosContainer = document.getElementById('ejerciciosContainer');
    const logoutTopRight = document.getElementById('logoutTopRight'); // Botón de logout en la barra de navegación
    const errorMessage = document.getElementById('error-msg');
    const number = document.getElementById('dropdownTools');
    const strings = document.getElementById('dropdownStrings');

    // Comprobar si el usuario ya ha iniciado sesión anteriormente usando sessionStorage
    if (sessionStorage.getItem('loggedIn') === 'true') {
        displayExercises(); // Si ya ha iniciado sesión, mostrar los ejercicios
    }

    // Manejar el formulario de inicio de sesión
    loginForm.onsubmit = function(event) {
        event.preventDefault(); // Evitar que la página se recargue

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Validación simple de credenciales
        if (username === "manu" && password === "1234") {
            sessionStorage.setItem('loggedIn', 'true'); // Guardar el estado de sesión
            displayExercises(); // Mostrar los ejercicios
        } else {
            displayErrorMessage("Nombre de usuario o contraseña incorrectos."); // Mostrar error
        }
    };

    // Función para mostrar los ejercicios y ocultar el formulario de login
    function displayExercises() {
        loginContainer.style.display = 'none'; // Ocultar el contenedor de login
        ejerciciosContainer.style.display = 'flex'; // Mostrar el contenedor de los ejercicios
        logoutTopRight.style.display = 'block'; // Mostrar el botón de logout
        number.style.display = 'block'; // Mostrar el botón "Number"
        strings.style.display = 'block'; // Mostrar el botón "Strings"
    }

    // Manejar el evento de logout
    logoutTopRight.onclick = function() {
        sessionStorage.removeItem('loggedIn'); // Eliminar el estado de sesión
        location.reload(); // Recargar la página para volver al estado inicial
        number.style.display = 'none'; // Ocultar el botón "Number"
        strings.style.display = 'none'; // Ocultar el botón "Strings"
    };

    // Función para mostrar mensajes de error
    function displayErrorMessage(message) {
        errorMessage.textContent = message;
        errorMessage.style.display = 'block'; // Mostrar el mensaje de error
    }
};
