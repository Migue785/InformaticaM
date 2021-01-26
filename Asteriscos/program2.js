let ladoA; //ancho
let ladoB; //alto
do {
  ladoA = parseFloat(prompt("Ingrese el ancho"));
} while (isNaN(ladoA) || ladoA < 1);

do {
  ladoB = parseFloat(prompt("Ingrese el alto"));
} while (isNaN(ladoB) || ladoB < 1);

let linea = 0;
while (linea < ladoB) 
{
  let d = ""; 
  let Columna = 0; 
  while (Columna < ladoA) 
  {
    if(Columna<linea)
    {
      d = d + "*"; 
      Columna = Columna + 1;
    }
    else{
      d = d + " "; 
    Columna = Columna + 1;
    }
  }
  console.log(d);
  linea = linea + 1; 
}





