import React from 'react';
import { Link } from 'react-router-dom';

export default ({ book }) => {
    let {title, slug, headline, summary, tags=[]} = book;
    return (
        <div className="BookDisplay">
            <Link to={`/books/${slug}/edit`}>Edit Book</Link>
            <div className="Header">
                <h1><Link to={`/books/${slug}`}>{title}</Link></h1>
                <h3>{book.headline}</h3>
            </div>
            <div className="Body">
                <h3>Content</h3>
                <ul>
                    {tags.map(tag => <li>{tag}</li>)}
                </ul>
                <h3>Summary</h3>
                <p>{summary}</p>
            </div>
            <div className="Footer">
                <p>The Display Footer</p>
            </div>
        </div>
    )
};