//shortCircuit: si es que un elemento llamado no tiene elementos retorna algo, en vez de null
//localstorage, almacena información en el navegador
//luego, usamos JSONPARSE para transformar los elementos en un arreglo, pasando como argumento lo que el localstorage devuelva
const todos = localStorage.getItem("todos") || [];

const render = () => {
    const todoList = document.getElementById("todo-list");
        todoList.innerHTML = '';
        /*for(let i=0;i<todos.length;i++){
            todoList.innerHTML = todoList.innerHTML + "<li>" + todos[i] + "</li>";
        }*/
        const todosTemplate = todos.map(t =>"<li>" + t + "</li>");
        todoList.innerHTML = todosTemplate.join("");
        //console.log(todosTemplate);
        const elementos = document.querySelectorAll("#todo-list li");
        elementos.forEach((elemento,i) => {
            elemento.addEventListener("click", () => {
                elemento.parentNode.removeChild(elemento);
                todos.splice(i,1);
                render();
                //console.log(todos,i);
            
            })
        })  
}


window.onload = () => {
    render();

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
        //transformamos los elementos de todos en strings
        const todoStrings = JSON.stringify(todos);
        //aqui reemplazamos en todos los elementos de todoStrings
        localStorage.setItem("todos",todoStrings);

        /*
        //LA SIMPLIFICACIÓN DE ESTA PORCIÓN DE CÓD ESTÁ MÁS ABAJO Y ACTIVA llamda en la función render()
        //console.log(todoText);
        const todoList = document.getElementById("todo-list");

        //esta parte del código se puede optimizar con MAP
        todoList.innerHTML = '';//dejar vacío el contenedor para que nose repita el print de los elementos
        for(let i=0;i<todos.length;i++){
            todoList.innerHTML = todoList.innerHTML + "<li>" + todos[i] + "</li>";
        }

        //t es el elemento que se va a iterar según la cantidad de elementos tenga en este caso el arreglo todos
        const todosTemplate = todos.map(t =>"<li>" + t + "</li>");
        todoList.innerHTML = todosTemplate.join("");//toma todos los elementos del arreglo y juntarlos mediante el parámetro
        //muestra por consola el arreglo generado con cada ingreso de datos
        console.log(todosTemplate);

        //permite seleccionar por clases, etiquetas, nombres, ids de HTML
        //En este caso se buscará por ID, seleccionamos todos los elementos li de #todo-list
        const elementos = document.querySelectorAll("#todo-list li");
        //iteramos mediante forEach(similar a map), solo que en este caso el resultado no se puede asignar a una constante
        elementos.forEach((elemento,i) => {//itera la variable elementos
            //muestra todos los elementos, al agregar uno nuevo
            //console.log(elemento,i);

            //agregamos un evento, en este caso click entonces se ejecuta algo
            elemento.addEventListener("click", () => {
                //el padre elimina al hijo cuando se le da click a este hijo
                elemento.parentNode.removeChild(elemento);
                //eliminamos el elemento clickqueado del arreglo todos con splice, usando el indice de inicio de la eliminación y el nro de elementos que queremos eliminar
                todos.splice(i,1);
                console.log(todos,i);

                //console.log(elemento,i); //muestra el elemento al hacerle click
            
            
            })
        })  
        */
    }
}