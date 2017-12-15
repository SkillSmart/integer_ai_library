import React from 'react'
import {Link} from 'react-router-dom';

export default ({ course, onClick, link }) => (
    <li onClick={onClick}>
        <div className="Header">
            <span>{course.teacher}</span>
            <h3><Link to={link}>{course.title}</Link></h3>
            <p>{course.headline}</p>
        </div>
        <div className="Body">
        </div>
        <div className="Footer">
        <ul>
            <li>Duration</li>
            <li>Level</li>
            <li>Projects</li>
        </ul>
        </div>
    </li>
);
