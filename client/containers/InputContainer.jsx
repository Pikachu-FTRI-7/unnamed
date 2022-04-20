import React from 'react';
import OutputContainer from './OutputContainer.jsx';

function InputContainer() {
    return (
        <>
            <span>Start: </span><input id='startField'></input>
            <span>End: </span><input id='endField'></input>
            <OutputContainer />
        </>
    )
}

export default InputContainer;