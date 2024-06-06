document.addEventListener('DOMContentLoaded', () => {
    let productosCarrito = document.getElementById('productosCarrito');
    let totalElement = document.getElementById('total');
    let vaciarCarritoButton = document.getElementById('vaciarCarrito');
    let pagarButton = document.getElementById('pagarButton');

    function mostrarCarrito() {
        let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        if (carrito.length === 0) {
            productosCarrito.innerHTML = `
                <div class="col-12 mb-3 text-center"> <!-- Agrega la clase "text-center" para centrar el contenido -->
                    <p>El carrito está vacío</p>
                </div>
            `;
            totalElement.textContent = "Total: $0.00";
            pagarButton.style.display = 'none'; // Ocultar el botón de pagar
            return;
        }

        productosCarrito.innerHTML = "";
        let total = 0;

        // Contar la cantidad de cada producto
        let contadorProductos = {};
        carrito.forEach(producto => {
            if (contadorProductos[producto.id]) {
                contadorProductos[producto.id].cantidad++;
            } else {
                contadorProductos[producto.id] = { ...producto, cantidad: 1 };
            }
        });

        // Mostrar productos en el carrito
        Object.values(contadorProductos).forEach((producto) => {
            productosCarrito.innerHTML += `
                <div class="col-12 mb-3">
                    <div class="card text-center">
                        <img src="${producto.image}" class="card-img-top" alt="${producto.title}">
                        <div class="card-body">
                            <h5 class="card-title">${producto.title}</h5>
                            <p class="card-text">$${producto.price}</p>
                            <p class="card-text">Cantidad: ${producto.cantidad}</p>
                            <button class="btn btn-danger" onclick="eliminarDelCarrito(${producto.id})">Eliminar</button>
                        </div>
                    </div>
                </div>
            `;
            total += producto.price * producto.cantidad;
        });

        totalElement.textContent = `Total: $${total.toFixed(2)}`;
        pagarButton.style.display = 'block'; // Mostrar el botón de pagar
        pagarButton.classList.add('mx-auto'); // Agrega la clase "mx-auto" para centrar horizontalmente el botón
    }

    window.eliminarDelCarrito = function(productId) {
        let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        carrito = carrito.filter(producto => producto.id !== productId);
        localStorage.setItem('carrito', JSON.stringify(carrito));
        mostrarCarrito();
    }

    vaciarCarritoButton.addEventListener('click', () => {
        localStorage.removeItem('carrito');
        mostrarCarrito();
    });

    pagarButton.addEventListener('click', () => {
        localStorage.removeItem('carrito');
        mostrarCarrito();
        let graciasModal = new bootstrap.Modal(document.getElementById('graciasModal'));
        graciasModal.show();
    });

    mostrarCarrito();
});
