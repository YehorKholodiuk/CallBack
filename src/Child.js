import React from 'react';

const Child = (props) => {
    return (
        <div className="child">
<h1>Child</h1>
            <button onClick={() => props.changeWord('Yehor')}>
                Click to change title
            </button>
        </div>
    );
};

export default Child;