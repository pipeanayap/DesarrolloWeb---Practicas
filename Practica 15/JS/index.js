/* Aqui va el codigo en js*/

let a = 10;
let b = 20;

let sumar = a + b;
console.log(sumar);
let restar = a - b;
console.log(restar);
let multiplicar = a * b;
console.log(multiplicar);
let dividir = a / b;
console.log(dividir);
let modulo = a % b;
console.log("El residuo es de "+ modulo);

let mayor = a > b;
console.log(mayor);

let menor = a < b;
console.log(menor);

let mayorIgual = a >= b;
console.log(mayorIgual);

let igual = a == b;
console.log(igual);

a = -50;
b = 10*(-1)


if (a != b) {
    console.log("a es diferente a b ")
}else{
    console.log("a es igual a b")
}

//operador ternario 

let comparacion = a > b ? "es mayor que b" : "es menor o igual a b";
console.log(comparacion);

let x = 100;
let y = 200;

function multiplicarNumeros(x, y){
    return x * y;
}

let resultado = multiplicarNumeros(x,y);
console.log(resultado);



function calcularAreaCirculo(radio) { 
    /* const pi = 3.1416;
    let area = pi * radio**2; */
    //let area = Math.PI * Math.pow(radio,2)
    return Math.PI * Math.pow(radio,2)
}

console.log("El area es de " + calcularAreaCirculo(10))


let hello = () =>{
    return "hello world! con funcion flecha "
}

let flecha = (a,b) => a + b + 100;
let edadx2 = (edad) => edad * 2;

console.log(flecha(10,10))
console.log("Tu edad multiplicada por 2 es de " + edadx2(20 ))


