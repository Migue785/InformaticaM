function factorial (n)
{
    let resultado = 1;
    let factor = 1;
    while(factor <= n)
    {
        resultado = resultado * factor;
        factor = factor + 1;
    }
    return resultado; 
}

function factorialX (n)
{
    if (n <= 1)
    {
        return 1;
    }
    else {
        return n * factorialX (n - 1)
    }
}