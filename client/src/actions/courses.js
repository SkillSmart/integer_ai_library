import types from './actionTypes';


// create a course
export const addCourseReview = (courseObj) => ({
        type: types.ADD_COURSE_REVIEW,
        payload: courseObj
});

// select a course
export const selectCourseReview = (courseId) => ({
    type: types.SELECT_COURSE_REVIEW,
    payload: courseId
});

// delete a course
export const removeCourseReview = (courseId) => ({
    type: types.REMOVE_COURSE_REVIEW,
    payload: courseId
});
// update a course
export const updateCourseReview = (id, values) => ({
    type: types.UPDATE_COURSE_REVIEW,
    payload: {id, values}
})

// fav a course
export const favCourseReview = (courseId, userId) => ({
    type: types.FAV_COURSE_REVIEW,
    payload: {
        courseId: courseId,
        userId: userId
    }
});

// hide a course
export const hideCoures = (courseId, userId) => ({
    type: types.HIDE_COURSE
});

// 