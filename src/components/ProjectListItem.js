import React from 'react';

import UsecaseDisplay from './UseCaseDisplay';
import TechStackBox from './TechStackBox';
import ProjectStatusBox from './ProjectStatusBox';


export default ({ id, title, headline, situation, usecase, tags, stack, status, url, startDate, endDate }) => (
    <li className="ProjectListItem">
        <div className="item-header">
            <h2>{title}</h2>
            <p>{headline}</p>
            <ul>{tags.map(tag => <li>{tag}</li>)}</ul>
        </div>
        <div className="item-body">
            <div className="sidebar">
                <TechStackBox
                    stack={stack} />
                <ProjectStatusBox 
                    startDate={startDate}
                    endDate={endDate}
                    status={status}
                    url={url}
                />
            </div>
            <div className="main">
                <UsecaseDisplay
                    situation={situation}
                    usecase={usecase}
                />
                <div className="section">
                </div>
            </div>
        </div>
    </li>
)