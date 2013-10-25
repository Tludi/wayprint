$(document).ready(function(){  
  var map = L.map('map');

  L.tileLayer('http://{s}.tile.cloudmade.com/3d056fbd77f2496db56bf2e01f984a01/997/256/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
      maxZoom: 18
  }).addTo(map);

  function onLocationFound(e) {
      var radius = e.accuracy / 2;

      L.marker(e.latlng).addTo(map)
      // alert(e.latlng);
      // adds a popup note to marker    
      // .bindPopup("You are within " + radius + " meters from this point").openPopup();

      // adds a blue circle around current location
      // L.circle(e.latlng, radius).addTo(map);
      $('#coords').text(e.latlng.lat + ', ' + e.latlng.lng);
      document.getElementById('latitude_field').value = e.latlng.lat;
      document.getElementById('longitude_field').value = e.latlng.lng;
    }

  function onLocationError(e) {
      alert(e.message);
  }

  map.on('locationfound', onLocationFound);
  map.on('locationerror', onLocationError);

  map.locate({setView: true, maxZoom: 16});

  // add a scale bar to the map - default is true
  L.control.scale({metric: false}).addTo(map);
    
  // map.dragging.disable();

});