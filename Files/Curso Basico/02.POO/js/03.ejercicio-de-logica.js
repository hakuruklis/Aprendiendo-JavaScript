/*=============================================
CASO 1. LOS CUATRO ATLETAS. 

De cuatro corredores de atletismo se sabe que C ha llegado inmediatamente detrás de B, y D ha llegado en medio de A y C. ¿Podría usted calcular el orden de llegada?

B
C
D
A
=============================================*/

var a = {

	A: 0,
	B: 0,
	C: 0,
	D: 0,

	resultado: function(){

		if( a.C > a.B &&
			a.D > a.B &&
			a.D > a.C &&
			a.D < a.A){

			return true;
		}
		return false;
	},

	intervalo: setInterval(function(){

		a.A = Math.ceil(Math.random()*4)
//		console.log("a.A", a.A);
		a.B = Math.ceil(Math.random()*4)
//		console.log("a.B", a.B);
		a.C = Math.ceil(Math.random()*4)
//		console.log("a.C", a.C);
		a.D = Math.ceil(Math.random()*4)
//		console.log("a.D", a.D);

		if(a.resultado()){
			clearInterval(a.intervalo);
			console.log("atleta A ", a.A)
			console.log("atleta B ", a.B)
			console.log("atleta C ", a.C)
			console.log("atleta D ", a.D)
		}
	},10)

}

/*=============================================
CASO 2. CABALLOS. 

El caballo de Mac es más oscuro que el de Smith, pero más rápido y más viejo que el de Jack, que es aún más lento que el de Willy, que es más joven que el de Mac, que es más viejo que el de Smith, que es más claro que el de Willy, aunque el de Jack es más lento y más oscuro que el de Smith. ¿Cuál es el más viejo, cuál el más lento y cuál el más claro?

Mac		| edad: viejo | velocidad: rapido | tono: oscuro
Smith	| edad: joven | velocidad: rapido | tono: claro
Jack	| edad: joven | velocidad: lento | tono: oscuro
Willy	| edad: joven | velocidad: rapido | tono: oscuro
=============================================*/

var b = {
	Mac		: {edad:0, velocidad:0, tono: 0},
	Smith	: {edad:0, velocidad:0, tono: 0},
	Jack	: {edad:0, velocidad:0, tono: 0},
	Willy	: {edad:0, velocidad:0, tono: 0},

	resultado: function(){

		if( b.Mac.tono 			> b.Smith.tono 		&&
			b.Mac.velocidad 	> b.Jack.velocidad 	&&
			b.Mac.edad 			> b.Jack.edad		&&
			b.Jack.velocidad 	< b.Willy.velocidad &&
			b.Willy.edad 		< b.Mac.edad 		&&
			b.Mac.edad 			> b.Smith.edad 		&&
			b.Smith.tono 		< b.Willy.tono 		&&
			b.Jack.velocidad	< b.Smith.velocidad &&
			b.Jack.tono 		> b.Smith.tono
			){
			return true;
		}
		return false
	},
	intervalo: setInterval(function(){

		b.Mac.edad = Math.ceil(Math.random()*2)
		//console.log("b.Mac.edad", b.Mac.edad);
		b.Mac.velocidad = Math.ceil(Math.random()*2)
		//console.log("b.Mac.velocidad", b.Mac.velocidad);
		b.Mac.tono = Math.ceil(Math.random()*2)
		//console.log("b.Mac.tono", b.Mac.tono);

		b.Smith.edad = Math.ceil(Math.random()*2)
		//console.log("b.Smith.edad", b.Smith.edad);
		b.Smith.velocidad = Math.ceil(Math.random()*2)
		//console.log("b.Smith.velocidad", b.Smith.velocidad);
		b.Smith.tono = Math.ceil(Math.random()*2)
		//console.log("b.Smith.tono", b.Smith.tono);

		b.Jack.edad = Math.ceil(Math.random()*2)
		//console.log("b.Jack.edad", b.Jack.edad);
		b.Jack.velocidad = Math.ceil(Math.random()*2)
		//console.log("b.Jack.velocidad", b.Jack.velocidad);
		b.Jack.tono = Math.ceil(Math.random()*2)
		//console.log("b.Jack.tono", b.Jack.tono);

		b.Willy.edad = Math.ceil(Math.random()*2)
		//console.log("b.Willy.edad", b.Willy.edad);
		b.Willy.velocidad = Math.ceil(Math.random()*2)
		//console.log("b.Willy.velocidad", b.Willy.velocidad);
		b.Willy.tono = Math.ceil(Math.random()*2)
		//console.log("b.Willy.tono", b.Willy.tono);

		if(b.resultado()){
			clearInterval(b.intervalo);
			console.log("Caballo de Mac", b.Mac)
			console.log("Caballo de Smith ", b.Smith)
			console.log("Caballo de Jack ", b.Jack)
			console.log("Caballo de Willy ", b.Willy)
		}
	}, 1)
}

/*=============================================
CASO 3. LOS CUATRO PERROS. 

Tenemos cuatro perros: un galgo, un dogo, un alano y un podenco. Éste último come más que el galgo; el alano come más que el galgo y menos que el dogo, pero éste come más que el podenco. ¿Cuál de los cuatro perros come menos?.

Galgo   hambre: menos
Dogo    hambre: mas
Alano   hambre: menos
Podenco hambre: menos
=============================================*/

var c = {

	Galgo: {hambre:0},
	Dogo: {hambre: 0},
	Alano: {hambre: 0},
	Podenco: {hambre: 0},
	resultado: function(){

		if(	c.Podenco.hambre	> c.Galgo.hambre 	&&
			c.Alano.hambre		> c.Galgo.hambre 	&&
			c.Dogo.hambre		> c.Alano.hambre 	&&
			c.Dogo.hambre 		> c.Podenco.hambre
			){
			return true;
		}
		return false;
	},
	intervalo: setInterval(function(){
		c.Podenco.hambre = Math.ceil(Math.random()*4)
		//console.log("c.Podenco", c.Podenco.hambre);
		c.Alano.hambre = Math.ceil(Math.random()*4)
		//console.log("c.Alano", c.Alano.hambre);
		c.Dogo.hambre = Math.ceil(Math.random()*4)
		//console.log("c.Dogo", c.Dogo.hambre);
		c.Galgo.hambre = Math.ceil(Math.random()*4)
		//console.log("c.Galgo", c.Galgo.hambre);
		if (c.resultado()){
			clearInterval(c.intervalo);
			console.log("El Podenco come: ", c.Podenco.hambre)
			console.log("El Alano come: ", c.Alano.hambre)
			console.log("El Dogo come: ", c.Dogo.hambre)
			console.log("El Galgo come: ", c.Galgo.hambre)
		}
	},1)	
}

/*=============================================
CASO 4. SEIS AMIGOS DE VACACIONES. 

Seis amigos desean pasar sus vacaciones juntos y deciden, cada dos, utilizar diferentes medios de transporte; sabemos que Alejandro no utiliza el coche ya que éste acompaña a Benito que no va en avión. Andrés viaja en avión. Si Carlos no va acompañado de Darío ni hace uso del avión, podría Vd. decirnos en qué medio de transporte llega a su destino Tomás.
Alejando y Benito = Auto: 0 Avion: 0
Andres y Dario    = Auto: 0 Avion: 1
Carlos y Tomas    = Auto: 1 Avion: 0
=============================================*/
var d = {
	Alejando-y-Benito: {auto: 0, avion: 0},
	Andres-y-Dario: {auto: 0, avion: 0},
	Carlos-y-Tomas: {auto: 0, avion: 0},
}


/*=============================================
CASO 5. SILENCIO. 

Si Ángela habla más bajo que Rosa y Celia habla más alto que Rosa, ¿habla Ángela más alto o más bajo que Celia?

Angela -Rosa
Rosa
Celia +Rosa
=============================================*/










