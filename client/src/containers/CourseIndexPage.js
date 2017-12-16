import React from 'react';

import CourseSectionNavigation from '../components/navigation/CourseSectionNavigation';
import { Switch, Route, NavLink } from 'react-router-dom';

import actions from '../actions';
// CourseLibrary
import CourseLibraryDashboard from './CourseLibrary';
import CourseCollections from './CourseLibrary/Collections';

// CourseReview Routes
import CourseReviewListPage from './CourseReview/CourseReviewListPage';
import CourseReviewCreatePage from './CourseReview/CourseReviewCreatePage';
import CourseReviewUpdatePage from './CourseReview/CourseReviewUpdatePage';
import CourseReviewDetailPage from './CourseReview/CourseReviewDetailPage';



export default ({ match }) => {
    console.log(match.url)
    // Initialize State for this section
    actions.courseReviewActions.fetchCourseReviews();

    return (    
        <div>
            <nav>
                <NavLink to={`${match.url}`}>Library</NavLink>
                <NavLink to={`${match.url}/reviews`}>Course Reviews</NavLink>
                <NavLink to={`${match.url}/collections`}>Collections</NavLink>
                <NavLink to={`${match.url}/cart`}>Cart</NavLink>
            </nav>
            <div>
                <h3>The courses Index Header !!</h3>
            </div>
            <Switch>
                <Route exact path={`${match.url}`} component={CourseLibraryDashboard} />
                <Route exact path={`${match.url}/reviews`} component={CourseReviewListPage} />
                <Route exact path={`${match.url}/reviews/new`} component={CourseReviewCreatePage} />
                <Route path={`${match.url}/reviews/:slug/edit`} component={CourseReviewUpdatePage} />
                <Route path={`${match.url}/reviews/:slug`} component={CourseReviewDetailPage} />
                
                <Route path={`${match.url}/collections`} component={CourseCollections} />
                
            </Switch>
        </div>
    )
};

