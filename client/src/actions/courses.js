import types from './actionTypes';
import CourseApi from '../api/CourseApi';

// Fetch actions
export const fetchCourses = async () => {
    return async function (dispatch) {
        try {
            let courses = await CourseApi.getAllCourses();
            dispatch(loadCoursesSuccess(courses));
        } catch (e) {
            throw(e);
        }
    }
};
export const loadCoursesSuccess = (courses) => ({
    type: types.LOAD_COURSE_SUCCESS,
    payload: courses
});