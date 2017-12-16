import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';

import ProjectIndex from './ProjectLibrary';
import ProjectListPage from './ProjectLibrary/ProjectListPage';
import ProjectDetailPage from './ProjectLibrary/ProjectDetailPage';
import ProjectCreatePage from './ProjectLibrary/ProjectCreatePage';
import ProjectUpdatePage from './ProjectLibrary/ProjectUpdatePage';
import ProjectCollections from './ProjectLibrary/ProjectCollections';

export default ({ match }) => {
    return (
        <div>
            <nav>
                <NavLink to={`${match.url}`}>Project Library</NavLink>
                <NavLink to={`${match.url}/new`}>add Review</NavLink>
                <NavLink to={`${match.url}/collections`}>Project Library</NavLink>
            </nav>
            <Switch>
                <Route exact path={`${match.url}/`} component={ProjectIndex} />
                <Route path={`${match.url}/projects`} component={ProjectListPage} />
                <Route path={`${match.url}/collections/`} component={ProjectCollections} />
                <Route path={`${match.url}/new`} component={ProjectCreatePage} />
                <Route path={`${match.url}/:slug/edit`} component={ProjectDetailPage} />
                <Route path={`${match.url}/:slug`} component={ProjectDetailPage} />
            </Switch>
        </div>
    )
}