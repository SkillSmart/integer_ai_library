import axios from 'axios';

class CourseApi {
    // Get operations
    static async getAllCourses() {
        try {
            let response = await axios.get('/api/courses');
            return response.data;
        } catch (e) {
            return e;
        }
    };
    static async getCourseById(courseId) {
        try {
            let response = await axios.get(`/api/courses/:courseId`);
            return response.data;
        } catch (e) {
            return e;
        }
    }
    // 
};

export default CourseApi;