/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/*!***********************************!*\
  !*** ./onepage/static/js/maps.js ***!
  \***********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
eval("let map;\nlet marker;\nlet response;\nlet json;\nlet userLoc;\nlet myLoc;\nlet distance;\nlet mk1;\nlet mk2;\nlet miles;\nlet roundedMiles;\nlet url;\nlet city;\n\nwindow.initMap = function() {\n\n    function success(position) {\n        const latitude = position.coords.latitude;\n        const longitude = position.coords.longitude;\n\n        userLoc = {\n            lat: latitude,\n            lng: longitude,\n        };\n\n        myLoc = {\n            lat: 51.18918,\n            lng: -0.78982,\n        };\n\n        mk1 = new google.maps.LatLng(userLoc);\n        mk2 = new google.maps.LatLng(myLoc);\n\n        distance = google.maps.geometry.spherical.computeDistanceBetween(mk1, mk2);\n\n        function getMiles(i) {\n            return i * 0.000621371192;\n        }\n\n        miles = getMiles(distance);\n\n        roundedMiles = Math.round(miles * 100) / 100;\n        url = '';\n\n        $.ajax({\n            type: \"GET\",\n            url: \"https://maps.googleapis.com/maps/api/geocode/json?latlng=\" + latitude + \",\" + longitude + \"&key=AIzaSyDfL2R__omFVFlxOVyizYyv73e6e--5mls\",\n            success: function (response) {\n\n                city = response['results'][7]['address_components'][0]['short_name'];\n\n                let cityElement = document.querySelector(\"#cityElement\");\n                $(cityElement).html(city);\n\n                let distanceElement = document.querySelector(\"#distanceElement\");\n                $(distanceElement).html(roundedMiles);\n\n                const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;\n\n                map = new google.maps.Map(document.getElementById('map'), {\n                    center: userLoc,\n                    zoom: 8,\n                    disableDefaultUI: true,\n                    styles: [\n                        {\n                            elementType: \"geometry\",\n                            stylers: [\n                                {\n                                    color: \"#f5f5f5\",\n                                },\n                            ],\n                        },\n                        {\n                            elementType: \"labels.icon\",\n                            stylers: [\n                                {\n                                    visibility: \"off\",\n                                },\n                            ],\n                        },\n                        {\n                            elementType: \"labels.text.fill\",\n                            stylers: [\n                                {\n                                    color: \"#616161\",\n                                },\n                            ],\n                        },\n                        {\n                            elementType: \"labels.text.stroke\",\n                            stylers: [\n                                {\n                                    color: \"#f5f5f5\",\n                                },\n                            ],\n                        },\n                        {\n                            featureType: \"administrative.land_parcel\",\n                            elementType: \"labels.text.fill\",\n                            stylers: [\n                                {\n                                    color: \"#bdbdbd\",\n                                },\n                            ],\n                        },\n                        {\n                            featureType: \"poi\",\n                            elementType: \"geometry\",\n                            stylers: [\n                                {\n                                    color: \"#eeeeee\",\n                                },\n                            ],\n                        },\n                        {\n                            featureType: \"poi\",\n                            elementType: \"labels.text.fill\",\n                            stylers: [\n                                {\n                                    color: \"#757575\",\n                                },\n                            ],\n                        },\n                        {\n                            featureType: \"poi.park\",\n                            elementType: \"geometry\",\n                            stylers: [\n                                {\n                                    color: \"#e5e5e5\",\n                                },\n                            ],\n                        },\n                        {\n                            featureType: \"poi.park\",\n                            elementType: \"labels.text.fill\",\n                            stylers: [\n                                {\n                                    color: \"#9e9e9e\",\n                                },\n                            ],\n                        },\n                        {\n                            featureType: \"road\",\n                            elementType: \"geometry\",\n                            stylers: [\n                                {\n                                    color: \"#ffffff\",\n                                },\n                            ],\n                        },\n                        {\n                            featureType: \"road.arterial\",\n                            elementType: \"labels.text.fill\",\n                            stylers: [\n                                {\n                                    color: \"#757575\",\n                                },\n                            ],\n                        },\n                        {\n                            featureType: \"road.highway\",\n                            elementType: \"geometry\",\n                            stylers: [\n                                {\n                                    color: \"#dadada\",\n                                },\n                            ],\n                        },\n                        {\n                            featureType: \"road.highway\",\n                            elementType: \"labels.text.fill\",\n                            stylers: [\n                                {\n                                    color: \"#616161\",\n                                },\n                            ],\n                        },\n                        {\n                            featureType: \"road.local\",\n                            elementType: \"labels.text.fill\",\n                            stylers: [\n                                {\n                                    color: \"#9e9e9e\",\n                                },\n                            ],\n                        },\n                        {\n                            featureType: \"transit.line\",\n                            elementType: \"geometry\",\n                            stylers: [\n                                {\n                                    color: \"#e5e5e5\",\n                                },\n                            ],\n                        },\n                        {\n                            featureType: \"transit.station\",\n                            elementType: \"geometry\",\n                            stylers: [\n                                {\n                                    color: \"#eeeeee\",\n                                },\n                            ],\n                        },\n                        {\n                            featureType: \"water\",\n                            elementType: \"geometry\",\n                            stylers: [\n                                {\n                                    color: \"#c9c9c9\",\n                                },\n                            ],\n                        },\n                        {\n                            featureType: \"water\",\n                            elementType: \"labels.text.fill\",\n                            stylers: [\n                                {\n                                    color: \"#9e9e9e\",\n                                },\n                            ],\n                        },\n                    ],\n                });\n                marker = new google.maps.Marker({\n                    map: map,\n                    draggable: false,\n                    animation: google.maps.Animation.DROP,\n                    position: userLoc,\n                });\n            },\n        })\n    }\n\n    function error() {\n        console.log('Unable to retrieve your location');\n    }\n\n    if (!navigator.geolocation) {\n        console.log('Geolocation is not supported by your browser');\n    } else {\n        console.log('Locating…');\n        navigator.geolocation.getCurrentPosition(success, error);\n    }\n}\n\n\n//# sourceURL=webpack://onepage/./onepage/static/js/maps.js?");
/******/ })()
;