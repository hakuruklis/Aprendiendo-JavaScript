'use strict'

//Trasnformación de textos
var numero = 44;
var texto1 = "Bienvenido al curso de JavaScript";
var texto2 = "Es muy bueno";
/*
var dato = numero.toString();

dato = texto1.toUpperCase();
dato = texto.toLowerCase();

//Calcular logitud
var nombre = "";

console.log(nombre.length);


//Concatenar

//var texto_total = texto1 + " ," + texto2;
var texto_total= texto1.concat(" " + texto2);
*/

var busqueda = texto1.indexOf("curso");       //Devuelde el indice de la primera concdencia donde empieza la cadena
    busqueda = texto1.lastIndexOf("curso");   //Devuelve el indice de la ultima coincidencia donde empieza la cadena
    busqueda = texto1.search("curso");        //Igual que indexof()
    busqueda = texto1.match("curso");         //Devuelve un array las caracteristicas de la busqueda
    busqueda = texto1.substr(14,5);           //Esta funcion acepta 2 valores, el primero es para indicar el indice de inicio que se desea cortar , y el segundo es la cantidad de caracteres
    busqueda = texto1.charAt(44);             //Extrae la letra segun el indice que se indique
    busqueda = texto1.startsWith("Victor");   //Buscar coincidencias en el incio de la cadena
    busqueda = texto1.endsWith("Victor");     //Buscar coincidencias al final de la cadena
    busqueda = texto1.includes("Victor");     //Busca una cadena de texto dentro de otra y devuelve un booleano


//Modificadores de texto
    busqueda = texto1.replace("JavaScript", "Python");   //Busca y remplaza una cadena de texto por otra
    busqueda = texto1.slice(14);                         //Separa el string a aprtir del valor que se le indique
    busqueda = texto1.split("");                         //Separa en un array segun el delmitador una cadena de texto
    busqueda = texto1.trim();                            //Quita los espacios al inicio y al final de una cadena de texto
