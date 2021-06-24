let canvas = document.querySelector("#miCanvas")

let ctx = canvas.getContext("2d")

function dibujarCubo(x, y) {
    ctx.beginPath();
    ctx.fillStyle = "red"
    ctx.strokeStyle = "black"
    ctx.fillRect(x, y, 25, 25)
    ctx.strokeRect(x, y, 25, 25)
    ctx.lineWidth = 3
}
let dT = 20;
let vXarriba = -100;
let vXabajo = 100;
let vYderecha = 100;
let vYizquierda = -100;

let puntos = 0;
let tiempo = 0;
let x = 93;
let y = 60;
let vX = 0;
let vY = 0;

window.onkeydown = function (event) {

    console.log(event.code);
    if (event.code == "ArrowDown") {
        vY = vXabajo;
    }
    if (event.code == "ArrowUp") {
        vY = vXarriba;
    }
    if (event.code == "ArrowLeft") {
        vX = vYizquierda;
    }
    if (event.code == "ArrowRight") {
        vX = vYderecha;
    }
}
window.onkeyup = function (event) {

    console.log(event.code);
    if (event.code == "ArrowDown") {
        vY = 0
    }
    if (event.code == "ArrowUp") {
        vY = 0
    }
    if (event.code == "ArrowLeft") {
        vX = 0
    }
    if (event.code == "ArrowRight") {
        vX = 0
    }
}
let xC;
let yC;

// coordenadas puntos:
let xP1 = 480;
let yP1 = 90;

let xP2 = 120;
let yP2 = 270;

let xP3 = 390;
let yP3 = 360;

let xP4 = 180;
let yP4 = 390;

let xP5 = 390;
let yP5 = 240;

//datos enemigos

let xE1 = 300;
let yE1 = 80;
let vE1 = 30;
function moverEnemigo1() {
    let dY1 = dT / 1000 * vE1;
    yE1 = yE1 + dY1;
    if (yE1 > 110) {
        vE1 = -vE1;
    }
    if (yE1 < 70) {
        vE1 = -vE1;
    }
}

let xE2 = 215;
let yE2 = 345;
let vE2 = 80;
function moverEnemigo2() {
    let dX2 = dT / 1000 * vE2;
    xE2 = xE2 + dX2;
    if (xE2 > 315) {
        vE2 = -vE2;
    }
    if (xE2 < 210) {
        vE2 = -vE2;
    }
}

let xE3 = 110;
let yE3 = 210;
let vE3 = 150;
function moverEnemigo3() {
    let dX3 = dT / 1000 * vE3;
    xE3 = xE3 + dX3;
    if (xE3 > 290) {
        vE3 = -vE3;
    }
    if (xE3 < 105) {
        vE3 = -vE3;
    }
}

let xE4 = 345;
let yE4 = 345;
let vE4 = 130;
function moverEnemigo4() {
    let dY4 = dT / 1000 * vE4;
    yE4 = yE4 + dY4;
    if (yE4 > 410) {
        vE4 = -vE4;
    }
    if (yE4 < 340) {
        vE4 = -vE4;
    }
}

let xE5 = 345;
let yE5 = 225;
let vE5 = 130;
function moverEnemigo5() {
    let dY5 = dT / 1000 * vE5;
    yE5 = yE5 + dY5;
    if (yE5 > 290) {
        vE5 = -vE5;
    }
    if (yE5 < 220) {
        vE5 = -vE5;
    }
}

let xE6 = 435;
let yE6 = 290;
let vE6 = -130;
function moverEnemigo6() {
    let dY6 = dT / 1000 * vE6;
    yE6 = yE6 + dY6;
    if (yE6 > 290) {
        vE6 = -vE6;
    }
    if (yE6 < 224) {
        vE6 = -vE6;
    }
}

function moverYDibujar() {
    ctx.clearRect(0, 0, 1000, 1000);
    let dX = dT / 1000 * vX
    let dY = dT / 1000 * vY
    x = x + dX;
    y = y + dY;
    controlador()
    // console.log(color)
    dibujarCubo(x, y);
    dibujarFondo()
    dibujarPuntos(xP1, yP1)
    dibujarPuntos(xP2, yP2)
    dibujarPuntos(xP3, yP3)
    dibujarPuntos(xP4, yP4)
    dibujarPuntos(xP5, yP5)

    dibujarEnemigos(xE1, yE1)
    dibujarEnemigos(xE2, yE2)
    dibujarEnemigos(xE3, yE3)
    dibujarEnemigos(xE4, yE4)
    dibujarEnemigos(xE5, yE5)
    dibujarEnemigos(xE6, yE6)

    xC = x + 12.5;
    yC = y + 12.5;

    controladorPuntos()
    controladorEnemigos()

    moverEnemigo1()
    moverEnemigo2()
    moverEnemigo3()
    moverEnemigo4()
    moverEnemigo5()
    moverEnemigo6()

    Score.innerHTML = puntos;
    tempo.innerHTML = tiempo;

    if (puntos == 5 && x >= 510 && y > 210 && y < 325) {
        alert(`Ganaste!! Tu tiempo fue de ${tiempo} segundos. Ahora vas a volver a la posición de inicio`)
        puntos = 0;
        tiempo = 0;
        x = 90;
        y = 60;
        vX = 0;
        vY = 0;
        xP1 = 480;
        yP1 = 90;

        xP2 = 120;
        yP2 = 270;

        xP3 = 390;
        yP3 = 360;

        xP4 = 180;
        yP4 = 390;

        xP5 = 390;
        yP5 = 240;
    }
}
window.setInterval(moverYDibujar, dT);

function controlador() {
    if (x >= 155 && y < 150 & x <= 156) {
        x = x - 2;
    }
    if (x >= 157 && x < 240 && y < 150) {
        y = y + 2;
    }
    if (x <= 241 && x > 239 && y < 150) {
        x = x + 2;
    }
    if ((y <= 60 && x >= 60 && x <= 155) || (x >= 240 && y <= 60)) {
        y = y + 2;
    }
    if (x < 90) {
        x = x + 2;
    }
    if (y >= 275 && y <= 280 && x >= 90 && x < 240) {
        y = y - 2;
    }
    if (y < 325 && y > 275 && x <= 240) {
        x = x + 2;
    }
    if (y < 330 && y > 325 && x >= 150 && x <= 240) {
        y = y + 2;
    }
    if (x <= 151 & y >= 330) {
        x = x + 2
    }
    if (x >= 485 && y >= 60 & y <= 150) {
        x = x - 2;
    }
    if (x > 276 && y > 95 && y <= 120) {
        y = y - 2;
    }
    if (x >= 275 && y >= 95 && y < 210) {
        x = x - 2;
    }
    if (y > 395) {
        y = y - 2;
    }
    if (x >= 395 & y > 305) {
        x = x - 2;
    }
    if (x > 276 && y > 300 && y <= 330) {
        y = y + 2;
    }
    if (x >= 275 && y > 276 && y <= 330) {
        x = x - 2;
    }
    if (x >= 275 && y <= 310 && y >= 275) {
        y = y - 2;
    }
    if (x >= 275 && y <= 210 && y >= 150) {
        y = y + 2
    }
    if (x >= 510) {
        x = x - 2;
    }
}

function dibujarFondo() {
    ctx.beginPath()
    ctx.fillStyle = "MediumAquamarine"
    ctx.strokeStyle = "black"
    ctx.lineWidth = 3;
    ctx.moveTo(90, 60)
    ctx.lineTo(90, 300)
    ctx.stroke();
    ctx.fill();
    ctx.beginPath()
    ctx.lineWidth = 3;
    ctx.moveTo(90, 60)
    ctx.lineTo(180, 60)
    ctx.stroke();
    ctx.fill();

    ctx.beginPath()
    ctx.lineWidth = 3;
    ctx.moveTo(180, 60)
    ctx.lineTo(180, 150)
    ctx.stroke();
    ctx.fill();

    ctx.beginPath()
    ctx.lineWidth = 3;
    ctx.moveTo(180, 150)
    ctx.lineTo(240, 150)
    ctx.stroke();
    ctx.fill();

    ctx.beginPath()
    ctx.lineWidth = 3;
    ctx.moveTo(240, 150)
    ctx.lineTo(240, 60)
    ctx.stroke();
    ctx.fill();

    ctx.beginPath()
    ctx.lineWidth = 3;
    ctx.moveTo(240, 60)
    ctx.lineTo(510, 60)
    ctx.stroke();
    ctx.fill();

    ctx.beginPath()
    ctx.lineWidth = 3;
    ctx.moveTo(510, 60)
    ctx.lineTo(510, 120)
    ctx.stroke();
    ctx.fill();

    ctx.beginPath()
    ctx.lineWidth = 3;
    ctx.moveTo(510, 120)
    ctx.lineTo(300, 120)
    ctx.stroke();
    ctx.fill();

    ctx.beginPath()
    ctx.lineWidth = 3;
    ctx.moveTo(300, 120)
    ctx.lineTo(300, 210)
    ctx.stroke();
    ctx.fill();

    ctx.beginPath()
    ctx.lineWidth = 3;
    ctx.moveTo(300, 210)
    ctx.lineTo(570, 210)
    ctx.stroke();
    ctx.fill();

    ctx.beginPath()
    ctx.lineWidth = 3;
    ctx.moveTo(90, 300)
    ctx.lineTo(240, 300)
    ctx.stroke();
    ctx.fill();

    ctx.beginPath()
    ctx.lineWidth = 3;
    ctx.moveTo(240, 300)
    ctx.lineTo(240, 330)
    ctx.stroke();
    ctx.fill();

    ctx.beginPath()
    ctx.lineWidth = 3;
    ctx.moveTo(240, 330)
    ctx.lineTo(150, 330)
    ctx.stroke();
    ctx.fill();

    ctx.beginPath()
    ctx.lineWidth = 3;
    ctx.moveTo(150, 330)
    ctx.lineTo(150, 420)
    ctx.stroke();
    ctx.fill();

    ctx.beginPath()
    ctx.lineWidth = 3;
    ctx.moveTo(150, 420)
    ctx.lineTo(420, 420)
    ctx.stroke();
    ctx.fill();

    ctx.beginPath()
    ctx.lineWidth = 3;
    ctx.moveTo(150, 420)
    ctx.lineTo(420, 420)
    ctx.stroke();
    ctx.fill();

    ctx.beginPath()
    ctx.lineWidth = 3;
    ctx.moveTo(420, 420)
    ctx.lineTo(420, 330)
    ctx.stroke();
    ctx.fill();

    ctx.beginPath()
    ctx.lineWidth = 3;
    ctx.moveTo(420, 330)
    ctx.lineTo(300, 330)
    ctx.stroke();
    ctx.fill();

    ctx.beginPath()
    ctx.lineWidth = 3;
    ctx.moveTo(300, 330)
    ctx.lineTo(300, 300)
    ctx.stroke();
    ctx.fill();

    ctx.beginPath()
    ctx.lineWidth = 3;
    ctx.moveTo(300, 300)
    ctx.lineTo(570, 300)
    ctx.stroke();
    ctx.fill();

    ctx.beginPath()
    ctx.lineWidth = 4;
    ctx.moveTo(510, 210)
    ctx.lineTo(570, 210)
    ctx.lineTo(570, 300)
    ctx.lineTo(510, 300)
    ctx.lineTo(510, 210)
    ctx.stroke();
    ctx.fill();
}
function dibujarPuntos(xP, yP) {
    ctx.beginPath();
    ctx.strokeStyle = "black"
    ctx.fillStyle = "yellow";
    ctx.arc(xP, yP, 5, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
}

function controladorPuntos() {
    if (Math.sqrt(Math.pow(xC - xP1, 2) + Math.pow(yC - yP1, 2)) <= 20) {
        xP1 = 900;
        yP1 = 900;
        puntos = puntos + 1;
    }
    if (Math.sqrt(Math.pow(xC - xP2, 2) + Math.pow(yC - yP2, 2)) <= 20) {
        xP2 = 900;
        yP2 = 900;
        puntos = puntos + 1;
    }
    if (Math.sqrt(Math.pow(xC - xP3, 2) + Math.pow(yC - yP3, 2)) <= 20) {
        xP3 = 900;
        yP3 = 900;
        puntos = puntos + 1;
    }
    if (Math.sqrt(Math.pow(xC - xP4, 2) + Math.pow(yC - yP4, 2)) <= 20) {
        xP4 = 900;
        yP4 = 900;
        puntos = puntos + 1;
    }
    if (Math.sqrt(Math.pow(xC - xP5, 2) + Math.pow(yC - yP5, 2)) <= 20) {
        xP5 = 900;
        yP5 = 900;
        puntos = puntos + 1;
    }
}

function dibujarEnemigos(xE, yE) {
    ctx.beginPath();
    ctx.strokeStyle = "black"
    ctx.fillStyle = "blue";
    ctx.arc(xE, yE, 5, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
}

function controladorEnemigos() {
    if (Math.sqrt(Math.pow(xC - xE1, 2) + Math.pow(yC - yE1, 2)) <= 20) {
        x = 93;
        y = 60;
        puntos = 0;
        tiempo = 0;
        xP1 = 480;
        yP1 = 90;

        xP2 = 120;
        yP2 = 270;

        xP3 = 390;
        yP3 = 360;

        xP4 = 180;
        yP4 = 390;

        xP5 = 390;
        yP5 = 240;
        alert(`Perdiste, ahora vas a volver a la posición de inicio. Intenta no volver chocar.`)

        vX = 0;
        vY = 0;
    }
    if (Math.sqrt(Math.pow(xC - xE2, 2) + Math.pow(yC - yE2, 2)) <= 20) {
        x = 93;
        y = 60;
        puntos = 0;
        tiempo = 0;
        xP1 = 480;
        yP1 = 90;

        xP2 = 120;
        yP2 = 270;

        xP3 = 390;
        yP3 = 360;

        xP4 = 180;
        yP4 = 390;

        xP5 = 390;
        yP5 = 240;
        alert(`Perdiste, ahora vas a volver a la posición de inicio. Intenta no volver chocar.`)
        vX = 0;
        vY = 0;
    }
    if (Math.sqrt(Math.pow(xC - xE3, 2) + Math.pow(yC - yE3, 2)) <= 20) {
        x = 93;
        y = 60;
        puntos = 0;
        tiempo = 0;
        xP1 = 480;
        yP1 = 90;

        xP2 = 120;
        yP2 = 270;

        xP3 = 390;
        yP3 = 360;

        xP4 = 180;
        yP4 = 390;

        xP5 = 390;
        yP5 = 240;
        alert(`Perdiste, ahora vas a volver a la posición de inicio. Intenta no volver chocar.`)
        vX = 0;
        vY = 0;
    }
    if (Math.sqrt(Math.pow(xC - xE4, 2) + Math.pow(yC - yE4, 2)) <= 20) {
        x = 93;
        y = 60;
        puntos = 0;
        tiempo = 0;
        xP1 = 480;
        yP1 = 90;

        xP2 = 120;
        yP2 = 270;

        xP3 = 390;
        yP3 = 360;

        xP4 = 180;
        yP4 = 390;

        xP5 = 390;
        yP5 = 240;
        alert(`Perdiste, ahora vas a volver a la posición de inicio. Intenta no volver chocar.`)
        vX = 0;
        vY = 0;
    }
    if (Math.sqrt(Math.pow(xC - xE5, 2) + Math.pow(yC - yE5, 2)) <= 20) {
        x = 93;
        y = 60;
        puntos = 0;
        tiempo = 0;
        xP1 = 480;
        yP1 = 90;

        xP2 = 120;
        yP2 = 270;

        xP3 = 390;
        yP3 = 360;

        xP4 = 180;
        yP4 = 390;

        xP5 = 390;
        yP5 = 240;
        alert(`Perdiste, ahora vas a volver a la posición de inicio. Intenta no volver chocar.`)
        vX = 0;
        vY = 0;
    }
    if (Math.sqrt(Math.pow(xC - xE6, 2) + Math.pow(yC - yE6, 2)) <= 20) {
        x = 93;
        y = 60;
        puntos = 0;
        tiempo = 0;
        xP1 = 480;
        yP1 = 90;

        xP2 = 120;
        yP2 = 270;

        xP3 = 390;
        yP3 = 360;

        xP4 = 180;
        yP4 = 390;

        xP5 = 390;
        yP5 = 240;
        alert(`Perdiste, ahora vas a volver a la posición de inicio. Intenta no volver chocar.`)
        vX = 0;
        vY = 0;
    }
}

window.setInterval(time, 1000)

function time() {
    tiempo = tiempo + 1;
}