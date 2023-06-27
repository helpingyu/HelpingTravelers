function hacerConversion(){
   
    var cantPasajeros = document.getElementById("cantPasajeros").value;
    var precioDolar = document.getElementById("dolar").value;
    var precioPasaje = document.getElementById("pasaje").value;

    var cantxpasajeros = cantPasajeros*precioPasaje;
    var totalDolares = precioPasaje/precioDolar;
    alert(totalDolares.toFixed(2)*cantPasajeros + "\n" + "You need to now, in Costa Rica "+
    "doesnt use Cents, so, if the result is example: 1.5 you need to pay 2 dollars. But dont be afraid, you will recive the charge, it will be in colons.");
}