import React from 'react';
import InputContainer from './InputContainer.jsx';
import OutputContainer from './OutputContainer.jsx'

function MainContainer() {
    //option1:
    //useState hook, enabling child components to access/modify state
    //const [pieceOfState, setPieceOfState] = useState(); 
        //pass these as props as desired

    //option 2:
    //make this a class, rather than functional, component
    //define state in this component
    //define method, pass it down as props
        //when invoked, state is changed
    
    //option 3:
    //grab the information you need by accessing the DOM directly

    return (
        <>
            <>
                <InputContainer />
                <OutputContainer />
            </>
        </>
    );
};

export default MainContainer;