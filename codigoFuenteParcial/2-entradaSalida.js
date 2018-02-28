//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var importe;
    var precioFinal;
    var NuevoImporte;

    importe = document.getElementById("importe").value;
    
    importe = prompt("importe de un producto   ");

    NuevoImporte = importe *21/100;

    precioFinal = importe + NuevoImporte;

    alert("el precio final es " + precioFinal);
}

