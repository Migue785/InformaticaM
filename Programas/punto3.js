let multiplo = 0;
let tot = 0;
while (multiplo < 10000)
{
    if (multiplo % 3 == 0 & multiplo % 5 == 0)
    {
        tot = tot + multiplo;
        multiplo = multiplo + 1;
    }
    else
    {
        multiplo = multiplo +1
    }
}    
alert (`El valor final del tercer punto es: ${tot}`)
console.log(`es ${tot}`)
