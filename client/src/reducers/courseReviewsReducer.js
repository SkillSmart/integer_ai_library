import actions from '../actions/actionTypes';
import axios from 'axios';

const initialState = {
    reviews: null,
    selectedReview: null
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        // FETCH REVIEWS
        case actions.LOAD_COURSE_REVIEW_SUCCESS:
            if (!payload.length) return state;
            // Check if selected Review is yet unset
            let selectedReview = selectedReview ? selectedReview : payload[0]._id
            return {
                ...state,
                selectedReview,
                reviews: payload
            }
        // ADD REVIEW
        case actions.ADD_COURSE_REVIEW_SUCCESS:
            console.log("Add Course Review success ---- ", payload)
            return {
                ...state,
                reviews: state.reviews.concat(payload)
            };
        // UPDATE REVIEW
        case actions.UPDATE_COURSE_REVIEW_SUCCESS:
            const updatedCourseReviews = state.reviews.map(review => {
                if (review._id === payload._id) {
                    return { ...payload }
                }
                return review;
            })
            return {
                ...state,
                reviews: updatedCourseReviews
            };

        // 
        case actions.FETCH_COURSE_REVIEWS:
            console.log("Fetch Course was called", payload)
            return {
                ...state,
                reviews: payload.data,
                selectedReview: payload.data[0]._id
            };


        case actions.SELECT_COURSE_REVIEW:
            return {
                ...state,
                selectedReview: payload
            };


        // QUERY RESULTS
        case actions.UPDATE_COURSE_QUERY_RESULTS:

            return {
                ...state,
                queryResults: {
                    ...state.queryResults,
                    ...payload
                }
            };

        case actions.SELECT_COURSE_QUERY_RESULT:
            return {
                ...state,
                selectedQueryResult: payload
            }
        default:
            console.log('default state chosen');
            return state;
    }
};