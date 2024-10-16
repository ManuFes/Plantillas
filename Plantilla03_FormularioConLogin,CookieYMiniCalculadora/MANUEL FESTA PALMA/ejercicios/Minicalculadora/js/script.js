"use strict"

let currentInput = "";
let operator = "";

// Función para insertar números en la pantalla
function insertNumber(num) {
  currentInput += num;
  document.getElementById("calcDisplay").value = currentInput;
}

// Función para limpiar la pantalla
function clearCalc() {
  currentInput = "";
  document.getElementById("calcDisplay").value = "";
}

// Función para operaciones (+, -, *, /)
function operate(op) {
  currentInput += ` ${op} `;
  document.getElementById("calcDisplay").value = currentInput;
}

// Función para calcular el resultado
function calculate() {
  try {
    document.getElementById("calcDisplay").value = eval(currentInput);
    currentInput = document.getElementById("calcDisplay").value;
  } catch (e) {
    document.getElementById("calcDisplay").value = "Error";
  }
}
