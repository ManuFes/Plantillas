// Función para convertir a binario
function convertToBinary() {
  const number = parseInt(document.getElementById('inputNumber').value);
  if (!isNaN(number)) {
    document.getElementById('resultDisplay').value = number.toString(2);
  } else {
    alert("Por favor, ingresa un número válido.");
  }
}

// Función para convertir a octal
function convertToOctal() {
  const number = parseInt(document.getElementById('inputNumber').value);
  if (!isNaN(number)) {
    document.getElementById('resultDisplay').value = number.toString(8);
  } else {
    alert("Por favor, ingresa un número válido.");
  }
}

// Función para convertir a decimal
function convertToDecimal() {
  const number = parseInt(document.getElementById('inputNumber').value);
  if (!isNaN(number)) {
    document.getElementById('resultDisplay').value = number.toString(10);
  } else {
    alert("Por favor, ingresa un número válido.");
  }
}

// Función para convertir a hexadecimal
function convertToHex() {
  const number = parseInt(document.getElementById('inputNumber').value);
  if (!isNaN(number)) {
    document.getElementById('resultDisplay').value = number.toString(16).toUpperCase();
  } else {
    alert("Por favor, ingresa un número válido.");
  }
}
