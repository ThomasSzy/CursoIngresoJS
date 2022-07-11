/*
Thomas Szymuda
Div E
Ejercicio 1a Trabajo Practico   E/S
1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

function Sumar() {
    // Declaramos variables

    let precioUno;
    let precioDos;
    let precioTres;
    let resultado;
    let promedio;

    // Tomamos Id

    precioUno = document.getElementById("txtIdPrecioUno").value;
    precioDos = document.getElementById("txtIdPrecioDos").value;
    precioTres = document.getElementById("txtIdPrecioTres").value;
    // Parseamos

    precioUno = parseInt(precioUno);
    precioDos = parseInt(precioDos);
    precioTres = parseInt(precioTres);
    // Sumamos
    promedio = precioUno + precioDos + precioTres;
    alert("El precio final es: " + promedio);


}
function Promedio() {
    //declaro variables
    let precioUno;
    let precioDos;
    let precioTres;
    let promedio;
    //Tomamos Id
    precioUno = document.getElementById("txtIdPrecioUno").value;
    precioDos = document.getElementById("txtIdPrecioDos").value;
    precioTres = document.getElementById("txtIdPrecioTres").value;
    //Parseamos
    precioUno = parseInt(precioUno);
    precioDos = parseInt(precioDos);
    precioTres = parseInt(precioTres);

    //Hacemos la cuenta y promedio
    promedio = (precioUno + precioDos + precioTres) / 3;
    alert("el promedio es: " + promedio);




}
function PrecioFinal() {
    //Declaramos variables
    let precioUno;
    let precioDos;
    let precioTres;
    let suma;
    let aumentoIva;
    let PrecioFinal;
    precioUno = document.getElementById("txtIdPrecioUno").value;
    precioDos = document.getElementById("txtIdPrecioDos").value;
    precioTres = document.getElementById("txtIdPrecioTres").value;
    //parseo
    precioUno = parseInt(precioUno);
    precioDos = parseInt(precioDos);
    precioTres = parseInt(precioTres);
    suma = parseInt(suma);

    //suma
    suma = (precioUno + precioDos + precioTres);

    aumentoIva = (suma * 21) / 100;

    PrecioFinal = (suma + aumentoIva);

    alert(PrecioFinal);





}
/* 
 */