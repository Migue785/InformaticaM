let contador= JSON.parse(localStorage.getItem("contador"))
contador = contador + 1;
if(contador==1){
    alert("Está pagina ha sido cargada 1 vez")
} else {
    alert( `Esta página ha sido cargada ${contador} veces`)
}
localStorage.setItem("contador",JSON.stringify(contador))
