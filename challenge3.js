
function initMap() {

 	var map = new google.maps.Map(document.getElementById('map'), {
       	zoom: 6,
        center: {lat: 52.067840, lng: 4.279392},
        styles: [
	        {featureType:'water', elementType: 'geometry', stylers: [{color: '#b0e0e6'}]},
	        {featureType:'landscape', elementType: 'geometry', stylers: [{color: '#eaffb7'}]},
	        {featureType:'road', elementType: 'geometry', stylers: [{color: '#fbffed'}]}
      	]
    });

   
    var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        
    var markers = locations.map(function(location, i) {
       	return new google.maps.Marker({
            position: location,
            animation: google.maps.Animation.DROP,
            label: labels[i % labels.length]
        });
    });

    var infoWin = new google.maps.InfoWindow();
	var markers = locations.map(function(location, i) {
	  var marker = new google.maps.Marker({
	    position: location
	  });
	  google.maps.event.addListener(marker, 'click', function(evt) {
	    infoWin.setContent(location.info);
	    infoWin.open(map, marker);
	  })
	  return marker;
	});

        // Add a marker clusterer to manage the markers.
    var markerCluster = new MarkerClusterer(map, markers,
        {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});

}


 var locations = [
        {lat: 52.343349, lng: 4.854337, info: "Olympic stadium in Amsterdam, the Netherlands"},//Nederland, stadium
        {lat: 55.511234, lng: -4.610395, info: " Glasgow Prestwick Airport in South Ayrshire, UK"},//England, vliegveld
        {lat: 48.975658, lng: 14.480255, info: "Ceske Budejovice in South Bohemia, Czechia"}, //Tsjechie, vliegveld
        {lat: 52.514610, lng: 13.239665, info: "Olympiastadion in Berlin, Germany"}, //Duitsland, stadium 
        {lat: 38.286831, lng: -0.557224, info: "Alicante Airport in Alicante, Spain"}, //Spanje, vliegveld
        {lat: 41.899647, lng: 12.487023, info: "Quirinal Palace in Rome, Italy"}, //italie, vliegveld
    ]



