import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import actions from '../actions';
import { getProjectBySlug } from '../selectors/project';
import ProjectDisplay from '../components/ProjectDisplay';
import ProjectSlideshow from '../components/ProjectSlideshow';
import ProjectStatusBar from '../components/ProjectStatusBar';
// Sidebar imports
import TechStackBox from '../components/TechStackBox';

class ProjectDetailPage extends Component {

  handleSubmit = (values) => {
    this.props.updateProject(values.id, values)
  };

  render() {
    let { project } = this.props;

    return (
      <div>
        <div className="sidebar">
        </div>
        <div className="main">
          <h1>{project.title}</h1>
          <ProjectStatusBar
            project={project}
          />
          <Link to="/projects">back to Project Overview</Link>
          <ProjectDisplay
            project={project}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  project: getProjectBySlug(state.projects.projects, props.match.params.slug)
});

export default connect(mapStateToProps, { updateProject: actions.projectActions.updateProject })(ProjectDetailPage);


// <TechStackBox project={project.stack} />
// 