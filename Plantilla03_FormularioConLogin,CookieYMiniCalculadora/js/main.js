import { handleLogin, handleLogout, checkLoggedIn } from './auth.js';
import { handleRegister } from './register.js';
import { displayExercises } from './ui.js';

window.onload = function() {
    checkLoggedIn();

    document.getElementById('loginForm').onsubmit = handleLogin;
    document.getElementById('registerForm').onsubmit = handleRegister;
    document.getElementById('logoutTopRight').onclick = handleLogout;

    // Manejar la transición entre login y registro
    document.getElementById('showRegister').onclick = function(event) {
        event.preventDefault();
        document.getElementById('cardLoginRegister').classList.add('flip');
    };

    document.getElementById('showLogin').onclick = function(event) {
        event.preventDefault();
        document.getElementById('cardLoginRegister').classList.remove('flip');
    };
};
