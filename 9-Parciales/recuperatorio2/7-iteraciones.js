//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var nota;
	var sexo;
	var i; //cantidad de alumnos
	var acumNotas = 0;
	var promedio;
	var notaMasBaja;
	var contadorVarones;
	var flag = 0;

for( i=0; i<6; i++)
{
   nota= parseInt(prompt("ingrese su nota "));
   while (nota > 0 || nota < 10)
   {
	   nota = parseInt(prompt("Error. Reingrese nota "));
   }
   sexo = prompt("ingrese sexo ");
   while(sexo!='f' && sexo!='m')
   {
	   sexo = prompt("Error. Reingrese sexo ");
   }

   acumNotas = acumNotas + nota;

   if(flag == 0 || nota < notaMasBaja)
   {
	   notaMasBaja = nota;
	   flag = 1;
   }
   if(sexo == 'm' && nota >= 6)
   {
	   contadorVarones++;
   }


}

promedio = acumNotas / i;


	

	
}

// i = contador.
// la variable i con for la inicializa el mismo
// estructura repetitiva no se pueda con id
// hasta q no se declara algo no se pone lo otro. ej: nota se declara dsp se pone el sexo
// al sexo se le puede agregar tolowercase
// flag para calcular un minimo