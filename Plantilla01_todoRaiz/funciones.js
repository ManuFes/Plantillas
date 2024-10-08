"use strict"

const setTextContent = (element, text) => {
    console.log(text);
    element.innerHTML = `<strong>Resultado:</strong><br>${text}`;
};

const setExplanationContent = (element, explanation) => {
    console.log(explanation);
    element.innerHTML = explanation;
};

const resultado01 = document.getElementById("resultado01");
const explicacion01 = document.getElementById("explicacion01");
const resultado02 = document.getElementById("resultado02");
const explicacion02 = document.getElementById("explicacion02");
const resultado03 = document.getElementById("resultado03");
const explicacion03 = document.getElementById("explicacion03");

function mostrar01() {
    setTextContent(resultado01, "El precio total que debe pagar el cliente es $22.95.");
}

function explicar01() {
    const explanation = "Para resolver este problema, primero se calcula el valor del descuento aplicando el 15% sobre el precio original de la camiseta, que es $25. Multiplicamos el 15% por el precio, obteniendo un descuento de $3.75. Luego, restamos este descuento del precio original para obtener el precio reducido de $21.25. A este precio con descuento, se le añade el impuesto del 8%, que se calcula multiplicando el 8% por $21.25, lo que da un impuesto de $1.70. Finalmente, sumamos el impuesto al precio con descuento, obteniendo un total de $22.95 que el cliente debe pagar por la camiseta.";
    setExplanationContent(explicacion01, explanation);
}

function mostrar02() {
    setTextContent(resultado02, "Ana debe pagar un total de $9.30.");
}

function explicar02() {
    const explanation = "Primero, calculamos el costo de las manzanas multiplicando el número de manzanas (3) por el precio de cada una ($2.50), obteniendo un costo de $7.50. Luego, hacemos lo mismo con los plátanos, multiplicando los 4 plátanos por el precio de $1.20, resultando en un costo de $4.80. Sumamos ambos costos, dando un total de $12.30. Finalmente, aplicamos el cupón de descuento de $3.00, restándolo del total, lo que nos da un costo final de $9.30. Así, Ana debe pagar $9.30 después del descuento.";
    setExplanationContent(explicacion02, explanation);
}

function mostrar03() {
    setTextContent(resultado03, "El total que deben pagar es $141.60.");
}

function explicar03() {
    const explanation = "Para resolver este problema, primero se calcula la propina multiplicando el 18% por el costo total de la comida ($120), lo que da $21.60. Luego, sumamos este valor al costo original de la comida para obtener el total. El cálculo es sencillo: se multiplica el porcentaje por el total para obtener la propina y luego se suma al costo original. Esto da como resultado el costo total que deben pagar, incluyendo la propina.";
    setExplanationContent(explicacion03, explanation);
}
