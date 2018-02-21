function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;
	var respuesta='s';
   
     while (respuesta == 's')
	{
		numero = parseInt(prompt("ingrese un numero  "));
		acumulador = acumulador + numero;
		contador = contador + 1;
		respuesta = prompt("desea continuar?:  ");
	} 


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN