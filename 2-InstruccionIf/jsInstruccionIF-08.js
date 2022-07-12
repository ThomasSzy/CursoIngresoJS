/* Thomas Szymuda
Div E
ejercicio 8 E/S  */

function mostrar() {
	//Declaro Variables

	let edad;
	let estadoCivil;
	//Busco el Id
	edad = document.getElementById("txtIdEdad").value;
	estadoCivil = document.getElementById("estadoCivil").value;

	//Parseo
	edad = parseInt(edad);

	if (edad >= 18 && estadoCivil != "Casado" && estadoCivil != "Divorciado") {
		alert("Es soltero y no es Menor");

	}
	else {
		if (edad < 18 && estadoCivil != "Casado" && estadoCivil != "Divorciado") {
			alert(" Es menor y Soltero");

		}
	}




}//FIN DE LA FUNCIÓN