function Mostrar()
{
  var numero;
  var contPares = 0;
  var i;

  numero = parseInt (prompt("ingrese un numero  "));

  for(i=1; i<= numero; i++)
  {
    if(i%2 == 0)
    {
      contPares++;
      console.log(i);
    }
  }

  console.log(" se encontraron " + contPares + " numeros pares ");



}//FIN DE LA FUNCIÓN