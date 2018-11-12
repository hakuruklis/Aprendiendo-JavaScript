 /*=============================================
FUNCIONES SIN PARAMETRO
=============================================*/

var globales = 10;
console.log("globales", globales)
//se pueden utilizar en cualquiera de las variables

//Declaramos la funcion
function saludo(){

	//Terea de la funcion
	console.log("Hola")

}

// Ejecutamos una funcion
saludo();

/*=============================================
FUNCIONES CON PARAMETRO
=============================================*/
function operacion(digito1, digito2){

	var resultado = digito1 + digito2;
	globales = resultado;
	console.log("globales operacion", globales);
	console.log("resultado", resultado);

}

operacion(5,7);

/*=============================================
FUNCIONES CON  RETORNO SIN PARAMETRO
=============================================*/
function retorno1(){

	var numero = 5;
	return numero;

}

/*=============================================
FUNCIONES CON  RETORNO CON PARAMETRO
=============================================*/

function retorno2(numero){

	return numero;

}

console.log(retorno2(10));
