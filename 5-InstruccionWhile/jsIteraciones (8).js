function Mostrar()
{

	var positivo=0;
	var negativo=1;
	var numero;
	var respuesta='s';  
	var flag;

	while (respuesta == 's')
	{
		numero = parseInt(prompt("ingrese un numero  "));
	    

	if (numero >=0)
	{
		positivo = positivo + numero;
	}	
	else 
	{
		negativo = negativo * numero;
		flag = 1;
	}
        respuesta = prompt("desea continuar?:  ");

	}

document.getElementById('suma').value=positivo;
if (flag == 0)
{
	negativo = 0;
}
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN