"use strict";

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
