"use strict";

let matrixA = [];
let matrixB = [];
let resultMatrix = [];

// Genera matrices cuadradas aleatorias
function generateMatrices() {
    const size = parseInt(document.getElementById("matrixSize").value);
    const min = parseInt(document.getElementById("minValue").value);
    const max = parseInt(document.getElementById("maxValue").value);

    // Limpiar el contenedor de matrices antes de generar nuevas
    clearMatricesDisplay();

    matrixA = createRandomMatrix(size, min, max);
    matrixB = createRandomMatrix(size, min, max);

    displayMatrix("Matriz A", matrixA);
    displayMatrix("Matriz B", matrixB);
}

// Función para limpiar el contenedor de matrices
function clearMatricesDisplay() {
    const container = document.getElementById("matricesContainer");
    container.innerHTML = "";  // Limpia el contenido del contenedor
}

// Crea una matriz cuadrada de tamaño `size` con valores aleatorios entre `min` y `max`
function createRandomMatrix(size, min, max) {
    let matrix = [];
    for (let i = 0; i < size; i++) {
        let row = [];
        for (let j = 0; j < size; j++) {
            row.push(Math.floor(Math.random() * (max - min + 1)) + min);
        }
        matrix.push(row);
    }
    return matrix;
}

// Muestra una matriz en el contenedor de matrices
function displayMatrix(title, matrix) {
    const container = document.getElementById("matricesContainer");
    const matrixDiv = document.createElement("div");
    matrixDiv.innerHTML = `<h5>${title}</h5><table>${matrix.map(row => `<tr>${row.map(value => `<td>${value}</td>`).join('')}</tr>`).join('')}</table>`;
    container.appendChild(matrixDiv);
}

// Función para sumar matrices
function addMatrices() {
    resultMatrix = matrixA.map((row, i) => row.map((value, j) => value + matrixB[i][j]));
    clearMatricesDisplay();
    displayMatrix("Resultado (Suma)", resultMatrix);
}

// Función para restar matrices
function subtractMatrices() {
    resultMatrix = matrixA.map((row, i) => row.map((value, j) => value - matrixB[i][j]));
    clearMatricesDisplay();
    displayMatrix("Resultado (Resta)", resultMatrix);
}

// Función para multiplicar matrices
function multiplyMatrices() {
    const size = matrixA.length;
    resultMatrix = Array.from({ length: size }, () => Array(size).fill(0));

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            for (let k = 0; k < size; k++) {
                resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
            }
        }
    }
    clearMatricesDisplay();
    displayMatrix("Resultado (Multiplicación)", resultMatrix);
}
