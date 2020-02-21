/*Crear un programa que pida ingresar una cantidad en minutos mediante un y muestre un mensaje con el resultado de la conversión en segundos.*/

const minutos = Number(prompt("Ingrese sus minutos:"));

const segundos = minutos * 60;

alert (`Los ${minutos} minutos ingresados equivale en total a ${segundos} segundos`);