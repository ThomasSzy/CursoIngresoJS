/* Thomas Szymuda
Div E
ejercicio 4 E/S */

function mostrar() {
	//variables
	let edad
	//busco id
	edad = document.getElementById("txtIdEdad").value;
	//parseo
	edad = parseInt(edad);
	if (edad > 12 && edad < 18) {
		alert(" adolecente ");
	}



}//FIN DE LA FUNCIÓN