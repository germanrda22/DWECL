function success(pos) {
  var crd = pos.coords;

  document.write('Your current position is:<br>');
  document.write(`Latitude : ${crd.latitude}<br>`);
  document.write(`Longitude: ${crd.longitude}<br>`);
  document.write(`More or less ${crd.accuracy} meters.<br>`);

}
  
function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.watchPosition(success, error);