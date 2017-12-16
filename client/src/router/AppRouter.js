import React, { Component } from 'react'
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Imports 
import Layout from '../components/Layout';
import NavigationBar from '../components/NavigationBar';
import LandingPage from '../pages/LandingPage';
// Book Routes

// Index Pages: 
import BookIndexPage from '../containers/BookIndexPage';
import CourseIndexPage from '../containers/CourseIndexPage';
import ProjectIndexPage from '../containers/ProjectIndexPage';

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
                        <Route path="/courses" component={CourseIndexPage} />
                        <Route path="/books" component={BookIndexPage} />
                        <Route path="/projects" component={ProjectIndexPage} />
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