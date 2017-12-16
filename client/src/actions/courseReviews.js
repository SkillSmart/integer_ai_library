import types from './actionTypes';
import ReviewsApi from '../api/ReviewsApi';

// FETCH COURSE REVIEWS
export function fetchCourseReviews() {
    console.log("FetchCourse Reviews called")
    return async function (dispatch) {
        try {
            let courses = await ReviewsApi.getAllCourseReviews();
            dispatch(loadCourseReviewsSuccess(courses))
        } catch (e) {
            throw (e);
        }
    }
};
export const loadCourseReviewsSuccess = (courses) => ({
    type: types.LOAD_COURSE_REVIEW_SUCCESS,
    payload: courses
});

// CREATE NEW REVIEW
export function addCourseReview (review){
    return async function (dispatch) {
        try {
            let courseReview = await ReviewsApi.addCourseReview(review);
            dispatch(addCourseReviewSuccess(courseReview));
        } catch (e) {
            throw (e);
        }
    }
};
export const addCourseReviewSuccess = (courseReview) => ({
    type: types.ADD_COURSE_REVIEW_SUCCESS,
    payload: courseReview
});

// UPDATE COURSE REVIEW
export function updateCourseReview (id, updates) {
    return async function (dispatch) {
        try {
            let response = await ReviewsApi.updateCourseReview(id, updates);
            console.log(response)
            dispatch(updateCourseReviewSuccess(response));
        } catch (e) {
            throw (e);
        }
    }
}
export const updateCourseReviewSuccess = (updatedReview) => ({
    type: types.UPDATE_COURSE_REVIEW_SUCCESS,
    payload: updatedReview
});

 
// SELECT COURSE
export const selectCourseReview = (courseId) => ({
    type: types.SELECT_COURSE_REVIEW,
    payload: courseId
});

// delete a course
export const removeCourseReview = (courseId) => ({
    type: types.REMOVE_COURSE_REVIEW,
    payload: courseId
});

// fav a course
export const favCourseReview = (courseId, userId) => ({
    type: types.FAV_COURSE_REVIEW,
    payload: {
        courseId: courseId,
        userId: userId
    }
});

// hide a course
export const hideCoureReview = (courseId, userId) => ({
    type: types.HIDE_COURSE,
    payload: {
        courseId,
        userId
    }
});

// 


// 