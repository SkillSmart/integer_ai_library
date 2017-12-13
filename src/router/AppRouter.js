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
// Course Routes
import CourseListPage from '../containers/CourseListPage';
import CourseCreatePage from '../containers/CourseCreatePage';
import CourseDetailPage from '../containers/CourseDetailPage';
import CourseUpdatePage from '../containers/CourseUpdatePage';
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
                    <Switch>
                        <Route exact path="/" component={LandingPage} />

                        <Route exact path="/books" component={BookListPage} />
                        <Route exact path="/books/new" component={BookCreatePage} />
                        <Route exact path="/books/:slug/edit" component={BookUpdatePage} />
                        <Route exact path="/books/:slug" component={BookDetailPage} />


                        <Route exact path="/courses/" component={CourseListPage} />
                        <Route exact path="/courses/new/" component={CourseCreatePage} />
                        <Route exact path="/courses/:slug/edit" component={CourseUpdatePage} />
                        <Route exact path="/courses/:slug/" component={CourseDetailPage} />

                        <Route exact path="/projects" component={ProjectListPage} />
                        <Route exact path="/projects/new" component={ProjectCreatePage} />
                        <Route exact path="/projects/:slug/edit" component={ProjectUpdatePage} />
                        <Route exact path="/projects/:slug" component={ProjectDetailPage} />
                        
                        <Route exact path="/library/" component={LibraryPage} />
                        <Route component={NotFoundPage} />
                    </Switch>
                </Layout>
            </BrowserRouter>
        )
    };
};

const mapDispatchToProps = (state) => ({
    // books: state.books
});

export default connect(mapDispatchToProps)(App);