//renders: MapContainer, TotalsContainer, TripContainer
import React from "react";

import MapComponent from '../components/MapComponent.jsx';
import TotalsComponent from '../components/TotalsComponent.jsx';
import TripComponent from '../components/TripComponent.jsx';

function OutputContainer() {
    return (
        <>
            <MapComponent />
            <TripComponent />
            <TotalsComponent />
        </>
    )
};

export default OutputContainer;