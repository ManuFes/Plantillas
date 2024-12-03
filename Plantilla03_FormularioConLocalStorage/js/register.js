"use strict";

export function handleRegister(event) {
    event.preventDefault();

    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password === confirmPassword) {
        document.getElementById('registerErrorMsg').style.display = 'none';
        alert("Registro exitoso!");
    } else {
        document.getElementById('registerErrorMsg').textContent = "Las contraseñas no coinciden.";
        document.getElementById('registerErrorMsg').style.display = 'block';
    }
}