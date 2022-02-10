import React from 'react';

const PlusButton = (props) => {
    const click =() => {
        props.buttonOnClick()
    };
    return (
        <div>
            <button onClick={click}>{props.buttonText}</button>
        </div>
    );
};

export default PlusButton;