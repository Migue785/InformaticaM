let canvas = document.querySelector("#miCanvas")

let ctx = canvas.getContext("2d")

function dibujarCubo(x){
    ctx.beginPath();
    ctx.fillStyle = "red"
    ctx.strokeStyle = "black"
    ctx.fillRect(x,40,40,40)
    ctx.strokeRect(x,40,40,40)
    ctx.lineWidth= 3
}
let x = 280;
let vX = 280;
let dT = 8;
function moverYDibujar(){
    ctx.clearRect(0,0, 1000, 100);
    let dX = dT/1000 *vX
    x = x + dX;
    if(x>=660){
        vX = -vX;
    }
    if(x<=249){
        vX = -vX;
    }
    // console.log(color)
    dibujarCubo(x);
}
window.setInterval(moverYDibujar, dT);

