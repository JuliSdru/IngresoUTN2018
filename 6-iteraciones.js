//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var venta;
    var ventaMayor;
    var ventaMenor;
    var diaMayor;
    var diaMenor;
    var flag = 0;

    for(var i=1; i<=7; i++)
    {
     venta = parseFloat(prompt("ingrese un importe de venta  "));

     while(venta<=0)
     {
         venta = parseFloat(prompt("Error. El importe de la venta debe ser mayor a 0. Reingresar venta:  "));

     }
     if (venta > ventaMayor || flag == 0)
     {
         ventaMayor = venta;
         diaMayor = i;
     }
     if (venta > ventaMenor || flag == 0)
     {
         ventaMenor = venta;
         diaMenor = i;
         flag == 1;
     }
    }

    alert(" la venta mayor fue  " + ventaMayor + " el dia " + diaMayor + " la venta menor fue  " + ventaMenor + " el dia " + diaMenor);
    
}

