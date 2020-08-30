console.log("Intro a DOM desde index.js")
alert("Intro a DOM desde index.js")

//Obtener un elemento de HTML mediante su ID
const parrafo = document.getElementById("text")
const parrafo1 = document.getElementById("text1")
const parrafo2 = document.getElementById("text2")
//esto solo se va a mostrar por el DOM del navegador, no por la consola del SO
console.log(parrafo1)//muestra todo el contenido de la etiqueta p, incluyendo el código html
console.log(parrafo1.innerHTML)//muestra solo el contenido de texto que contiene la etiqueta p

//todo lo que esté dentro de window.onload, se ejecuta cuando ya todo el cód html se cargó
window.onload = () => {
    alert("Ya se cargo todo el contenido de la pagina")
    parrafo1.innerText = "Este parrafo a sido actualizado"
    parrafo2.innerHTML = "<li>elemento 1</li><li>elemento 2</li>"
}