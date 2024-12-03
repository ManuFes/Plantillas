"use strict";

// Mostrar u ocultar contenedores
export function displayExercises() {
    document.getElementById('loginContainer').style.display = 'none';
    document.getElementById('registerContainer').style.display = 'none';
    document.getElementById('ejerciciosContainer').style.display = 'flex';
    document.getElementById('logoutTopRight').style.display = 'block';
    document.getElementById('dropdownTools').style.display = 'block';
    document.getElementById('dropdownStrings').style.display = 'block';
    document.getElementById('dropdownPOO').style.display = 'block';
}

// Mostrar mensaje de error
export function displayErrorMessage(message) {
    const errorMessage = document.getElementById('error-msg');
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
}
