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

let cerrarModal2 = () =>{
    btnGuardarEditar.setAttribute("data-bs-dismiss","modal");
    btnGuardarEditar.click()
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
                    <button class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#editarModal" onClick="editarTarea(${indice})"><i class="bi bi-pencil-fill"></i>&nbsp;&nbsp;Editar</button>
                    <button class="btn btn-outline-secondary" onClick="borrarTarea(this,${indice})"><i class="bi bi-trash3-fill"></i>&nbsp;Borrar</button>
                </div>
            </div>
        `
    });
}

borrarTarea = (boton,indice) =>{
    if(confirm("¿Estas seguro de borrarlo?")){
        if(confirm("¿Estas muy seguro, camarada?")){
            boton.parentElement.parentElement.remove(); 
            tareas.splice(indice,1);
        }else{
            alert("okei, va");
        }
    }else{
        alert("okei, va");
    }
}

editarTarea = (indice) => {
    nombreEditar.value = tareas[indice].nombre;
    fechaEditar.value = tareas[indice].fecha;
    descripcionEditar.value = tareas[indice].descripcion;

    formularioEditar.addEventListener("submit", (e) => {
        e.preventDefault();
        
        tareas[indice].nombre = nombreEditar.value;
        tareas[indice].fecha = fechaEditar.value;
        tareas[indice].descripcion = descripcionEditar.value;

        mostrarTareas();
        cerrarModal2();
    });
}


mostrarTareas();
