"use strict"

let anterior;

function aleatorioExclusivo(min, max) {
    if (min > max) {
        let temp = min;
        min = max;
        max = temp;
    }
    return Math.floor(Math.random() * (max - min)) + min; // INCLUYE EL RANGO SUPERIOR
}

function aleatorioInclusivo(min, max) {
    if (min > max) {
        let temp = min;
        min = max;
        max = temp;
    }
    return Math.floor(Math.random() * (max - min + 1)) + min; // INCLUYE EL RANGO SUPERIOR
}

function matrixHasYou() {
    valores();
    genera();
    let valor = aleatorioInclusivo(1, 3);
    while (valor == anterior) {
        valor = aleatorioInclusivo(1, 3);
    }
    switch (valor) {
        case 1:
            suma();
            break;
        case 2:
            resta();
            break;
        case 3:
            multiplica();
            break;
    }
    anterior = valor;
}
