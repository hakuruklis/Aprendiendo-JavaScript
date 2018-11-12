//Variables


//Variables Numericas
var numero = 5;

//Variables de texto
var palabra = "palabras";

//Variables Booleanas
var booleana = true;

//Variable de tipo arreglo
var colores = ["rojo", "amarillo", booleana, numero]

//Variables de tipos objetos (object: propiedad y el valor)
var jugo = {"ingrediente1":"fresa",
            "ingrediente2":"mandarina",
            "ingrediente3":"banano"}

//Variables DOM (Modelo de objetos del documento)
/*El DOM es la ectrucctura de objetos que genera el navegador cuando se cargaun documento y puede alterar mediante JavaScript para cambiar dinamicamente los contenidos y aspecto de la pagina.*/

var caja = document.querySelector("#caja");
console.log("caja", caja);

caja.style.width = "200px"
caja.style.height = "200px"
caja.style.background = "red"


var cajas = document.querySelectorAll(".cajas");
console.log("cajas", cajas);

