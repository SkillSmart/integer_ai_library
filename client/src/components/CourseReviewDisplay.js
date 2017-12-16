import React from 'react'
import Aux from 'react-aux';

import CourseStatsBoxSmall from './CourseStatsBoxSmall';

export default ({ course }) => {

    if(!course) return <div>Please select a course to get started....</div>

    return (
        <div>
            <span>{course.institution}</span>        
            <div className="Header">
                <h2>{course.title}</h2>
                <CourseStatsBoxSmall course={course} />
            </div>
            <div className="Main">
                <h4>Course Summary</h4>
                <p>{course.summary}</p>
                <p>{course.tags || "add a tag"}</p>
            </div>
            <div className=""></div>
        </div>
    )
}