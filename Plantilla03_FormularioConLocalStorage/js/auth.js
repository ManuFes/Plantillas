"use strict";
import { displayExercises, displayErrorMessage } from './ui.js';

// Abrir la base de datos IndexedDB
let db;
function openDatabase() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open('LoginDB', 1);

        request.onerror = (event) => {
            console.error("Error al abrir la base de datos", event);
            reject(event);
        };

        request.onsuccess = (event) => {
            db = event.target.result;
            resolve(db);
        };

        request.onupgradeneeded = (event) => {
            db = event.target.result;
            if (!db.objectStoreNames.contains('LoginStore')) {
                db.createObjectStore('LoginStore', { keyPath: 'name' });
            }
        };
    });
}

// Guardar el estado de sesión
async function saveLoginStatus(loggedIn) {
    await openDatabase();
    const transaction = db.transaction(['LoginStore'], 'readwrite');
    const store = transaction.objectStore('LoginStore');
    store.put({ name: 'loggedIn', value: loggedIn });
}

// Obtener el estado de sesión
async function getLoginStatus() {
    await openDatabase();
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(['LoginStore'], 'readonly');
        const store = transaction.objectStore('LoginStore');
        const request = store.get('loggedIn');

        request.onsuccess = (event) => {
            resolve(event.target.result ? event.target.result.value : false);
        };

        request.onerror = (event) => {
            console.error("Error al obtener el estado de sesión", event);
            reject(event);
        };
    });
}

// Manejo del inicio de sesión
export async function handleLogin(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "manu" && password === "1234") {
        await saveLoginStatus(true);
        displayExercises();
    } else {
        displayErrorMessage("Nombre de usuario o contraseña incorrectos.");
    }
}

// Manejo del cierre de sesión
export async function handleLogout() {
    await saveLoginStatus(false);
    location.reload();
}

// Comprobar si el usuario ya ha iniciado sesión
export async function checkLoggedIn() {
    const loggedIn = await getLoginStatus();
    if (loggedIn) {
        displayExercises();
    }
}
