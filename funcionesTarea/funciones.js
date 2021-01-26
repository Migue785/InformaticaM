function areaCirculo (r)
{
    return (r*r) * Math.PI
}
function volEsfera (r)
{
    return (4/3) * Math.PI * Math.pow(r,3)
}
function max (a,b)
{
    if (a > b)
    {
        return a;
    }
    else
    {
        return b;
    }
}
function masLarga (string1,string2) //poner el parámetro string1 y string 2 entre comillas; Ej: "string1","string2" 
{
    var p1=string1.length
    var p2=string2.length
    if (p1 > p2)
    {
        return string1;
    }
    else
    {
        return string2;
    }
}
function imprimirMasLarga (string1,string2) //poner el parámetro string1 y string 2 entre comillas; Ej: "string1","string2" 
{
    var p1=string1.length
    var p2=string2.length
    if (p1 > p2)
    {
        console.log(string1);
    }
    else
    {
        console.log(string2);
    }
}
function fibonacci (n)
{
    let fTot=0;
    let F0=0;
    let F1=1;
    let conteo=1;
        while(conteo<=n)
    {
        fTot=F0+F1;
        F0=fTot;
        F1=F0-F1;
        conteo=conteo+1;
    }
    return fTot;
}