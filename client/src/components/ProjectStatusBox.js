import React from 'react';

export default ({ project = {} }) => {
    let { status, url, startDate, endDate } = project;
    return (
        <div>
            <h3>Project Stats</h3>
            <ul>
                <li>Current Status: {status}</li>
                <li>Project started: {startDate}</li>
                <li>Project ended: {endDate}</li>
            </ul>
        </div>
    )
};