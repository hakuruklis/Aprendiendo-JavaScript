'use strict'

/*
Mostrar todos los numero impares que hay entre dos numeros introducidos por el usuario
*/

var numero1 = parseInt(prompt("Ingresa el primer numero:",0));
var numero2 = parseInt(prompt("Ingresa el segundo numero:",0));
var residuo = 0;

if(numero1 > numero2){
    while(numero2 < (numero1)){
        residuo = numero2 % 2;
        if(residuo != 0){
            console.log(numero2);
        }
        numero2++;
    }
}else if(numero2 > numero1){
    while(numero1 < (numero2)){
        residuo = numero1 % 2;
        if(residuo != 0){
            console.log(numero1);
        }
        numero1++;
    }
}else{
    console.log("Los numeros son iguales")
}