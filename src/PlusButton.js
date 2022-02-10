import React from 'react';

const PlusButton = (props) => {
    const click =() => {
        props.buttonOnClick(8787)
    };
    return (
        <div>
            <button onClick={click}>{props.buttonText}</button>
        </div>
    );
};

export default PlusButton;