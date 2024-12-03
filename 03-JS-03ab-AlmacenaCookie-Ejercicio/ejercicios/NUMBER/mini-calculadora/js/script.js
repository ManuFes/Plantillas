"use strict"

const op1 = document.getElementById("op1");
const op2 = document.getElementById("op2");

const sumar = document.getElementById("sumar");
const restar = document.getElementById("restar");
const multiplicar = document.getElementById("multiplicar");
const dividir = document.getElementById("dividir");
const entera = document.getElementById("entera");
const decimal = document.getElementById("decimal");
const factorial = document.getElementById("factorial");

const texto = document.getElementById("texto");
const resultado = document.getElementById("resultado");

sumar.addEventListener("click", function (event) {
    resultado.innerHTML = parseFloat(op1.value) + parseFloat(op2.value);
});

restar.addEventListener("click", function (event) {
    resultado.innerHTML = parseFloat(op1.value) - parseFloat(op2.value);
});

multiplicar.addEventListener("click", function (event) {
    texto.innerHTML = 'El resultado de la multiplicación es: ';
    resultado.innerHTML = parseFloat(op1.value) * parseFloat(op2.value);
});

dividir.addEventListener("click", function (event) {
    texto.innerHTML = 'El resultado de la división es: ';
    resultado.innerHTML = parseFloat(op1.value) / parseFloat(op2.value);
});

entera.addEventListener("click", function (event) {
    op1.value = parseInt(resultado.innerHTML);
});

decimal.addEventListener("click", function (event) {
    op2.value = parseFloat("0." + resultado.innerHTML.toString().split(".")[1]);
});

decimal.addEventListener("click", function (event) {
    op2.value = parseFloat("0." + resultado.innerHTML.toString().split(".")[1]);
});

function factorialRecursivo(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorialRecursivo(n - 1);
    }
}

factorial.addEventListener("click", function (event) {
    texto.innerHTML = `El factorial de ${op1.value}: es: `;
    resultado.innerHTML = factorialRecursivo(parseFloat(op1.value));
});