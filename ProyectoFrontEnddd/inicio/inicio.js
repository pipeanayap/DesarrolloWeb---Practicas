document.addEventListener('DOMContentLoaded', () => {
    const URL = "https://fakestoreapi.com/products";
    
    fetch(URL)
        .then(response => response.json())
        .then(data => {
            // Mostrar las secciones con productos
            mostrarProductosSeccion(data.slice(0, 4), 'ofertas');
            mostrarProductosSeccion(data.slice(4, 8), 'quizasTeGusten');
            mostrarProductosSeccion(data.slice(8, 12), 'seguirComprando');
            mostrarProductosSeccion(data.slice(12, 16), 'masComprados');
        })
        .catch(error => console.error('Error fetching products:', error));

    function mostrarProductosSeccion(productos, seccionId) {
        let seccion = document.getElementById(seccionId);
        seccion.innerHTML = "";
        productos.forEach(producto => {
            seccion.innerHTML += `
                <div class="col-6 col-md-3 mb-3">
                    <div class="card text-center shadow-sm">
                        <img src="${producto.image}" class="card-img-top" alt="${producto.title}">
                        <div class="card-body">
                            <p class="card-text">$${producto.price}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
});
