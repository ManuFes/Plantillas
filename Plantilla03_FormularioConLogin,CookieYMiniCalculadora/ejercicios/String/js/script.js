"use strict";

let intervalId;
let intervalSpeed = 1000; // Velocidad inicial (1 segundo)

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

// Aumentar la velocidad de las transformaciones aleatorias
function increaseSpeed() {
  if (intervalSpeed > 200) { // Limite de velocidad mínima
    intervalSpeed -= 200; // Aumentamos la velocidad disminuyendo el tiempo entre ejecuciones
    if (intervalId) {
      startRandomTransformation(); // Reiniciar con la nueva velocidad
    }
  }
}

// Disminuir la velocidad de las transformaciones aleatorias
function decreaseSpeed() {
  intervalSpeed += 200; // Disminuimos la velocidad aumentando el tiempo entre ejecuciones
  if (intervalId) {
    startRandomTransformation(); // Reiniciar con la nueva velocidad
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
