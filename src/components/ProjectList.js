import React from 'react';
import ProjectListItem from './ProjectListItem';

export default (props) => {
    let { projects } = props;
    return (
        <ul className="ProjectList">
            {projects.map(project => <ProjectListItem
                key={project.id}
                project={project}/>)}
        </ul>
    )
};