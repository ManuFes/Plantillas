"use strict"

let matA, matB, matC;

function valores() {
    inferior.value = aleatorioInclusivo(0, 9);
    superior.value = aleatorioInclusivo(0, 9);
    dimension.value = aleatorioInclusivo(parseInt(inferior.value), parseInt(superior.value)).toString();}

function genera() {
    matA = generaMatriz(parseInt(dimension.value));
    matrizA.innerHTML = muestraMatriz(matA);
    matB = generaMatriz(parseInt(dimension.value));
    matrizB.innerHTML = muestraMatriz(matB);
}

function generaMatriz(dimension) {
    let matriz = new Array(dimension);
    for (let i = 0; i < dimension; i++) {
        matriz[i] = new Array(dimension);
    }
    for (let i = 0; i < dimension; i++) {
        for (let j = 0; j < dimension; j++) {
            matriz[i][j] = aleatorioInclusivo(parseInt(inferior.value), parseInt(superior.value));
        }
    }
    return matriz;
}

function muestraMatriz(matriz) {
    let cadena = "<table>";
    for (let i = 0; i < matriz.length; i++) {
        cadena += "<tr>";
        for (let j = 0; j < matriz.length; j++) {
            cadena += `<td>${matriz[i][j]}</td>`;
        }
        cadena += "</tr>";
    }
    cadena += "</table>";
    return cadena;
}

function inicializaMatriz(dimension) {
    let matriz = new Array(dimension);
    for (let i = 0; i < dimension; i++) {
        matriz[i] = new Array(dimension);
    }
    for (let i = 0; i < dimension; i++) {
        for (let j = 0; j < dimension; j++) {
            matriz[i][j] = 0;
        }
    }
    return matriz;
}
