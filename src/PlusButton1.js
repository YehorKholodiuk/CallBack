import React from 'react';

const PlusButton1 = (props) => {
    const onChange = (e) => {
        props.onChange(e.target.value)
    }
    return (
        <div>
 <input value={props.value} onChange={onChange}/>
        </div>
    );
};

export default PlusButton1;