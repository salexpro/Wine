/*
@codekit-prepend '../bower_components/jquery/dist/jquery.min';
@codekit-prepend '../bower_components/foundation-sites/dist/foundation.min';
@codekit-prepend 'jquery-select7.js';
@codekit-prepend '../bower_components/owl/owl-carousel/owl.carousel.min';
*/

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
if(orderowl.length){
    orderowl.owlCarousel({
        items: 6,
        navigation: true,
        margin: 20,
        navigationText: ['<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAA4CAYAAADuMJi0AAABIElEQVRYR73W7W3DMAyE4eMmySLtEEm3THZo+7MZioUD2IhjW1+8owfQA0Gy+BoSP3f/sCxvwgDcU8AZA/AlB1eY2bcUfMem45OBe5gMPMIkYAmjgzWMCrZgNPAFu5rZT+kxCd/SHiy8w14sBI5gw+AoNgRGsG4winWBDKwZZGFNIBOrgmysCCqwQ1CF7YJKbAOqsRWYgS1gFvYE3f0E4AGgOjwZlT6BZwB/AC5m9stYtDrx3f0TwC0DXRIjC101TQa6iSg1ulttSvQwE1VosUsVaDWE2WgVnH5iJtoEMtFmkIV2gQy0G4yiQ2AEHQZH0RA4gobBXpQC9qA0sBWlgi0oHayhErCEysA3dGleKbiHysENqi7tef15iKfs8BX9B+WGEQjsyqLdAAAAAElFTkSuQmCC" alt="Назад">','<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAA4CAYAAADuMJi0AAABGklEQVRYR73YzQ3CMAwFYHsoOBZ2gC2BIWAdhjBK1SJa2vw47znXHD75OZESq5kNqvqSoKVm9haRSxSawLOI3KJQTUlGoiMYiX7BKHQBRqB/IBvdBJnoLshCs+CEnkTkjrqnRRCNVoFItBpEoU0gAm0Ge1EX2IO6QS/aBXrQbrAVhYAtKAysRaFgDQoHSygFzKE0cA+lglsoHVyhhyhwEJGHiBzpYPosTdhVVZ9UcI2leGngFkYD9zAKmMPgYAmDgjUYDKzFIGAL1g22Yl2gB3ODXswF9mDNYC/WBCKwahCFVYFIrAiisSzIwHZBFrYJMrE/kI0tQDObB0Dj6yptMtY8oA3BxgqjKpvTmofs1Bh/WzNWyOzZ+hx8AJZTFIPLBMqyAAAAAElFTkSuQmCC" alt="Вперед">']
    });
}


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


function pageWidget(pages){
    var widgetWrap = $('<div class="widget_wrap"><ul class="widget_list"></ul><button class="widget_button"></button></div>');
    widgetWrap.prependTo('body');
    for (var i = 0; i < pages.length; i++) {
        $('<li class="widget_item"><a class="widget_link" href="' + pages[i] + '.html' + '">' + pages[i] + '</a></li>').appendTo('.widget_list');
    }
    var widgetStilization = $('<style>.widget_wrap{position:fixed;top:0;left:0;z-index:9999;padding:10px 20px;background:#222;border-bottom-right-radius:10px;-webkit-transition:all .3s ease;transition:all .3s ease;-webkit-transform:translate(-100%,0);-ms-transform:translate(-100%,0);transform:translate(-100%,0)}.widget_button{position:absolute;top:0;left:100%;width:24px;height:24px;border-radius:0;background-color:#222;cursor:pointer;outline:none;}.widget_button:after{content:" ";position:absolute;top:0;left:0;width:100%;height:100%;background:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iI2ZmZiIgc3Ryb2tlPSJudWxsIiBkPSJtMTQuOTk1OTUsMTUuOTk1NjhsLTEzLjk5NjIyLDBjLTAuNTUyNiwwIC0wLjk5OTczLC0wLjQ0NzEzIC0wLjk5OTczLC0wLjk5OTczbDAsLTEzLjk5NjIyYzAsLTAuNTUyNiAwLjQ0NzEzLC0wLjk5OTczIDAuOTk5NzMsLTAuOTk5NzNsMTMuOTk2MjIsMGMwLjU1MjYsMCAwLjk5OTczLDAuNDQ3MTMgMC45OTk3MywwLjk5OTczbDAsMTMuOTk2MjJjMCwwLjU1MjYgLTAuNDQ3MTMsMC45OTk3MyAtMC45OTk3MywwLjk5OTczem0tMC45OTk3MywtMTMuOTk2MjJsLTExLjk5Njc2LDBsMCwxMS45OTY3NmwxMS45OTY3NiwwbDAsLTExLjk5Njc2em0tNi45OTgxMSw0Ljk5ODY1bC0yLjk5OTE5LDBsMCwtMi45OTkxOWwyLjk5OTE5LDBsMCwyLjk5OTE5em0wLDQuOTk4NjVsLTIuOTk5MTksMGwwLC0yLjk5OTE5bDIuOTk5MTksMGwwLDIuOTk5MTl6bTQuOTk4NjUsLTQuOTk4NjVsLTIuOTk5MTksMGwwLC0yLjk5OTE5bDIuOTk5MTksMGwwLDIuOTk5MTl6bTAsNC45OTg2NWwtMi45OTkxOSwwbDAsLTIuOTk5MTlsMi45OTkxOSwwbDAsMi45OTkxOXoiLz48L3N2Zz4=) no-repeat 50% 50%;animation: widget 5s ease-in-out 2s infinite backwards;}.widget_wrap.is_active{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0)}.widget_wrap.is_active .widget_button:after{animation:none}.widget_list{list-style:none;margin:0}.widget_link{display:block;color:#fff;text-decoration:none;font-size:15px;}.widget_link:visited{color:purple}@keyframes widget{0%{transform:rotate(0deg)}20%{transform:rotate(180deg)}100%{transform:rotate(180deg)}}@media screen and (max-width:480px){.widget_wrap{top:auto;bottom:0;border-radius:0 10px 0 0}.widget_button{top:auto;bottom:0;width:35px;height:35px}.widget_button:after{background-size:22px}}</style>');
    widgetStilization.prependTo('.widget_wrap');
    $('.widget_button').click(function () {
        $(this).parent().toggleClass('is_active');
    });
}

pageWidget(['index', 'about', 'blog', 'blog_read', 'check', 'contacts', 'delivery', 'error', 'how', 'order', 'pay_fail', 'pay_success', 'plan', 'process', 'select', 'terms', 'total', 'videogallery']);