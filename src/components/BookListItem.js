import React from 'react';

export default ({ book, onClick }) => (
    <li onClick={onClick}>
        <div>{book.title}</div>
        <div>{book.author}</div>
        <div>{book.isbn}</div>
    </li>
);