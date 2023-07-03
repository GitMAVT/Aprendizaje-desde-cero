//Para esperar todo el contenido de la página se utiliza
//de esta forma.
window.onload = () =>
{
//Este método le permite a javascript manipular elemen-
//tos html por ID
const Parrafo = document.getElementById("Texto");

//Imprimir todo el elemento obtenido por getElementById
//Devuelve toda la instrucción html.
console.log(Parrafo);
//Usar InnerHTML o InnerText para acceder al texto
console.log(Parrafo.innerText);

//Se puede manipular el texto de un parrafo
Parrafo.innerText = "Texto cambiado"
console.log(Parrafo.innerText);

//Se pueden cambiar algunos elementos html
Parrafo.innerHTML = "<li>elemento1</li><li>elemento2</li>"
}