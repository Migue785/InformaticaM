let boton1 = document.querySelector ("#button1") 
let boton2 = document.querySelector ("#button2")
let boton3 = document.querySelector ("#button3")
let p1 = document.querySelector ("#par1")
let p2 = document.querySelector ("#par2")
let p3 = document.querySelector ("#par3")
boton1.onclick = colorAleatorio;
boton2.onclick = desaparecerAparecer;
boton3.onclick = aparecerTiempo1;
function colorAleatorio(){
    let color1 = Math.floor(Math.random() * 226)
    let color2 = Math.floor(Math.random() * 226)
    let color3 = Math.floor(Math.random() * 226)
    p1.style.color = `rgb(${color1},${color2},${color3})`
}
function desaparecerAparecer(){
    if(p2.style.display == "block"){
        p2.style.display = "none"
    } else{
        p2.style.display = "block"
    }
}
function aparecerTiempo1(){
    p3.style.display = "none"
    setTimeout(aparecerTiempo2, 3000);
}
function aparecerTiempo2(){
    p3.style.display = "block"
}