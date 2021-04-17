let canvas = document.querySelector("#miCanvas")
let ctx = canvas.getContext("2d")
ctx.fillStyle = "black"
ctx.strokeStyle = "black"
let x = 25;
let yA = 60;
let yM = 35;
let yS = 22;
let contadorFilas = 1;
let contadorPeones = 1;

peones()
contadorFilas = 1;
yA= yA + 150;
yM = yM + 150;
yS = yS + 150;
ctx.fillStyle = "white"
ctx.lineWidth= 3
peones()

function peones (){
    while(contadorFilas < 3){
        while(contadorPeones < 9){
            peon()
            x = x + 50;
            contadorPeones = contadorPeones + 1;
        }
        contadorPeones = 1;
        x = 25;
        yA = yA + 50;
        yM = yM + 50;
        yS = yS + 50;
        contadorFilas = contadorFilas + 1;
    }
}

function peon (){

        ctx.beginPath()
        ctx.arc(x,yA,20,Math.PI,2*Math.PI) //parte de abajo
        ctx.closePath()
        ctx.stroke()
        ctx.fill()

        ctx.beginPath()  //parte del medio
        ctx.arc(x,yM,10,0,2*Math.PI)
        ctx.stroke()
        ctx.fill()

        ctx.beginPath()  //parte superior
        ctx.arc(x,yS,5,0,2*Math.PI)
        ctx.stroke()
        ctx.fill()

}





