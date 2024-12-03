"use strict"

let anterior;

function generaAleatorioEnteros(inferior, superior) {
    return Math.floor(Math.random() * ((superior + 1) - inferior) + inferior); // Incluye el rango superior
}

function matrixHasYou() {
    let valor = generaAleatorioEnteros(1, 10);
    while (valor == anterior) {
        valor = generaAleatorioEnteros(1, 10);
    }
    switch (valor) {
        case 1:
            todasMayusculas();
            break;
        case 2:
            primeraMay();
            break;
        case 3:
            ultimaMay();
            break;
        case 4:
            vocalesMay();
            break;
        case 5:
            consonantesMay();
            break;
        case 6:
            todasMinusculas();
            break;
        case 7:
            primeraMin();
            break;
        case 8:
            ultimaMin();
            break;
        case 9:
            vocalesMin();
            break;
        case 10:
            consonantesMin();
    }
    anterior = valor;
}
