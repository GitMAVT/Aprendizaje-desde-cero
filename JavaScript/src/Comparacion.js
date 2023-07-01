/* 
    Los operadores de comparación
*/

//Variables de prueba
let MyNumber = 5;         //Un número cualquiera.
let MyString = "Un texto";  //Una cadena de caracteres.
let MyBoolean = false;      //Un dato booleano.
let MyOtherNumber = 5;     //Otro valor númerico.
let MyObject = {            //Un Objeto
    ANumber : 5,
    AString: "5",
    ABoolean: true,
}
let MyArray = [15,6,7,19]   //Un Arreglo.

//Los operadores de comparación siempre devuelven booleanos, así dicen si una afirmación es verdadera o false.

//Comparación exacta, esta compara el número como valor también discrimina por caracter
let Resultado = MyNumber === MyOtherNumber;

console.log(Resultado);

//Comparación normal, compara el valor pero también devuelve true si el caracter como string es igual con el número
Resultado = MyNumber == MyObject.AString;

console.log(Resultado);

//Menor que
Resultado = MyNumber < MyOtherNumber;

console.log(Resultado);

//Mayor que
Resultado = MyNumber > MyOtherNumber;

console.log(Resultado);
 
//Menor o igual que
Resultado = MyNumber <= MyOtherNumber;

console.log(Resultado);

//Mayor o igual que
Resultado = MyNumber >= MyOtherNumber;

console.log(Resultado);

//Desigualdad estricta
Resultado = MyNumber !== MyObject.AString;

console.log(Resultado);

//Desigualdad
Resultado = MyNumber != MyObject.AString;

console.log(Resultado);
