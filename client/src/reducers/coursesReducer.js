import actions from '../actions/actionTypes';


const initialState = {
    reviewedCourses: [
        { id: "14234rqef1", slug: "slug-one-1", title: 'Deep Learning 1', institution: 'Coursera', teacher: 'Prof. Andrew Ng', summary: "alsk flk jasdflkj llk jalksdj fasd lkfjla kjlk jasldfkj lkj a. aokd flajs dlfkjas dfslakj flaksjdf asdf. alskjflasd jflaksjdfkalj dslfasjdf.", noLessons: 35, noProjects: 5, noModules: 8, duration: '4 Months' },
        { id: "14234rqef3", slug: "slug-one-2", title: 'Deep Learning 2', institution: 'Coursera', teacher: 'Prof. Andrew Ng', summary: "alsk flk jasdflkj llk jalksdj fasd lkfjla kjlk jasldfkj lkj a. aokd flajs dlfkjas dfslakj flaksjdf asdf. alskjflasd jflaksjdfkalj dslfasjdf.", noLessons: 35, noProjects: 5, noModules: 8, duration: '4 Months' },
        { id: "14234rqef4", slug: "slug-one-3", title: 'Deep Learning 3', institution: 'Coursera', teacher: 'Prof. Andrew Ng', summary: "alsk flk jasdflkj llk jalksdj fasd lkfjla kjlk jasldfkj lkj a. aokd flajs dlfkjas dfslakj flaksjdf asdf. alskjflasd jflaksjdfkalj dslfasjdf.", noLessons: 35, noProjects: 5, noModules: 8, duration: '4 Months' },
        { id: "14234rqef5", slug: "slug-one-4", title: 'Deep Learning 4', institution: 'Coursera', teacher: 'Prof. Andrew Ng', summary: "alsk flk jasdflkj llk jalksdj fasd lkfjla kjlk jasldfkj lkj a. aokd flajs dlfkjas dfslakj flaksjdf asdf. alskjflasd jflaksjdfkalj dslfasjdf.", noLessons: 35, noProjects: 5, noModules: 8, duration: '4 Months' },
        { id: "14234rqef6", slug: "slug-one-5", title: 'Deep Learning 5', institution: 'Coursera', teacher: 'Prof. Andrew Ng', summary: "alsk flk jasdflkj llk jalksdj fasd lkfjla kjlk jasldfkj lkj a. aokd flajs dlfkjas dfslakj flaksjdf asdf. alskjflasd jflaksjdfkalj dslfasjdf.", noLessons: 35, noProjects: 5, noModules: 8, duration: '4 Months' },
    ],
    selectedReview: '14234rqef1',
    selectedQueryResult: '123451',
    queryResults: [
        { id: '123451', title: 'Coursera Course 1' },
        { id: '123452', title: 'Coursera Course 2' },
        { id: '123453', title: 'Coursera Course 3' },
    ]
};

export default (state = initialState, { type, payload }) => {
    switch (type) {

        // COURSE REVIEWS
        case actions.ADD_COURSE_REVIEW:
            return {
                ...state,
                reviewedCourses: state.courses.concat(payload)
            };
        case actions.UPDATE_COURSE_REVIEW:
            let { id, values } = payload;
            const updatedCourseReviews = state.reviewedCourses.map(course => {
                if (course.id === id) {
                    return { ...course, ...values }
                }
                return course;
            })
            return {
                ...state,
                reviewedCourses: updatedCourseReviews
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