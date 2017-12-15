import React from 'react';
import ProjectListDisplayItem from './ProjectListDisplayItem';

export default ({ projects = [] }) => {
    return (
        <ul className="ProjectList">
            {projects.map(project =>
                <ProjectListDisplayItem
                    project={project}
                />)}
        </ul>
    )
};