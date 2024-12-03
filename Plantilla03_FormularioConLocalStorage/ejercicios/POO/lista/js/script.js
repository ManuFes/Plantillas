"use strict";

class Lista {
    constructor() {
        this.items = JSON.parse(localStorage.getItem("lista")) || []; // Recuperar datos del LocalStorage
    }

    anadir(elemento, posicion) {
        if (posicion >= 0 && posicion <= this.items.length) {
            this.items.splice(posicion, 0, elemento);
            this.actualizarStorage(); // Guardar en LocalStorage
        } else {
            return "Posición no válida.";
        }
    }

    eliminar(posicion) {
        if (posicion >= 0 && posicion < this.items.length) {
            const removed = this.items.splice(posicion, 1)[0];
            this.actualizarStorage(); // Guardar en LocalStorage
            return removed;
        } else {
            return "Posición no válida.";
        }
    }

    acceder(posicion) {
        if (posicion >= 0 && posicion < this.items.length) {
            return this.items[posicion];
        } else {
            return "Posición no válida.";
        }
    }

    mostrar() {
        return [...this.items];
    }

    actualizarStorage() {
        localStorage.setItem("lista", JSON.stringify(this.items)); // Guardar en LocalStorage
    }
}

const lista = new Lista();
let listContainer;

// Inicializar cuando el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
    listContainer = document.getElementById("listContainer");

    if (!listContainer) {
        console.error("Error crítico: El contenedor listContainer no se encuentra en el DOM.");
    }

    updateListDisplay(); // Mostrar datos iniciales al cargar la página
});

function addToList() {
    const value = document.getElementById("listValue").value;
    const position = parseInt(document.getElementById("listPosition").value, 10);

    if (value && !isNaN(position) && position > 0) {
        lista.anadir(value, position - 1); // Ajustamos la posición a base 0
        updateListDisplay();
        document.getElementById("listValue").value = "";
        document.getElementById("listPosition").value = "";
    } else {
        alert("Introduce un valor y una posición válidos.");
    }
}

function removeFromList() {
    const position = parseInt(document.getElementById("listPosition").value, 10);

    if (!isNaN(position) && position > 0) {
        const removed = lista.eliminar(position - 1); // Ajustamos la posición a base 0
        if (removed !== "Posición no válida.") {
            updateListDisplay();
            alert(`Elemento eliminado: ${removed}`);
        } else {
            alert(removed);
        }
        document.getElementById("listPosition").value = "";
    } else {
        alert("Introduce una posición válida.");
    }
}

function accessList() {
    const position = parseInt(document.getElementById("listPosition").value, 10);

    if (!isNaN(position) && position > 0) {
        const element = lista.acceder(position - 1); // Ajustamos la posición a base 0
        alert(`Elemento en la posición ${position}: ${element}`);
        document.getElementById("listPosition").value = "";
    } else {
        alert("Introduce una posición válida.");
    }
}

function updateListDisplay() {
    if (!listContainer) {
        console.error("Error: El elemento listContainer no existe.");
        return;
    }
    listContainer.innerHTML = "";
    const listElements = lista.mostrar();
    listElements.forEach((element, index) => {
        const div = document.createElement("div");
        div.textContent = `${index + 1}. ${element}`; // Mostrar posiciones basadas en 1
        listContainer.appendChild(div);
    });
}

function loadFromDatabase() {
    const tasks = ["Fregar", "Tender", "Lavar la ropa", "Cocinar", "Estudiar", "Entrenar"];
    const randomTask = tasks[Math.floor(Math.random() * tasks.length)]; // Selección aleatoria
    lista.anadir(randomTask, lista.mostrar().length); // Añadir al final
    updateListDisplay();
}
