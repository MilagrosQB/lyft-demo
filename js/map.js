var loadMap = function() {
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(functionSuccess, functionError);
  }
  $("#pickup").click(search);
};

var map,lat,lon;
var functionSuccess = function(position) {
  lat = position.coords.latitude;
  lon = position.coords.longitude;
  map = new GMaps({
    div: "#map",
    lat: lat,
    lng: lon,
    zoom: 16,
    mapTypeControl:false,
    zoomControl: false,
    streetViewControl:false
  });
  var geocoder = new google.maps.Geocoder;

  map.addMarker({
    lat: lat,
    lng: lon,
  });
  var pos = "";
  var latlng = new google.maps.LatLng(lat, lon);
  geocoder = new google.maps.Geocoder();
  geocoder.geocode({"latLng": latlng}, function(results, status){
    if (status == google.maps.GeocoderStatus.OK){
      if (results[0]){
        pos = results[0].formatted_address;
      }
      else{
        pos = "No results found.";
      }
    }
    else{
      pos = "Geocoder failed due to:" + status;
    }
    window.localStorage.setItem("address-now",pos)
    $("#address-now").text(window.localStorage.getItem("address-now"));
  });

}
var functionError = function (error) {
  alert("Error: The Geolocation service failed.");
}
var search= function(e){
  e.preventDefault();
  GMaps.geocode({
    address: $('#address').val(),
    callback: function(results, status) {
      if (status == 'OK') {
        var latlng = results[0].geometry.location;
        map.zoomOut(2);
        map.setCenter(lat,latlng.lng());
        map.addMarker({
          lat: latlng.lat(),
          lng: latlng.lng()
        });
        map.drawRoute({
          origin: [lat,lon],
          destination: [latlng.lat(), latlng.lng()],
          travelMode: 'driving',
          strokeColor: '#412c90',
          strokeOpacity: 0.8,
          strokeWeight: 5
        });
      }
    }
  });
  $('#pickup').val("");
}
$(document).ready(loadMap);