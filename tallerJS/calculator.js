let operacion = prompt("Ingrese la operación (+, -, *, /):");
let num1 = parseFloat(prompt("Ingrese el primer número:"));
let num2 = parseFloat(prompt("Ingrese el segundo número:"));

switch (operacion) {
  case "+":
    alert("Resultado: " + (num1 + num2));
    break;
  case "-":
    alert("Resultado: " + (num1 - num2));
    break;
  case "*":
    alert("Resultado: " + (num1 * num2));
    break;
  case "/":
    if (num2 === 0) {
      alert("Error: División por cero.");
    } else {
      alert("Resultado: " + (num1 / num2));
    }
    break;
  default:
    alert("Operación no válida.");
}