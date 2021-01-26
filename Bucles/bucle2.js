let numero;
do{
    numero = parseFloat(prompt("Ingrese x"))
} while(numero < 0 || isNaN(numero))
console.log(`La raíz cuadrada es: ${numero}`)