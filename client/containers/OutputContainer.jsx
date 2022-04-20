import React, { useState } from "react";

import MapComponent from '../components/MapComponent.jsx';
import TotalsComponent from '../components/TotalsComponent.jsx';

//TODO: figure out how to clear the input field values after they have been submitted


function OutputContainer() {
    //defines input state and function to reset that state
    const [inputValues, setInputValues] = useState(['hello', 'mia']);
    let distance;
    
    //this function that will grab values of entry fields and reset state
    function getValsforInputForMapComponent() {
        setInputValues([document.getElementById('startField').value, document.getElementById('endField').value]);

        let urlTemplate = `https://maps.googleapis.com/maps/api/directions/json?origin=${inputValues[0]}&destination=${inputValues[1]}&key=AIzaSyDV6u58bKpQuz9eqWiCtNdAfkcp43Pe66I`;
  
        console.log("hi", urlTemplate);
        //step1: send start, end and apiKey to backend so that backend can make fetch request to google maps API
        //step2: create route (app.get(/someEndpoint)) and middleware (maybe just one controller) to handle request from frontend
      
        fetch('/api', {
          method: 'POST',
          body: JSON.stringify({
            url: urlTemplate
          }),
          headers: { 'Content-Type': 'application/json' }
        })
          .then((response) => response.json())
          .then((response) => distance = response)
          .catch((err) => {
            console.log(err);
          });
        console.log("distance", distance);

        // miles per gallon, miles, cost per gallon

        let cost;
       
        return;
    }


    return (
        <>
            <button id='routeButton' onClick={() => { getValsforInputForMapComponent() }}>Start route/get cost</button>
            <MapComponent id='inputVals' inputFromVals={inputValues} />
            <TotalsComponent />
        </>
    )
};

export default OutputContainer;