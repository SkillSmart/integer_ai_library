import React, { Component } from 'react'
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Imports 
import Layout from '../components/Layout';
import NavigationBar from '../components/NavigationBar';
import LandingPage from '../pages/LandingPage';
// Book Routes
import BookListPage from '../containers/BookListPage';
import BookDetailPage from '../containers/BookDetailPage';
import BookCreatePage from '../containers/BookCreatePage';
import BookUpdatePage from '../containers/BookUpdatePage';
// COURSES: 
import CourseIndexPage from '../containers/CourseIndexPage';

// Project Routes
import ProjectListPage from '../containers/ProjectListPage';
import ProjectCreatePage from '../containers/ProjectCreatePage';
import ProjectUpdatePage from '../containers/ProjectUpdatePage';
import ProjectDetailPage from '../containers/ProjectDetailPage';
// Library Routes
import LibraryPage from '../pages/LibraryPage';

// Exception Routes
import NotFoundPage from '../pages/NotFoundPage';

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <Layout>
                    <Route exact path="/" component={LandingPage} />
                    <Route path="/courses" component={CourseIndexPage} />
                </Layout>
            </BrowserRouter>
        )
    };
};

const mapDispatchToProps = (state) => ({
    // books: state.books
});

export default connect(mapDispatchToProps)(App);

// <Route path="/books" component={BookListPage} />
// <Route path="/books/new" component={BookCreatePage} />
// <Route path="/books/:slug/edit" component={BookUpdatePage} />
// <Route path="/books/:slug" component={BookDetailPage} />


// <Route path="/projects" component={ProjectListPage} />
// <Route path="/projects/new" component={ProjectCreatePage} />
// <Route path="/projects/:slug/edit" component={ProjectUpdatePage} />
// <Route path="/projects/:slug" component={ProjectDetailPage} />

// <Route path="/library/" component={LibraryPage} />
// <Route component={NotFoundPage} />