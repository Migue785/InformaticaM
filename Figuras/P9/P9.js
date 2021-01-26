let ladoC;
do {
    ladoC = parseFloat(prompt("Ingrese la cantidad del lado"));
} while (isNaN(ladoC) || ladoC < 1);
let nLinea = 0;
while (nLinea < ladoC) {
    let linea = "";
    let nColumna = nLinea
    while (nColumna < ladoC-1) {
        linea = linea + " ";
        nColumna=nColumna+1;
    }
    nColumna=0
    while (nColumna <= nLinea){
        if(nLinea==ladoC-1||nColumna==0||nColumna==nLinea){
            linea = linea + "*";
        }
        else{
           linea = linea + " ";
        }
        nColumna=nColumna+1
    }
    linea=linea+" ";   
    console.log(linea);
    nLinea = nLinea + 1;
 }