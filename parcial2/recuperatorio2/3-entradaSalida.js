//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
var largo;
var ancho;
var perimetro;
var alambre;


ancho = parseInt(document.getElementById("ancho").value);
largo = parseInt(document.getElementById("largo").value);

perimetro = ancho *2 + largo*2;

alambre = perimetro *6;

alert("el largo es " + largo + " el ancho es " + ancho + " y se necesitan " + alambre);

// o con document.writ o console.log

	
}

