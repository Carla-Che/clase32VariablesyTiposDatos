/*Dirección completa

Crear un programa que pida al usuario ingresar, por separado, la calle, el número, el departamento, el código postal, la ciudad y el país, y muestre un mensaje con toda la dirección completa, p.ej.: "La dirección que ha ingresado es: Calle Falsa 123 3C, 1414, CABA, Argentina".*/

const calle = prompt("ingrese su calle");
const numero = prompt("ingrese su numero");
const departamento = prompt("ingrese su departamento");
const codigoPostal = prompt("ingrese su codigo postal");
const ciudad = prompt("ingrese su ciudad");
const pais = prompt("ingrese su pais");


alert(`La dirección que ha ingresado es:
  - ${calle} ${numero} 
  - ${departamento}
  - ${codigoPostal}
  - ${ciudad}
  - ${pais}`);