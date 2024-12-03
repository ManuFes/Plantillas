"use strict"

let repite;
let tiempo = 500;

function empezar() {
    console.log("Empieza");
    repite = setInterval(matrixHasYou, tiempo);
}

function parar() {
    console.log("Para");
    clearInterval(repite);
}

function masRapido() {
    console.log("Más rápido");
    clearInterval(repite);
    tiempo = tiempo - 50;
    console.log(tiempo);
    repite = setInterval(matrixHasYou, tiempo);
}

function masLento() {
    console.log("Más lento");
    clearInterval(repite);
    tiempo = tiempo + 50;
    console.log(tiempo);
    repite = setInterval(matrixHasYou, tiempo+=50);
}