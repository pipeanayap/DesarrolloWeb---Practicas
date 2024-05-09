const fruits = ["apple", "orange", "banana", "kiwi"];

let size = fruits.length;
console.log("The number of elements of the fruits array is "+size)

let contenido = ""
for (let fruit of fruits){
    console.log(fruit);
    contenido += fruit + ", ";
}

let lista1 = document.getElementById("lista1");
lista1.innerHTML = contenido;
console.log(lista1);
console.warn("La fruta es: ", fruits); 
console.error("La fruta es: ", fruits);
console.info("La fruta es: ", fruits);
console.table(fruits)
console.debug("La fruta es: ",fruits)

let lista2 = document.getElementById("lista2");
lista2.innerHTML = fruits.join(". - ");

let lista3 = document.getElementById("lista3");
fruits.pop()
fruits.pop()
console.log(fruits);
lista3.innerHTML = "lista3: "+fruits.join(". - ");

let lista4 = document.getElementById("lista4");
fruits.push("grape")
fruits.push("grenade")
lista4.innerHTML = "lista4: "+fruits.join("----");

let lista5 = document.getElementById("lista5");
fruits.shift()
lista5.innerHTML = "lista5: "+fruits.join("***");


let lista6 = document.getElementById("lista6");
fruits.unshift("Pear")
fruits.unshift("pineapple")

lista6.innerHTML = "lista6: "+fruits.join("-+-+-+");

const femaleNames = ["Greys", "Peyton", "Saray"];
const maleNames = ["Hugo", "Paco", "Luis"];

let nameList = femaleNames.concat(maleNames);
console.log(nameList);  

let lista7 = document.getElementById("lista7")
lista7.innerHTML= nameList.join(", ");