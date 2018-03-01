//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var nota;
    var sexo; 
    var promedio;
    var menorNota;
    var cantVarones = 0;
    var flag = 0;
    var acumNotas = 0;
    
    for (i=1; i<6; i++)
    {
        nota = parseInt(prompt("ingrese la nota  "));
        
         while(nota < 0 || nota > 10)
        {
            nota = parseInt(prompt("Error. La nota debe ser entre 0 y 10, reingrese nota  "));
        }
            sexo = prompt("igrese sexo ");

        while (sexo != 'f' && sexo != 'm')
        {
            sexo = prompt("Error. El sexo debe ser m o f, reingrese sexo ");

        }

        acumNotas += nota;

        if (nota < menosNota || flag == 0)
        {
            menorNota = nota;
            flag = 1;

        }
        if (sexo == 'm' && nota >= 6)
        {
            cantVarones++;
        }
    }

    promedio = acumNotas / 6;

    alert(" promedio de notas " + promedio + " la nota mas baja "  + menorNota + " varones con nota >=6 " + cantVarones);

    
}

