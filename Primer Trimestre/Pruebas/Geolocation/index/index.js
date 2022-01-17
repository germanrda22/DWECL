function success(pos) {
    var crd = pos.coords;
  
    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
}
  
function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
}

var platform = new H.service.Platform({
    'apikey': 'x7UDV9x33O2dLBIvp3U1meWPnDmHan8N_V5tMW_2l2U'
})

// Obtain the default map types from the platform object:
var defaultLayers = platform.createDefaultLayers();

// Instantiate (and display) a map object:
var map = new H.Map(
    document.getElementById('mapContainer'),
    defaultLayers.vector.normal.map,
    {
      zoom: 10,
      center: { lat: crd.latitude, lng: crd.longitude}
    });

navigator.geolocation.getCurrentPosition(success, error);