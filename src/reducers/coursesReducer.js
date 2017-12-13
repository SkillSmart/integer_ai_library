import actions from '../actions/actionTypes';


const initialState = [
    {id:"14234rqef1",slug: "slug-one-1", title: 'Deep Learning 1', institution: 'Coursera', teacher: 'Prof. Andrew Ng', summary: "alsk flk jasdflkj llk jalksdj fasd lkfjla kjlk jasldfkj lkj a. aokd flajs dlfkjas dfslakj flaksjdf asdf. alskjflasd jflaksjdfkalj dslfasjdf.", noLessons: 35, noProjects: 5, noModules: 8, duration: '4 Months'},
    {id:"14234rqef3",slug: "slug-one-2", title: 'Deep Learning 2', institution: 'Coursera', teacher: 'Prof. Andrew Ng', summary: "alsk flk jasdflkj llk jalksdj fasd lkfjla kjlk jasldfkj lkj a. aokd flajs dlfkjas dfslakj flaksjdf asdf. alskjflasd jflaksjdfkalj dslfasjdf.", noLessons: 35, noProjects: 5, noModules: 8, duration: '4 Months'},
    {id:"14234rqef4",slug: "slug-one-3", title: 'Deep Learning 3', institution: 'Coursera', teacher: 'Prof. Andrew Ng', summary: "alsk flk jasdflkj llk jalksdj fasd lkfjla kjlk jasldfkj lkj a. aokd flajs dlfkjas dfslakj flaksjdf asdf. alskjflasd jflaksjdfkalj dslfasjdf.", noLessons: 35, noProjects: 5, noModules: 8, duration: '4 Months'},
    {id:"14234rqef5",slug: "slug-one-4", title: 'Deep Learning 4', institution: 'Coursera', teacher: 'Prof. Andrew Ng', summary: "alsk flk jasdflkj llk jalksdj fasd lkfjla kjlk jasldfkj lkj a. aokd flajs dlfkjas dfslakj flaksjdf asdf. alskjflasd jflaksjdfkalj dslfasjdf.", noLessons: 35, noProjects: 5, noModules: 8, duration: '4 Months'},
    {id:"14234rqef6",slug: "slug-one-5", title: 'Deep Learning 5', institution: 'Coursera', teacher: 'Prof. Andrew Ng', summary: "alsk flk jasdflkj llk jalksdj fasd lkfjla kjlk jasldfkj lkj a. aokd flajs dlfkjas dfslakj flaksjdf asdf. alskjflasd jflaksjdfkalj dslfasjdf.", noLessons: 35, noProjects: 5, noModules: 8, duration: '4 Months'},
];

export default (state=initialState, {type, payload}) => {
    switch(type){
        case actions.ADD_COURSE:
            return state.concat(payload);
        case actions.UPDATE_COURSE:
            let {id, values} = payload;
            const updatedCourses = state.map( course => {
                if(course.id === id) {
                    return {...course, ...values}
                }
                return course;
            })
            return updatedCourses;
        default: 
            console.log('default state chosen');
            return state;
    }
};