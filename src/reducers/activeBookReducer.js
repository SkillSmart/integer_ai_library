import actions from '../actions/actionTypes';

export default (state = {}, { type, payload }) => {
    switch (type) {
        case actions.SELECT_BOOK:
            return payload;

        default:
            return state;
    }
};