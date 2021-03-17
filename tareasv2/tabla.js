let tareas = JSON.parse(localStorage.getItem("tareas"));
if (tareas == null) tareas = [];

let tabla = document.querySelector('#tareas')
function llenarTabla(){
    let contenido = '<tr><th>Nombre de la tarea</th><th>Descripción</th><th>Fecha</th></tr>'
    for (tarea of tareas){
        contenido = contenido + `<tr><td>${tarea.nombre}</td><td>${tarea.descripción}</td><td>${tarea.fecha}</td></tr>`
    }
    tabla.innerHTML = contenido;
}
let form = document.querySelector('#formulario')
function añadirTarea(){
    let tareaNueva = document.querySelector("input[name=Materia]").value
    let descripciónNueva = document.querySelector("input[name=Descripción_de_la_tarea]").value
    let fechaNueva = document.querySelector("input[name=Fecha]").value
    let tareaNuevaTot = {nombre:tareaNueva, descripción:descripciónNueva, fecha:fechaNueva}
    console.log("Ahora voy a añadir la siguiente tarea");
    console.log(tareaNuevaTot)
    tareas.push(tareaNuevaTot)
    llenarTabla();
    localStorage.setItem("tareas", JSON.stringify(tareas))
}
form.onsubmit = añadirTarea;
llenarTabla();