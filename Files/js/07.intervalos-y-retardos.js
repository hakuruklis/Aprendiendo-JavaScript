var tiempo = document.querySelector("#tiempo");
var segundos = 0;

/*=============================================
SET INTERVAL (iNTERVALO DE TIEMPO)
setInterval(funcion, tiempo)
=============================================*/

var intervalo = setInterval(function(){

	segundos++;

	tiempo.innerHTML = segundos;
	// El simbolo = cambia el elemento del HTML
	// Y el simbolo += agrega el contenido al HTML 
	console.log("segundos", segundos);


}, 1000)

/*=============================================
SET TIMEOUT (INTERVALO DE TIEMPO)
setTimeout(funcion, tiempo)
=============================================*/
setTimeout(function(){

	//alert("Se cumplio el tiempo");
	clearInterval(intervalo);
}, 5000)
