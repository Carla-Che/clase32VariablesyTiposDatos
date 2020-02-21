//Crear un programa que pida al usuario ingresar el valor de la altura y el valor del ancho de un rectángulo, calcular su perímetro y mostrarlo en un mensaje.

let valorAltura = Number(prompt("Ingrese la Altura del rectangulo"));
let valorAncho = Number(prompt("Ingrese el Ancho del rectangulo"));

let perimetro = (valorAltura + valorAncho) * 2;

alert(`El periemtro de su rectangulo es de ${perimetro}`);

