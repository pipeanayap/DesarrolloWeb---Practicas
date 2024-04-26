/* 
Definimos dos variables 'a' y 'b' con valores iniciales de 10 y 20 respectivamente
*/
let a = 10;
let b = 20;

/* 
Realizamos diferentes operaciones matemáticas básicas con los valores de 'a' y 'b'
y almacenamos los resultados en las variables correspondientes
*/
let sumar = a + b;
console.log(sumar);
let restar = a - b;
console.log(restar);
let multiplicar = a * b;
console.log(multiplicar);
let dividir = a / b;
console.log(dividir);
let modulo = a % b;
console.log("El residuo es de " + modulo);

/* 
Comparamos los valores de 'a' y 'b' utilizando diferentes operadores de comparación
y almacenamos los resultados en las variables correspondientes
*/
let mayor = a > b;
console.log(mayor);

let menor = a < b;
console.log(menor);

let mayorIgual = a >= b;
console.log(mayorIgual);

let igual = a == b;
console.log(igual);

/* 
Reasignamos nuevos valores a las variables 'a' y 'b'
*/
a = -50;
b = 10 * (-1);

/* 
Utilizamos una estructura condicional if-else para imprimir un mensaje en la consola
dependiendo del resultado de la comparación entre 'a' y 'b'
*/
if (a != b) {
    console.log("a es diferente a b ");
} else {
    console.log("a es igual a b");
}

/* 
Utilizamos un operador ternario para asignar un valor a la variable 'comparacion'
dependiendo del resultado de la comparación entre 'a' y 'b'
*/
let comparacion = a > b ? "es mayor que b" : "es menor o igual a b";
console.log(comparacion);

/* 
Definimos una función 'multiplicarNumeros' que toma dos parámetros 'x' y 'y'
y devuelve el resultado de su multiplicación
*/
function multiplicarNumeros(x, y) {
    return x * y;
}

/* 
Llamamos a la función 'multiplicarNumeros' con los valores de 'x' y 'y'
y almacenamos el resultado en la variable 'resultado'
*/
let result = multiplicarNumeros(x, y);
console.log(result);

/* 
Definimos una función 'calcularAreaCirculo' que toma un parámetro 'radio'
y devuelve el área del círculo correspondiente
*/
function calcularAreaCirculo(radio) {
    return Math.PI * Math.pow(radio, 2);
}

/* 
Llamamos a la función 'calcularAreaCirculo' con un valor de 'radio' de 10
y almacenamos el resultado en la variable 'area'
*/
let area = calcularAreaCirculo(10);
console.log("El área es de " + area);

/* 
Definimos una función 'hello' utilizando la sintaxis de función flecha
que devuelve el mensaje "hello world! con función flecha"
*/
let hello = () => {
    return "hello world! con función flecha ";
}

/* 
Definimos una función 'flecha' utilizando la sintaxis de función flecha
que toma dos parámetros 'a' y 'b' y devuelve la suma de ambos más 100
*/
let flecha = (a, b) => a + b + 100;

/* 
Definimos una función 'edadx2' utilizando la sintaxis de función flecha
que toma un parámetro 'edad' y devuelve el resultado de multiplicar 'edad' por 2
*/
let edadx2 = (edad) => edad * 2;

/* 
Llamamos a la función 'flecha' con los valores de 'a' y 'b'
y almacenamos el resultado en la variable 'resultado'
*/
let resul = flecha(10, 10);
console.log(resultado);

/* 
Llamamos a la función 'edadx2' con un valor de 'edad' de 20
y almacenamos el resultado en la variable 'resultado'
*/
let resultado = edadx2(20);
console.log("Tu edad multiplicada por 2 es de " + resultado);