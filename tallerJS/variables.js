let nombre = ("Juan");
let apellido = ("Perez");
let correo = ("juan.perez@gmail.com");

let edad = (25);
let altura = (1.75);
let peso = (70);

let casado = (true);
let estudiante = (false);
let empleado = (true);

const pi = 3.141592653589793;

let frutas = ["manzana", "platano", "naranja"];
let numeros = [1, 2, 3, 4, 5];
let colores = ["rojo", "verde", "azul"];

console.log("Nombre:", nombre);
console.log("Apellido:", apellido);
console.log("Edad:", edad);
console.log("Altura:", altura);
console.log("Peso:", peso);
console.log("Casado:", casado);
console.log("Estudiante:", estudiante);
console.log("Empleado:", empleado);
console.log("Frutas:", frutas);
console.log("Numeros:", numeros);
console.log("Colores:", colores);

let registro = [];

for (let i = 0; i < 3; i++) {
  let documento = prompt("Ingrese el documento:");
  let nombre = prompt("Ingrese el nombre:");
  let apellido = prompt("Ingrese el apellido:");
  let correo = prompt("Ingrese el correo:");
  let salario = parseFloat(prompt("Ingrese el salario:"));
  let programa = prompt("Ingrese el programa:");
  let institucion = prompt("Ingrese la institución:");

  registro.push({
    documento: documento,
    nombre: nombre,
    apellido: apellido,
    correo: correo,
    salario: salario,
    programa: programa,
    institucion: institucion
  });

  alert("Registro agregado: " + JSON.stringify({
    documento: documento,
    nombre: nombre,
    apellido: apellido,
    correo: correo,
    salario: salario,
    programa: programa,
    institucion: institucion
  }));
}