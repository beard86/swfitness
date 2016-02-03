/* ========================================================================
 * DOM-based Routing
 * Based on http://goo.gl/EUTi53 by Paul Irish
 *
 * Only fires on body classes that match. If a body class contains a dash,
 * replace the dash with an underscore when adding it to the object below.
 *
 * .noConflict()
 * The routing is enclosed within an anonymous function so that you can 
 * always reference jQuery with $, even when in .noConflict() mode.
 *
 * Google CDN, Latest jQuery
 * To use the default WordPress version of jQuery, go to lib/config.php and
 * remove or comment out: add_theme_support('jquery-cdn');
 * ======================================================================== */


(function($) {

    // Use this variable to set up the common and page specific functions. If you 
    // rename this variable, you will also need to rename the namespace below.
    var Roots = {
        // All pages
        common: {
            init: function() {
                // JavaScript to be fired on all pages
                $('#respond').addClass('hidden');

                $('#respond-btn').on('click', function() {
                    $('#respond').toggleClass('hidden');
                });
                
               function removeBodyScroll() {
                    $('body').css('overflow','hidden');
                }
                function addBodyScroll() {
                    $('body').css('overflow','scroll');
                }
                $('.forms .col-md-4.contact').on('click', function() {
                    $('.form-holder').addClass('cover');
                    $('#wpcf7-f216-p2-o1, .close').fadeIn('fast');
                    removeBodyScroll();
                });
                $('.forms .col-md-4.train').on('click', function() {
                    $('#wpcf7-f79-p2-o2').fadeIn('fast');
                    $('#wpcf7-f232-p233-o2, #wpcf7-f232-p2-o2, .close').fadeIn('fast');
                    $('.form-holder').addClass('cover');
                    removeBodyScroll();
                });
                $('.form-holder, .close').on('click', function() {
                    $('.wpcf7, .close').fadeOut('fast');
                    $('.form-holder').removeClass('cover');
                    addBodyScroll();
                });
                $('.wpcf7, .fixed > div').click(function(event) {
                    event.stopPropagation();
                });
                $('input.next').on('click', function() {
                    $(this).closest('section').fadeOut('fast');
                    $(this).closest('section').next().fadeIn('fast');
                    $('.form-holder .wpcf7').scrollTop(0);
                });
                $('input.prev').on('click', function() {
                    $(this).closest('section').fadeOut('fast');
                    $(this).closest('section').prev().fadeIn('fast');
                    $('.form-holder .wpcf7').scrollTop(0);
                });

                $(".second .first input").on('click', function() {
                    $(this).addClass('yes');
                });
                $(".second .last input").on('click', function() {
                    $(".second .first input").removeClass('yes');
                });

                 $("input.load-next").on('click', function() {
                    if($('.second .first input').hasClass('yes')) {
                        $(this).closest('section').fadeOut('fast');
                        $('section.consult').fadeIn('fast');
                    } else {
                        $(this).closest('section').fadeOut('fast');
                        $(this).closest('section').next().fadeIn('fast');
                        $('.form-holder .wpcf7').scrollTop(0);
                    }

                });
            }
        },
        // Home page
        home: {
            init: function() {
                // JavaScript to be fired on the home page
                var hash = window.location.hash.slice(1); // get the hash, and strip out the "#"

                if( hash && hash === 'contact') {// if there was a hash
                    $('div.contact').trigger('click');   //    concatenate it into the selector
                }  

             


                window.fbAsyncInit = function() {
                    FB.init({
                        appId: '590406157752900',
                        xfbml: true,
                        version: 'v2.2'
                    });
                };

                (function(d, s, id) {
                    var js, fjs = d.getElementsByTagName(s)[0];
                    if (d.getElementById(id)) {
                        return;
                    }
                    js = d.createElement(s);
                    js.id = id;
                    js.src = "//connect.facebook.net/en_US/sdk.js";
                    fjs.parentNode.insertBefore(js, fjs);
                }(document, 'script', 'facebook-jssdk'));
            }
        },
        // About us page, note the change from about-us to about_us.
        about_us: {
            init: function() {
                // JavaScript to be fired on the about us page
            }
        },
        contact: {
            init: function() {
                var mapStyles = [{
                    "featureType": "all",
                    "elementType": "all",
                    "stylers": [{
                        "visibility": "on"
                    }]
                }, {
                    "featureType": "all",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#f4fd02"
                    }]
                }, {
                    "featureType": "all",
                    "elementType": "geometry.fill",
                    "stylers": [{
                        "visibility": "on"
                    }]
                }, {
                    "featureType": "all",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                        "visibility": "on"
                    }]
                }, {
                    "featureType": "all",
                    "elementType": "labels",
                    "stylers": [{
                        "visibility": "on"
                    }]
                }, {
                    "featureType": "all",
                    "elementType": "labels.text",
                    "stylers": [{
                        "visibility": "on"
                    }]
                }, {
                    "featureType": "all",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "gamma": 0.01
                    }, {
                        "lightness": 20
                    }]
                }, {
                    "featureType": "all",
                    "elementType": "labels.text.stroke",
                    "stylers": [{
                        "saturation": -31
                    }, {
                        "lightness": -33
                    }, {
                        "weight": 2
                    }, {
                        "gamma": 0.8
                    }]
                }, {
                    "featureType": "all",
                    "elementType": "labels.icon",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "landscape",
                    "elementType": "geometry",
                    "stylers": [{
                        "lightness": 30
                    }, {
                        "saturation": 30
                    }]
                }, {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [{
                        "saturation": 20
                    }]
                }, {
                    "featureType": "poi.park",
                    "elementType": "geometry",
                    "stylers": [{
                        "lightness": 20
                    }, {
                        "saturation": -20
                    }]
                }, {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [{
                        "lightness": 10
                    }, {
                        "saturation": -30
                    }]
                }, {
                    "featureType": "road",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                        "saturation": 25
                    }, {
                        "lightness": 25
                    }]
                }, {
                    "featureType": "water",
                    "elementType": "all",
                    "stylers": [{
                        "lightness": -20
                    }]
                }];
                var imageIcon = templateUrl + '/assets/img/logo-map.png';

                function initialize() {
                    var myLatlng = new google.maps.LatLng(51.51182, -0.121584);
                    var mapOptions = {
                        zoom: 14,
                        center: myLatlng,
                    };
                    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

                    var marker = new google.maps.Marker({
                        position: myLatlng,
                        map: map,
                        title: 'Hello World!',
                        icon: imageIcon

                    });
                }
                google.maps.event.addDomListener(window, 'load', initialize);
                var locations = [
                    ['Clapham Common', 51.457831, -0.148165, 4],
                    ['Wandsworth Common', 51.4449583, -0.1703561],
                    ['Battersea Park', 51.479108, -0.156498]
                ];

                var map2 = new google.maps.Map(document.getElementById('map'), {
                    zoom: 13,
                    center: new google.maps.LatLng(51.4629616, -0.14431),
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    //styles: mapStyles,
                });

                var infowindow = new google.maps.InfoWindow();

                var marker2, i;

                for (i = 0; i < locations.length; i++) {
                    /*jshint loopfunc: true */
                    marker2 = new google.maps.Marker({
                        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                        map: map2,
                        icon: imageIcon
                    });

                    google.maps.event.addListener(marker2, 'click', (function(marker2, i) {
                        return function() {
                            infowindow.setContent(locations[i][0]);
                            infowindow.open(map2, marker2);
                        };
                    })(marker2, i));
                }
            }
        }
    };

    // The routing fires all common scripts, followed by the page specific scripts.
    // Add additional events for more control over timing e.g. a finalize event
    var UTIL = {
        fire: function(func, funcname, args) {
            var namespace = Roots;
            funcname = (funcname === undefined) ? 'init' : funcname;
            if (func !== '' && namespace[func] && typeof namespace[func][funcname] === 'function') {
                namespace[func][funcname](args);
            }
        },
        loadEvents: function() {
            UTIL.fire('common');

            $.each(document.body.className.replace(/-/g, '_').split(/\s+/), function(i, classnm) {
                UTIL.fire(classnm);
            });
        }
    };

    $(document).ready(UTIL.loadEvents);


})(jQuery); // Fully reference jQuery after this point.