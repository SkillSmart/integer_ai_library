import React from 'react'

const CourseTile = ({ course, onClick }) => {
    return (
        <div>
            <div >
                <img
                    className="tile-image"
                    src="https://placehold.it/230x120"
                    label="Header image"
                />
                <span>{course.institution}</span>
                <h3>{course.title}</h3>
            </div>
            <div className="tile-body">
                <p>{course.headline}</p>
            </div>
            <div className="tile-footer">
                <ul>
                    <li>Info one</li>
                    <li>Info two</li>
                    <li>Info three</li>
                </ul>
            </div>

        </div>
    )
}

export default CourseTile