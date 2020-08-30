const todos = [];
window.onload = () => {
    //llamamos al elemento form de HTML mediante su id para utilizarlo
    const form = document.getElementById("todo-form");
    //En form, reemplazamos su evento submit, e quiere decir evento
    //este cód hace que al enviar el formulario, se muestre por la consola del DOM el texto  ingresado
    form.onsubmit = (e) => {
        e.preventDefault();//esto detiene el comportamiento por defecto de los formularios que es el de refrescar
        //una vez enviado el formulario, hacemos lo siguiente
        const todo = document.getElementById("todo");
        const todoText = todo.value;
        todo.value = '';//dejar vacío el contenedor
        //ver texto ingresado
        todos.push(todoText);
        //console.log(todoText);
        const todoList = document.getElementById("todo-list");

        /*
        //esta parte del código se puede optimizar con MAP
        todoList.innerHTML = '';//dejar vacío el contenedor para que nose repita el print de los elementos
        for(let i=0;i<todos.length;i++){
            todoList.innerHTML = todoList.innerHTML + "<li>" + todos[i] + "</li>";
        }
        */

        //t es el elemento que se va a iterar según la cantidad de elementos tenga en este caso el arreglo todos
        const todosTemplate = todos.map(t =>"<li>" + t + "</li>");
        todoList.innerHTML = todosTemplate.join("");//toma todos los elementos del arreglo y juntarlos mediante el parámetro
        //muestra por consola el arreglo generado con cada ingreso de datos
        console.log(todosTemplate);

        
    }
}