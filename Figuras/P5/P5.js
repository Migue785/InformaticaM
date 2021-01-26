let ancho;
let alto;
let contador = 0;
let anchoContador = contador;
do {
  ancho = parseFloat(prompt("Ingrese el ancho"));
} while (isNaN(ancho) || ancho < 1);

do {
  alto = parseFloat(prompt("Ingrese el alto"));
} while (isNaN(alto) || alto < 1);
alto = alto + 1;
let nLinea = 0;
while (nLinea < alto) 
{
  let c = ""; 
  let nColumna = 0; 
  while (nColumna < anchoContador) 
  {
      if(nColumna<contador){
        c= c + " ";
      } else{
        c = c + "*";
      }
    nColumna = nColumna + 1; 
  }
  console.log(c);
  nLinea = nLinea + 1;  
contador = contador + 1;
anchoContador = ancho + contador
}
