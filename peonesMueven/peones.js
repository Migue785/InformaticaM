let canvas = document.querySelector("#miCanvas")
let ctx = canvas.getContext("2d")

function peon (x,y,tam,color){ //tam equivale al valor del radio de la parte de abajo

    ctx.fillStyle = color;
    ctx.strokeStyle = color;

    ctx.beginPath()
    ctx.arc(x,y+((tam*38)/20),tam,Math.PI,2*Math.PI) //parte de abajo
    ctx.closePath()
    ctx.stroke()
    ctx.fill()

    ctx.beginPath()  //parte del medio
    ctx.arc(x,y+((tam*13)/20),tam/2,0,2*Math.PI)
    ctx.stroke()
    ctx.fill()

    ctx.beginPath()  //parte superior
    ctx.arc(x,y,tam/4,0,2*Math.PI)
    ctx.stroke()
    ctx.fill()

}

let xP1 = 0;
let vP1 = 40;
let t = 30;
function movimientoP1 (){
    dP1 = vP1 * (t/1000);
    xP1 = xP1 + dP1;
    peon(xP1,300,20,"black")
}
let yP2 = 0;
let vP2 = 200;
function movimientoP2 (){
    dP2 = vP2 * (t/1000);
    yP2 = yP2 + dP2;
    peon(300,yP2,20,"black")
}
let vP3 = 100;
let xP3 = 0;
let yP3 = 0;
function movimientoP3 (){
    dP3X = vP3 * (t/1000);
    xP3 = xP3 + dP3X;
    dP3Y = vP3 * (t/1000);
    yP3 = yP3 + dP3Y;
    peon(xP3,yP3,20,"black")
}
function movTotal (){
    ctx.clearRect(0,0, 800, 800);
    movimientoP1()
    movimientoP2()
    movimientoP3()
}
window.setInterval(movTotal, t)
