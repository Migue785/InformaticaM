let ancho;
let alto;
do {
  ancho = parseFloat(prompt("Ingrese el ancho"));
} while (isNaN(ancho) || ancho < 1);

do {
  alto = parseFloat(prompt("Ingrese el alto"));
} while (isNaN(alto) || alto < 1);

let nLinea = 0; //es la linea en la que se ponen los asteriscos
while (nLinea < alto) //mientras la linea en la que pone los asteriscos es menor al alto
{
  let c = ""; //se le añade a la posición donde se encuentra el cursos un nada
  let nColumna = 0; //columna donde se esta poniendo el asterisco
  while (nColumna < ancho) //mientras la columna sea menor al ancho se va a seguir poniendo asteriscos
  {
    c = c + "*"; // se le añade a la posicion donde se encuentra el cursor un asterisco
    nColumna = nColumna + 1; //se añade uno a la columna para pasar a la siguiente columna
  }
  console.log(c);
  nLinea = nLinea + 1; //se le añade uno a la linea donde se encuentra el cursor para pasar a la siguiente columna.
}