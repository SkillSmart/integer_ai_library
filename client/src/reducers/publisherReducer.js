const initialState = [
    {id: 121, name: 'Brockhaus', locations:['NYC','Berlin', 'Paris']},
    {id: 122, name: 'Hansa', locations:['NYC','Berlin', 'Paris']},
    {id: 123, name: 'Waller', locations:['NYC','Berlin', 'Paris']},
    {id: 124, name: 'Wallace & Gromit', locations:['NYC','Berlin', 'Paris']},
];

export default (state = initialState, { type, payload }) => {
    switch (type) {
        default:
            return state;
    }
};