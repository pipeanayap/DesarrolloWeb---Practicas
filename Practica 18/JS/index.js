let lista = document.getElementById("lista");
console.log("Que hora son mi corazoooon");

let texto = "Hola, mi nombre es Carlos, y voy a cumplir 20 años";
console.log(texto);

lista.innerHTML = texto;

texto = 'Esta es otra cadena'

lista.innerHTML = texto;

texto = `string text` 

let text = `Cadena multilinea
Lasalle
alumnos 301
esta semana comienzan los examenes 
del segundo parcial`;

console.log(text);

let a = 5;
let b = 10;
let resultado = `El resultado de la suma es ${a} + ${b} es ${a + b}`;
console.log(resultado)
lista.innerHTML = resultado;

let persona = 'pipe'
let edad = 19;
cadena = "my name is";

function myFunction(cadena, personaX, edadExp){
    let resultado = '';

    //resultado += cadena + personaX + "tiene una edad de " + edadExp + " años";
    resultado = `${cadena}${personaX} tiene una edad de ${edadExp} años`
    console.log(resultado);
    return resultado;

    
}

myFunction("Nombre: ", persona ,edad )

/* let resultado2 = myFunction(`Hello ${cadena} ${persona} your age is ${edad} years`);
console.log(resultado2); */

function mostrarNombre(name){
    console.log(name);
    return name;

}

let resultado2 = mostrarNombre `Raul`;

let titulo = "Mejores musicos argentinos";
let cantantes = ["Nicki Nicole","Milo J ", "Duki"];
let cadenaHTML = `<h1>${titulo}</h1>`

cadenaHTML += `<ul>`
for( let cantante of cantantes){
    cadenaHTML += `<li>${cantante}</li>`
}

cadenaHTML += `</ul>`

lista.innerHTML = cadenaHTML;

x = 3.14;
otraFuncion();

function otraFuncion(){
    "use strict"
    y = 3.14
}












