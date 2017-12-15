// List of Actions that can be taken on a Book
import types from './actionTypes';

// Select a book for preview
export const selectBook = (book) => {
    console.log("A book has been selected", book.title);
    return {
        type: types.SELECT_BOOK,
        payload: book
    };
};

// Add a book to the collection
export const addBook = (bookObj) => {
    return {
        type: types.ADD_BOOK,
        payload: bookObj
    };
};

// Update a book in the collection
export const updateBook = (id, updates) => ({
    type: types.UPDATE_BOOK,
    payload: {id, updates}
});

// 
