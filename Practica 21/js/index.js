let formulario = document.getElementById('formularioAgregar');
let nombre = document.getElementById('nombre');
let fecha = document.getElementById('fecha');
let descripcion = document.getElementById('descripcion');
let listaTareas = document.getElementById('listaTareas');
let btnGuardar = document.getElementById('btnGuardar');
let tareas = [
    {
        nombre : "Hugo",
        fecha : "2024-05-17",
        descripcion : "Hacer tortas para todas"
    },
    {
        nombre : "Paco",
        fecha : "2024-05-18",
        descripcion : "Ver pelicula silk road "
    },
    {
        nombre : "Luis",
        fecha : "2004-08-17",
        descripcion : "Se picha los chescos"
    }
] 

formulario.addEventListener("submit", (e) => {
    e.preventDefault(); //PREVIENE QUE SE RECARGUE LA PAGINA 
    agregarDatos();
    mostrarTareas();
    cerrarModal();
    formulario.reset()
    
});

let cerrarModal = () =>{
    btnGuardar.setAttribute("data-bs-dismiss","modal");
    btnGuardar.click()
}


let agregarDatos = () => {
    console.log('Entro a la funcion agregarDatos');
    let tarea={
        nombre : nombre.value,
        fecha : fecha.value,
        descripcion : descripcion.value
    }
    tareas.push(tarea);
    console.log(tareas);
}

let mostrarTareas = () => {
    
    listaTareas.innerHTML = "";

    tareas.forEach((tarea, indice) => {
        listaTareas.innerHTML += `
            <div class="row mt-5">
                <div class="col-12 col-md-3 border p-3 ">
                    <strong>${tarea.nombre}</strong>
                </div>
                <div class="col-12 col-md-3 border p-3 ">
                    <strong>${tarea.fecha}</strong>
                </div>
                <div class="col-12 col-md-3 border p-3 ">
                    <strong>${tarea.descripcion}</strong>
                </div>
                <div class="col-12 col-md-3 border p-3  text-center">
                    <button class="btn btn-outline-primary"><i class="bi bi-pencil-fill"></i>&nbsp;&nbsp;Editar</button>
                    <button class="btn btn-outline-secondary"><i class="bi bi-trash3-fill"></i>&nbsp;Borrar</button>
                </div>
            </div>
        `
    });
}

mostrarTareas()