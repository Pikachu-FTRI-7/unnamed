import React, { useState } from 'react';
import TripComponent from './TripComponent.jsx';

//TODO: get distance from result of API call, bind to variable and pass as props to TripComponent
//TODO: get cost from distance, plus calculations based on mpg and price of gas, bind to variable and pass as props to TripComponent
//TODO: perform API call
//TODO: render map from API call, see example code below (from docs)

function MapComponent(props) {
  //for testing purposes, ensuring that map can get props from output container (works);
  let display = props.inputFromVals;

  //https://maps.googleapis.com/maps/api/directions/json?origin=San+Diego&destination=PartyCity&key=AIzaSyDV6u58bKpQuz9eqWiCtNdAfkcp43Pe66I

  //step1: build URL (using template above), passing in user input for origin and destination params

  //step2: send get request to built URL

  //step3: extract distance property from response, assign to constant and pass to TripComponent as props

  //step4: use distance property to calculate estimated trip cost, assign to constant and pass to TripComponent as props.

  // Access-Control-Allow-Origin: https://maps.googleapis.com/maps/api/directions/json?origin=${props.inputFromVals[0]}&destination=${props.inputFromVals[1]}&key=AIzaSyDV6u58bKpQuz9eqWiCtNdAfkcp43Pe66I


  //for testing purposes, ensuring that values can be passed to TripComponent as props (works)



  return (
    <>
      <h4>{display.join(', ')}</h4>
      <TripComponent cost={cost} distance={distance} />
    </>

  )
}

export default MapComponent;