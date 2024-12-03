"use strict";

// Credenciales almacenadas internamente
const storedUsername = "jota";
const storedPassword = "dejame";

const loginButton = document.getElementById("loginButton");
const loginMessage = document.getElementById("loginMessage");

async function checkLoginStatus() {
    const result = await getIndexedDB("loggedIn");
    if (result === "true") {
        window.location.href = "./ejercicios/index.html"; // Redirigir si ya ha iniciado sesión
    }
}

// Comprobar el estado de login al cargar la página
checkLoginStatus();

loginButton.addEventListener("click", async function() {
    const usernameInput = document.getElementById("username").value;
    const passwordInput = document.getElementById("password").value;

    // Comprobar credenciales
    if (usernameInput === storedUsername && passwordInput === storedPassword) {
        await setIndexedDB("loggedIn", "true");
        window.location.href = "./ejercicios/index.html";
    } else {
        loginMessage.style.color = "red";
        loginMessage.innerText = "Nombre de usuario o contraseña incorrectos.";
    }
});
