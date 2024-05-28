// js/index.js

let listaProductos = document.querySelector('#listaProductos');
let categorieList = document.querySelector('#categorieList');
let carrito = [];
const URL = "https://fakestoreapi.com/products";
const URL2 = "https://fakestoreapi.com/products/categories";

fetch(URL)
    .then((response) => response.json())
    .then(data => {
        
        listaProductos.innerHTML = "";

        data.forEach((producto, indice) => {
            listaProductos.innerHTML += `
                <div class="col-12 col-md-3 py-5">
                    <div class="card">
                        <img src="${producto.image}" class="p-3 card-img-top imagenProducto">
                        <div class="card-body">
                             <h5 class="card-title">${producto.title.slice(0,30)}</h5>
                             <p class="card-text">${producto.description.slice(0,80)}</p>
                             <p class="card-text text-danger">$ ${producto.price}</p>
                             <a href="#" class="btn btn-outline-primary w-100">Agregar al carrito</a>
                        </div>
                    </div>
                </div>
            `;
        });

        console.log(data);
    });

fetch(URL2)
    .then((response) => response.json())
    .then(data => {

        categorieList.innerHTML = `<li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
      </li>`;

        data.forEach((categoria, indice) => {
            categorieList.innerHTML += `
            <a class="nav-link" id="categorias">${categoria}</a>
            `; 
        });

    });

    document.addEventListener('DOMContentLoaded', (event) => {
        if (localStorage.getItem('darkMode') === 'enabled') {
          document.body.classList.add('dark-mode');
          document.getElementById('darkModeToggle').checked = true;
        }
      });
      
      document.getElementById('darkModeToggle').addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
          localStorage.setItem('darkMode', 'enabled');
        } else {
          localStorage.setItem('darkMode', 'disabled');
        }
      });
