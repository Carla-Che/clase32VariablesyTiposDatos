//orden de compras

//Crear un programa que tome la orden de compra de un local. Pedir al usuario que ingrese la cantidad que desea comprar de tres productos distintos, uno por uno, mostrar el valor total de la compra y preguntar en cuántas cuotas desea realizar el pago. Mostrar un mensaje final con el detalle y el valor total la compra, cantidad de cuotas y valor de cada una de las cuotas. Los precios de los productos deben estar definidos de antemano en variables.

const tipoProducto1 = prompt ("Remeras");
const tipoProducto2 = prompt ("Remeras");
const tipoProducto3 = prompt ("Remeras");

const producto1 = Number(prompt("Ingrese la cantidad deseada de Remeras"));
const producto2 = Number(prompt("Ingrese la cantidad deseada de Pantalones"));
const producto3 = Number(prompt("Ingrese la cantidad deseada de Zaptillas"));

precio1 = Number(250);
precio2 = Number(950);
precio3 = Number(2000);

const resultado1 = producto1 * precio1;
const resultado2 = producto2 * precio2;
const resultado3 = producto3 * precio3;

const precioTotal = resultado1 + resultado2 + resultado3;

const precioEnTresCuotas = precioTotal / 3;
const precioEnSeisCuotas = precioTotal / 6;
const precioEnDoceCuotas = precioTotal / 12;


prompt(`el valor total de su compra es de:${precioTotal}. Usted puede abonar:
En tres cuotas,en Seis cuotas o en Doce cuotas.
En cuantas cuotas desea abonar?`);

alert (`Usted compro:
${tipoProducto1},
${tipoProducto2},
${tipoProducto3},
El total de su compra es de:
${precioTotal}. A abonar en ${precioEnTresCuotas},${precioEnSeisCuotas} cuotas de `);


