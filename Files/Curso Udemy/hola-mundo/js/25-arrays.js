'use strict'

//Arrays

var nombre = "Humberto Kuruklis";
var nombres = ["Humberto", "Kuruklis", 52, true];

var lenguajes = new Array("PHP", "JS", "GO", "JAVA", "PYTHON");

//Para saber la longitud de un array podemos utilzar la funckon .length

/*
var elemento = parseInt(prompt("¿Qué elemento del array quieres?", 0));
if(elemento >= nombres.length){
    alert("Introduce el numero correcto, menor que " + nombres.length);
}else{
    alert("El usuario seleccionado es: " + nombres[elemento]);
}
*/

document.write("<h1>lenguajes de programación del 2018</h1>");
document.write("<ul>");
/*
console.log(lenguajes.length)
for(var i = 0; i < lenguajes.length; i++){                //FORMA TRADICIONAL DE RECORRER UN ARRAY
    document.write("<li>" + lenguajes[i] + "</li>");
}


lenguajes.forEach((elemento, index, data)=>{             //OTRA FORMA DE RECORRER UN ARRAY, UTILIZANDO CALLBACK Y FUNCIONES FLECHA
    document.write("<li>" + elemento + "</li>");
});
*/
for(let lenguaje in lenguajes){
    document.write("<li>" + lenguajes[lenguaje] + "</li>");  //OTRA FORMA DE RECORRER UN ARRAY, UTILIZANDO "in" PARA RECORRE
}
document.write("</ul>");


//Busquedas en un array

var busqueda = lenguajes.find(function(lenguaje){
    return lenguaje == "PHP";                               //Estructura de funcion para realzar una busqueda en un array
});

var busqueda = lenguajes.find(lenguaje => lenguaje == "PHP"); //Otro tipo de estrucctura usando funciones flecha

var busqueda = lenguajes.findIndex(lenguaje => lenguaje == "PHP"); //findIndex se utiliza para bucar el indice a travez de una cadena de texto

var precios= [10,20,50,80,12];
var busqueda = precios.some(precio => precio >= 20);     //some sirve para saber si un valor en un array de numero cumple alguna condicion

