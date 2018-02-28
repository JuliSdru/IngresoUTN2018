function Mostrar()
{

var numero;
var i;
var esPrimo = true;

numero = parseInt(prompt(" ingrese un numero  "));

for(i=2; i<numero; i++)
{
    if(numero % i == 0)
    {
        esPrimo = false;
        break;
    }

}

if (esPrimo)
{
    alert(numero + " es primo ");

}
else
{
    alert(numero + " no es primo ");
}


}//FIN DE LA FUNCIÓN