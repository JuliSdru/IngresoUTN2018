//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe;
	var control = 0;
	var mayorImporte;
	var menorImporte;
	var flag = 0;

   while( control < 7)
   {
     importe = parseInt(prompt("ingrese un importe"));
	 while(importe <= 0)
	 {
       importe = parseInt(prompt("Error. Reingrese un importe mayor que 0  "));
	 }

	 if (flag == 0)
	 {
		 mayorImporte = importe;
		 menorImporte = importe;
		 flag = 1;
	 }

     control++;

   }

   alert("el maximo importe  es " + mayorImporte + " y el menor importe es " + menorImporte);
	
}

// se puede hacer con while o con for. ejercicios indeterminados se ingresan cosas y no se cuantas, se usa 
// while o do while. cuando sabes la cantidad de interacciones se usa for.
// FOR NO ES OBLIGATORIO PARA EL EXAMEN DE INGRESO.
// var control = i o FLAG
// estructura repititiva. que se tiene que repetir y q no/ maximo y minimo afuera
// prompt va a dentro porque sino se ejecuta una sola vez
// siempre preguntar por lo que no es 
// dentro de una estructura repetitiva puede tener muchas estructuras repetitivas
// forma de calcular maximos y minimos se usa if. Darle un primer valor al maximo y al minimo. FLAG
// flag =  if (venta > ventaMayor || flag == 0)
//     {
//         ventaMayor = venta;
//     }
//     if (venta < ventaMenor || flag == 0)
//     {
//         ventaMenor = venta;
//         flag = 1;
//     }