import React, { Component } from 'react'
import { connect } from 'react-redux';
import actions from '../../actions';
import { Link } from 'react-router-dom';

import ProjectList from '../../components/ProjectList';
import ProjectDisplay from '../../components/ProjectDisplay';

class ProjectListPage extends Component {
  render() {
    let { project, projects, selectedProject, selectProject } = this.props;
    console.log(projects)
    return (
      <div>
        <h2>Project List</h2>
        <Link to="/projects/new">Add new Project</Link>
        <div className="sidebar">
          <ProjectList
            selectHandler={selectProject}
            projects={projects}
          />
        </div>
        <div className="main">
          <ProjectDisplay project={selectedProject} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  projects: state.projects.projects,
  selectedProject: state.projects.projects.find(project => project.id === state.projects.selectedProject)
});

export default connect(mapStateToProps, { selectProject: actions.projectActions.selectProject })(ProjectListPage);



