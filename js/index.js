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

//IF, ELSE
console.log("CONTROL DE FLUJO")
const edad = 10;
if(edad > 5 && edad <18){
    console.log("El niño puede jugar pues su edad es de: ",edad);
}else{
    console.log("El niño no puede jugar pues su edad es de: ",edad);
}

//WHILE
console.log("Ciclo WHILE");
let contador = 0;
while(contador < 5){
    console.log("valor de contador: ",contador);
    contador++;
}

//switch : ejecutar una u otra instrucción
//IMPORTANTE: cada caso debe tener la instrucción break para que no se ejecuten los demás casos
console.log("SWITCH: Ejecutar una u otra instrucción")
switch("hola"){
    case 1:{
        console.log("Se ha ejecutado la opción 1");
        break;
    }
    case 2:{
        console.log("Se ha ejecutado la opción 2");
        break;
    }
    case 3:{
        console.log("Se ha ejecutado la opción 3");
        break;
    }
    case "hola":{
        console.log("Hola, ha saludado al programa ingresando un hola");
        break;
    }
    default: {
        console.log("Este valor es para un caso no esperado, ya sea un caso no contemplado o numero no contemplado");
        break;
    }
}


//FOR
console.log("CICLO FOR")
for(let i = 0; i<5; i++){
    console.log("Iteración FOR nro: ", i);
}

console.log("Imprimir elementos de un arreglo, y luego se le agrega un elemento mediante PUSH");
const arreglo_mixto = [1,2,3,"cuatro","cinco",6,7,8,"nueve","diez"];
let arreglo_mixto_let = [1,2,3,"cuatro","cinco",6,7,8,"nueve","diez"];
for(let i=0;i < arreglo_mixto.length;i++){
    console.log(arreglo_mixto[i]);
}

for(let i=0;i < arreglo_mixto_let.length;i++){
    console.log(arreglo_mixto_let[i]);
}

arreglo_mixto.push(11);
arreglo_mixto_let.push(11);

for(let i=0;i < arreglo_mixto.length;i++){
    console.log(arreglo_mixto[i]);
}

for(let i=0;i < arreglo_mixto_let.length;i++){
    console.log(arreglo_mixto_let[i]);
}


//FUNCIONES
console.log("FUNCIONES");
console.log("FUNCION SIN ARGUMENTOS");
function iterar(){
    const nums = [1,2,3, "hola",5,6];
    for(let i=0;i<nums.length;i++){
        console.log(nums[i]);
    }
}
iterar();

//funcion con argumentos
const nums111 = [7,8,9,"chao",10,11];
console.log("FUNCION CON ARGUMENTOS");
function iterar1(arg1){
    for(let i=0;i<arg1.length;i++){
        console.log(arg1[i]);
    }
}
iterar1(nums111);


//MAS FUNCIONES
console.log("FUNCIÓN SUMA");
function suma(a,b){
    return a+b;
}
let xx = suma(5,2);
console.log(xx);

//FUNCIONES CON CALLBACK
//UN CALLBACK es una funcion que se va a ejecutar al final de una función
//En JS las funciones son valores que se pueden pasar como argumentos a otras funciones
console.log("FUNCIÓN CON CALLBACK");
function sumar(a,b,cb){//cb es la función que se le pasa a la funcion padre
    const res_x = a + b;
    cb(res_x);
}

function func(resultado) {
    console.log("Resultado: ", resultado);
}

sumar(4,5,func);//la funcion se pasa sin parametros para que sea ejecutada después y no en este momento

//FAT ARROW FUNCTIONS
//no se tiene que usar la palabra function para declararse, también si tiene una sola linea se declara en la misma línea
//se declaran si tienen solo una sola línea con const nombrefuncion FAF
//si tiene más de una línea se declara como otraFAF, es decir debe tener el return y las llaves {}
console.log("FAT ARROW FUNCTIONS");

const fatArrowFunction = (a,b) => a+b; //retorna implicitamente a+b
const otraFAF = (a,b) => {
    return a + b;
}
console.log(fatArrowFunction(1,2));
console.log(otraFAF(1,3));