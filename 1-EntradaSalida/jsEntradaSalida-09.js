/*
Thomas Szymuda
Div E
Ejercicio 9 E/S
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento() {
	// declaro variables
	let sueldo;
	let aumento;
	let sueldoAumentado;
	//tomamos sueldo
	sueldo = document.getElementById("txtIdSueldo").value;

	//parseint	
	sueldo = parseInt(sueldo)

	//calcular el 10% del sueldo
	aumento = (10 / 100) * sueldo;
	sueldoAumentado = sueldo + aumento;

	//resultado
	document.getElementById("txtIdResultado").value = sueldoAumentado

}
