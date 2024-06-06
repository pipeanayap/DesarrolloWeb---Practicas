let listaProductos = document.querySelector('#listaProductos');
let categorieList = document.querySelector('#categorieList');
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
let btnComprar = document.getElementById('btnComprar');
let productosCarrito = document.getElementById('productosCarrito');
let subtotal = document.getElementById('subtotal');
const URL = "https://fakestoreapi.com/products";
const URL2 = "https://fakestoreapi.com/products/categories";

document.addEventListener('DOMContentLoaded', (event) => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const modalElement = document.getElementById('verCarrito');
    let allProducts = []; // Variable para almacenar todos los productos
    const searchInput = document.getElementById('searchInput');

    function setDarkMode(enabled) {
        if (enabled) {
            document.body.classList.add('dark-mode');
            modalElement.classList.add('dark-mode');
            localStorage.setItem('darkMode', 'enabled');
        } else {
            document.body.classList.remove('dark-mode');
            modalElement.classList.remove('dark-mode');
            localStorage.setItem('darkMode', 'disabled');
        }
    }

    if (localStorage.getItem('darkMode') === 'enabled') {
        setDarkMode(true);
        darkModeToggle.checked = true;
    }

    darkModeToggle.addEventListener('click', () => {
        setDarkMode(darkModeToggle.checked);
    });

    document.getElementById('verCarrito').addEventListener('shown.bs.modal', mostrarProductos);

    btnComprar.addEventListener('click', () => {
        if(carrito.length === 0){
            alert('Para comprar tu carrito no puede estar vacío');
        } else {
            cerrarModal();
            carrito = [];
            localStorage.removeItem('carrito');
            alert('Gracias por su compra!');
            mostrarProductos();
        }
    });

    fetch(URL)
        .then(response => response.json())
        .then(data => {
            allProducts = data; // Guarda todos los productos en la variable allProducts
            mostrarProductosFiltrados(allProducts);
        });

    fetch(URL2)
        .then(response => response.json())
        .then(data => {
            categorieList.innerHTML = `<li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">HOME</a>
            </li>`;
            data.forEach((categoria, indice) => {
                categorieList.innerHTML += `
                    <li class="nav-item">
                        <a class="nav-link" onclick="muestraProductos('${categoria}')" id="categorias">${categoria.toUpperCase()}</a>
                    </li>
                `;
            });
        });

    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredProducts = allProducts.filter(producto => 
            producto.title.toLowerCase().includes(searchTerm) ||
            producto.description.toLowerCase().includes(searchTerm)
        );
        mostrarProductosFiltrados(filteredProducts);
    });

    function mostrarProductosFiltrados(productos) {
        listaProductos.innerHTML = "";
        productos.forEach((producto, indice) => {
            listaProductos.innerHTML += `
                <div class="col-12 col-md-3 py-5">
                    <div class="card">
                        <img src="${producto.image}" class="p-3 card-img-top imagenProducto">
                        <div class="card-body">
                            <h5 class="card-title">${producto.title.slice(0,30)}</h5>
                            <p class="card-text">${producto.description.slice(0,80)}</p>
                            <p class="card-text text-danger">$ ${producto.price}</p>
                            <a href="#" class="btn btn-outline-primary w-100" data-id="${producto.id}">Agregar al carrito</a>
                        </div>
                    </div>  
                </div>
            `;
        });

        document.querySelectorAll('.btn-outline-primary').forEach(button => {
            button.addEventListener('click', agregarAlCarrito);
        });
    }

    function agregarAlCarrito(event) {
        event.preventDefault();
        const id = event.target.dataset.id;
        fetch(`${URL}/${id}`)
            .then(response => response.json())
            .then(producto => {
                carrito.push(producto);
                localStorage.setItem('carrito', JSON.stringify(carrito));
                alert("Producto añadido al carrito");
                mostrarProductos();
            });
    }

    function mostrarProductos() {
        productosCarrito.innerHTML = "";

        if (carrito.length === 0) {
            productosCarrito.innerHTML = `
            <div class="text-center">El carrito está vacío</div>
            `;
            subtotal.innerHTML = "";
        } else {
            let total = 0; // Inicializamos la variable total para almacenar el subtotal

            carrito.forEach((producto, indice) => {
                productosCarrito.innerHTML += `
                    <div class="col-12 col-md-12 py-3">
                        <div class="card h-100">
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src="${producto.image}" class="img-fluid rounded-start p-3" alt="${producto.title}">
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body d-flex flex-column">
                                        <h5 class="card-title">${producto.title.slice(0,30)}</h5>
                                        <p class="card-text">${producto.description.slice(0,80)}</p>
                                        <p class="card-text text-danger">$ ${producto.price}</p>
                                        <div class="mt-auto">
                                            <button class="btn btn-outline-danger w-100" onClick="borrarProducto(${indice})">
                                                <i class="bi bi-trash3-fill"></i> Eliminar del carrito
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                total += producto.price;
            });

            subtotal.innerHTML = `
                <div class="col-12 col-md-12 py-3">Total: $ ${total.toFixed(2)}</div>
            `;
        }
    }

    window.borrarProducto = function(indice) {
        if (confirm("¿Estás seguro de que deseas eliminar este producto?")) {
            carrito.splice(indice, 1);
            localStorage.setItem('carrito', JSON.stringify(carrito));
            mostrarProductos();
        } else {
            alert("Operación cancelada");
        }
    };

    function cerrarModal() {
        const modalElement = document.getElementById('verCarrito');
        const modal = bootstrap.Modal.getInstance(modalElement);
        modal.hide();
    }
});
