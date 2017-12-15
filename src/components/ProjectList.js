import React from 'react'

import ProjectListItem from './ProjectListItem';

export default ({ projects, selectHandler }) => (
    <div>
        <h3>List of Projects</h3>
        <ul>
            {projects.map(project =>
                <ProjectListItem
                    key={project.id}
                    onClick= { selectHandler?() => selectHandler(project.id): null }
                    project={project}
                />
            )}
        </ul>
    </div>
)