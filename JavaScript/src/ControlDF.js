/* 
    if, else if y else
    while
*/
let x = 0;

//if: si lo que evalua es true se va a ejecutar lo que tiene entre llaves
if (5 <= 4)
{
    console.log('La comparación fue verdadera');
}
//else if: se evalua después de if si la evaluación principal fue false, si else if resulta en falso pasará else
else if (5 >= 3)
{
    console.log('La primera fue false pero esta fue verdadera');
}
//else: siempre se pone junto a if, se ejecuta si la condición evaluada por if es false.
else
{
    console.log("Todas fueron falsas");
}

//while: ejecutará la porción de código siempre y cuando su evaluación sea verdadera, si es falsa se detiene y no ejecuta su código
while (x <= 6)
{
    console.log(x);
    x++;
}

//Switch: Recibe un valor de variable y ejecutará el caso correspondiente dependiendo del mismo, si no se cumple ninguna no hace nada
switch (x)
{
    case 1:
        console.log("Es uno");
    break;
    case 2:
        console.log("Es 2");
    break
    default:
        console.log("No es ninguno");
    break;
}

//for: itera un loop hasta que se cumpla una condición
for ( let i = 0 ; i < 5 ; i++ )
{
    console.log(i);
}

//Acceder a los elementos de un arreglo

let MyArray = [1,2,3,4,7,6,5,4,9,78,6,1];

//Para acceder a un elemento de un arreglo hay que llamar al arreglo seguido [número del elemento - 1]
console.log(MyArray[3]);    //Esto arroja el cuarto elemento del array

//Para saber el largo de un arreglo se puede usar el método lenght
for ( i = 0 ; i < MyArray.length ; i++)
{
    console.log(MyArray[i]);
}