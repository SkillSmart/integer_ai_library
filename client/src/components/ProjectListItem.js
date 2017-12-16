import React from 'react'
import {Link} from 'react-router-dom';

export default ({ project, onClick }) => {
    let { id, title, headline, slug, tags, stack, status, url } = project;
    return (
        <li onClick={onClick}>
            <span>{status}</span>
            <h4><Link to={`/projects/${slug}`}>{title}</Link></h4>
            <p>{headline}</p>
            <ul>
                {stack.map(technology => <li>{technology}</li>)}
            </ul>
        </li>
    )
};
