/* Thomas Szymuda
Div E
ejercicio 5 E/S */

function mostrar() {
	//variables
	let edad;
	// id
	edad = document.getElementById("txtIdEdad").value;
	//parseo
	edad = parseInt(edad);

	if (edad < 13 || edad > 17) {
		alert(" No sos adolencente ");
	}

}//FIN DE LA FUNCIÓN

/* Utilizando el NO.("!")
if( !((edad <= 17) && (edad >= 13)) ){
	alert(" Usted no es adolecente ");
} */
// && Y (se cumplen las 2 condiciones)
// || O (se cumple al menos una condicion)
// ! NO (se niega una condicion)