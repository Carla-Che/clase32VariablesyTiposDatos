/*Datos personales

Crear un programa que pida al usuario ingresar, por separado, nombre, apellido, edad, nacionalidad, documento, y muestre luego un mensaje que diga: "Nuevo usuario agregado al sistema:" y liste todos los datos juntos.*/

const nombre = prompt("ingrese su nombre");
const apellido = prompt("ingrese su apellido");
const edad = prompt("ingrese su edad");
const nacionalidad = prompt("ingrese su nacionalidad");
const documento = prompt("ingrese su documento");

alert(`"Nuevo usuario agregado al sistema:
  - ${nombre} ${apellido} 
  - ${edad}
  - ${nacionalidad}
  - ${documento}`);