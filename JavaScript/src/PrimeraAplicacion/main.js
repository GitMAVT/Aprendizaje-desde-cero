const todos = [];

window.onload = () =>
{
    const form = document.getElementById("todo-form")
    form.onsubmit = (e) => 
    {
        e.preventDefault();
        const todo = document.getElementById("todo")
        const todoText = todo.value;
        todo.value = "";
        todos.push(todoText);
        const todoList = document.getElementById("todo-list")
         
        //Con map
        //map siempre debe de trabajar con return de lo contrario será
        //indefinido

        /* Map utiliza el mismo parámetro y le aplica lo siguiente */
        const todosTemplate = todos.map(t => "<li>" + t + "</li>");

        /*
        Join toma todos los elementos de un arreglo y juntarlos
        mediante lo que se especifica en sus parámetros
        */
        todoList.innerHTML = todosTemplate.join("");
        
        //todoList.innerHTML = "";
        
        //Esta es una forma sin .map (si map)
        /* for (let i = 0; i < todos.length; i++)
        {
            todoList.innerHTML += "<li>" + todos[i] + "</li>"
        }    */   
        //Usar # para buscar por id en querySelectorAll
        //De más general a más específico  
        const elementos = document.querySelectorAll("#todo-list li");
        elementos.forEach((elemento, i) => {
            console.log(elemento, i);
            elemen
            
        })
    }
}

/* 
Usar el método .splice() en arreglos para eliminar elementos de un 
arreglo
.splice ("numero del índice",  "Cantidad de elemementos a eliminar")
*/