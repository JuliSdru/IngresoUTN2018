//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var mesDelAño;

    mesDelAño = prompt("ingrese un mes del año  ");

	switch(mesDelAño)
	{
		case enero:
		case febrero: alert("veranito!!!");
		              break;

		default: alert(" extraño enero y febrero ");
		         break;
	}

	// o sin break porque es el ultimo caso 
	// en la variable ponerle tolowercase() para las mayusculas y minisculas
	// toUpperCase() pasa todo a mayuscula
	
}

