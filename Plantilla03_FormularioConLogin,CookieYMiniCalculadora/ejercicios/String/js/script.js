"use strict";

let intervalId;
let intervalSpeed = 1000; // Velocidad inicial (1 segundo)
let randomActive = false; // Estado inicial de las transformaciones aleatorias

// Función para convertir todo el texto a mayúsculas
function toUppercase() {
  const text = document.getElementById("textInput").value;
  document.getElementById("textInput").value = text.toUpperCase();
}

// Función para convertir todo el texto a minúsculas
function toLowercase() {
  const text = document.getElementById("textInput").value;
  document.getElementById("textInput").value = text.toLowerCase();
}

// Función para capitalizar la primera letra de cada palabra
function capitalizeWords() {
  const text = document.getElementById("textInput").value;
  document.getElementById("textInput").value = text
    .toLowerCase()
    .replace(/\b\w/g, function (char) {
      return char.toUpperCase();
    });
}

// Función para poner la última letra de cada palabra en mayúscula
function lastLetterUpper() {
  const text = document.getElementById("textInput").value;
  document.getElementById("textInput").value = text.replace(/\b\w+\b/g, function (word) {
    return word.slice(0, -1) + word.slice(-1).toUpperCase();
  });
}

// Función para poner la primera letra de cada palabra en minúscula
function firstLetterLower() {
  const text = document.getElementById("textInput").value;
  document.getElementById("textInput").value = text.replace(/\b\w+\b/g, function (word) {
    return word.charAt(0).toLowerCase() + word.slice(1);
  });
}

// Función para convertir todas las vocales a mayúsculas
function vowelsUppercase() {
  const text = document.getElementById("textInput").value;
  document.getElementById("textInput").value = text.replace(/[aeiou]/gi, function (vowel) {
    return vowel.toUpperCase();
  });
}

// Función para convertir todas las consonantes a minúsculas
function consonantsLowercase() {
  const text = document.getElementById("textInput").value;
  document.getElementById("textInput").value = text.replace(/[^aeiou\s]/gi, function (consonant) {
    return consonant.toLowerCase();
  });
}

// Función para convertir solo el primer carácter en mayúsculas
function firstCharUpperCase() {
  const text = document.getElementById("textInput").value;

  if (text.length > 0) {
    document.getElementById("textInput").value = text.charAt(0).toUpperCase() + text.slice(1);
  }
}

// Función para limpiar el textarea
function clearText() {
  document.getElementById("textInput").value = "";
}

// Función para aplicar transformaciones aleatorias
function randomTransformation() {
  const transformations = [
    toUppercase,
    toLowercase,
    capitalizeWords,
    lastLetterUpper,
    firstLetterLower,
    vowelsUppercase,
    consonantsLowercase
  ];
  const randomIndex = Math.floor(Math.random() * transformations.length);
  transformations[randomIndex]();
}

// Iniciar transformaciones aleatorias en intervalos de tiempo
function startRandomTransformation() {
  stopRandomTransformation(); // Detenemos cualquier intervalo anterior
  intervalId = setInterval(randomTransformation, intervalSpeed);
}

// Detener las transformaciones aleatorias
function stopRandomTransformation() {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
}

// Función para actualizar la velocidad basada en el valor del slider
function updateSpeed(value) {
  intervalSpeed = value; // Actualiza la velocidad
  document.getElementById('speedValue').textContent = value + " ms"; // Actualiza el texto visible de la velocidad
  if (randomActive) {
    startRandomTransformation(); // Reinicia las transformaciones aleatorias con la nueva velocidad si están activas
  }
}

// Función para alternar el estado de las transformaciones aleatorias (On/Off) con un toggle switch
function toggleRandom() {
  const toggleBtn = document.getElementById("toggleSwitch");

  if (toggleBtn.checked) {
    // Si está encendido (ON)
    startRandomTransformation();
    randomActive = true;
  } else {
    // Si está apagado (OFF)
    stopRandomTransformation();
    randomActive = false;
  }
}

// Función para obtener una frase de Chuck Norris y mostrarla en el textarea
async function getChuckNorrisJoke() {
  try {
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    const data = await response.json();
    document.getElementById('textInput').value = data.value;
  } catch (error) {
    console.error('Error al obtener la frase de Chuck Norris:', error);
    document.getElementById('textInput').value = "No se pudo obtener una frase de Chuck Norris.";
  }
}
