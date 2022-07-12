/* Thomas Szymuda
Div E
ejercicio 7 E/S  */

function mostrar() {
	//Declaramos variables
	let edad;
	let estadoCivil;
	//Buscamos ID

	edad = document.getElementById("txtIdEdad").value;
	estadoCivil = document.getElementById("estadoCivil").value;

	//Parseamos
	edad = parseInt(edad);


	if (edad < 18 && estadoCivil != "Soltero") {
		alert(" Es menor y Soltero");

	}


}