import React from 'react';
import { Route, NavLink } from 'react-router-dom';

// Library Pages
import BookLibrary from './BookLibrary';
// Review Pages
import BookReviewCreatePage from './BookReview/BookReviewCreatePage';
import BookReviewDetailPage from './BookReview/BookReviewDetailPage';
import BookReviewListPage from './BookReview/BookReviewListPage';
import BookReviewUpdatePage from './BookReview/BookReviewUpdatePage';


export default ({ match }) => (
    <div>
        <nav>
            <NavLink to={`${match.url}`}>Library</NavLink>
            <NavLink to={`${match.url}/reviews`} >Reviews</NavLink>
            <NavLink to={`${match.url}/reviews/new`}>Collection</NavLink>
            <NavLink to={`${match.url}/reviews/:slug`}>Dashboard</NavLink>
        </nav>
        <Route exact path={`${match.url}`} component={BookLibrary} />
        <Route path={`${match.url}/reviews`} component={BookReviewListPage} />
        <Route path={`${match.url}/reviews/:slug`} component={BookReviewDetailPage} />
        <Route path={`${match.url}/reviews/:slug/edit`} component={BookReviewUpdatePage} />
        <Route path={`${match.url}/reviews/new`} component={BookReviewCreatePage} />
    </div>
)