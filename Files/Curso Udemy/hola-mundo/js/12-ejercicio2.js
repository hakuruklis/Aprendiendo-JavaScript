'use strict'

/*
Utilizando un bucle, mostrar la suma y la media de los números introducidos
hasta introducir un número negativo y ahí mostrar el resultado
*/

var numero = parseInt(prompt("Introduzca un número: ",0))
var suma = 0;
var contador = 0;
var promedio = 0;

while(numero >= 0){
    if(isNaN(numero)){
        numero = 0;
    }
    suma += numero;
    contador++;
    numero = parseInt(prompt("Introduzca un número: ",0))
}

promedio = suma / contador;
alert("Se ingresaron: " + contador + "\n" + "La suma total fue: " + suma + "\n" + "El promedio fue: " + Math.round(promedio));
