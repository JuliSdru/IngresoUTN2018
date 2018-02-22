function Mostrar()
{
  var sumaPos = 0;  
  var sumaNeg = 0;
  var cantPos = 0; 
  var cantNeg = 0;
  var cantCeros = 0;
  var cantPares = 0;
  var promPos; 
  var promNeg;
  var diferencia;
  var respuesta = 's';
  var numero;

  while(respuesta == 's')
  {
	  numero = parseInt(prompt("ingrese un numero:   "));
    
	  if (numero <0)
	  {
		  sumaNeg = sumaNeg + numero;
		  cantNeg++;
	  }
      else if (numero >0)
	  {
		  sumaPos = sumaPos + numero;
		  cantPos++;
	  }
	  else
	  {
		  cantCeros++;
	  }
	  if (numero % 2 ==0)
	  {
		  cantPares++; 
	  }

	  respuesta = prompt ("desea continuar?:   "); 
	
  }

      promPos = sumaPos/cantPos;
	  promNeg = sumaNeg/cantNeg;
	  diferencia = sumaPos - sumaNeg;

      document.write("suma de los positivos:    " + sumaPos + "<br/>");
      document.write("suma de los negativos:    " + sumaNeg + "<br/>");
	  document.write("cantidad de positivos:    " + cantPos + "<br/>");
	  document.write("cantidad de negativos:    " + cantNeg + "<br/>");
	  document.write("cantidad de ceros:        " + cantCeros + "<br/>");
	  document.write("cantidad de pares:        " + cantPares + "<br/>");
	  document.write("promedio de positivos     " + promPos + "<br/>");
	  document.write("promedio de negativos:    " + promNeg + "<br/>");
	  document.write("diferencia:               " + direfencia + "<br/>");
	  document.write("respuesta:                " + respuesta + "<br/>");
	  document.write("numero:                   " + numero + "br/>");

}//FIN DE LA FUNCIÓN 