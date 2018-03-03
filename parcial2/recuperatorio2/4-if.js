//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var num1;
	var num2;
	var suma;
	var resta;
	var multiplicacion;

	num1 = parseInt(prompt("ingrese un numero "));
	num2 = parseInt(prompt("ingrese otro numero "));

	if ( num1 == num2)
	{
		multiplicacion = num1*num2;
	}
	else if (num1 > num2)
	{
		resta = num1-num2;
	}
	else
	{
		suma = num1+num2;
	}

	document.write(" la suma es " + suma + "br/>");
	document.write(" la resta es " + resta+ "br/>");
	document.write(" la multiplicacion es " + multiplicacion + "br/>");
}

// o se puede hacer una sola variable que seria resultado para todas las operaciones


