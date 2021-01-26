let ladoB;
do {
    ladoB = parseFloat(prompt("Ingrese la cantidad del lado"));
} while (isNaN(ladoB) || ladoB < 1);
let nLinea = 0;
    while (nLinea < ladoB) {
    let linea = "";
    let nColumna = 0;
    while(nColumna<ladoB-nLinea){
        nColumna=nColumna+1;
        linea = linea + " ";
    }
    nColumna = 0;
    while (nColumna < ladoB) {
        if(nLinea==0||nLinea==ladoB-1||nColumna==0||nColumna==ladoB-1){
            linea = linea + "*";
        }
        else{
        linea=linea+" ";
    }    
        nColumna=nColumna+1;
    }
    linea=linea+" ";   
    console.log(linea);
    nLinea = nLinea + 1;
    }

