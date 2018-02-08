function Mostrar()
{
//tomo la edad  

var edadMenor;

var edadMayor;

edad = parseInt(document.getElementById("edad").value);


if(edad <=17)
{
    alert("eres menor de edad");
}

else(edad >=18)
{
    alert("eres mayor de edad");
}


}//FIN DE LA FUNCIÓN