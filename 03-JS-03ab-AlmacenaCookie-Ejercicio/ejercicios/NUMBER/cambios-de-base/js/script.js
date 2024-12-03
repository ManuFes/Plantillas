"use strict"

const num1 = document.getElementById("num1"); // NÚMERO

const toBinario = document.getElementById("toBinario"); // BOTONES
const toOctal = document.getElementById("toOctal");
const toHexa = document.getElementById("toHexa");

const resultado = document.getElementById("resultado"); // RESULTADO

// FUNCIONES PARA CONVERTIR DE DECIMAL A resultado
toBinario.addEventListener("click", function (event) {
    resultado.innerHTML = parseInt(num1.value).toString(2);
});

toOctal.addEventListener("click", function (event) {
    resultado.innerHTML = parseInt(num1.value).toString(8);
});

toHexa.addEventListener("click", function (event) {
    resultado.innerHTML = parseInt(num1.value).toString(16);
});
