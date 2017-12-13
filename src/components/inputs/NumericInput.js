import React from 'react';

export default (props) => (
    <div className="input-group">
        <label htmlFor={this.props.name}>{this.props.label}</label>
        <input
            type="numeric"
            {...props}
        />
    </div>
);
