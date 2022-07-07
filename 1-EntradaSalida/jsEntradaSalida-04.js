/* 
Thomas Szymuda
Div E
Ejercicio 4 E/S
*/

function mostrar() {
	let nombreIngresado;
	//pedimos nombre por prompt
	//donde guardo - que guardo
	nombreIngresado = prompt("introduzca un dato");
	//Mostramos el nombre por la caja de texto
	//
	document.getElementById("txtIdNombre").value = nombreIngresado;
}

/* 
-entradas:
acceder al valor del metodo de texto como para entrada y salida de informacion.
nombreIngresado = prompt("introduzca un dato");


pedirle un dato a un usuario
prompt(ingrese nombre)

-salidas:

Mostrarle una alerta al usuario
alert("Mensaje" o Variable)

Funciona como salida tambien.
document.getElementById("txtIdNombre").value


 */
