/* Thomas Szymuda
Div E
ejercicio 6 E/S  */

function mostrar() {
	//variables
	let edad;

	//id

	edad = document.getElementById("txtIdEdad").value;

	//parseo
	edad = parseInt(edad);

	//If

	if (edad > 17) {
		alert(" Sos Mayor de Edad");
	}
	else {
		if (edad > 12 && edad < 18) {
			alert(" Sos un adolecente ");
		}
		else {
			alert(" Sos un niño rata ");
		}
	}

}//FIN DE LA FUNCIÓN