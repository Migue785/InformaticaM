let canvas = document.querySelector("#miCanvas")

// escoger el contexto, en este caso el contexto 2d
let ctx = canvas.getContext("2d")

function dibujarPelota(xC, yC, r, color){
    // console.log(color)
    ctx.beginPath();
    ctx.strokeStyle = color
    ctx.fillStyle = color;
    // console.log(ctx.strokeStyle)
    ctx.arc(xC, yC, r, 0, 2*Math.PI);
    ctx.stroke();
    ctx.fill();
}
let x = 500;
let y = 0;
let r = 20;
let color = "red";

let vY = 10;// en px/s

let dT = 30;

function moverYDibujar(){
    ctx.clearRect(0,0, 600, 400);
    let dY = dT/1000 *vY
    y = y + dY;
    // console.log(color)
    dibujarPelota(x, y, r, color);
}


function arrancarOParar(){
    if (vY != 0){
        vY = 0;
    }
    else{
        vY = 10;
    }
}
window.setInterval(moverYDibujar, dT);

window.onkeyup = function(event){
    
    console.log(event.code);
    if (event.code == "Space")
    {
        arrancarOParar();
    }
    if (event.code == "BracketRight")
    {
        r = r + 1;
    }
    if (event.code == "Slash")
    {
        r = r - 1;
    }
    
}

function cambiarColorPelota(){
    color = "#" + Math.floor(Math.random()*16777215).toString(16);
}
window.onclick = function(event){
    console.log(`Se hizo click en las coordenadas ${event.offsetX}, ${event.offsetY}`);
    console.log(`Las coordenadas de la pelota son ${x}, ${y}, y el radio es ${r}`)
 
    let xClick = event.offsetX;
    let yClick = event.offsetY;
    if (Math.sqrt(Math.pow(x-xClick, 2)+Math.pow(y-yClick, 2)) <= r){
        cambiarColorPelota();
    }else{
        vY = -vY;
    }
}







