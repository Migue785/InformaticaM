do{
    lado= parseFloat(prompt("Ingrese la cantidad de los lados")); }
 while (isNaN(lado) || lado < 0);
let espacio=lado-1
let c=""
let Linea=""
let contador1=0
let contador2=0
while(contador1<lado)
{
Linea = Linea + "*";
contador1 = contador1 + 1;
}
while(espacio>0)
{
while(contador2<espacio)
{
c = c + " "
contador2 = contador2 + 1
}
espacio = espacio - 1
c = c + Linea
console.log(c)
c=""
contador2=0}