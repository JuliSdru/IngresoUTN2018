/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'MOSTRAR'
*/
function Mostrar()
{
	//crear una variable
	var nombre
    //el dato que ingresa el usuario se guarda en nombre mediante prompt
	nombre = prompt ("ingrese su nombre: ")
    //se muestra el dato que puso el usuario en la caja de texto
	document.getElementById("elNombre").value =nombre;

	
}

