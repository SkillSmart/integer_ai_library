import React from 'react'

import { NavLink } from 'react-router-dom';

export default (props) => (
    <div>
        <nav>
            <NavLink to="/books">Books</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/courses">Courses</NavLink>
            <NavLink to="/me/library">My Library</NavLink>
            <NavLink to="/me/profile">Profile</NavLink>
        </nav>
    </div>
);

// <NavLink to="/me/settins">Settings</NavLink>
