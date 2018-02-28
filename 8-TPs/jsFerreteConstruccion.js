/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var LargoDelTerreno;
    var AnchoDelTerreno;
    var RadioDelTerreno;
    var resultado;

    var LargoDelTerreno = parseInt(document.getElementById("Largo").value);
    var AnchoDelTerreno = parseInt(document.getElementById("Ancho").value);
    var RadioDelTerreno = parseInt(document.getElementById("Radio").value);

    resultado = LargoDelTerreno + AnchoDelTerreno * 3;

    alert("cantidad de alambre a comprar   " + resultado);

}
function Circulo () 
{
    var largo;
    var ancho;
    var perimetro;
    var alambre;

    var largo = parseInt(document.getElementById("Largo").value);
    var ancho = parseInt(document.getElementById("Ancho").value);
    
    perimetro = 2* largo + 2* ancho;


    alert("cantidad de alambre a comprar   " + perimetro);
	
}
function Materiales () 
{
	var alambre;
    var radio;
    var perimetro;

    radio  = parseInt(document.getElementById("Radio").value);

    perimetro = 2 * radio * Math.PI;

    alambre = perimetro * 3;

    alert("cantidad de alambre a comprar  "  + alambre);

	
}