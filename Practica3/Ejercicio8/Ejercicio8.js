var meteo = new Object();
meteo.apikey = "23a90c1275a290697706417976dacb66";

meteo.unidades = "&units=metric";
meteo.idioma = "&lang=es";

meteo.error = "<h2>¡problemas! No puedo obtener información de <a href='http://openweathermap.org'>OpenWeatherMap</a></h2>";
meteo.cargarDatos = function(c,id){
	meteo.ciudad = c;
	meteo.url = "http://api.openweathermap.org/data/2.5/weather?q=" + meteo.ciudad + meteo.unidades + meteo.idioma + "&APPID=" + meteo.apikey;
    $.ajax({
        dataType: "json",
        url: meteo.url,
        method: 'GET',
        success: function(data){
            meteo.datos = data;
            /*meteo.verJSON();*/
            $(id).after(meteo.verDatos(c));            
        },
        error:function(){
            document.write(meteo.error);    
        }
    });
}
meteo.verJSON = function(){
    document.write("<h2>Datos en JSON desde <a href='http://openweathermap.org'>OpenWeatherMap</a></h2>");
    document.write("<h2>JSON</h2>")
    var str = JSON.stringify(meteo.datos, null, 2);
    document.write("<pre>" + str + "</pre>");
}
meteo.verDatos = function(c){
    document.write("<section><h2 id=datos>Datos</h2><section>")
    $('#datos').after('<img src="http://openweathermap.org/img/w/'+meteo.datos.weather[0].icon+'.png" height="64em" width="64em">');
    document.write("<ul>");
    document.write("<li>Ciudad: " + meteo.datos.name + "</li>");
    document.write("<li>País: " + meteo.datos.sys.country + "</li>");
    document.write("<li>Latitud: " + meteo.datos.coord.lat + " grados</li>");
    document.write("<li>Longitud: " + meteo.datos.coord.lon + " grados</li>");
    document.write("<li>Temperatura: " + meteo.datos.main.temp + " grados Celsius</li>");
    document.write("<li>Temperatura máxima: " + meteo.datos.main.temp_max + " grados Celsius</li>");
    document.write("<li>Temperatura mínima: " + meteo.datos.main.temp_min + " grados Celsius</li>");
    document.write("<li>Presión: " + meteo.datos.main.pressure + " milímetros</li>");
    document.write("<li>Humedad: " + meteo.datos.main.humidity + "%</li>"); 
    document.write("<li>Amanece a las: " + new Date(meteo.datos.sys.sunrise *1000).toLocaleTimeString() + "</li>"); 
    document.write("<li>Oscurece a las: " + new Date(meteo.datos.sys.sunset *1000).toLocaleTimeString() + "</li>"); 
    document.write("<li>Dirección del viento: " + meteo.datos.wind.deg + "  grados</li>");
    document.write("<li>Velocidad del viento: " + meteo.datos.wind.speed + " metros/segundo</li>");
    document.write("<li>Hora de la medida: " + new Date(meteo.datos.dt *1000).toLocaleTimeString() + "</li>");
    document.write("<li>Fecha de la medida: " + new Date(meteo.datos.dt *1000).toLocaleDateString() + "</li>");
    document.write("<li>Descripción: " + meteo.datos.weather[0].description + "</li>");
    document.write("<li>Visibilidad: " + meteo.datos.visibility + " metros</li>");
    document.write("<li>Nubosidad: " + meteo.datos.clouds.all + " %</li></section>");
    document.write("</ul>");
};

