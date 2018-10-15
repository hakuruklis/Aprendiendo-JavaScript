var numeroAleatorio = document.querySelector("#numeroAleatorio");
var numero = 0;

/*=============================================
NUMEROS ALEATORIOS

El objeto Math permite realizar tareas matematicas en los numeros. 
Math.random = devuelve un numero aleatorio entre 0 (inclusive), y 1 (exclusivo)

Math.floor = redondea al numero menor del decimal

Math.ceil = redondea al numero mayor del decimal

Math.round = devuelve el valor de x redondeado a su numer mas proximo
=============================================*/

numero = Math.round(Math.random() * 10);
numeroAleatorio.innerHTML = numero;
