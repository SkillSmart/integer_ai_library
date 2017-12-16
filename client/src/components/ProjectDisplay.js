import React from 'react';


import UseCaseDisplay from './UseCaseDisplay';
import ProjectStatusBar from './ProjectStatusBar';

export default ({project}) => {
    let {id, title, headline, situation, usecase, tags, stack, status, url, startDate, endDate} = project;
    return (
        <div>
            <div className="header">
                <h2>{title}</h2>
                <p>{headline}</p>
            </div>
            <div className="project-stats">
                <ProjectStatusBar 
                    status={status}
                    url={url}
                    startDate={startDate}
                    endDate={endDate}
                />
            </div>
            
            <div>
                <UseCaseDisplay 
                    situation={situation}
                    usecase={usecase}
                />
            </div>
        </div>
    )
}