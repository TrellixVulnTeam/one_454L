window.map;
let marker;
let response;
let json;
let userLoc;
let distance;
let mk1;
let mk2;
let miles;
let roundedMiles;
let newMapText;
let url;
let city;
const myLoc = {
  lat: 50.3887502,
  lng: -4.1281376,
};
const apiKey = "AIzaSyDNN0p5CJzhe0skik4v41UYCcTgmoiTFIk";

window.lightTheme = [
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
        color: "#6ddcbd",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#6ddcbd",
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
];

window.darkTheme = [
  {
    elementType: "geometry",
    stylers: [
      {
        color: "#9a9a9a",
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
        color: "#9a9a9a",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [
      {
        color: "#9a9a9a",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#9a9a9a",
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
        color: "#9a9a9a",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [
      {
        color: "#e5e5e5",
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#6ddcbd",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [
      {
        color: "#6ddcbd",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#6ddcbd",
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
        color: "#000000",
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
];

function computeDistance(latitude, longitude) {
  userLoc = {
    lat: latitude,
    lng: longitude,
  };

  mk1 = new google.maps.LatLng(userLoc);
  mk2 = new google.maps.LatLng(myLoc);

  distance = google.maps.geometry.spherical.computeDistanceBetween(mk1, mk2);

  function getMiles(i) {
    return i * 0.000621371192;
  }

  miles = getMiles(distance);
  roundedMiles = Math.round(miles * 100) / 100;

  return roundedMiles;
}

function materialiseMap(userLoc) {
  let options = {
    center: userLoc,
    zoom: 5.5,
    disableDefaultUI: true,
    styles: lightTheme,
  };

  window.map = new google.maps.Map(document.getElementById("map"), options);

  marker = new google.maps.Marker({
    map: map,
    draggable: false,
    animation: google.maps.Animation.DROP,
    position: userLoc,
  });

  marker = new google.maps.Marker({
    map: map,
    draggable: false,
    animation: google.maps.Animation.DROP,
    position: myLoc,
  });
}

window.ipLocation = function () {
  $.ajax({
    url: "https://www.googleapis.com/geolocation/v1/geolocate?key=" + apiKey,
    data: JSON.stringify({ considerIp: "true" }),
    type: "POST",
    contentType: "application/json",
    success: function (data) {
      if (data.location) {
        userLoc = new google.maps.LatLng(data.location.lat, data.location.lng);

        materialiseMap(userLoc);

        computeDistance(data.location.lat, data.location.lng);
        let distanceElement = document.querySelector("#distanceElement");
        $(distanceElement).html(
          "We're " + roundedMiles + " miles from each other"
        );
      } else {
        alert("not found");
      }
    },
  });
};
