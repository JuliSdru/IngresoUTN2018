//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe;
	var nuevoImporte;
	var precioFinal;

	importe = parseInt(prompt(" ingrese un importe "));
	nuevoImporte = importe * 0.21;
	precioFinal = importe + nuevoImporte;

	document.getElementById("importe").value = precioFinal;
	
}

