function Mostrar()
{

	var numero = parseInt(prompt("ingrese un número entre 0 y 10."));

    while(numero < 0 || numero > 9 || isNaN (numero))
	{
      numero = parseInt(prompt("Error. Ingrese nuevamente un numero del 0 al 9"));
	}
      document.getElementById("Numero").value = numero;


}//FIN DE LA FUNCIÓN