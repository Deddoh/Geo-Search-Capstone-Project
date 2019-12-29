


//geocode
var mapOptions;

 function loadMap() {
			
            var mapOptions = new google.maps.Map(document.getElementById('image-map'), {
          zoom: 8,
          center: {lat: 0, lng: 37.3956},
          mapTypeId: 'roadmap'
        });

            var map = new google.maps.Map(document.getElementById("image-map"),mapOptions);
            
            var marker = new google.maps.Marker({
               position: new google.maps.LatLng(0, 37.3956),
               map: map,
               draggable:true,
               // icon:'img/openland.png'
            });
            
            marker.setMap(map);
            
            var infowindow = new google.maps.InfoWindow({
               content:"Mount Kenya National Park, </br> 388-A , Road no 22,</br> Nairobi, Kenya."
            });
				
            infowindow.open(map,marker);
         
			var geocoder = new google.maps.Geocoder();

        document.getElementById('btnSearch').addEventListener('click', function() {
          geocodeAddress(geocoder, map);
        });
      

      function geocodeAddress(geocoder, resultsMap) {
        var address = document.getElementById('address').value;
        geocoder.geocode({'address': address}, function(results, status) {
          if (status === 'OK') {
            resultsMap.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
              map: resultsMap,
              position: results[0].geometry.location
            });
          } else {
            alert('Geocode was not successful for the following reason: ' + status);
          }
        });
      }
  }