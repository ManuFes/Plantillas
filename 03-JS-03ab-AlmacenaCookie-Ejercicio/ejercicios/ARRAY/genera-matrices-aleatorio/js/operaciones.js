"use strict"

function sumar(matrizA, matrizB) {
    let matrizC = inicializaMatriz(parseInt(dimension.value));
    for (let i = 0; i < matrizA.length; i++) {
        for (let j = 0; j < matrizB.length; j++) {

            matrizC[i][j] = matrizC[i][j] + (matrizA[i][j] + matrizB[i][j]);

        }
    }
    return matrizC;
}

function restar(matrizA, matrizB) {
    let matrizC = inicializaMatriz(parseInt(dimension.value));
    for (let i = 0; i < matrizA.length; i++) {
        for (let j = 0; j < matrizB.length; j++) {

            matrizC[i][j] = matrizC[i][j] + (matrizA[i][j] - matrizB[i][j]);

        }
    }
    return matrizC;
}

function multiplicar(matrizA, matrizB) {
    let matrizC = inicializaMatriz(parseInt(dimension.value));
    for (let i = 0; i < matrizA.length; i++) {
        for (let j = 0; j < matrizB.length; j++) {
            for (let k = 0; k < matrizA[i].length; k++) {
                matrizC[i][j] = matrizC[i][j] + (matrizA[i][k] * matrizB[k][j]);
            }
        }
    }
    return matrizC;
}
