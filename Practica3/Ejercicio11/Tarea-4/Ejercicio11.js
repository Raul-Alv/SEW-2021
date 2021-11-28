var mapaDinamicoGoogle = new Object();
function initMap(){
    var oviedo = {lat: 40.713152240002266, lng: -74.01311611229211};
    var mapaOviedo = new google.maps.Map(document.getElementById('mapa'),{zoom: 8,center:oviedo});
    var marcador = new google.maps.Marker({position:oviedo,map:mapaOviedo});
}
mapaDinamicoGoogle.initMap = initMap;