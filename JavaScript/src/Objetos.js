/* 
    Los objetos son tipos de datos que agrupan varios tipos de datos, por ejemplo los objetos de los juegos.
    en síntesis es una agrupación de datos
*/

//Ejemplo de objetos constantes
const MyVoidObject = {} //Este es un objeto vacío, no posee ningún tipo de dato dentro de él.

/* 
    Objeto con atributos cada atributo debe de definirse con 2 puntos y cada final de atributo es con coma para
    referirse al siguiente atributo. La última linea de atributos no necesariamente requiere coma pero es
    una buena práctica colocarla.
*/
const MyObject = {  //Un objeto const se le pueden cambiar los valores de los atributos más no puede ser nuevamente declarado
    ANumber : 12,
    AString : "esta es una cadena dentro de un objeto",
    ACondition : true,
}

console.log(MyVoidObject);

console.log(MyObject);

/* Para acceder a un atributo específico de un objeto es necesario llamarlo por su nombre tal como si fuera
una variable, seguido de un punto y finalizando con el nombre del atributo. */
console.log(MyObject.ANumber);

