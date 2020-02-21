/*Lista de reproducción

Crear un programa que pida al usuario ingresar, por separado, el nombre de una playlist y el título de tres canciones, y al finalizar se muestre un mensaje que diga, p. ej.: "Se ha creado la playlist 'Hits de los 80s' con las canciones 'Africa', 'Maniac', 'Final Countdown'".*/


const  playlist = prompt("ingrese el nombre de la playlist");
const  cancion1 = prompt("ingrese la primer cancion");
const  cancion2 = prompt("ingrese la segunda cancion");
const  cancion3 = prompt("ingrese la tercer cancion");


alert(`Se ha creado la playlist ${playlist} con las canciones ${cancion1}, ${cancion2} y ${cancion3}`);
