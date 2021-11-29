"use strict";
class Gold {
    constructor(){
        this.endpoint = 'latest'
        this.access_key = 'd9fjwg1ui5r683fdhzfkw5c8l51vt15ne4tgt392d392swpd4fu1d92kjdja';
        this.idioma = "&lang=es";
        //this.correcto = "¡Todo correcto! XML recibido de <a href='http://openweathermap.org/'>OpenWeatherMap</a>";  
    }

    verDatos(){
        console.log("Estamos 1");
        // set endpoint and your access key
        // endpoint = 'latest'
        // access_key = 'd9fjwg1ui5r683fdhzfkw5c8l51vt15ne4tgt392d392swpd4fu1d92kjdja';

        // get the most recent exchange rates via the "latest" endpoint:
        $.ajax({
        url: 'https://www.metals-api.com/api/' + this.endpoint + '?access_key=' + this.access_key + "&base=EUR&symbols=XAU",   
        dataType: 'json',
        //method: 'GET',
        success: function(json) {
            console.log("Estamos 2");
            $("#gold").append("<h2>Datos:</h2>");
            $("#gold").append("<h3>Metal</h3><p>Oro</p>");
            $("#gold").append("<h3>Valor(€ por onza)</h3>");
            $("#gold").append("<p>" + json.rates.XAU + "</p>");

            $("#gold").append("<h3>Hora de la consulta</h3>");
            $("#gold").append("<p>" + json.date + "</p>");

        },
        error:function(){
            console.log("Estamos 3");
            $("h3").html("¡Tenemos problemas! No puedo obtener XML de <a href='http://openweathermap.org'>OpenWeatherMap</a>"); 
            $("h4").remove();
            $("h5").remove();
            $("p").remove();
            }
        });
    }
}

var gold = new Gold();
