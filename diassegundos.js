/*
Días a segundos

Crear un programa que pida ingresar una cantidad de días y muestre un mensaje con el resultado de la conversión en segundos.*/

const dias = Number(prompt("Ingrese la cantidad de dias que desea convertir en segundos"));

const segundos = dias * 24 * 60 * 60;

alert (`Los ${dias} dias ingresados equivale en total a ${segundos} segundos`);