//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
        var num1;
        var num2;
        var multiplo;
        var suma;
        var resta;

        num1 = prompt(document.getElementById("numeroUno").value);
        num2 = prompt(document.getElementById("numeroDos").value);

        if(num1 == num2 )
        {
           alert("la multiplicacion es ");
        }
        else if(num1 > num2 )
        {
            alert("la resta es ");
        }
        else 
        {
            alert("la suma es ");
        }
}

