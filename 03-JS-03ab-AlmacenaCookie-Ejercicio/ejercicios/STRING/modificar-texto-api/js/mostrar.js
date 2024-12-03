"use strict";

function mostrar(datos) {
    if (!datos || !datos.data || datos.data.length === 0) {
        texto.value = "No se encontraron datos para la ubicación proporcionada.";
        return;
    }

    const clima = datos.data[0];
    texto.value = `Tiempo en ${clima.city_name}, ${clima.country_code}
Temperatura: ${clima.temp} °C
Sensación Térmica: ${clima.app_temp} °C
Descripción: ${clima.weather.description}`;
}