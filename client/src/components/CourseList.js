import React from 'react'

import CourseListItem from './CourseListItem';

export default ({ courses, onClick }) => {
    
    if(!courses) return <div>Loading....</div>
    
    return (
        <ul>
            {courses.map(course =>
                <CourseListItem
                    key={course._id}
                    link={`/courses/reviews/${course.slug}`}
                    onClick={() => onClick(course._id)}
                    course={course} />
            )}
        </ul>
    )
}