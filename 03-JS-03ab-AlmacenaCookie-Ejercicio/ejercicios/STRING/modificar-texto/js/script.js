"use strict"

const texto = document.getElementById("texto");

document.getElementById("mayusculas").addEventListener("click", todasMayusculas);
document.getElementById("primeraMay").addEventListener("click", primeraMay);
document.getElementById("ultimaMay").addEventListener("click", ultimaMay);
document.getElementById("vocalesMay").addEventListener("click", vocalesMay);
document.getElementById("consonantesMay").addEventListener("click", consonantesMay);

document.getElementById("minusculas").addEventListener("click", todasMinusculas);
document.getElementById("primeraMin").addEventListener("click", primeraMin);
document.getElementById("ultimaMin").addEventListener("click", ultimaMin);
document.getElementById("vocalesMin").addEventListener("click", vocalesMin);
document.getElementById("consonantesMin").addEventListener("click", consonantesMin);

document.getElementById("aleatorio").addEventListener("click", empezar);
document.getElementById("parar").addEventListener("click", parar);
