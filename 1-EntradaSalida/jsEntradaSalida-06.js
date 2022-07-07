/*
Thomas Szymuda
Div E
Ejercicio 6 E/S

Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar() {
	//variables
	let entradaUno;
	let entradaDos;
	let suma;
	//Tomamos id
	entradaUno = document.getElementById("txtIdNumeroUno").value;
	entradaDos = document.getElementById("txtIdNumeroDos").value;
	//Parseamos
	entradaUno = parseInt(entradaUno);
	entradaDos = parseInt(entradaDos);
	//Sumamos
	suma = parseInt(entradaUno) + parseInt(entradaDos);

	//Resultado
	alert("La suma es: " + suma);
}
/*  
Operadores arismeticos
// + - * / %

Operadores relacionales o de comparacion
// > < == >= <=

Operadores logicos
!(negacion)  &&(Y o and) || (o - or)

*/

