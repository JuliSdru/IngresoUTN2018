function Mostrar()
{
//tomo el mes 
var mesDelAño = document.getElementById('mes').value;

switch(mesDelAño)
{
case "Enero": 
case "Marzo":
case "Mayo":
case "Julio":
case "Agosto":
case "Octubre":
case "Diciembre":alert ("Este mes tiene 31 días");
                 break;
case "Abril":
case "Junio":
case "Septiembre":
case "Noviembre": alert ("Este mes tiene 30 días");
                  break;

case "Febrero": alert("Este mes no tiene más de 28 días");
                break;

}
//alert (mesDelAño);
	
	



}//FIN DE LA FUNCIÓN