import actions from '../actions/actionTypes';

const initialState = [
    { id: 'aldsfkjlkj', title: 'Javascript the Good Parts', slug: "javascripg-slug", summary: "My Test Summary" , headline: "A new book on technical development", authorId: '123', publisherId: 121},
    { id: 'wqrmlboije', title: 'Heavy Lifting the Good Parts', slug: "lifting-slug", summary: "My Test Summary" , headline: "A new book on technical development", authorId: '123', publisherId: 122},
    { id: 'bapeanealkje', title: 'Cooking the Good Parts', slug: "cooking-slug", summary: "My Test Summary" , headline: "A new book on technical development", authorId: '122', publisherId: 123},
    { id: 'aleknobaelke', title: 'Self Learning the Good Part', slug: "learning-slug", summary: "My Test Summary", headline: "A new book on technical development", authorId: '122', publisherId: 124},
]
export default (state = initialState, { type, payload }) => {
    switch (type) {
        case actions.ADD_BOOK:
            return state.concat(payload);
        case actions.UPDATE_BOOK:
            const {id, updates} = payload;
            const updatedBooks = state.map( book => {
                if(book.id === id) {
                    return {
                        ...book,
                        ...updates
                    };
                }
                return book;
            })
            return updatedBooks;
        case actions.FAVOR_BOOK:
            console.log(`Book with id: ${payload.id} was favored`);
            return state;
        default:
            return state;
    }
};