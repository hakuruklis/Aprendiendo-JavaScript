'use strict'

/*
PROGRAMA QUE PIDA 2 NUMEROS Y NOS DIGA CUAL ES EL MAYO, EL MENOR Y SI SON IGUALES
*/

var numero1 = parseInt(prompt("INGRESA EL NÚMERO 1: ", 0));
var numero2 = parseInt(prompt("INGRESA EL NÚMERO 2: ", 0));


while(numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)){
    numero1 = parseInt(prompt("INGRESA EL NÚMERO 1: ", 0));
    numero2 = parseInt(prompt("INGRESA EL NÚMERO 2: ", 0));
}

if(numero1 > numero2){
    alert(numero1 + " es mayor que " + numero2);
}else if(numero2 > numero1){
    alert(numero2 + " es mayor que " + numero1);
}else{
    alert(numero1 + " es igual a " + numero2);
}
