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
        
    }
}