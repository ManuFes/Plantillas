"use strict";
import { displayExercises, displayErrorMessage } from './ui.js'; // Importamos displayErrorMessage

// Manejo del inicio de sesión
export function handleLogin(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "manu" && password === "1234") {
        sessionStorage.setItem('loggedIn', 'true');
        displayExercises();
    } else {
        displayErrorMessage("Nombre de usuario o contraseña incorrectos.");
    }
}

// Manejo del cierre de sesión
export function handleLogout() {
    sessionStorage.removeItem('loggedIn');
    location.reload();
}

// Comprobar si el usuario ya ha iniciado sesión
export function checkLoggedIn() {
    if (sessionStorage.getItem('loggedIn') === 'true') {
        displayExercises();
    }
}
