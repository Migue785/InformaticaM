let a = parseFloat(prompt("Ingrese un número"))
let b = parseFloat(prompt("Ingrese otro número"))
if (b==0)
{
    alert(`La suma entre a y b es: ${a +b }`)
    alert(`La resta entre a y b es: ${a - b}`)
    alert(`La multiplicación entre a y b es: ${a * b}`)
    alert("No es posible calcular la división y el módulo.")
}
else
{
    alert(`La suma entre a y b es: ${a + b}`)
    alert(`La resta entre a y b es: ${a - b}`)
    alert(`La multiplicación entre a y b es: ${a * b}`)
    alert(`La división entre a y b es: ${a / b}`)
    alert(`El residuo de a dividido b es: ${a % b}`)
}
