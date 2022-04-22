import React, { useState } from "react";

import MapComponent from '../components/MapComponent.jsx';
import TotalsComponent from '../components/TotalsComponent.jsx';

//TODO: figure out how to clear the input field values after they have been submitted
//TODO: Figure out why cost is only updating after the *second* click after page load


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
        let urlTemplate = `https://maps.googleapis.com/maps/api/directions/json?origin=${startLocation}&destination=${endLocation}&key=AIzaSyDV6u58bKpQuz9eqWiCtNdAfkcp43Pe66I`;

        fetch('/api', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ fetchUrl: urlTemplate }),
        })
            .then((response) => response.json())
            .then((response) => setDistanceValues(response))
            .catch((err) => {
                console.log(err);
            });

        let miles = Number(distance.slice(0, distance.length - 3).replace(',', ''));
        setCostValues((miles / 25) * 4.5);
        console.log('this is the value of cost:', cost);

        return;
    }

    return (
        <>
            <button id='routeButton' onClick={getValsforInputForMapComponent}>Start route/get cost</button>
            <MapComponent id='inputVals' inputFromVals={inputValues} distance={distance} cost={cost} />
            {/* <MapComponent id='inputVals' inputFromVals={inputValues} cost={cost} distance={distance} /> */}
            <TotalsComponent />
        </>
    )
};

export default OutputContainer;