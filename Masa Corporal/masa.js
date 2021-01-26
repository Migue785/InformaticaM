let masa;
let altura;
let indice;
do{
    masa = prompt("Por favor, ingrese su masa corporal en Kg.")
}while (masa  <= 0 || isNaN(masa))
do{
    altura = prompt("Por favor ingrese su estatura en metros.")
}while (altura <= 0 || isNaN(altura))
indice = masa/Math.pow(altura,2)
console.log(`Indice: ${indice}`)
if (indice<18.5)
{
    alert("Estas en el rango de bajo de peso.")
}
else if (indice>=18.5 & indice<24.5)
{
    alert("Estas en el rango normal de peso, no te preocupes.")
}
else if (indice>=24.5 & indice<29.9)
{
    alert("Estas en el rango de sobrepeso.")
}
else{
    alert("Estas en el rango de obesidad.")
}
