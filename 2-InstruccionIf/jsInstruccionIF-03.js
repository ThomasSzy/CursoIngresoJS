/* 
Thomas Szymuda
Div E
ejercicio 3 E/S */

function mostrar() {
	//variables
	let edad;
	//id
	edad = document.getElementById("txtIdEdad").value;
	//parseo
	edad = parseInt(edad);
	//Si la primer condicion es verdadera la va a tomar y dira que eres mayor.
	if (edad >= 18) {
		alert(" Eres Mayor de Edad ");
	}
	//Si la primer condicion es falsa nos toma el segundo cartelito, asi no consume mas datos.
	else {
		alert(" Eres menor de Edad");
	}

}//FIN DE LA FUNCIÓN
/* Nos damos cuenta que lo podemos usar cuando decimos que para adelante de un numero es mayor o menor y se que si es mayor a 18 va a ser solo 
una cuenta sino utilizamos un else */