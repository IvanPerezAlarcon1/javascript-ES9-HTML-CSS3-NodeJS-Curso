console.log("hola mundo");

//tipos de datos en JS
//Undefined : valor que no se encuentra definido al contrario de null
//que es una variable que se encuentra definida
//Object: es un objeto de tipo estructura

/*Para definir variables se pueden usar las siguientes:
var ->forma antigua de def variables en js (no se recomienda)
let -> 
const ->
*/

let miprimeravar = 'primera variable';
console.log(miprimeravar);

//mutabilidad: cuando tenemos un grupo de variables y se les cambia de valor
miprimeravar = "texto cambiado";
console.log(miprimeravar);

//boolean
let bool1 = true
let bool2 = false
let num1 = 0
let num2 = 12
let neg = -258

console.log("Números: ",num1,num2,neg);

//indefinido
let undef
console.log(undef)

//null
let nulo = null
console.log(nulo)

//objeto: agrupación de datos que hacen sentido entre sí
//objeto vacío
const objeto1 = {}

//Objeto con propiedades
const objeto2 = {
    nro: 12,
    unstring: "Cadena dentro de objeto2",
    condicion: true,
}
console.log("Objeto 2: ",objeto2);

//arreglos: pueden contener elementos de cualquier tipo dentro de él
const arreglo1 = [1,2,"hola", bool1, miprimeravar]
console.log("Arreglo 1: ",arreglo1)

//agregar elementos al arreglo, método push
arreglo1.push("string agregado")
console.log("Arreglo 1: ",arreglo1)

//sacar el último elemento del arreglo, método pop
arreglo1.pop()
console.log("Arreglo 1: ",arreglo1)




