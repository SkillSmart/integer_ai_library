import types from '../actions/actionTypes';


const initialState = {
    selectedCourse: '123451',
    courses: [
        { id: '123451', title: 'Coursera Course 1' },
        { id: '123452', title: 'Coursera Course 2' },
        { id: '123453', title: 'Coursera Course 3' },
    ]
}

export default (state=initialState, {type, payload}) => {
    switch(type){

        // API SUCCESS ACTIONS
        case type.LOAD_COURSE_SUCCESS:
            return {
                ...state,
                courses: payload
            };
        case types.FETCH_COURSES:
            return payload;
        default: 
            return state
    }
}