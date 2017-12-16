import React from 'react';

import ProjectSlideshow from './ProjectSlideshow';

export default ({ status, url, startDate, endDate }) => (
    <div>
        <h3>Project Stats</h3>
        <div>
            <ul>
                <li>Current Status: {status}</li>
                <li>Project started: {startDate}</li>
                <li>Project ended: {endDate}</li>
            </ul>
        </div>
        <div>
            <ProjectSlideshow />
        </div>
    </div>
);