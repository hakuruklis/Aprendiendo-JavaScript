'use strict'

/*
1. Pida 6 numero en pantalla y los guarde en 1 array
2. Mostrar todos sus elementos en el cuerpo de la pagina y en la consola
3. Ordenarlo y mostrarlo
4. Invertir su orden y mostrarlo
5. Mostrar cuantos elementos tiene el array
6. Busqueda de un valor introducido, que nos diga si lo encuentra y su indice
*/

function mostrarArray(elementos, textoCustom = ""){
    document.write("<h1>Contenido del Array " + textoCustom +"</h1>");
    document.write("<ul>");
    elementos.forEach((elemento, index) =>{
        document.write("<li><strong>" + elemento + "</strong></li><br>");
    });
    document.write("</ul>");
}
//PEDIR LOS NUMEROS
var numeros = new Array(6);

for(var i = 0; i <= 5; i++){
    numeros[i] = parseInt(prompt("Introduce un numero:", 0));
}

/* OTRA FORMA DE HACERLO   
var numeros = []
for(var i = 0; i < 5; i++){
    numeros.push(parseInt(prompt("introduce un numero: ", 0)));
}
*/

//MOSTRARLOS EN CONSOLA
console.log(numeros);

//MOSTRARLOS EN PANTALLA
mostrarArray(numeros)

//ORDENAR Y MOSTRAR
numeros.sort(function(a, b){return a-b});
mostrarArray(numeros, "Ordenados");

//INVERTIR Y MOSTRAR
numeros.reverse();
mostrarArray(numeros, "Revertido");

//CANTIDAD DE ELEMENTOS DEL ARRAY
document.write("<h1>El array tiene " + numeros.length + " elementos</h1>")

//BUSCAR NUMERO EN UN ARRAY Y MOSTRAR EL INDICE
var busqueda = parseInt(prompt("Ingresa el numero a buscar:",0));
var posicion = numeros.findIndex(numero => numero == busqueda);

if(posicion && posicion != -1){
    document.write("<h1>Encontrado</h1>");
    document.write("<h1>Posición de la busqueda: "+ posicion +"</h1>");
}else{
    document.write("<h1>No encontrado</h1>")
}