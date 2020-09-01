//asignamos a una constante, el códulo express que se asigna mediante la función require
//asignamos la librería descargada a una variable mediante require
const express = require ("express");
//luego creamos nuestra aplicación llamando a la función express osea la constante express
const app = express();

//Esto muestra un mensaje en el navegador al ingresar localhost:3000
//En este caso el método get recibe todas las peticiones que le pasemos mediante la url, esto se indica mediante "*", el segundo argumento es la funcion de 2 parámetros
app.get("*", (req,res) => {
    //send sirve para enviarle cosas al explorador web, en este caso fue un objeto el cual es transformado a string luego
    res.send({message: "Hola desde app"})
})


//listen recibe 2 argumentos, el puerto y una función tipo callback la cual se va a ejecutar cuando el servidor se encuentre listo para ejecutar las peticiones
app.listen(3000, () => console.log("El servidor está escuchando en el puerto 3000"))