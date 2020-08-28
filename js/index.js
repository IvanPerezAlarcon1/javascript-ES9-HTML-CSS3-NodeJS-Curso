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

//No se puede modificar una constante declarada const, pero si se puede modificar una variable let
const num5 = 5;
let num6 = 5;
console.log("NUMERO CONST: ",num5);
console.log("NUMERO LET: ",num6);
//num5++;
num6++;
//console.log("NUMERO CONST: ",num5);
console.log("NUMERO LET MODIFICADO: ",num6);

//OPERADORES DE COMPARACIÓN
const res1 = 5 === 6
const res2 = 5 == 6
const res3 = 5 == '5';
const res4 = 5 ==='5';
console.log('OPERADORES DE COMPARACIÓN');
console.log(res1);
console.log(res2);
console.log(res3);
console.log(res4);

console.log("Condiciones de mayor o menor qué");

const res5 = 5 < 6;
const res6 = 5 > 6;
const res7 = 5 <= 6;
const res8 = 5 >= 6;
console.log(res5);
console.log(res6);
console.log(res7);
console.log(res8);

//OPERADORES LÓGICOS and &&, or || , not !
//El OR evalua hasta encontrar el primer true, luego lo demás no lo toma en cuenta porque no importa su valor bool
//or toma como valores TRUE a strings, numeros y objetos, excepto el cero que evalua como false
const resOR = false || true;
// El AND toma en cuenta todo hasta encontrar un valor false, si esto pasa lo demás no lo toma en cuenta
const resAND = true && true;
const resAND1 = false && false;
const resAND2 = true && true && false && true;
const resNOT = !true;
console.log("Operadores lógicos");
console.log(resOR);
console.log(resAND);
console.log(resAND1);
console.log(resAND2);
console.log(resNOT);


//CONTROL DE FLUJO
console.log("CONTROL DE FLUJO")
const edad = 10;
if(edad > 5 && edad <18){
    console.log("El niño puede jugar pues su edad es de: ",edad);
}else{
    console.log("El niño no puede jugar pues su edad es de: ",edad);
}

