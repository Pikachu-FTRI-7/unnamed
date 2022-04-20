import { render } from "@testing-library/react";
import React, { useState } from "react";

import MapComponent from '../components/MapComponent.jsx';
import TotalsComponent from '../components/TotalsComponent.jsx';
import TripComponent from '../components/TripComponent.jsx';
//TODO: figure out how to clear the input field values after they have been submitted


function OutputContainer() {
    //defines input state and function to reset that state
    const [inputValues, setInputValues] = useState(['hello', 'mia']);

    //this function that will grab values of entry fields and reset state
    function getValsforInputForMapComponent() {

        setInputValues([document.getElementById('startField').value, document.getElementById('endField').value]);
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