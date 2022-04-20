import React, { useState } from 'react';
import TripComponent from './TripComponent.jsx';
//TODO: get  distance from result of API call, bind to variable and pass as props to TripComponent
//TODO: get cost from distance, plus calculations based on mpg and price of gas, bind to variable and pass as props to TripComponent
//TODO: perform API call
//TODO: render map from API call, see example code below (from docs)


/*
    build object to send to Google Maps API

    required properties: 
        origin: props.inputFromVals[0], 
        distination: props.inputFromVals[1], 
        travelMode: 'DRIVING'

     {
  origin: LatLng | String | google.maps.Place,
  destination: LatLng | String | google.maps.Place,
  travelMode: TravelMode,
  transitOptions: TransitOptions,
  drivingOptions: DrivingOptions,
  unitSystem: UnitSystem,
  waypoints[]: DirectionsWaypoint,
  optimizeWaypoints: Boolean,
  provideRouteAlternatives: Boolean,
  avoidFerries: Boolean,
  avoidHighways: Boolean,
  avoidTolls: Boolean,
  region: String
}

then use the object to send the request:

function initMap() {
  var directionsService = new google.maps.DirectionsService();
  var directionsRenderer = new google.maps.DirectionsRenderer();
  var chicago = new google.maps.LatLng(41.850033, -87.6500523);
  var mapOptions = {
    zoom:7,
    center: chicago
  }
  var map = new google.maps.Map(document.getElementById('map'), mapOptions);
  directionsRenderer.setMap(map);
}

function calcRoute() {
  var start = document.getElementById('start').value;
  var end = document.getElementById('end').value;
  var request = {
    origin: start,
    destination: end,
    travelMode: 'DRIVING'
  };
  directionsService.route(request, function(result, status) {
    if (status == 'OK') {
      directionsRenderer.setDirections(result);
    }
  });
}
    */


function MapComponent(props) {
    //for testing purposes, ensuring that map can get props from output container (works);
    let display = props.inputFromVals;

    //for testing purposes, ensuring that values can be passed to TripComponent as props (works)
    const cost = '5';
    const distance = '40';


    return (
        <>
            <h4>{display.join(', ')}</h4>
            <TripComponent cost={cost} distance={distance} />
        </>

    )
}

export default MapComponent;