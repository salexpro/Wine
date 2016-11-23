// $(document).foundation();

var geocoder;
var map;

function initMap() {
    var styles = [{ "featureType": "all", "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#ff0000" }] }, { "featureType": "administrative", "elementType": "labels.text.fill", "stylers": [{ "color": "#56331d" }] }, { "featureType": "administrative.country", "elementType": "geometry.fill", "stylers": [{ "saturation": "13" }, { "lightness": "-4" }, { "visibility": "on" }, { "color": "#ff0000" }] }, { "featureType": "administrative.country", "elementType": "labels.text.fill", "stylers": [{ "color": "#56331d" }] }, { "featureType": "administrative.neighborhood", "elementType": "labels.text", "stylers": [{ "color": "#56331d" }, { "saturation": "0" }] }, { "featureType": "administrative.neighborhood", "elementType": "labels.text.fill", "stylers": [{ "color": "#ab693f" }, { "saturation": "0" }] }, { "featureType": "administrative.neighborhood", "elementType": "labels.text.stroke", "stylers": [{ "visibility": "off" }] }, { "featureType": "administrative.land_parcel", "elementType": "geometry.fill", "stylers": [{ "color": "#ff0000" }] }, { "featureType": "landscape", "elementType": "all", "stylers": [{ "color": "#f2f2f2" }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "visibility": "on" }, { "color": "#ffffff" }] }, { "featureType": "landscape", "elementType": "geometry.fill", "stylers": [{ "hue": "#ff0000" }] }, { "featureType": "landscape", "elementType": "geometry.stroke", "stylers": [{ "weight": "0.62" }, { "color": "#ffd8b4" }, { "visibility": "on" }] }, { "featureType": "landscape.natural.landcover", "elementType": "geometry.fill", "stylers": [{ "visibility": "off" }, { "color": "#fff3ed" }] }, { "featureType": "landscape.natural.terrain", "elementType": "geometry.fill", "stylers": [{ "hue": "#ff0000" }] }, { "featureType": "poi", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi", "elementType": "geometry.fill", "stylers": [{ "color": "#ff0000" }] }, { "featureType": "road", "elementType": "all", "stylers": [{ "saturation": -100 }, { "lightness": 45 }, { "visibility": "on" }] }, { "featureType": "road", "elementType": "geometry.fill", "stylers": [{ "color": "#e5e1d9" }] }, { "featureType": "road", "elementType": "labels.text", "stylers": [{ "visibility": "simplified" }, { "color": "#871b1b" }] }, { "featureType": "road", "elementType": "labels.text.fill", "stylers": [{ "visibility": "off" }] }, { "featureType": "road", "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }] }, { "featureType": "road.highway", "elementType": "all", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#eccca8" }, { "visibility": "off" }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#713700" }, { "visibility": "off" }] }, { "featureType": "road.highway", "elementType": "labels.text.fill", "stylers": [{ "color": "#871b1b" }, { "visibility": "on" }] }, { "featureType": "road.highway.controlled_access", "elementType": "geometry.fill", "stylers": [{ "color": "#ff0000" }] }, { "featureType": "road.arterial", "elementType": "geometry.fill", "stylers": [{ "color": "#e5e1d9" }] }, { "featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "water", "elementType": "all", "stylers": [{ "color": "#871b1b" }, { "visibility": "on" }, { "lightness": "1" }, { "saturation": "3" }, { "gamma": "3.77" }, { "weight": "1.25" }] }];

    var styledMap = new google.maps.StyledMapType(styles, { name: "Wine" });

    geocoder = new google.maps.Geocoder();

    // Create a map object and specify the DOM element for display.
    var map = new google.maps.Map(document.getElementById('map'), {
        // center: { lat: -34.397, lng: 150.644 },
        scrollwheel: false,
        zoom: 15,
        disableDefaultUI: true
    });
    var image = 'img/marker.png';

    var address = 'Киев';
    geocoder.geocode({ 'address': address }, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            map.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
                map: map,
                position: results[0].geometry.location,
                icon: image
            });
        } else {
            alert("Geocode was not successful for the following reason: " + status);
        }
    });

    map.mapTypes.set('wine', styledMap);
    map.setMapTypeId('wine');
}
