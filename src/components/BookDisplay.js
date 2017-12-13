import React from 'react';
import { Link } from 'react-router-dom';

export default ({ book }) => (
    <div className="BookDisplay">
        <Link to={`/books/${book.slug}/edit`}>Edit Book</Link>
        <div className="Header">
            <h1><Link to={`/books/${book.slug}`}>{book.title}</Link></h1>
            <h3>{book.headline}</h3>
        </div>
        <div className="Body">
            <h3>The Display Body</h3>
            <p></p>
        </div>
        <div className="Footer">
            <p>The Display Footer</p>
        </div>
    </div>
);