'use strict'

/*
Hacer un programa que muestre todos los numeros entre dos numero introducidos por el usuario
*/

var numero1 = parseInt(prompt("Ingresa el primer numero:",0));
var numero2 = parseInt(prompt("Ingresa el segundo numero:",0));

if(numero1 > numero2){
    while(numero2 < (numero1 - 1)){
        console.log(numero2 + 1);
        numero2++;
    }
}else if(numero2 > numero1){
    while(numero1 < (numero2-1)){
        console.log(numero1 + 1);
        numero1++;
    }
}else{
    console.log("Los numeros son iguales")
}


