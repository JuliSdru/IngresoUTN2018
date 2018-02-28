function Mostrar()
{
  var numero;
  var contDivisores = 0;
  var i;

  numero = parseInt (prompt("ingrese un numero  "));

  for(i=1; i<= numero; i++)
  {
    if(numero % i == 0)
    {
      contDivisores++;
      console.log(i);
    }
  }

  console.log(" se encontraron " + contDivisiores + " numeros divisores " );




}//FIN DE LA FUNCIÓN