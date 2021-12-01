class MapaKML{
  constructor(){
    var map;
    var src = arbol.xml;
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

  renderKML(map) {
    // Create a reader object passing in the URL of our KML file
    reader = new H.data.kml.Reader(arbol.xml);
    reader.addEventListener("statechange", function(evt){
      if (evt.state === H.data.AbstractReader.State.READY) {
        // Get KML layer from the reader object and add it to the map
        map.addLayer(reader.getLayer());
        reader.getLayer().getProvider().addEventListener("tap", (evt) => {
          logEvent(evt.target.getData().name)
        });
      }
      if (evt.state === H.data.AbstractReader.State.ERROR) {
        logEvent('KML parsing error')
      }
    });
  
    // Parse the document
    reader.parse();
  }
}

var mapa = new MapaKML();