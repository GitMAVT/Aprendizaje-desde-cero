/* 
    Operadores Lógicos
*/

//Variables de prueba
let MyNumber = 5;         //Un número cualquiera.
let MyString = "Un texto qlo";  //Una cadena de caracteres.
let MyBoolean = false;      //Un dato booleano.
let MyOtherNumber = 6;     //Otro valor númerico.
let MyObject = {            //Un Objeto
    ANumber : 4,
    AString: "Un stringo",
    ABoolean: true,
}
let MyArray = [15,6,7,19]   //Un Arreglo.

//Operadores lógicos son 3:
/*  
    A diferencia de otros lenguajes como GML esto solo funciona con estos símbolos.
    or  : ||    
    and : &&   
    not : !

    Todos los valores, ya sean string o números se toman como true a excepción del 0 (valor no string)
    o un string vacío que se evalua como false.
*/

//or devolverá true si existe algún true, se centra en el primero.
let Resultado = false || false || "" || true;

console.log(Resultado);

//and devolverá true si y solo sí todos son true
Resultado = false && true;

console.log(Resultado);

//not devolverá true si está evaluando un false, y vice versa
Resultado = ! true;

console.log(Resultado);

