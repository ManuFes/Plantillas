"use strict"

function restarMatrices(matrizA, matrizB) {
    let matrizR = generaMatriz(matrizA.length);
    for (let i=0; i<matrizA.length; i++) {
        for (let j=0; j<matrizB.length; j++) {
            matrizR[i][j] = matrizA[i][j] - matrizB[i][j]; 
        }
    }
    return matrizR;
}