var map; 
var service;
var infowindow;

function initialize(){
    var pyrmont = new google.maps.LatLng(37.2279,-77.4019);

    map = new google.maps.Map(document.getElementById('map'),{
        center: pyrmont,
        zoom: 15
    })

}

google.maps.event.addDomListener(window, 'load', initialize)