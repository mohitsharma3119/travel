/*main funtion for map*/
function googleMap() {

    /*variable declaration*/
    var mapArea = document.getElementById('mapArea');

    // setting array for location
    var markerLocation = [
        [43.6527, -79.3834],
        [43.6465, -79.4637],
        [43.6749, -79.4071],
        [43.6379, -79.38470],
        [43.6521, -79.4901]
    ];

    // declaring the variable
    var mapProperties = {
        center: new google.maps.LatLng(43.6527, -79.3834),
        zoom: 12
    };

    // making new object for map
    var map = new google.maps.Map(mapArea, mapProperties);

    // declaring new variable j for loop
    var j;

    // creating loop to set markers
    for (j = 0; j < markerLocation.length; j++) {

        //declaring variable for marker
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(markerLocation[j][0], markerLocation[j][1]),
            animation: google.maps.Animation.BOUNCE
        });

        marker.setMap(map);
    }
}

//end of funtion