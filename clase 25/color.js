let canvas = document.querySelector("#miCanvas")

// escoger el contexto, en este caso el contexto 2d
let ctx = canvas.getContext("2d")

let color1 = Math.floor(Math.random() * 226)
    let color2 = Math.floor(Math.random() * 226)
    let color3 = Math.floor(Math.random() * 226)
    let colorFinal = `rgb(${color1},${color2},${color3})`
    let color = rgb(3,6,8)