import React, { Component } from 'react';
import InputContainer from './InputContainer.jsx';
import MapContainer from './MapContainer.jsx';
import TotalsContainer from './TotalsContainer.jsx';
import TripContainer from './TripContainer.jsx';

class MainContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <>
                    <InputContainer />
                </>
                <>
                    <TripContainer />
                </>
                <>
                    <MapContainer />
                </>
                <>
                    <TotalsContainer />
                </>
            </>
        );
    }
};

export default MainContainer;