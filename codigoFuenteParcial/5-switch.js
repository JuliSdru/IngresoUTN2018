//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var MesDelAño;
    
    MesDelAño = prompt("ingrese un mes del año  ");

     switch(MesDelAño)
    {
        case "enero":
        case "febrero": alert("veranito!!!");
                        break;

        case "marzo":
        case "abril":
        case "mayo":
        case "junio":
        case "julio":
        case "agosto":
        case "septiembre":
        case "octumbre":
        case "noviembre":
        case "diciembre": alert("extraño enero y febrero!!!");
                          break;
       //o con default
    }
}

