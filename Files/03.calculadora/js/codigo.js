/*=============================================
OBJETO CON LAS PROPIEDADES DE LA CALCULADORA
=============================================*/

var p = {

	teclas: document.querySelectorAll("#calculadora ul li")
	accion: null;
	digito: null;
	operaciones: document.querySelector("#operaciones")


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

		p.accion = tecla.target.getAttribute("class");
		p.digito = tecla.target.innerHTML;
		m.calculadora(p.accion, p.operaciones);

	},
	calculadora: function(accion, digito){
		switch(accion){

			case "numero":
				p.operaciones.innerHTML += digito;
			break;

			case "signo":
				console.log("signo");
			break;

			case "decimal":
				console.log("decimal");
			break;

			case "igual":
				console.log("igual");
			break;

		}

	}
}
m.inicio();