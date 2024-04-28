let j = 500;
let nombre = "Pipe";
for(let j =10; j<=20; j++){
    console.log(j);
    let nombre = "pipe";
    console.log("Mi nombre dentro del ciclo es:",nombre);
}

console.log("el valor de j despues del ciclo es:",j);
console.log("Mi nombre fuera del ciclo es:",nombre);

const PI = Math.PI;
console.log(PI);

const persona = { nombre : "Pipe", edad : 19, sexo : "M", casado: false};
console.log(persona);

const persona2 = { 
    nombre : "  Pipe",
    edad : 19, sexo : "M", 
    casado: true};

for(let propiedad in persona2 ){
    console.log(propiedad,":",persona2[propiedad]);
}


let marcas = ["Masserati", "Peugeot", "Mercedes Benz", "Baic"];

let lista = document.getElementById("lista");
lista.innerHTML = "";
for (let marca of marcas){
    console.log(marca);
    lista.innerHTML += `<li>${marca}</li>`;
}



let videojuegos = [
    {titulo: "GTA V", imagen: "https://i.pinimg.com/564x/5e/6a/cf/5e6acf9e03b48f5ed16ac41ed129de53.jpg"},
    {titulo: "Half life 2", imagen: "https://i.pinimg.com/564x/57/1f/8a/571f8a68b433761353a9acd28f318e47.jpg"},
    {titulo: "Bioshock", imagen: "https://i.pinimg.com/564x/88/db/c7/88dbc788f3c2a8f7f15ae5e931fdbd49.jpg"},
    {titulo: "Red Dead Redemption 2", imagen: "https://i.pinimg.com/564x/92/08/24/92082413f057c566f6f94466e82c5449.jpg"},
    {titulo: "The legend of zelda: Breath of the wild", imagen: "https://i.pinimg.com/564x/1c/05/42/1c05428c3ab99b0203e2ae8d6f4f97c1.jpg"},
    {titulo: "Metroid Prime", imagen: "https://i.pinimg.com/564x/a3/70/47/a37047575a5c747b788623d848b1272a.jpg"},
    {titulo: "The Witcher 3", imagen: "https://i.pinimg.com/564x/79/33/0c/79330c731e898938f676c9b8f1f9bb77.jpg"},
    {titulo: "Street Fighter 3", imagen: "https://i.pinimg.com/564x/0b/11/8e/0b118e5edd57f55aecfaf6c8c721157f.jpg"},



];

let galeria = document.getElementById("galeria");
galeria.innerHTML = "";
for (let juego of videojuegos){
    console.log(juego);
    galeria.innerHTML += `
  <div class='col-12 col-md-3 text-center galeria-img-container'>
    <p class='text-danger galeria-titulo' style='background-color: transparent;'>${juego.titulo}</p>
    <img src='${juego.imagen}' alt='Imagen de ${juego.titulo}' class='img-fluid'>
  </div>`;
}
j = 1;

while (j <30){
    console.log(j);
    j++;
}

let result = '';
let i = 0;

do{
    i = i + 1;
    result = result +1
}while(i < 5)

 // Obtener el modal
 var modal = document.getElementById("modal");

 // Obtener la imagen y establecer el src de la imagen modal
 var imgModal = document.getElementById("imagenModal");

 // Función para abrir el modal con la imagen correspondiente
 function abrirModal(imagenSrc) {
   modal.style.display = "block";
   imgModal.src = imagenSrc;
 }

 // Cuando se haga clic en la X (cerrar), cerrar el modal
 var cerrar = document.getElementsByClassName("cerrar")[0];
 cerrar.onclick = function() {
   modal.style.display = "none";
 };

 // Cuando se haga clic fuera del modal, cerrar el modal
 window.onclick = function(event) {
   if (event.target == modal) {
     modal.style.display = "none";
   }
 };

 // Obtener todas las imágenes de la galería
 var imagenes = document.querySelectorAll(".galeria-img-container img");

 // Agregar un evento de clic a cada imagen para abrir el modal
 imagenes.forEach(function(imagen) {
   imagen.addEventListener("click", function() {
     abrirModal(this.src);
   });
 });