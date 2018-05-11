import React from 'react';

import './CounterOutput.css';

const counterOutput = (props) => (
    console.log('CounterOutput ==> props = ', props),
    <div className="CounterOutput">
        Current Counter: {props.value}
    </div>
);

export default counterOutput;