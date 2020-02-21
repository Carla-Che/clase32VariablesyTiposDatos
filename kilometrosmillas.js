/*Kilómetros a millas

Crear un programa que pida ingresar una cantidad de kilómetros y muestre un mensaje con el resultado de la conversión en millas.*/

let kilometros = Number (prompt("Ingrese la cantidad de kilometros que desea convertir en millas"));

let millas = kilometros / 1.6093 ;
alert (`Los ${kilometros} kilometros ingresados equivalen a ${millas} millas.`);