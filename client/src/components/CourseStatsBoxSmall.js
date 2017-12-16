import React from 'react'


export default ({course}) => (
    <div>
        <h3>Course Stats</h3>
        <ul>
            {course.duration && <li>Duration: {course.duration}</li>}
            {course.noModules && <li>Modules: {course.noModules}</li>}
            {course.noProjects && <li>Projects: {course.noProjects}</li>}
        </ul>
    </div>
);
