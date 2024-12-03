"use strict";

class Pila {
    constructor() {
        // Cargar elementos guardados en LocalStorage
        this.items = JSON.parse(localStorage.getItem("pila")) || [];
    }

    apilar(elemento) {
        this.items.push(elemento);
        this.actualizarStorage(); // Guardar en LocalStorage
    }

    desapilar() {
        if (this.items.length === 0) return "La pila está vacía.";
        const removed = this.items.pop();
        this.actualizarStorage(); // Actualizar LocalStorage
        return removed;
    }

    ojear() {
        if (this.items.length === 0) return "La pila está vacía.";
        return this.items[this.items.length - 1];
    }

    mostrar() {
        return [...this.items].reverse(); // Mostrar en orden inverso
    }

    actualizarStorage() {
        localStorage.setItem("pila", JSON.stringify(this.items)); // Guardar en LocalStorage
    }
}

const pila = new Pila();
const stackVisualContainer = document.getElementById("stackVisualContainer");

function pushToStack() {
    const value = document.getElementById("stackValue").value;
    if (value) {
        pila.apilar(value);
        updateStackDisplay();
        document.getElementById("stackValue").value = ""; // Limpiar input
    } else {
        alert("Introduce un valor para apilar.");
    }
}

function popFromStack() {
    const removed = pila.desapilar();
    updateStackDisplay();
    alert(removed);
}

function peekStack() {
    const top = pila.ojear();
    alert(top);
}

function updateStackDisplay() {
    if (!stackVisualContainer) {
        console.error("Error: El elemento stackVisualContainer no existe.");
        return;
    }

    stackVisualContainer.innerHTML = ""; // Limpiar el contenedor
    const stackElements = pila.mostrar();
    stackElements.forEach((element) => {
        const div = document.createElement("div");
        div.textContent = element; // Texto del elemento
        stackVisualContainer.appendChild(div); // Agregar al contenedor
    });
}

function loadFromDatabase() {
    const tasks = ["Fregar", "Tender", "Lavar la ropa", "Cocinar", "Estudiar", "Entrenar"];
    const randomTask = tasks[Math.floor(Math.random() * tasks.length)]; // Selección aleatoria
    pila.apilar(randomTask);
    updateStackDisplay();
}

// Inicializar la visualización de la pila al cargar la página
document.addEventListener("DOMContentLoaded", updateStackDisplay);
