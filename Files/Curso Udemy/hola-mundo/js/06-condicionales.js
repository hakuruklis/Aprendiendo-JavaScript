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
        console.log("Todavia eres milenial")
    }else{
        console.log("Ya no eres milenial")
    }

}else{
    console.log(nombre + " tiene " + edad + " años, es menor de edad")
}