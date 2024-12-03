"use strict"

const dimension = document.getElementById("dimension");
const inferior = document.getElementById("inferior");
const superior = document.getElementById("superior");
const matrizA = document.getElementById("matrizA");
const matrizB = document.getElementById("matrizB");
const matrizC = document.getElementById("matrizC");

document.getElementById("suma").addEventListener("click", suma);
document.getElementById("resta").addEventListener("click", resta);
document.getElementById("multiplica").addEventListener("click", multiplica);

document.getElementById("valores").addEventListener("click", valores);
document.getElementById("genera").addEventListener("click", genera);

document.getElementById("aleatorio").addEventListener("click", empezar);
document.getElementById("parar").addEventListener("click", parar);
document.getElementById("rapido").addEventListener("click", masRapido);
document.getElementById("lento").addEventListener("click", masLento);
