"use strict"

function todasMayusculas() {
    texto.value = texto.value.toUpperCase();
};

function primeraMay() {
    const palabras = texto.value.split(" "); // Divido la cadena por espacios en blanco

    for (let i = 0; i < palabras.length; i++) {
        palabras[i] = palabras[i].charAt(0).toUpperCase() + palabras[i].substring(1);
    } // Hago Mayúsculas (toUpperCase) el primer carácter y lo uno al resto (substring) de la cadena
    texto.value = palabras.join(" ");
};

function ultimaMay() {
    const palabras = texto.value.split(" ");

    for (let i = 0; i < palabras.length; i++) {
        palabras[i] = palabras[i].substring(0, palabras[i].length - 1) + palabras[i].charAt(palabras[i].length - 1).toUpperCase();
    }
    texto.value = palabras.join(" ");
};

function vocalesMay(eent) {
    const caracteres = texto.value.split(""); // Divido la cadena por carácter

    for (let i = 0; i < caracteres.length; i++) {
        if (caracteres[i] == 'a' || caracteres[i] == 'e' || caracteres[i] == 'i' || caracteres[i] == 'o' || caracteres[i] == 'u') {
            caracteres[i] = caracteres[i].toUpperCase();
        }
    }
    texto.value = caracteres.join("");
};

function consonantesMay() {
    const caracteres = texto.value.split("");

    for (let i = 0; i < caracteres.length; i++) {
        if (!(caracteres[i] == 'a' || caracteres[i] == 'e' || caracteres[i] == 'i' || caracteres[i] == 'o' || caracteres[i] == 'u')) {
            caracteres[i] = caracteres[i].toUpperCase();
        }
    }
    texto.value = caracteres.join("");
};