"use strict";

function construirURL(lat, lon) {
    const baseURL = 'https://weatherbit-v1-mashape.p.rapidapi.com/current';
    const params = new URLSearchParams({
        lat: lat,
        lon: lon,
        units: 'M', // Unidades métricas (Celsius)
        lang: 'es'  // Idioma español
    });
    return `${baseURL}?${params.toString()}`;
}

async function solicitar(lat, lon) {
    texto.value = "Cargando datos...";

    const url = construirURL(lat, lon);
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '906bfc86e9mshbbc3ad60fe01f31p1fd7c7jsn50c604e1f819', // Reemplaza con tu clave de RapidAPI
            'x-rapidapi-host': 'weatherbit-v1-mashape.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json(); // Cambiado a json()
        console.log(result);
        mostrar(result);
    } catch (error) {
        console.error(error);
        texto.value = "Ocurrió un error al obtener los datos.";
    }
}