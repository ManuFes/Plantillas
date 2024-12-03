"use strict"

function todasMinusculas() {
    texto.value = texto.value.toLowerCase();
};

function primeraMin() {
    const palabras = texto.value.split(" ");

    for (let i = 0; i < palabras.length; i++) {
        palabras[i] = palabras[i].charAt(0).toLowerCase() + palabras[i].substring(1);
    }
    texto.value = palabras.join(" ");
};

function ultimaMin() {
    const palabras = texto.value.split(" ");

    for (let i = 0; i < palabras.length; i++) {
        palabras[i] = palabras[i].substring(0, palabras[i].length - 1) + palabras[i].charAt(palabras[i].length - 1).toLowerCase();
    }
    texto.value = palabras.join(" ");
};

function vocalesMin() {
    const caracteres = texto.value.split("");

    for (let i = 0; i < caracteres.length; i++) {
        if (caracteres[i] == 'A' || caracteres[i] == 'E' || caracteres[i] == 'I' || caracteres[i] == 'O' || caracteres[i] == 'U') {
            caracteres[i] = caracteres[i].toLowerCase();
        }
    }
    texto.value = caracteres.join("");
};

function consonantesMin() {
    const caracteres = texto.value.split("");

    for (let i = 0; i < caracteres.length; i++) {
        if (!(caracteres[i] == 'A' || caracteres[i] == 'E' || caracteres[i] == 'I' || caracteres[i] == 'O' || caracteres[i] == 'U')) {
            caracteres[i] = caracteres[i].toLowerCase();
        }
    }
    texto.value = caracteres.join("");
};