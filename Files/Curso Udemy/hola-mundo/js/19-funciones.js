'use strict'

//Funciones
//Una funcion es una agripacion reutilizable de un conjunto de instrucciones.

function calculadora(numero1, numero2, mostrar = false){
   console.log("Suma " + (numero1+numero2));
   console.log("Resta " + (numero1-numero2));
   console.log("Multiplicacion " + (numero1*numero2));
   console.log("Division " + (numero1/numero2));
   console.log(mostrar);
   console.log("************************************")
}

//calculadora(12,8);

for(var i=1; i<=10; i++){
   calculadora(i,8);
}


