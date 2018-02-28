//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var ancho;
    var largo;
    var perimetro;
    var alambre;

    ancho = parseInt(document.getElementById("ancho").value);
    largo = parseInt(document.getElementById("largo").value);

    perimetro = 2*ancho + 2*largo;

    alert("el ancho del terrreno es " + ancho + " y el largo del terreno es " + largo);


    alambre = perimetro * 6;

    alert(" se necesita " + alambre + " metros para el alambrado ");


}

