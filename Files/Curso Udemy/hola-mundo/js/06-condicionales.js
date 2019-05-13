'use strict'

// Condicional IF
// Si A es igual a B, estonces haz algo
/*
var edad1 = 30;
var edad2 = 12;

if(edad1 > edad2){
    console.log("Edad1 es mayor que Edad2");
}else{
    console.log("Edad2 es mayor que Edad1")
}
*/

var edad = 18;
var nombre = "Humberto Kuruklis";

if(edad >= 18){
    console.log(nombre + " tiene " + edad + " años, es mayor de edad")

    if(edad <= 33){
        console.log("Todavia eres milenial");
    }else if(edad >= 70){
        console.log("Eres Anciano");
    }else{
        console.log("Ya no eres milenial");
    }

}else{
    console.log(nombre + " tiene " + edad + " años, es menor de edad")
}

/*
//Operadores Lógicos
AND : &&
OR : ||
NEGACION: !
*/

var year = 2018;
//NEGACION
if(year != 2016){
    console.log("El año no es 2016")
}

//AND
if(year >= 2000 && year <= 2020){
    console.log("Estamos en la era actual")
}else{
    console.log("Estamos en la era post-moderna")
}

//OR
if(year == 2008 || year == 2018){
    console.log("El año termina en 8")
}