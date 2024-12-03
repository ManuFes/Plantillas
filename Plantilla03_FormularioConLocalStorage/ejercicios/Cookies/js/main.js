window.onload = async function () {
    document.getElementById('crudForm').onsubmit = handleFormSubmit;
    document.getElementById('loadSingleData').addEventListener('click', () => loadDataFromAPI(1));
    document.getElementById('loadMultipleData').addEventListener('click', () => loadDataFromAPI(5));
    loadAllCookies(); // Carga inicial de cookies en la tabla
};

// Función para guardar una cookie
function setCookie(name, value, minutes) {
    const date = new Date();
    date.setTime(date.getTime() + minutes * 60 * 1000);
    document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
}

// Función para cargar todas las cookies existentes
function loadAllCookies() {
    const cookieList = document.cookie.split(';');
    cookieList.forEach(cookie => {
        const [name, value] = cookie.trim().split('=');
        if (name && value) {
            displayData({ name, value });
        }
    });
}

// Función para manejar el formulario y guardar cookies
function handleFormSubmit(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const value = document.getElementById('value').value.trim();

    if (!name || !value) {
        showMessage("Nombre y valor son obligatorios.", "error");
        return;
    }

    if (isDuplicate(value)) {
        showMessage("El valor ya existe. No se puede duplicar.", "error");
        return;
    }

    setCookie(name, value, 1); // Guardar cookie con 1 minuto de expiración
    displayData({ name, value }); // Mostrar en la tabla
    event.target.reset(); // Reiniciar el formulario
    showMessage("Dato añadido exitosamente.", "success");
}

// Función para mostrar los datos en la tabla
function displayData(data) {
    const table = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
    const row = table.insertRow();

    row.innerHTML = `
        <td>${data.name}</td>
        <td>${data.value}</td>
        <td><button onclick="deleteCookie('${data.name}', this)">Borrar</button></td>
    `;
}

// Función para eliminar una cookie
window.deleteCookie = function (name, buttonElement) {
    setCookie(name, "", -1); // Eliminar cookie
    buttonElement.parentElement.parentElement.remove(); // Eliminar fila de la tabla
    showMessage(`Dato "${name}" eliminado.`, "success");
};

// Verificar duplicados en la tabla
function isDuplicate(value) {
    const rows = document.querySelectorAll('#dataTable tbody tr');
    for (const row of rows) {
        const cellValue = row.cells[1].textContent.trim();
        if (cellValue === value) {
            return true;
        }
    }
    return false;
}

// Función para cargar datos desde la API de Chuck Norris
async function loadDataFromAPI(count = 1) {
    try {
        for (let i = 0; i < count; i++) {
            const response = await fetch('https://api.chucknorris.io/jokes/random');
            const data = await response.json();

            const jokeData = {
                name: `Joke-${Date.now()}-${i}`, // Generar nombre único
                value: data.value
            };

            if (!isDuplicate(jokeData.value)) {
                displayData(jokeData);
                setCookie(jokeData.name, jokeData.value, 1);
            } else {
                showMessage("El dato obtenido ya existe y no se añadió.", "info");
            }
        }
    } catch (error) {
        showMessage("Error al cargar datos desde la API.", "error");
        console.error("Error al cargar datos desde la API:", error);
    }
}

// Función para mostrar mensajes en el DOM
function showMessage(message, type) {
    const messageBox = document.createElement('div');
    messageBox.textContent = message;
    messageBox.className = `message ${type}`; // Clase basada en el tipo de mensaje (success, error, info)
    document.body.appendChild(messageBox);

    setTimeout(() => {
        messageBox.remove();
    }, 3000);
}
