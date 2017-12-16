import actions from '../actions/actionTypes';

const initialState = [
    {name: 'Alex Andrew', location:'USA', mainLanguage:'english', authorId: 123},
    {name: 'Alex Andrew', location:'USA', mainLanguage:'french', authorId: 122},
];

export default (state=initialState, {type, payload}) => {
    switch(type) {
        case actions.ADD_AUTHOR:
            return {
                ...state.concat(payload)
            }
        default:
            return state;
    }
};