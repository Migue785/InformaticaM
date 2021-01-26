function promedioNotas (ValorNotas) //ingresas notas entre []
{
let total=0;
let i=0; //ValorNotas[i]
do{
    total=ValorNotas[i]+total;
    i=i+1;
}
while(i<ValorNotas.length)
return(total/ValorNotas.length)
}

function concatenarPalabras(palabras) //ingresar palabras entre []; ingresar cada palabra individualmente entre " "
{
    let x;
    let totPalabra= "";
    do{
        totPalabra=totPalabra.concat(palabras[x])
        x=x+1;
    }while(x<palabras.length)
    return(totPalabra)
}