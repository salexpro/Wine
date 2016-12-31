$(document).foundation();

// Off-canvas
if (Foundation.MediaQuery.current == 'medium' || Foundation.MediaQuery.current == 'small') {
    $('#nav').addClass('off-canvas position-right');
    $('.head_nav .menu').addClass('vertical');
}
$(window).on('changed.zf.mediaquery', function(event, newSize, oldSize) {
    console.log(newSize)
    if (newSize == 'small' || newSize == 'medium') {
        $('#nav').addClass('off-canvas position-right');
        $('.head_nav .menu').addClass('vertical');
    }
    if (newSize != 'small' && newSize != 'medium') {
        $('.off-canvas-wrapper-inner').removeClass('is-off-canvas-open is-open-right');
        $('#nav').removeClass('off-canvas position-right');
        $('.head_nav .menu').removeClass('vertical');
    }
});

//Amount
$('.delivery_amount button').click(function(){
    var curr = $('.delivery_amount [type="number"]');
    var currval = parseInt(curr.val());
    if($(this).text()=='+'&&currval<10){
        curr.val(currval+1);
    } 
    if($(this).text()=='-'&&currval>1) {
        curr.val(currval-1);
    }
})

// Новый пользователь
$('.total_user_select [type="radio"]').change(function(){
    $('.total_user input:last').toggleClass('hide');
})

// Custom select 
if($('.order_filter select').length){
    $('.order_filter select').select7();
}

// Owl
var owl = $('.video_filter');
if(owl.length){
    owl.owlCarousel({
        items: 7,
        navigation: true,
        itemsCustom: [
            [0, 1],
            [440, 2],
            [640, 3],
            [810, 4],
            [1000, 5],
            [1200, 6],
        ],
        navigationText: ['<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAgCAYAAAD0S5PyAAABYklEQVRIS6XVwUsVURiG8edxE9GiUimRChXTpEgjaBH0v1eigkakYAQKYRDlxo3gQsRXJubKmPd6ZsZZH36c75z3vCO3+JI8AR7b10jyDJhSN3shSWaBSXWr2kRnJMkc8ED9OpiiE5LkOXBP/dY8htZIkgXgrrr9/zm2QpIsAWPq7rCLKCJJXgJRv4+6yRuRJK+AM/XHTVEYiSRZBk7UvVKWhiJJ3gDH6n4JGJqTJG+BI/VnG+AakuQdcKgetAWuIDXwV/3VBbhEkrwHDtTfXYF/SJIPwL76pw8wQF4Dp6UsFHPSJpVFpFpQeh+tkBpaBO6oO13O51piR3VG650MFg5rr85IPVrVoxPql9JopSq4bPReO2mMVv1bnqobvUqpAU0DM+p6r3psQFPAPLCmpokVO7a5OMkj4AWw2oQ6IfWtTQJVeX8eQJ2RGhoHqg7+pJ73QmroIVB18cfeSA3dB1YuAF30jYy9du59AAAAAElFTkSuQmCC" alt="Назад">','<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAgCAYAAAD0S5PyAAABZklEQVRIS6XV0UsVQRTH8e83AkHopYdQBCUkEBMNyaDC9K/3QZFMsiwrpSREFPMh6CVPzOVcSb3X3R33ZWCX+XCWOec3RsQicKweUvlY9kXEC+BI/V7j9JCEngMn6kFX6BJJqPzaL/VbF+gKktAz4Le61xa6gSQ0D/xRP7eBBiIJPQUu1I9N0FAkodmyqh9ug25FEpoB7qvvh0GNSEJPgFH13SCoFZLQNPBA3boOtUYSegw8VDf/hzohCU0Bj9SNPtQZSWgSGFPXe6fX1APDvkfEBDClrlUjWdE4MH1XpPTQSDUSEaWbVXeqkIiYA/7256ozEhELOeGfqo44IgZmTetKMtDP1a9VbR8RS5m/+1UD2OYmaAqll8Ch+qMqlCLiFXCg/mwajUFpX969Br6oR03AjQGMiAIsA7vqcRvgCpLAG2BHPWkLXCIRcQ9YAbbV0y5AD0lgFXirnnUF+kipYEs9rwHKnn8MCpOG0VQABAAAAABJRU5ErkJggg==" alt="Вперед">']
    });
}

var orderowl = $('.order_items');

orderowl.owlCarousel({
    items: 6,
    navigation: true,
    // itemsCustom: [
    //     [0, 1],
    //     [440, 2],
    //     [640, 3],
    //     [810, 4],
    //     [1000, 5],
    //     [1200, 6],
    // ],
    margin: 20,
    navigationText: ['<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAA4CAYAAADuMJi0AAABIElEQVRYR73W7W3DMAyE4eMmySLtEEm3THZo+7MZioUD2IhjW1+8owfQA0Gy+BoSP3f/sCxvwgDcU8AZA/AlB1eY2bcUfMem45OBe5gMPMIkYAmjgzWMCrZgNPAFu5rZT+kxCd/SHiy8w14sBI5gw+AoNgRGsG4winWBDKwZZGFNIBOrgmysCCqwQ1CF7YJKbAOqsRWYgS1gFvYE3f0E4AGgOjwZlT6BZwB/AC5m9stYtDrx3f0TwC0DXRIjC101TQa6iSg1ulttSvQwE1VosUsVaDWE2WgVnH5iJtoEMtFmkIV2gQy0G4yiQ2AEHQZH0RA4gobBXpQC9qA0sBWlgi0oHayhErCEysA3dGleKbiHysENqi7tef15iKfs8BX9B+WGEQjsyqLdAAAAAElFTkSuQmCC" alt="Назад">','<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAA4CAYAAADuMJi0AAABGklEQVRYR73YzQ3CMAwFYHsoOBZ2gC2BIWAdhjBK1SJa2vw47znXHD75OZESq5kNqvqSoKVm9haRSxSawLOI3KJQTUlGoiMYiX7BKHQBRqB/IBvdBJnoLshCs+CEnkTkjrqnRRCNVoFItBpEoU0gAm0Ge1EX2IO6QS/aBXrQbrAVhYAtKAysRaFgDQoHSygFzKE0cA+lglsoHVyhhyhwEJGHiBzpYPosTdhVVZ9UcI2leGngFkYD9zAKmMPgYAmDgjUYDKzFIGAL1g22Yl2gB3ODXswF9mDNYC/WBCKwahCFVYFIrAiisSzIwHZBFrYJMrE/kI0tQDObB0Dj6yptMtY8oA3BxgqjKpvTmofs1Bh/WzNWyOzZ+hx8AJZTFIPLBMqyAAAAAElFTkSuQmCC" alt="Вперед">']
});


// Карта
var geocoder;
var map;

function initMap() {
    var styles = [{ "featureType": "all", "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#ff0000" }] }, { "featureType": "administrative", "elementType": "labels.text.fill", "stylers": [{ "color": "#56331d" }] }, { "featureType": "administrative.country", "elementType": "geometry.fill", "stylers": [{ "saturation": "13" }, { "lightness": "-4" }, { "visibility": "on" }, { "color": "#ff0000" }] }, { "featureType": "administrative.country", "elementType": "labels.text.fill", "stylers": [{ "color": "#56331d" }] }, { "featureType": "administrative.neighborhood", "elementType": "labels.text", "stylers": [{ "color": "#56331d" }, { "saturation": "0" }] }, { "featureType": "administrative.neighborhood", "elementType": "labels.text.fill", "stylers": [{ "color": "#ab693f" }, { "saturation": "0" }] }, { "featureType": "administrative.neighborhood", "elementType": "labels.text.stroke", "stylers": [{ "visibility": "off" }] }, { "featureType": "administrative.land_parcel", "elementType": "geometry.fill", "stylers": [{ "color": "#ff0000" }] }, { "featureType": "landscape", "elementType": "all", "stylers": [{ "color": "#f2f2f2" }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "visibility": "on" }, { "color": "#ffffff" }] }, { "featureType": "landscape", "elementType": "geometry.fill", "stylers": [{ "hue": "#ff0000" }] }, { "featureType": "landscape", "elementType": "geometry.stroke", "stylers": [{ "weight": "0.62" }, { "color": "#ffd8b4" }, { "visibility": "on" }] }, { "featureType": "landscape.natural.landcover", "elementType": "geometry.fill", "stylers": [{ "visibility": "off" }, { "color": "#fff3ed" }] }, { "featureType": "landscape.natural.terrain", "elementType": "geometry.fill", "stylers": [{ "hue": "#ff0000" }] }, { "featureType": "poi", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi", "elementType": "geometry.fill", "stylers": [{ "color": "#ff0000" }] }, { "featureType": "road", "elementType": "all", "stylers": [{ "saturation": -100 }, { "lightness": 45 }, { "visibility": "on" }] }, { "featureType": "road", "elementType": "geometry.fill", "stylers": [{ "color": "#e5e1d9" }] }, { "featureType": "road", "elementType": "labels.text", "stylers": [{ "visibility": "simplified" }, { "color": "#871b1b" }] }, { "featureType": "road", "elementType": "labels.text.fill", "stylers": [{ "visibility": "off" }] }, { "featureType": "road", "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }] }, { "featureType": "road.highway", "elementType": "all", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#eccca8" }, { "visibility": "off" }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#713700" }, { "visibility": "off" }] }, { "featureType": "road.highway", "elementType": "labels.text.fill", "stylers": [{ "color": "#871b1b" }, { "visibility": "on" }] }, { "featureType": "road.highway.controlled_access", "elementType": "geometry.fill", "stylers": [{ "color": "#ff0000" }] }, { "featureType": "road.arterial", "elementType": "geometry.fill", "stylers": [{ "color": "#e5e1d9" }] }, { "featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "water", "elementType": "all", "stylers": [{ "color": "#871b1b" }, { "visibility": "on" }, { "lightness": "1" }, { "saturation": "3" }, { "gamma": "3.77" }, { "weight": "1.25" }] }];

    var styledMap = new google.maps.StyledMapType(styles, { name: "Wine" });

    geocoder = new google.maps.Geocoder();

    // Create a map object and specify the DOM element for display.
    var map = new google.maps.Map($('.contacts_map')[0], {
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