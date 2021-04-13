let canvas = document.querySelector("#miCanvas")
let ctx = canvas.getContext("2d")
ctx.fillStyle = "orange"
ctx.strokeStyle = "black"
ctx.fillRect(40,40,40,140)
ctx.strokeRect(40,40,40,140)


ctx.beginPath()
ctx.strokeStyle = "black"
ctx.fillStyle = "salmon"
ctx.moveTo (40,40)
ctx.lineTo (60,0)
ctx.lineTo (80,40)
ctx.lineTo (40,40)
ctx.stroke()
ctx.fill()
// ctx.endPath()

ctx.fillStyle = "black"
ctx.beginPath()
ctx.moveTo (50,20)
ctx.lineTo (60,0)
ctx.lineTo (70,20)
ctx.stroke()
ctx.fill()
// ctx.endPath()

ctx.beginPath()
ctx.fillStyle = "white"
ctx.arc(60,180,20,0,Math.PI)
ctx.stroke()
ctx.fill()

ctx.beginPath()
ctx.fillStyle = "gray"
ctx.strokeStyle = "black"
ctx.lineWidth= 14
ctx.fillRect(180,40,140,240)
ctx.strokeRect(180,40,140,240)

ctx.beginPath()
ctx.fillStyle = "black"
ctx.strokeStyle = "black"
ctx.arc(250,245,20,0,2*Math.PI)
ctx.stroke()
ctx.fill()