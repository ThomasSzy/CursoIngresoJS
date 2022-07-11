/*2.


Thomas Szymuda
Div E
Ejercicio 2c Trabajo Practico   E/S

	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo() {
    //declaro varibles
    let largo;
    let ancho;
    let cuenta;
    let resultado;
    //busco Id
    largo = document.getElementById("txtIdLargo").value;
    ancho = document.getElementById("txtIdAncho").value;

    //parseo
    largo = parseInt(largo);
    ancho = parseInt(ancho);

    //cuenta
    cuenta = (largo + largo + ancho + ancho);

    resultado = cuenta * 3;
    alert("usted tiene que comprar 1 alambres de " + resultado + " metros ");


}
function Circulo() {
    let radio;
    let cuenta;
    let resultado;
    //busco Id
    radio = document.getElementById("txtIdRadio").value;
    //parseo
    radio = parseInt(radio);

    //cuenta
    cuenta = (radio * 2) * 3.14;
    resultado = (cuenta * 3);
    alert("Se necesitan " + resultado + " metros de alambre");



}
function Materiales() {
    let alto;
    let ancho;
    let cuenta;
    let resultadoCal;
    let resultadoCeme;
    //Busco ID
    alto = document.getElementById("txtIdLargo").value;
    ancho = document.getElementById("txtIdAncho").value;

    //parseo
    alto = parseInt(alto);
    ancho = parseInt(ancho);


    //Area = Metros Cuadrados
    cuenta = (alto * ancho);

    resultadoCal = (cuenta * 3);

    resultadoCeme = (cuenta * 2);

    alert("Se necesitan " + resultadoCal + " bolsa de cal y " + resultadoCeme + " Bolsa de cemento ");

}