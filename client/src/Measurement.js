import React from 'react';

const Measurement = (props) => {
    const { systolic, diastolic, pulse, notes } = props.measurement;
    return(
        <div>
            <h2>Measurement goes here!</h2>
        </div>
    )
}

export default Measurement;