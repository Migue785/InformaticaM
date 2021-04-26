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
peon(80,90,30,"red")
peon(150,200,50,"blue")
peon(90,30,10,"yellow")
peon(400,40,90,"black")
peon(350,400,20,"lime")
peon(500,20,5,"orange")