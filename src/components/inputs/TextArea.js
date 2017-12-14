import React from 'react';
import Aux from 'react-aux';

export default (props) => (
    <Aux>
        <textarea
            {...props}
        ></textarea>
        {props.meta.touched && props.meta.error &&
            <span className="error">{props.meta.error}</span>}
    </Aux>
);
