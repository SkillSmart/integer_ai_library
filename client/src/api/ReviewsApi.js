import axios from 'axios';

class ReviewsApi {

    // COURSE Reviews
    // GET:
    static async getAllCourseReviews() {
        try {
            let response = await axios.get('/api/reviews/courses');
            return response.data;
        } catch (e) {
            e
        }
    };
    static async getCourseReviewById(reviewId) {
        try {
            let response = await axios.get(`/api/reviews/courses/${reviewId}`);
            return response.data;
        } catch (e) {
            return e;
        }
    };
    // POST:
    static async addCourseReview(review) {
        try {
            let response = await axios.post('/api/reviews/courses', review);
            console.log("Add Course Review Return Value", response)
            return response.data;
        } catch (e) {
            return e;
        }
    };
    static async updateCourseReview(id, updates) {
        try {
            let response = await axios.patch(`/api/reviews/courses/${id}`, updates);
            return response.data;
        } catch (e) {
            return e;
        }
    }


    // BOOK Reviews
    // GET:
    static async getAllBookReviews() {
        try {
            let response = await axios.get('/reviews/books');
            return response.data;
        } catch (e) {
            return e;
        }
    };
    static async getBookReview(reviewId) {
        try {
            let response = await axios.get(`/reviews/books/${reviewId}`);
            return response.data;
        } catch(e) {
            return e
        }
    };
    // POST:
    static async addBookReview(review) {
        try {
            let response = await axios.post('/reviews/books', review);
            return response.data;
        } catch (e) {
            return e;
        }
    };
    // UPDATE:
    static async updateBookReview(id, updates) {
        try {
            let response = await axios.patch(`/reviews/books/${id}`, updates);
            return response.data;
        } catch (e) {
            return e;
        }
    }

    

};

export default ReviewsApi;