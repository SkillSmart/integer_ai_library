
const initialState = [
    {name: 'Udacity', location: 'USA', founded: 2006, founders: ['Sebastian Thrun']},
    {name: 'Coursera', location: 'USA', founded: 2009, founders: ['Andrew Ng', 'Dagmar Coller']},
    {name: 'Udemy', location: 'USA', founded: 2012, founders: ['Mark Twain']},
]

export default (state = initialState, { action, type }) => {
    switch (action) {
        default:
            return state;
    }
};