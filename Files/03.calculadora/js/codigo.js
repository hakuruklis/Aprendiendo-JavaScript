/*=============================================
OBJETO CON LAS PROPIEDADES DE LA CALCULADORA
=============================================*/

var p = {
	teclas: document.querySelectorAll("#calculadora ul li"),
	accion: null,
	digito: null,
	operaciones: document.querySelector("#operaciones"),
	cantidadSignos: 0,
	cantdadDecimal: false,
	resultado: false

}

/*=============================================
OBJETO CON LOS METODOS DE LA CALCULADORA
=============================================*/

var m = {

	inicio: function() {

		for (var i = 0; i < p.teclas.length; i++) {

			p.teclas[i].addEventListener("click", m.oprimirTecla)

		}

	},

	teclado: fun

	oprimirTecla: function(tecla) {

		p.accion = tecla.target.getAttribute("class");
		p.digito = tecla.target.innerHTML;
		m.calculadora(p.accion, p.operaciones);

	},
	calculadora: function(accion, digito) {
		switch (accion) {

			case "numero":
				p.cantidadSignos = 0;
				if (p.operaciones.innerHTML == 0) {
					p.operaciones.innerHTML = p.digito
				} else {
					if (p.resultado) {
						p.resultado = false;
						p.operaciones.innerHTML = p.digito
					} else {
						p.operaciones.innerHTML += p.digito
					}
				}
				break;

			case "signo":
				p.cantidadSignos++
					if (p.cantidadSignos == 1) {
						if (p.operaciones.innerHTML == 0) {
							p.operaciones.innerHTML = 0
						} else {
							p.operaciones.innerHTML += p.digito;
							p.cantdadDecimal = false;
							p.resultado = false;
						}
					}
				break;

			case "decimal":
				if (!p.cantdadDecimal) {
					p.operaciones.innerHTML += p.digito;
					p.cantdadDecimal = true;
					p.resultado = false;
				}

				break;

			case "igual":
				p.operaciones.innerHTML = eval(p.operaciones.innerHTML);
				p.resultado = true;
				break;

		}

	},
	borrarCalculadora: function() {
		p.operaciones.innerHTML = 0;
	}
}
m.inicio();