import React from 'react';

export default ({status, url, startDate, endDate}) => (
    <div>
        <h3>Project Stats</h3>
        <ul>
            <li>Current Status: {status}</li>
            <li>Project started: {startDate}</li>
            <li>Project ended: {endDate}</li>
        </ul>
    </div>
);