import React from 'react'

import CourseListItem from './CourseListItem';

export default ({ courses, onClick }) => (
    <ul>
        {courses.map(course =>
            <CourseListItem
                key={course.id}
                link={`/courses/reviews/${course.slug}`}
                onClick={() => onClick(course.id)}
                course={course} />
        )}
    </ul>
)