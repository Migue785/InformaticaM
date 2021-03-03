let veces = 1;
veces = parseFloat(localStorage.getItem("requisito"));
let suma;
if(veces==1){
    localStorage.setItem("total","1")
    let recupero1 = parseFloat(localStorage.getItem("total"));
    suma = recupero1 + 1;
    veces = veces + 1;
    localStorage.setItem("requisito", veces)
} else{
    let recupero = parseFloat(localStorage.getItem("total"));
    suma = recupero + 1;
}
localStorage.setItem("total", suma)