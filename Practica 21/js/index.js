let formulario = document.getElementById('formularioAgregar');
let formularioEditar = document.getElementById('formularioEditar');
let nombre = document.getElementById('nombre');
let nombreEditar = document.getElementById('nombreEditar');
let fecha = document.getElementById('fecha');
let fechaEditar = document.getElementById('fechaEditar');
let descripcion = document.getElementById('descripcion');
let descripcionEditar = document.getElementById('descripcionEditar');
let listaTareas = document.getElementById('listaTareas');
let btnGuardar = document.getElementById('btnGuardar');
let btnGuardarEditar = document.getElementById('btnGuardarEditar'); 
let video = document.getElementById('video');
let videoEditar = document.getElementById('videoEditar');
let foto = document.getElementById('foto');
let fotoEditar = document.getElementById('fotoEditar');
let tareas = [
    {
        nombre: "Hugo",
        fecha: "2024-05-17",
        descripcion: "Hacer tortas para todas",
        foto: "data:image/jpeg;base64,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",
        video: "https://www.youtube.com/watch?v=WPnZJE3-SSM"
    },
    {
        nombre: "Paco",
        fecha: "2024-05-18",
        foto: "https://www.axiomacero.com/blog/wp-content/uploads/2019/07/Como-descargar-imagenes-libres-de-derechos-de-autor.jpg",
        descripcion: "Ver pelicula silk road",

        video: "https://www.youtube.com/watch?v=6stlCkUDG_s&list=PL4Gr5tOAPttLOY9IrWVjJlv4CtkYI5cI_"
    },
    {
        nombre: "Luis",
        fecha: "2004-08-17",
        descripcion: "Se picha los chescos",
        foto: "https://clientesonyoffline.es/wp-content/uploads/2018/12/vector-camara-vintage_53876-26540-1200x1200.jpg",
        video: "https://www.youtube.com/watch?v=hYs4a3RsE4k"
    }
];

formulario.addEventListener("submit", (e) => {
    e.preventDefault(); //PREVIENE QUE SE RECARGUE LA PAGINA 
    agregarDatos();
    mostrarTareas();
    cerrarModal();
    formulario.reset();
});

formularioEditar.addEventListener("submit", (e) => {
    e.preventDefault();
    actualizarDatos();
    mostrarTareas();
    cerrarModal2();
});

let cerrarModal = () => {
    btnGuardar.setAttribute("data-bs-dismiss", "modal");
    btnGuardar.click();
};

let cerrarModal2 = () => {
    btnGuardarEditar.setAttribute("data-bs-dismiss", "modal");
    btnGuardarEditar.click();
};

let agregarDatos = () => {
    console.log('Entro a la funcion agregarDatos');
    let tarea = {
        nombre: nombre.value,
        fecha: fecha.value,
        descripcion: descripcion.value,
        foto: foto.value,
        video: video.value
    };
    tareas.push(tarea);
    console.log(tareas);
};
let mostrarTareas = () => {
    listaTareas.innerHTML = ""; 

    tareas.forEach((tarea, indice) => {
        listaTareas.innerHTML += `
            <div class="row mt-5">
                <div class="col-12 col-md-4 border p-3">
                    <strong>${tarea.nombre}</strong>
                </div>
                <div class="col-12 col-md-4 border p-3">
                    <strong>${tarea.fecha}</strong>
                </div>
                <div class="col-12 col-md-4 border p-3">
                    <strong>${tarea.descripcion}</strong>
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-md-4 border p-3">
                    <img src="${tarea.foto}" class="img-fluid task-image"></img>
                </div>
                <div class="col-12 col-md-4 border p-3">
                    ${getEmbedCode(tarea.video)}
                </div>
                <div class="col-12 col-md-4 border p-3 text-center">
                    <button class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#editarModal" onClick="editarTarea(${indice})"><i class="bi bi-pencil-fill"></i>&nbsp;&nbsp;Editar</button>
                    <button class="btn btn-outline-secondary" onClick="borrarTarea(this, ${indice})"><i class="bi bi-trash3-fill"></i>&nbsp;Borrar</button>
                </div>
            </div>
            
        `;
    });
};

let getEmbedCode = (url) => {
    const embedUrl = convertToEmbedURL(url);
    return `
        <iframe width="100%" height="200" src="${embedUrl}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen onerror="this.onerror=null;this.src='https://www.youtube.com/embed/error';"></iframe>
    `;
};

let convertToEmbedURL = (url) => {
    if (!url.includes('youtube.com/watch?v=')) {
        return 'https://www.youtube.com/embed/error'; // Placeholder for invalid URLs
    }
    const videoId = url.split('v=')[1];
    const ampersandPosition = videoId.indexOf('&');
    if (ampersandPosition != -1) {
        return `https://www.youtube.com/embed/${videoId.substring(0, ampersandPosition)}`;
    }
    return `https://www.youtube.com/embed/${videoId}`;
};


borrarTarea = ( indice) => {
    if (confirm("¿Estas seguro de borrarlo?")) {
        if (confirm("¿Estas muy seguro, camarada?")) {
            tareas.splice(indice, 1); 
            mostrarTareas(); 
        } else {
            alert("okei, va");
        }
    } else {
        alert("okei, va");
    }

    /*Aqui lo que hice fue quitar el "boton.parentElement.parentElement.remove(); " 
    y solo elimino el elemento del arreglo y vuelvo a llamar a la funcion de mostrar*/
};

let indiceEditar = -1; // Variable para almacenar el índice de la tarea que se está editando

editarTarea = (indice) => {

    nombreEditar.value = tareas[indice].nombre;
    fechaEditar.value = tareas[indice].fecha;
    descripcionEditar.value = tareas[indice].descripcion;
    fotoEditar.value = tareas[indice].foto;
    videoEditar.value = tareas[indice].video;


    indiceEditar = indice;
};

let actualizarDatos = () => {
    if (indiceEditar >= 0) {
        
        tareas[indiceEditar].nombre = nombreEditar.value;
        tareas[indiceEditar].fecha = fechaEditar.value;
        tareas[indiceEditar].descripcion = descripcionEditar.value;
        tareas[indiceEditar].foto = fotoEditar.value;
        tareas[indiceEditar].video = videoEditar.value;

        indiceEditar = -1;
    }
};

mostrarTareas();
