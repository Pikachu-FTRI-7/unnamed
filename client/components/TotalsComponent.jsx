import React from 'react';
//TODO: find current total cost and current total distance from DB, inject those values into header tags returned below

function TotalsComponent(props) {

    const placeHolderForCost = '$$$$$';
    const placeHolderForDistance = 'extremely far'

    return (
        <>
            <h4>Monthly total cost: {placeHolderForCost}</h4>
            <h4>Monthly total distance: {placeHolderForDistance}</h4>
        </>
    );
}


export default TotalsComponent;