import types from './actionTypes';


// create a course
export const addCourse = (courseObj) => ({
        type: types.ADD_COURSE,
        payload: courseObj
});

// select a course
export const selectCourse = (courseId) => ({
    type: types.SELECT_COURSE,
    payload: courseId
});

// delete a course
export const removeCourse = (courseId) => ({
    type: types.REMOVE_COURSE,
    payload: courseId
});
// update a course
export const updateCourse = (id, values) => ({
    type: types.UPDATE_COURSE,
    payload: {id, values}
})

// fav a course
export const favCourse = (courseId, userId) => ({
    type: types.FAV_COURSE,
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