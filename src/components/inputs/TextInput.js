import React from 'react';
import Aux from 'react-aux';

export default (props) => {
    console.log(props)
    return (
        <Aux>
            <input {...props} />
            {props.meta.touched && props.meta.error &&
            <span className="error">{props.meta.error}</span>}
        </Aux>
    )
};
