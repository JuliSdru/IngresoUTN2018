//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var importe;
    var precioFinal;
    var NuevoImporte;

    
    importe = prompt("importe de un producto   ");

    NuevoImporte = importe *21/100;

    precioFinal = importe + NuevoImporte;

    document.getElementById("importe").value = precioFinal;
}

