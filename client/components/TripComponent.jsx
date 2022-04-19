import React from 'react';

function TripComponent(props) {
    return (
        <>
            <span id='costDisplay'>Cost of trip: $</span>
            <button id='addToTotalsButton'>Add cost/mileage to monthly totals</button>
        </>
    )
}

export default TripComponent;