window.onload = function() {
    const loginForm = document.getElementById('loginForm');
    const loginContainer = document.getElementById('loginContainer');
    const ejerciciosContainer = document.getElementById('ejerciciosContainer');
    const logoutTopRight = document.getElementById('logoutTopRight');
    const errorMessage = document.getElementById('error-msg');
    let loggedIn = false; // Variable para manejar el estado de sesión

    // Comprobar si el usuario ya ha iniciado sesión
    if (loggedIn) {
        displayExercises();
    }

    // Manejar el formulario de inicio de sesión
    loginForm.onsubmit = function(event) {
        event.preventDefault(); // Evitar que la página se recargue

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Validación simple de credenciales
        if (username === "manu" && password === "1234") {
            loggedIn = true; // Actualizar la variable de sesión
            displayExercises(); // Mostrar los ejercicios
        } else {
            displayErrorMessage("Nombre de usuario o contraseña incorrectos.");
        }
    };

    // Función para mostrar los ejercicios y ocultar el formulario de login
    function displayExercises() {
        loginContainer.style.display = 'none';
        ejerciciosContainer.style.display = 'flex';
        logoutTopRight.style.display = 'block';
    }

    // Manejar el evento de logout
    logoutTopRight.onclick = function() {
        loggedIn = false; // Resetear la variable de sesión
        location.reload(); // Recargar la página para volver al estado inicial
    };

    // Función para mostrar mensajes de error
    function displayErrorMessage(message) {
        errorMessage.textContent = message;
        errorMessage.style.display = 'block';
    }
};
