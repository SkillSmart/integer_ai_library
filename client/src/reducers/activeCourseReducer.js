import actions from '../actions/actionTypes';

const initialState = {
    activeCourse: undefined
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case actions.SELECT_COURSE:
            console.log("SELECT COURSE", payload)
            return payload;
        default:
            return state;
    }
};