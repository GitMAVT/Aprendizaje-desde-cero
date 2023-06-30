/* 
    Los arreglos son una forma de agrupar datos como los objetos, pero de una forma más simple
    estos se declaran con llaves.

    Los arreglos tambien pueden contener objetos.
    
    Los arreglos se diferencian de las listas en javascript porque los arreglos pueden tener elementos distintos,
    más las listas deben de tener siempre los mismos elementos.
*/

let VariableX = "Hola";

//Arreglo vacío
const MyVoidArray = [];

//Arreglo con elementos en él
const MyArray = [11,5,true,false,"Uta"];

console.log(MyVoidArray);
console.log(MyArray);

//Métodos para trabajar con arreglos

//Push para agragar un elemento a un arreglo al final del mismo
MyArray.push(7);
MyVoidArray.push("Ahora hay algo");
MyArray.push(VariableX);

console.log(MyArray);
console.log(MyVoidArray);



