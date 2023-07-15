/* Ejercicio 1 */

let numero = prompt("introduce tu número de rut sin dígito verificador:");

//Corroborar si está entre 0 y 99999999

if (numero >= 0 && numero <= 99999999)
{
    let intRest = numero%23;

    let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B',
    'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

    alert(letras[intRest]);
}
else
{
    alert("Este número es incorrecto");
}