/* Thomas Szymuda
Div E
ejercicio 10 E/S  */

function mostrar() {
	let notas;
	notas = Math.random() * (10 - 1) + 1;
	notas = Math.floor(notas);
	alert(notas);
	if (notas >= 9) {
		alert(" Exelente ");
	}
	else {
		if (notas >= 4) {
			alert("Aprobo");
		}
		else {
			alert("Ponete a estudiar vago...")
		}
	}


}//FIN DE LA FUNCIÓN