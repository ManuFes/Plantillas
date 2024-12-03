"use strict"

const texto = document.getElementById("texto");

const ciudad = document.getElementById("ciudad");
document.getElementById("cargar").addEventListener("click", function (event) {
    const option = ciudad.options[ciudad.selectedIndex];
    if (!option.value) {
        texto.value = "Por favor, selecciona una ciudad.";
        return;
    }
    console.log(`Cargando datos... de ${ciudad.value}, en lat: ${option.dataset.lat} y lon: ${option.dataset.lon}`);
    solicitar(option.dataset.lat, option.dataset.lon);
});

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
