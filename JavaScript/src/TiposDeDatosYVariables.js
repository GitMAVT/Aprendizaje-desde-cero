/* 
    Los diferentes de tipos de datos en javascript son varios
    1) string: cadena de caracteres.
    2) boolean: dato booleano lógico, puede ser true o false.
    3) null: Valor nulo más no indefinido.
    4) number: números.
    5) undefined: tipo de dato que se le otorga a una variable que fue declarada más no se le asignó ningún valor.
    6) object: un tipo de dato que agrupo varios tipos de datos.
*/

/* 
    Variables se puede usar la palabra let, var o const; var se dirige al principio para declararla,
    let es convencional y const es una constante:

    let nombre;
    var nombre;
    const nombre;

    recordar que no podemos darles nombres reservados a las variables o constantes para evitar conflictos.

    recordar que const es una constante, una vez declarada y asignada no se podrá reasignarse de nuevo.
*/
let MyString;
let MyBoolean;
let MyNull;
let MyNumber;
let MyUndefined;

//string
MyString = "Esto es una cadena"; //No difiere el resultado si es con comillas dobles o simples.
console.log(MyString);

//boolean
MyBoolean = true;   //true o false no se tiene que escribir en comillas.
console.log(MyBoolean);

//null
MyNull = null;  //Al igual que true o false no debe de tener comillas.
console.log(MyNull);

//number
MyNumber = 1245; //No debe de ser asignado con comillas dado que estos son valores no textos.
console.log(MyNumber);

//undefined
//Al no asignarle nada a esta variable es lo que la hace indefinida.
console.log(MyUndefined);

MyString = "Esto ha cambiado dado que no esto es una variable let no const"
console.log(MyString);



