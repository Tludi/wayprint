$(document).ready(function(){  
  var map = L.map('map');
  
  
  // Uses the MapQuest-OSM tiles
  L.tileLayer('http://otile{s}.mqcdn.com/tiles/1.0.0/map/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Tiles Courtesy of <a href="http://www.mapquest.com">MapQuest</a>',

  // Uses Cloudmade tiles
  // L.tileLayer('http://{s}.tile.cloudmade.com/3d056fbd77f2496db56bf2e01f984a01/997/256/{z}/{x}/{y}.png', {
      // attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
      maxZoom: 18,
      subdomains: ['1','2','3','4']
  }).addTo(map);
  
  function onLocationFound(e) {
      var radius = e.accuracy / 2;

      L.marker(e.latlng).addTo(map)
      // alert(e.latlng);
      // adds a popup note to marker    
      // .bindPopup("this").onClick.openPopup();

      // adds a blue circle around current location
      // L.circle(e.latlng, radius).addTo(map);
      $('#coords').text(e.latlng.lat + ', ' + e.latlng.lng);
      // document.getElementById('latitude_field').value = e.latlng.lat;
      // document.getElementById('longitude_field').value = e.latlng.lng;
      addMarkers();
    }

  function onLocationError(e) {
      alert(e.message);
  }

  function addMarkers(){
    $(gon.waypoints).each(function() { 
      L.marker([this.lat, this.lng]).addTo(map);
    })
  }

  map.on('locationfound', onLocationFound);
  map.on('locationerror', onLocationError);

  map.locate({setView: true, maxZoom: 12});

  // add a scale bar to the map - default is true
  L.control.scale({metric: false}).addTo(map);
    
  // map.dragging.disable();
  var popup = L.popup();
  
  function onMapClick(e) {
    $( "#wordpost" ).slideDown();
    L.marker(e.latlng, {opacity: .5}).addTo(map);
      // popup
      //   .setLatLng(e.latlng)
      //   .setContent("You clicked the map at " + e.latlng.toString())
      //   .openOn(map);
    // Add clicked Coordinates to hidden form Fields
    document.getElementById('latitude_field').value = e.latlng.lat;
    document.getElementById('longitude_field').value = e.latlng.lng; 
  }



  map.on('click', onMapClick);
});



