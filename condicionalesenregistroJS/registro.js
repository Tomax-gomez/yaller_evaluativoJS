let registro = new Array()

let nombre = prompt("ingrese su nombre: ")
registro.push(nombre)

let apellido = prompt("ingrese su apellido: ")
registro.push(apellido)

let documento = prompt("ingrese su documento: ")
registro.push(documento)

let correo = prompt("ingrese su correo: ")
registro.push(correo)

let salario  = prompt("ingrese su salario : ")
registro.push(salario)

let institucion = prompt("ingrese su institucion: ")
registro.push(institucion)

let activo= prompt("¿ingrese si esta activo?")
registro.push(activo)

for (let i = 0 ; i < registro.length; i++){

    document.write("valor: ", registro[i] + "</br>")
}