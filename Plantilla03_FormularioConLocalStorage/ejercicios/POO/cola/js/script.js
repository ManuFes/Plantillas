"use strict";

class Cola {
    constructor() {
        this.items = JSON.parse(localStorage.getItem("cola")) || []; // Recuperar datos del LocalStorage
    }

    encolar(elemento) {
        this.items.push(elemento);
        this.actualizarStorage(); // Guardar en LocalStorage
    }

    desencolar() {
        if (this.items.length === 0) {
            return "La cola está vacía.";
        }
        const removed = this.items.shift();
        this.actualizarStorage(); // Guardar en LocalStorage
        return removed;
    }

    ojear() {
        if (this.items.length === 0) {
            return "La cola está vacía.";
        }
        return this.items[0];
    }

    mostrar() {
        return [...this.items];
    }

    actualizarStorage() {
        localStorage.setItem("cola", JSON.stringify(this.items)); // Guardar en LocalStorage
    }
}

const cola = new Cola();
let queueContainer;

// Inicializar cuando el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
    queueContainer = document.getElementById("queueContainer");

    if (!queueContainer) {
        console.error("Error crítico: El contenedor queueContainer no se encuentra en el DOM.");
    }

    updateQueueDisplay(); // Mostrar datos iniciales al cargar la página
});

function enqueue() {
    const value = document.getElementById("queueValue").value;

    if (value) {
        cola.encolar(value);
        updateQueueDisplay();
        document.getElementById("queueValue").value = "";
    } else {
        alert("Introduce un valor para encolar.");
    }
}

function dequeue() {
    const removed = cola.desencolar();
    updateQueueDisplay();
    alert(removed);
}

function peekQueue() {
    const front = cola.ojear();
    alert(front);
}

function updateQueueDisplay() {
    if (!queueContainer) {
        console.error("Error: El elemento queueContainer no existe.");
        return;
    }
    queueContainer.innerHTML = cola.mostrar().join(", "); // Mostrar elementos separados por comas
}

function loadFromDatabase() {
    const tasks = ["Fregar", "Tender", "Lavar la ropa", "Cocinar", "Estudiar", "Entrenar"];
    const randomTask = tasks[Math.floor(Math.random() * tasks.length)]; // Selección aleatoria
    cola.encolar(randomTask);
    updateQueueDisplay();
}
