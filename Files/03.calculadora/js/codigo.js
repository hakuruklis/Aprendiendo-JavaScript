/*=============================================
OBJETO CON LAS PROPIEDADES DE LA CALCULADORA
=============================================*/

var p = {

	teclas: document.querySelectorAll("#calculadora ul li")
	


}

/*=============================================
OBJETO CON LOS METODOS DE LA CALCULADORA
=============================================*/

var m = {

	inicio: function(){

		for(var i = 0; i < p.teclas.length; i++){

			p.teclas[i].addEventListener("click",m.oprimirTecla)

		}

	},

	oprimirTecla: function(tecla){

		console.log(tecla.target)

	}
}
m.inicio();