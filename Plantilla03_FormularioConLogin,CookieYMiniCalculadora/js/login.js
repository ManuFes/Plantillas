window.onload = function() {
    const loginForm = document.getElementById('loginForm');
    const loginContainer = document.getElementById('loginContainer');
    const ejerciciosContainer = document.getElementById('ejerciciosContainer');
    const logoutButton = document.getElementById('logoutButton');
    const logoutTopRight = document.getElementById('logoutTopRight'); // Selección del botón de logout en la barra de navegación
    const errorMessage = document.getElementById('error-msg');
    const number = document.getElementById('dropdownTools');

    // Comprobar si el usuario ya ha iniciado sesión anteriormente
    if (getCookie('loggedIn') === 'true') {
        displayExercises(); // Si ya ha iniciado sesión, mostrar los ejercicios
    }

    // Manejar el formulario de inicio de sesión
    loginForm.onsubmit = function(event) {
        event.preventDefault(); // Evitar que la página se recargue

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Validación simple de credenciales
        if (username === "manu" && password === "1234") {
            setCookie('loggedIn', 'true', 1); // Guardar la cookie de sesión
            displayExercises(); // Mostrar los ejercicios
        } else {
            displayErrorMessage("Nombre de usuario o contraseña incorrectos."); // Mostrar error
        }
    };

    // Función para mostrar los ejercicios y ocultar el formulario de login
    function displayExercises() {
        loginContainer.style.display = 'none'; // Ocultar el contenedor de login
        ejerciciosContainer.style.display = 'flex'; // Mostrar el contenedor de los ejercicios
        logoutTopRight.style.display = 'block'; // Mostrar el botón de logout en la barra de navegación
        number.style.display = 'block'; 
    }

    // Manejar el evento de logout
    logoutTopRight.onclick = function() {
        setCookie('loggedIn', '', -1); // Eliminar la cookie de sesión
        location.reload(); // Recargar la página para volver al estado inicial
        number.style.display = 'none';
    };

    // Función para mostrar mensajes de error
    function displayErrorMessage(message) {
        errorMessage.textContent = message;
        errorMessage.style.display = 'block'; // Mostrar el mensaje de error
    }

    // Función para establecer cookies
    function setCookie(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/";
    }

    // Función para obtener el valor de una cookie
    function getCookie(name) {
        const cname = name + "=";
        const decodedCookie = decodeURIComponent(document.cookie);
        const cookieArray = decodedCookie.split(';');
        for (let i = 0; i < cookieArray.length; i++) {
            let cookie = cookieArray[i].trim();
            if (cookie.indexOf(cname) === 0) {
                return cookie.substring(cname.length, cookie.length);
            }
        }
        return ""; // Si no se encuentra la cookie, devolver cadena vacía
    }
};
