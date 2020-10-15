let map;
let marker;
let response;
let json;
let userLoc;
let myLoc;
let distance;
let mk1;
let mk2;
let miles;
let roundedMiles;
let url;
let city;

function initMap() {

    function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        userLoc = {
            lat: latitude,
            lng: longitude,
        };

        myLoc = {
            lat: 51.18918,
            lng: -0.78982,
        };

        mk1 = new google.maps.LatLng(userLoc);
        mk2 = new google.maps.LatLng(myLoc);

        distance = google.maps.geometry.spherical.computeDistanceBetween(mk1, mk2);

        function getMiles(i) {
            return i * 0.000621371192;
        }

        miles = getMiles(distance);

        roundedMiles = Math.round(miles * 100) / 100;
        url = '';

        $.ajax({
            type: "GET",
            url: "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + latitude + "," + longitude + "&key=AIzaSyDfL2R__omFVFlxOVyizYyv73e6e--5mls",
            success: function (response) {

                console.log(response);

                city = response['results'][7]['address_components'][0]['short_name'];
                console.log(city);

                // const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;

                map = new google.maps.Map(document.getElementById('map'), {
                    center: userLoc,
                    zoom: 8,
                    disableDefaultUI: true,
                    styles: [
                        {
                            elementType: "geometry",
                            stylers: [
                                {
                                    color: "#f5f5f5",
                                },
                            ],
                        },
                        {
                            elementType: "labels.icon",
                            stylers: [
                                {
                                    visibility: "off",
                                },
                            ],
                        },
                        {
                            elementType: "labels.text.fill",
                            stylers: [
                                {
                                    color: "#616161",
                                },
                            ],
                        },
                        {
                            elementType: "labels.text.stroke",
                            stylers: [
                                {
                                    color: "#f5f5f5",
                                },
                            ],
                        },
                        {
                            featureType: "administrative.land_parcel",
                            elementType: "labels.text.fill",
                            stylers: [
                                {
                                    color: "#bdbdbd",
                                },
                            ],
                        },
                        {
                            featureType: "poi",
                            elementType: "geometry",
                            stylers: [
                                {
                                    color: "#eeeeee",
                                },
                            ],
                        },
                        {
                            featureType: "poi",
                            elementType: "labels.text.fill",
                            stylers: [
                                {
                                    color: "#757575",
                                },
                            ],
                        },
                        {
                            featureType: "poi.park",
                            elementType: "geometry",
                            stylers: [
                                {
                                    color: "#e5e5e5",
                                },
                            ],
                        },
                        {
                            featureType: "poi.park",
                            elementType: "labels.text.fill",
                            stylers: [
                                {
                                    color: "#9e9e9e",
                                },
                            ],
                        },
                        {
                            featureType: "road",
                            elementType: "geometry",
                            stylers: [
                                {
                                    color: "#ffffff",
                                },
                            ],
                        },
                        {
                            featureType: "road.arterial",
                            elementType: "labels.text.fill",
                            stylers: [
                                {
                                    color: "#757575",
                                },
                            ],
                        },
                        {
                            featureType: "road.highway",
                            elementType: "geometry",
                            stylers: [
                                {
                                    color: "#dadada",
                                },
                            ],
                        },
                        {
                            featureType: "road.highway",
                            elementType: "labels.text.fill",
                            stylers: [
                                {
                                    color: "#616161",
                                },
                            ],
                        },
                        {
                            featureType: "road.local",
                            elementType: "labels.text.fill",
                            stylers: [
                                {
                                    color: "#9e9e9e",
                                },
                            ],
                        },
                        {
                            featureType: "transit.line",
                            elementType: "geometry",
                            stylers: [
                                {
                                    color: "#e5e5e5",
                                },
                            ],
                        },
                        {
                            featureType: "transit.station",
                            elementType: "geometry",
                            stylers: [
                                {
                                    color: "#eeeeee",
                                },
                            ],
                        },
                        {
                            featureType: "water",
                            elementType: "geometry",
                            stylers: [
                                {
                                    color: "#c9c9c9",
                                },
                            ],
                        },
                        {
                            featureType: "water",
                            elementType: "labels.text.fill",
                            stylers: [
                                {
                                    color: "#9e9e9e",
                                },
                            ],
                        },
                    ],
                });
                marker = new google.maps.Marker({
                    map: map,
                    draggable: false,
                    animation: google.maps.Animation.DROP,
                    position: userLoc,
                });
            },
        })
    }

    function error() {
        console.log('Unable to retrieve your location');
    }

    if (!navigator.geolocation) {
        console.log('Geolocation is not supported by your browser');
    } else {
        console.log('Locating…');
        navigator.geolocation.getCurrentPosition(success, error);
    }
}
