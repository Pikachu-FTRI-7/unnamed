import React, { useState } from "react";

import MapComponent from '../components/MapComponent.jsx';
import TotalsComponent from '../components/TotalsComponent.jsx';

//TODO: figure out how to clear the input field values after they have been submitted


function OutputContainer() {
    //defines input state and function to reset that state
    const [inputValues, setInputValues] = useState(['', '']);
    const [distance, setDistanceValues] = useState('');
    const [cost, setCostValues] = useState(0);


    //this function that will grab values of entry fields and reset state
    function getValsforInputForMapComponent() {
        let startLocation = document.getElementById('startField').value;
        let endLocation = document.getElementById('endField').value;
        console.log('location vals in OutputContainer: ', startLocation, endLocation);
        setInputValues([startLocation, endLocation]);
        console.log("inputvalues", startLocation, endLocation);
        let urlTemplate = `https://maps.googleapis.com/maps/api/directions/json?origin=${startLocation}&destination=${endLocation}&key=AIzaSyDV6u58bKpQuz9eqWiCtNdAfkcp43Pe66I`;


        console.log("this is the value of urlTemplate in OutputContainer: ", urlTemplate);
        //step1: send start, end and apiKey to backend so that backend can make fetch request to google maps API
        //step2: create route (app.get(/someEndpoint)) and middleware (maybe just one controller) to handle request from frontend


        fetch('/api', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ fetchUrl: urlTemplate }),
        })
            .then((response) => response.json())
            .then((response) => console.log('this is the value of the response from the server: ', response))
            .then((response) => setDistanceValues(response))
            .catch((err) => {
                console.log(err);
            });

        setCostValues(((Number(distance.slice(0, distance.length - 2)) / 30) * 4))

        return;
    }

    return (
        <>
            <button id='routeButton' onClick={getValsforInputForMapComponent}>Start route/get cost</button>
            <MapComponent id='inputVals' inputFromVals={inputValues} distance={distance} />
            {/* <MapComponent id='inputVals' inputFromVals={inputValues} cost={cost} distance={distance} /> */}
            <TotalsComponent />
        </>
    )
};

export default OutputContainer;