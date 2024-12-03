"use strict"

async function cargar(url, options) {
    const response = await fetch(url, options);
    console.log('Estado de la respuesta:', response.status, response.statusText);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log('Datos recibidos en cargar:', data);
    return data;
}