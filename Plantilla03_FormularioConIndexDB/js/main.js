import { handleLogin, handleLogout, checkLoggedIn } from './auth.js';
import { handleRegister } from './register.js';

window.onload = async function() {
    await checkLoggedIn();

    document.getElementById('loginForm').onsubmit = handleLogin;
    document.getElementById('registerForm').onsubmit = handleRegister;
    document.getElementById('logoutTopRight').onclick = handleLogout;
};
