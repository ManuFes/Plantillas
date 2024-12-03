"use strict";

// Manejar el logout
logoutButton.addEventListener("click", function (event) {
    deleteIndexedDB("loggedIn"); // Eliminar estado de login
    window.location.href = "../index.html"; // Cargamos el index.html principal
});

// Manejar la selección de los ejercicios del menú "NUMBER"
document.getElementById("mini-calculadora").addEventListener("click", function () {
    loadExercise('mini-calculadora');
});

document.getElementById("cambios-de-base").addEventListener("click", function () {
    loadExercise('cambios-de-base');
});

document.getElementById("calculadora").addEventListener("click", function () {
    loadExercise('calculadora');
});

// Manejar la selección de los ejercicios del menú "STRING"
document.getElementById("modificar-texto").addEventListener("click", function () {
    loadExercise('modificar-texto');
});

document.getElementById("modificar-texto-api").addEventListener("click", function () {
    loadExercise('modificar-texto-api');
});

// Manejar la selección de los ejercicios del menú "ARRAY"
document.getElementById("genera-matrices").addEventListener("click", function () {
    loadExercise('genera-matrices');
});

document.getElementById("genera-matrices-aleatorio").addEventListener("click", function () {
    loadExercise('genera-matrices-aleatorio');
});

// Manejar la selección de los ejercicios del menú "ALMACENA"
document.getElementById("cookie").addEventListener("click", function () {
    loadExercise('cookie');
});