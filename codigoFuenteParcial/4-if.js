//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
        var num1;
        var num2;
        var multiplicacion;
        var suma;
        var resta;

        num1 = parseInt(prompt(" ingrese un numero "));
        num2 = parseInt(prompt(" ingrese un numero "));

        if(num1 == num2 )
        {
          multiplicacion = num1*num2;
        }
        else if(num1 > num2 )
        {
         resta = num1-num2;
        }
        else 
        {
           suma = num1+num2;
        }

        document.write(" la multiplacion es  " + multiplicacion + "<br/>");
        document.write(" la resta es  " + resta + "<br/>");
        document.write(" lasuma es  " + suma + "<br/>");
}

