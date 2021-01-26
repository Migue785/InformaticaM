let LadoCantidad;
do {
LadoCantidad = parseFloat(prompt("Ingrese la cantidad del lado"));
} while (isNaN(LadoCantidad) || LadoCantidad < 1);
        let nLinea = 0;
        while (nLinea < LadoCantidad) {
        let linea = "";
        let nColumna = 0;
        while(nColumna<nLinea){
            nColumna=nColumna+1;
            linea = linea + " ";
        }
        nColumna = 0;
        while (nColumna < LadoCantidad) {
            if(nLinea==0||nLinea==LadoCantidad-1||nColumna==0||nColumna==LadoCantidad-1){
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