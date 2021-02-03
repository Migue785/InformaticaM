let equipos = [
    {nombre: "Barcelona", liga: "España", entrenador: "Ronald Koeman", escudo: "https://i.pinimg.com/originals/37/f7/13/37f713d52fe2fd8d4507c6d232e1d4e6.jpg"},
    {nombre: "Real Madrid", liga: "España", entrenador: "Zidane", escudo: "https://www.ecured.cu/images/thumb/c/c6/428px-logo_real_madrid_svg1_copia.jpg/260px-428px-logo_real_madrid_svg1_copia.jpg"},
    {nombre: "Bayern Munich", liga: "Alemania", entrenador: "Hans-Dieter Flick", escudo: "https://www.paredro.com/wp-content/uploads/2019/02/%E2%96%B7-Esta-es-la-historia-del-logo-del-Bayern-Mu%CC%81nich-el-gigante-de-Baviera.jpg"},
    {nombre: "PSG", liga: "Francia", entrenador: "Mauricio Pochettino", escudo: "https://3.bp.blogspot.com/-GNmT-EhEuao/Uf1ukZAEbTI/AAAAAAAACCM/i-5uTTMsTr4/s1600/psg_novologo.jpg"},
    {nombre: "Juventus", liga: "Italia", entrenador: "Pirlo", escudo: "https://i.pinimg.com/originals/dd/f6/b3/ddf6b35a62be6c8808047a8d661838b7.png"},
    {nombre: "Manchester City", liga: "Inglaterra", entrenador: "Guardiola", escudo: "https://1000marcas.net/wp-content/uploads/2020/02/Manchester-City-Logo.png"}
]
let tabla = document.querySelector('#tabla')
let contenido = '<tr><th>Equipo</th><th>Liga</th><th>Entrenador</th><th>Escudo</th></tr>'
for (equipo of equipos){
    contenido = contenido + `<tr><td>${equipo.nombre}</td><td>${equipo.liga}</td><td>${equipo.entrenador}</td><td><img width="500px" src="${equipo.escudo}" alt=""></td></tr>`
}
tabla.innerHTML = contenido;