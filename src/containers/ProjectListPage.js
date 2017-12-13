import React, { Component } from 'react'
import { connect } from 'react-redux';

import ProjectList from '../components/ProjectList';
import ProjectDisplay from '../components/ProjectDisplay';

class ProjectListPage extends Component {
  render() {
    let { project, projects, selectedProject } = this.props;

    return (
      <div>
        <h2>Project List</h2>
        <div className="sidebar">
          <ProjectList
            projects={projects}
          />
        </div>
        <div className="main">
          <ProjectDisplay
            project={selectedProject}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  projects: state.projects,
  selectedProject: state.selectedProject
});

export default connect(mapStateToProps)(ProjectListPage);