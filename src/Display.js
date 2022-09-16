import React from 'react';
import './Display.css';

function Display(props) {

    return(
        <span className={(props.displayValue <= 5) ? 'blue' : 'red'}>
            {props.displayValue}
        </span>
    );
}

export default Display;