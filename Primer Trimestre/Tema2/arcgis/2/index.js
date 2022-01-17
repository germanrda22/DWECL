require([
    "esri/config",
    "esri/Map",
    "esri/views/MapView",

    "esri/Graphic",
    "esri/layers/GraphicsLayer"

    ], function(esriConfig,Map, MapView, Graphic, GraphicsLayer) {

  esriConfig.apiKey = "AAPK2f8f49ac8e4e4fdea687323568511d6bm6JL6QWhyU34iT80U2Kz9RXer68yAgxFeRRT0KwPMWoL0_kRDmsnXXN0O5-A-9xg";

  const map = new Map({
    basemap: "arcgis-topographic" //Basemap layer service
  });

  const view = new MapView({
    map: map,
    center: [-3.616337, 37.192193], //Longitude, latitude
    zoom: 18,
    container: "viewDiv"
 });

 const graphicsLayer = new GraphicsLayer();
 map.add(graphicsLayer);

 const point = { //Create a point
    type: "point",
    longitude: -3.616917,
    latitude:  37.191566,
 };
 const simpleMarkerSymbol = {
    type: "simple-marker",
    color: 'red',  // Color symbol
    outline: {
        color: [255, 255, 255], // White
        width: 1
    }
 };

 const pointGraphic = new Graphic({
    geometry: point,
    symbol: simpleMarkerSymbol
 });
 graphicsLayer.add(pointGraphic);

    // Create a line geometry
 const polyline = {
    type: "polyline",
    paths: [
        [-3.616917, 37.191566], //Longitude, latitude
        [-3.617821, 37.192297], //Longitude, latitude
        [-3.616066, 37.192164]  //Longitude, latitude
    ]
 };
 const simpleLineSymbol = {
    type: "simple-line",
    color: 'black', // Color line
    width: 2
 };

 const polylineGraphic = new Graphic({
    geometry: polyline,
    symbol: simpleLineSymbol
 });
 graphicsLayer.add(polylineGraphic);

 // Create a polygon geometry
 const polygon = {
    type: "polygon",
    rings: [
        [-3.616917, 37.191566], //Longitude, latitude
        [-3.617821, 37.192297], //Longitude, latitude
        [-3.616812, 37.193006], //Longitude, latitude
        [-3.616066, 37.192164],   //Longitude, latitude
    ]
 };

 const simpleFillSymbol = {
    type: "simple-fill",
    color: [227, 139, 79, 0.25],  // Orange, opacity 80%
    outline: {
        color: [255, 255, 255],
        width: 1
    }
 };

 const popupTemplate = {
    title: "{Name}",
    content: "{Description}"
 }
 const attributes = {
    Name: "Graphic",
    Description: "I am a polygon"
 }

 const polygonGraphic = new Graphic({
    geometry: polygon,
    symbol: simpleFillSymbol,

    attributes: attributes,
    popupTemplate: popupTemplate

 });
 graphicsLayer.add(polygonGraphic);

 });