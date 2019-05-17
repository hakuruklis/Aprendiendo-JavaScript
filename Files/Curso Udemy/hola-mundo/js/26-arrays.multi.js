'use strict'

var categorias = ["Accion", "Terror", "Comedia",];
var peliculas = ["Nemo", "Avengers", "Iron Man"];

var cines = [categorias, peliculas];

var elemento = prompt("Introduce una pelicula");


peliculas.push(elemento);               //push se utiliza para agregar un elemento al final de un array

var indice = peliculas.indexOf("Nemo"); //indexOf se utiliza para conocer el indice de uno de los valores de un array

peliculas.splice(indice, 1);            //splice sirve para borrar un elemento de un array desde un indice que se le indique y la cantidad de elementos a borrar que se le indique

var peliculas_string = peliculas.join(); //join transforma un array en un string separado por comas


var cadena = "texto1,texto2,texto3"
var cadena_array = cadena.split(",");    //split convierte una cadena de caracteres en un array


peliculas.sort();                        //sort ordena las cadena de caracteres de un array alfabeticamente
peliculas.reverse();                     //reverse ha lo mismo que sort pero en orden contrario