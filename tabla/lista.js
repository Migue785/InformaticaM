let comidas = [
    {nombre: "Pan"},
    {nombre: "Arroz"},
    {nombre: "Huevos"}, 
    {nombre: "Carne"}, 
    {nombre: "Pescado"}
]
let lista = document.querySelector('#lista');
let contenido2 = '<ol> </ol>';
for (comida of comidas){
    contenido2 = contenido2 + `<li>${comida.nombre}</li>`
}
lista.innerHTML = contenido2;