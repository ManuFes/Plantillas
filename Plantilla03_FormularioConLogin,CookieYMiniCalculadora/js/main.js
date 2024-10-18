import { handleLogin, handleLogout, checkLoggedIn } from './auth.js';
import { handleRegister } from './formValidation.js';
import { displayExercises } from './ui.js';

window.onload = function() {
    checkLoggedIn();

    document.getElementById('loginForm').onsubmit = handleLogin;
    document.getElementById('registerForm').onsubmit = handleRegister;
    document.getElementById('logoutTopRight').onclick = handleLogout;
};
