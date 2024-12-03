"use strict"

function rellena(matriz) {
    for (let i = 0; i < matriz.length ; i++) {
        for (let j = 0; j < matriz.length; j++) {
            matriz[i][j] = aleatorio(10, 99);
        }
    }
    console.log(matriz);
    return matriz;
}