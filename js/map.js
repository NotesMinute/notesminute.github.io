function initialize() 
{
	//Marker position
	//var myLatlng = new google.maps.LatLng(11.028417, 76.944785);
	var myLatlng = new google.maps.LatLng(11.0466493,76.9500714);
	
	//Map options
	var mapOptions = {
	    zoom: 17,
	    center: myLatlng
	  }
	
	//Map Object
	var map = new google.maps.Map(document.getElementById('mapDiv'),mapOptions);
	
	//Marker - Positioning & Theming
	var marker = new google.maps.Marker({
	      position: myLatlng,
	      center: myLatlng,
	      map: map,
	      title: 'LadderMinds'
	  });
}

//Event handler to draw the map
google.maps.event.addDomListener(window, 'load', initialize);