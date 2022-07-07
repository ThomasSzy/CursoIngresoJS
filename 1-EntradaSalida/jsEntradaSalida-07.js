/*
Thomas Szymuda
Div E
Ejercicio 7 E/S
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/
function sumar() {
	let numeroUno;
	let numeroDos;
	let suma;
	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;

	suma = parseInt(numeroUno) + parseInt(numeroDos);

	alert("La suma es: " + suma);
}

function restar() {
	let numeroUno;
	let numeroDos;
	let resta;
	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;

	resta = parseInt(numeroUno) - parseInt(numeroDos);

	alert("La resta es: " + resta);

}

function multiplicar() {
	let numeroUno;
	let numeroDos;
	let multiplicar;
	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;

	multiplicar = parseInt(numeroUno) * parseInt(numeroDos);

	alert("La multiplicacion es: " + multiplicar);

}

function dividir() {
	let numeroUno;
	let numerodos;
	let dividir;
	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numerodos = document.getElementById("txtIdNumeroDos").value;
	dividir = parseInt(numeroUno) / parseInt(numerodos);
	alert("La divicion es: " + dividir)

}

