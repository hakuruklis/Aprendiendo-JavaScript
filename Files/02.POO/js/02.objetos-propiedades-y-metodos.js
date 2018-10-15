/*=============================================
OBJETOS: Es una coleccion de propiedades y metodos.
=============================================*/

var object = {

	//Una propiedad es una asociasion entre un nombre y un valor.
	nombre: "Juan",
	edad: 31,
	//El metodo es una funcion dentro de un objeto.
	descripcion: function(){

		console.log("Su nombre es " + object.nombre + " y tiene " + object.edad + " años.")
	},
	//Metodos con parametros
	saludar: function(saludo){
		console.log(saludo + " " + object.nombre);
	}
}

console.log("Nombre ", object.nombre)
console.log("Edad ", object.edad)
object.descripcion();
object.saludar("Hola");

/*=============================================
OBJETOS PRIMITIVOS
=============================================*/

//El objeto DATE nos funciona para trabajor con fechas y horas

var d = new Date();
console.log("d", d);
var y = d.getFullYear();
console.log("y", y);
