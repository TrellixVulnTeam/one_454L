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

    $.ajax({
        type: "GET",
        url: "https://api.ipdata.co/?api-key=88efa1db26660441437069405a466e096d82a071a8b090043ee60618&fields=latitude,longitude,city",
        success: function (response) {

            userLoc = {
                lat: response['latitude'],
                lng: response['longitude'],
            };

            city = response['city'];

            myLoc = {
                lat: 49.4438,
                lng: -3.576,
            };

            mk1 = new google.maps.LatLng(userLoc);
            mk2 = new google.maps.LatLng(myLoc);

            distance = google.maps.geometry.spherical.computeDistanceBetween(mk1, mk2);

            function getMiles(i) {
                return i*0.000621371192;
            }

            miles = getMiles(distance);

            roundedMiles = Math.round(miles * 100) / 100;
            url = '';

            const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;

            $.ajax({
                "context": this,
                "url": url,
                "headers": {'X-CSRFToken': csrftoken},
                "mode": 'same-origin',
                "type": "POST",
                "data": { 'miles': roundedMiles, 'city': city },
                success: function(response) {
                    console.log("success");
                },
                complete: function(response) {
                    console.log("complete");
                },
                error: (error) => {
                    console.log(JSON.stringify(error));
                }
            });

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