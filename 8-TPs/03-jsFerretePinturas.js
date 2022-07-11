/*3.
Thomas Szymuda
Div E
Ejercicio 3c Trabajo Practico   E/S
Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados() {
    //variables
    let Fahrenheit;
    let cuenta;
    let temperatura;

    //Buscamos id

    Fahrenheit = document.getElementById("txtIdTemperatura").value;

    //cuenta
    /* Como calcular fahrenheit a celcius
    (0 °F − 32) × 5/9 = 0 °C */
    cuenta = (Fahrenheit - 32) * (5 / 9);
    temperatura = (cuenta);

    alert(Fahrenheit + " Fahrenheit son " + temperatura + " centígrados ");



}

function CentigradosFahrenheit() {
    //variables
    let Fahrenheit;
    let cuenta;
    let centigrados;
    //id
    centigrados = document.getElementById("txtIdTemperatura").value;
    //cuenta
    /*(0 °C × 9/5) + 32 = 32 °F */
    cuenta = (centigrados * 9 / 5) + 32;
    temperatura = (cuenta);
    alert(centigrados + " centigrados son " + temperatura + " farenheit ");



}
