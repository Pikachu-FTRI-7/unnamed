import React from 'react';

//grab values for start and end input fields, use those to create DirectionRequest object (or whatever it is called), then do all the API business logic, adding the return value to InputContainer props object, and then drill it down to MapContainer

function InputContainer(props) {
    return (
        <>

            <span>Start: </span><input></input>
            <span>End: </span><input></input>
            <button>Start route/get cost</button>
        </>
    )
}

export default InputContainer;