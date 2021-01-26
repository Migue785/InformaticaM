let num = 0;
let final = 0;
while (num <= 10000)
{
    if (num % 3 == 0 & num % 5 == 0)
    {
        num = num + 1;
    }
    else{
        if (num % 3 == 0)
        {
            final = final + num;
        }
        if (num % 5 == 0)
        {
            final = final + num;
        }
        num = num + 1;
    }
}
alert (`El valor final del cuarto punto es: ${final}`)
