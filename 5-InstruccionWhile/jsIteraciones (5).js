function Mostrar()
{

var sexo = prompt("ingrese f ó m .");
sexo = sexo.toLowerCase();

// se puede poner para que la condicion sea invalida 
// se puede poner pra que la condicion sea valida y se niegue
// to Lower Case para pasar a minuscula

while ( !(sexo == 'f' || sexo == 'm'))
{
    sexo = prompt ("Error. Reingrese sexo ");
    sexo =toLowerCase();
}



document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN