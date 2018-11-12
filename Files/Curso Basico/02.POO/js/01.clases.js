/*=============================================
CLASES

Las clases son funciones contrucctoras, siempre inician con mayuscula.

ejemplo: new String()
=============================================*/

//CLASES PRIMITIVAS

//Clase String

var string = new String("Esto es un string");
console.log("string", string);

var number = new Number(12);
console.log("number", number);

//Clases Booleanas

var boolean = new Boolean(false);
console.log("boolean", boolean);

//CLASES COMPUESTAS
var array = new Array("rojo", "amarillo", "verde")
var object = new Object({nombre:"Pedro", edad:30})
console.log("object", object);


/*=============================================
CREAR CLASES
=============================================*/
//Creamos el prototipo

function Persona(){

	//Propiedades publicas
	this.nombre;
	this.edad;

}

var yo = new Persona();
yo.nombre = "Juan";
yo.edad = "21 años";
console.log("yo", yo);

//Clases com parametros
function Animales(nombre, raza){

	this.nombre = nombre;
	this.raza = raza;
}

var mascota = new Animales("perro", "pitbul");
console.log("mascota", mascota);
