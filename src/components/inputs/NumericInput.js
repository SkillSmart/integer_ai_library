import React from 'react';
import Aux from 'react-aux';

export default (props) => (
    <Aux>
        <input
            type="numeric"
            {...props}
            defaultValue={props.meta.initial}
        />
        {props.meta.touched && props.meta.error &&
            <span className="error">{props.meta.error}</span>}
    </Aux>
);
