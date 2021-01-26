let cantidadNotas;
let notas = [ ];
let nota;
let i = 0;
let x = 0;
let promedio = 0;
do{
   cantidadNotas = prompt("Ingrese cual es la cantidad de notas")
}while(cantidadNotas <= 0 || isNaN(cantidadNotas) || cantidadNotas % 1 != 0)
while (i < cantidadNotas) 
    {
do{
    nota = prompt("Ingrese su nota"); 
}while(nota>10 || nota<0 || isNaN(nota))
notas.push(nota)
i = i + 1;
}
while(x < cantidadNotas){
    promedio = promedio + parseFloat(notas[x])
    x = x + 1;
}
alert(`El promedio de sus notas es ${promedio/cantidadNotas}`)


