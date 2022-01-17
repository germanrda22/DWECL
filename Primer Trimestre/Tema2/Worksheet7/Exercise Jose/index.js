var map;
var puntos = [];

//navigator.geolocation.getCurrentPosition(success);
navigator.geolocation.watchPosition(success);

function success(obj)
{
    
    if (!map)
    {
        creaMapa(obj.coords);
    }
    else
    {
        map.setCenter({lat:obj.coords.latitude,lng:obj.coords.longitude})

        puntos.push({lat:obj.coords.latitude,lng:obj.coords.longitude});
        if (puntos.length>1)
            dibujaRuta(puntos);
    }
}

function creaMapa(pos)
{
    // Initialize the platform object:
    var platform = new H.service.Platform({
    'apikey': 'nPsNIAYTpaAEIzXyFjbyNqILwkPXeo7K-OuZ0ioDhcc'
    });

    // Obtain the default map types from the platform object
    var maptypes = platform.createDefaultLayers();

    // Instantiate (and display) a map object:
    map = new H.Map(
    document.getElementById('mapContainer'),
    maptypes.vector.normal.map,
    {
        zoom: 15,
        center: { lng: pos.longitude, lat: pos.latitude }
    });

    alert (`long: ${pos.longitude} lang: ${pos.latitude}`)
    var marker = new H.map.DomMarker( { lng: pos.longitude, lat: pos.latitude });
    map.addObject(marker);



}

function dibujaRuta(lugares)
{
    // Initialize a linestring and add all the points to it:
    var linestring = new H.geo.LineString();
    lugares.forEach(function(point) {
        linestring.pushPoint(point);
    });

    // Initialize a polyline with the linestring:
    var polyline = new H.map.Polyline(linestring, { style: { lineWidth: 10 }});

    // Add the polyline to the map:
    map.addObject(polyline);
}