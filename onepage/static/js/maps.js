let map;
let marker;
let response;
let json;
let userLoc;
let distance;
let mk1;
let mk2;
let miles;
let roundedMiles;
let url;
let city;
const myLoc = {
  lat: 51.18918,
  lng: -0.78982,
};
const apiKey = "AIzaSyDNN0p5CJzhe0skik4v41UYCcTgmoiTFIk";

window.initMap = function () {
  function success(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    computeDistance(latitude, longitude);

    $.ajax({
      type: "GET",
      url:
        "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
        latitude +
        "," +
        longitude +
        "&key=" + apiKey,
      success: function (response) {
        let distanceElement = document.querySelector("#distanceElement");
        $(distanceElement).html(roundedMiles);

        materialiseMap(userLoc);
      },
    });
  }

  function error() {
    if (error.code == error.PERMISSION_DENIED) {
     IpLocation();
    console.log("permission denied");
    } else {
      alert("There was an error with maps...");
    }
  }

  if (!navigator.geolocation) {
    IpLocation();
    console.log(e.message);
  } else {
    let options = {
      timeout: 20000,
      enableHighAccuracy: true,
      maximumAge: 0,
    };

    navigator.geolocation.getCurrentPosition(success, error, options);
    console.log("geolocation success");
  }
};

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

  return roundedMiles
}

function materialiseMap(userLoc) {
  map = new google.maps.Map(document.getElementById("map"), {
    center: userLoc,
    zoom: 6,
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
}

function IpLocation() {
  $.ajax({
    url: "https://www.googleapis.com/geolocation/v1/geolocate?key=" + apiKey,
    data: JSON.stringify({ "considerIp": "true" }),
    type: 'POST',
    contentType: 'application/json',
    success: function(data) {
      if(data.location) {
        let userLoc = new google.maps.LatLng(data.location.lat, data.location.lng);
        materialiseMap(userLoc);

        computeDistance(data.location.lat, data.location.lng);
        let distanceElement = document.querySelector("#distanceElement");
        $(distanceElement).html(roundedMiles);

      } else {
        alert('not found');
      }
    }
  });
}
