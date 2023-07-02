/* 
    Funciones
*/
const numeros = [1,2,3,4,5];
const nombres = ["Pedro","Juan","Diego"];

//Una función puede declararse con la palabra function y además puede tener argumentos o no.
//Las funciones sin retornos siempre devuelven valores indefinidos.
function iterar(arg1)
{
    for ( let i = 0 ; i < arg1.length ; i++ )
    {
        console.log(arg1[i]);
    }
}

function SumaDe2Numeros(argumento1,argumento2)
{
    return argumento1 + argumento2;
}

//Callback
function Sumar (argumento1,argumento2,argumento3)
{
    const ResultadoInterno = argumento1 + argumento2;
    argumento3(ResultadoInterno);
}


/* Cuando se llama a una función los elementos dentro de la llamada función se denominan parámetros,
pero cuando se especifican en una función se llaman argumentos*/
let resultado = SumaDe2Numeros(15,252);

function Callback(argumento1)
{
    console.log(argumento1);
}

//No se requiere de colocar los paréntesis cuando se le colocan como referencia en otra función
// Sumar(2,3,Callback);

//Fat arrow function
//las variables arrow function no requieren de la palabra reservada de "function"
//En vez de utilizar aquella forma, 
const MyFatArrowFunction = (argumento1, argumento2) => argumento1 + argumento2;

//Otra forma de hacer una función de flecha gorda si tiene más de una línea
const OtraFF = (argumento1, argumento2) => 
{
    return argumento1 + argumento2;
}

const Resultado = OtraFF(1,2);

console.log(Resultado);

//Función anónima
Sumar(2,3,function (Resultado){
    console.log('Soy una función anónima',Resultado);
})

