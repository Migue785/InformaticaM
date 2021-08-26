let canvas = document.querySelector("#miCanvas")

// escoger el contexto, en este caso el contexto 2d
let ctx = canvas.getContext("2d")

function dibujarJugador(xC, yC, r, color) {
    // console.log(color)
    ctx.beginPath();
    ctx.strokeStyle = color
    ctx.fillStyle = color;
    // console.log(ctx.strokeStyle)
    ctx.arc(xC, yC, r, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
}
function numeroUno(x, y) {
    ctx.beginPath();
    ctx.strokeStyle = "black"
    ctx.fillStyle = "black"
    // console.log(ctx.strokeStyle)
    ctx.moveTo(x, y);
    ctx.lineTo(x + 4, y);
    ctx.lineTo(x + 4, y - 26)
    ctx.lineTo(x, y - 26)
    ctx.moveTo(x, y - 26)
    ctx.lineTo(x - 11, y - 17)
    ctx.lineTo(x - 8, y - 14)
    ctx.lineTo(x, y - 22)
    ctx.stroke();
    ctx.fill();
}
dibujarJugador(30, 30, 18, "red")
numeroUno(40, 40)