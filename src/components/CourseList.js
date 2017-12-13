import React from 'react'

import CourseListItem from './CourseListItem';

export default ({ courses, onSelect }) => (
    <ul>
        {courses.map(course =>
            <CourseListItem
                key={course.id}
                link={`/courses/${course.slug}`}
                onClick={() => onSelect(course)}
                course={course} />
        )}
    </ul>
)