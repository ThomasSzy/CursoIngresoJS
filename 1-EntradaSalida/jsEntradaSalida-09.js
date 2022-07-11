/*
Thomas Szymuda
Div E
Ejercicio 9 bis E/S
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
/*function mostrarAumento() {
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

}*/


/* 
9 bis
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento
en el cuadro de texto "RESULTADO".

El usuario debe ingresar el porcentaje del aumento
y debemos mostrar el valor del porcentaje del aumento 
por ALERT 
*/
function mostrarAumento() {
	//declaro variables
	let sueldo;
	let ingresoPorsentaje;
	let resultado;
	let aumento
	//tomamos id
	sueldo = document.getElementById("txtIdSueldo").value;

	//parseamos
	sueldo = parseInt(sueldo);

	ingresoPorsentaje = prompt("ingrese porsentaje a aumentar");

	ingresoPorsentaje = parseInt(ingresoPorsentaje);

	//sacamos porsentaje
	aumento = (ingresoPorsentaje / 100) * sueldo;
	// sumas
	resultado = sueldo + aumento;
	//datos para resultado
	document.getElementById("txtIdResultado").value = resultado;

	alert("El aumento es: " + aumento);
}
