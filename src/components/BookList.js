import React from 'react';

import BookListItem from './BookListItem';

export default ({ books, selectBook }) => (
    <ul>
        {books.map(book =>
            <BookListItem
                onClick={() => selectBook(book)}
                key={book.id}
                book={book} />)}
    </ul>
);

