import {combineReducers} from 'redux';
import booksReducer from './booksReducer';
import activeBookReducer from './activeBookReducer';
import authorsReducer from './authorsReducer';
import coursesReducer from './coursesReducer';
import activeCourseReducer from './activeCourseReducer';
import institutionReducer from './institutionReducer';
import publisherReducer from './publisherReducer';
import {reducer as formReducer} from 'redux-form';
import projectsReducer from './projectsReducer';

export default combineReducers({
    books: booksReducer,
    activeBook: activeBookReducer,
    authors: authorsReducer,
    courses: coursesReducer,
    activeCourse: activeCourseReducer,
    institutions: institutionReducer,
    publisher: publisherReducer,
    form: formReducer,
    projects: projectsReducer,
});