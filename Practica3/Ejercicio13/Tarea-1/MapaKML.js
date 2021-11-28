class MapaKML{
  constructor(){
    var map;
    var src = 'https://developers.google.com/maps/documentation/javascript/examples/kml/westcampus.kml';
  }

  initMap() {
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: new google.maps.LatLng(-19.257753, 146.823688),
      zoom: 2,
      mapTypeId: 'terrain'
    });
  
    var kmlLayer = new google.maps.KmlLayer(this.src, {
      suppressInfoWindows: true,
      preserveViewport: false,
      map: this.map
    });
    kmlLayer.addListener('click', function(event) {
      var content = event.featureData.infoWindowHtml;
      var testimonial = document.getElementById('capture');
      testimonial.innerHTML = content;
    });
  }
}

var mapa = new MapaKML();