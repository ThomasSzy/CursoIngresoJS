/* 
Thomas Szymuda
Div E
Ejercicio 5 E/S

Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar() {
	//Creamos variables
	let nombre;
	let edad;
	//Buscamos id
	nombre = document.getElementById("txtIdNombre").value;
	edad = document.getElementById("txtIdEdad").value;
	alert("Usted se llama " + nombre + " y tiene " + edad + " años");
}

/* 
-entradas:
acceder al valor del metodo de texto como para entrada y salida de informacion.
nombreIngresado = prompt("introduzca un dato");


pedirle un dato a un usuario
prompt(ingrese nombre)

-salidas:

Mostrarle una alerta al usuario
alert("Mensaje" y "Variable")

Funciona como salida tambien.
document.getElementById("txtIdNombre").value


 */