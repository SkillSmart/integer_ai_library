import React from 'react';

import CourseSectionNavigation from '../components/navigation/CourseSectionNavigation';
import { BrowserRouter,Route, NavLink } from 'react-router-dom';

// Route Imports
import CourseReviewListPage from './CourseReview/CourseReviewListPage';
import CourseReviewCreatePage from './CourseReview/CourseReviewCreatePage';
import CourseReviewUpdatePage from './CourseReview/CourseReviewUpdatePage';
import CourseReviewDetailPage from './CourseReview/CourseReviewDetailPage';



export default ({ match }) => {
    console.log(match.url)
    return (
        <div>
            <nav>
                <NavLink to={`${match.url}/reviews`}>Course Reviews</NavLink>
                <NavLink to={`${match.url}/search`}>Search</NavLink>
                <NavLink to={`${match.url}/reviews`}>Library</NavLink>
                <NavLink to={`${match.url}/cart`}>Cart</NavLink>
            </nav>
            <div>
                <h3>The courses Index Header !!</h3>
            </div>
            <Route path={`${match.url}/reviews`} component={CourseReviewListPage} />
            <Route path={`${match.url}/reviews/new/`} component={CourseReviewCreatePage} />
            <Route path={`${match.url}/reviews/:slug/edit`} component={CourseReviewUpdatePage} />
            <Route path={`${match.url}/courses/reviews/:slug/`} component={CourseReviewDetailPage} />


        </div>
    )
};

