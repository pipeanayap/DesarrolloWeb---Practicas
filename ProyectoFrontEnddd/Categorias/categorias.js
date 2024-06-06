const URL = "https://fakestoreapi.com/products";
const URL2 = "https://fakestoreapi.com/products/categories";

let contenedorCategorias = document.getElementById("contenedorCategorias");
let productosCategorias = document.getElementById("productosCategorias");
let allProducts = [];

// Función para capitalizar la primera letra de una cadena
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

fetch(URL2)
    .then(response => response.json())
    .then(data => {
        contenedorCategorias.innerHTML = "";
        data.forEach((categoria) => {
            const categoriaCapitalizada = capitalizeFirstLetter(categoria);
            contenedorCategorias.innerHTML += `
                <div class="categoria">
                    <ul class="no-bullets">
                        <li>
                            <a href="#">${categoriaCapitalizada}</a>
                        </li>
                    </ul>
                </div>
            `;
        });
    })
    .catch(error => console.error('Error fetching categories:', error));

fetch(URL)
    .then(response => response.json())
    .then(data => {
        allProducts = data;
        mostrarProductos(allProducts);
    })
    .catch(error => console.error('Error fetching products:', error));

function mostrarProductos(productos) {
    productosCategorias.innerHTML = "";
    productos.forEach((producto) => {
        productosCategorias.innerHTML += `
            <div class="col-6 mb-3">
                <div class="card">
                    <img src="${producto.image}" class="card-img-top" alt="${producto.title}">
                    <div class="card-body">
                        <p class="card-text">$${producto.price}</p>
                        <button class="btn btn-primary" onclick="agregarAlCarrito(${producto.id})"><i class="bi bi-basket"></i> &nbsp &nbspAñadir</button>
                    </div>
                </div>
            </div>
        `;
    });
}

function agregarAlCarrito(productId) {
    const product = allProducts.find(p => p.id === productId);
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.push(product);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    alert(`${product.title} has been added to the cart`);
}
