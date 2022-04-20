import React from 'react';
//TODO: figure out how to clear the values of cost of trip and distance of trip after trip has been sent to db.
//TODO: add functionality to add cost and distance to DB in addTripToTotals()

function TripComponent(props) {

    function addTripToTotals() {
        fetch('/someEndpoint', {
            method: 'POST',
            body: JSON.stringify({
                cost: props.cost,
                distance: props.distance
            }),
            headers: { 'Content-Type': 'application/json' }
        })
            .then((response) => response.json())
            .then((response) => console.log(response))
            .catch((err) => {
                console.log(err);
            });
    }


    return (
        <>
            <h5 id='costDisplay'>Cost of trip: ${props.cost}</h5>
            <h5 id='mileageDisplay'>Distance of trip: {props.distance}</h5 >
            <button id='addToTotalsButton' onClick={addTripToTotals}>Add cost/mileage to monthly totals</button>
        </>
    )
}

export default TripComponent;