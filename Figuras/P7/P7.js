let ladoA;
do {
    ladoA = parseFloat(prompt("Ingrese la cantidad del lado"));
} while (isNaN(ladoA) || ladoA < 1);

let nLinea = 0;
while (nLinea < ladoA) {
    let linea = " ";
    let nColumna = 0;
    while (nColumna < nLinea+1) {
        if(nColumna==0 || nColumna==nLinea || nLinea==ladoA-1){
            linea = linea + "*";
            nColumna=nColumna+1;
        }
        else{
            linea=linea+" ";
            nColumna=nColumna+1;
        }           
    }
    linea=linea+" ";   
    console.log(linea);
    nLinea = nLinea + 1;
 }