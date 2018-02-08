function Mostrar()
{
//tomo la edad  

var edad;

edad = parseInt(document.getElementById("edad").value);

if(edad <13)
{
    alert("es niño");

}

else if(edad>=13 && edad<=17)
{
    alert("es adolescente");
}

else
{
    alert("adulto");
}




}//FIN DE LA FUNCIÓN