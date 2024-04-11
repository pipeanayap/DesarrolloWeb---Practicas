let numero = 100; //variable global, tipo number entero
console.log(numero);
let decimal = 100.5;
console.log(decimal);

let texto = "Hola mundo, que tal"; //Variable global, tipo string
let texto2 = 'Hola mundo, que tal'; //Variable global, tipo string

console.log("Dios bajó y dijo: " + texto);

let booleano = true; //Variable global, tipo boolean
let arreglo = [1,2,3,4,5]; //Variable global, tipo array
let arreglo2 = ["a","b","c","d","e"]; //Variable global, tipo array 

console.log(arreglo2);
console.log(arreglo2[3]);
console.log(arreglo2[-2]); //undefined

let arregloMixto = [1,2,3,"a","b","c",true,false]; //Variable global, tipo array
console.log(arregloMixto);

arregloMixto[0] = "Hola";
console.log(arregloMixto);

let objeto = {
    nombre : "Juan",
    edad : 30,
    telefono : "4772890444",

}

console.log(objeto)
console.log(objeto.telefono)
console.log(objeto["edad"]);
console.log("nombre: " + objeto.nombre);

let estudiante = {
    nombre : "Luis Felipe",
    matricula : "78717",
    carrera : "Ing. de software y sistemas",
    materias : ["Matematicas", "Programacion","Base de datos"],
    amigos : [
        {
        nombre : "Pedro",
        telefono : "4776701530"
        },
        {
        nombre : "Maria",
        telefono : "4771797857"
        }
        ]
}

console.log(estudiante.materias[1])
console.log(estudiante.amigos[1].nombre)

let variable = 10;
console.log(typeof variable)

let variable2 = "10.5"
console.log(typeof variable2)

let variable3 = true
console.log(typeof variable3)

let variable4 = [1,2,3,4]
console.log(typeof variable4)

console.log(typeof estudiante)


