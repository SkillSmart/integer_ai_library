import React, { Component } from 'react';
import { connect } from 'react-redux';

import actions from '../../actions';
import ProjectForm from '../../components/forms/ProjectForm';
import ProjectList from '../../components/ProjectList';

class ProjectCreatePage extends Component {

    handleSubmit = (values) => {
        this.props.addCourse(values);
    };

    render() {
        let {projects} = this.props;
        return (
            <div>
                <div className="sidebar">
                    <ProjectList 
                        projects={projects}
                    />
                </div>
                <div className="main">
                    <h2>Create a new Project Review</h2>
                    <ProjectForm
                        onSubmit={this.handleSubmit}
                        submitLabel="Create Project Review"
                    />
                </div>
            </div>
        )
    };
};


const mapStateToProps =(state) => ({
    projects: state.projects.projects
})


export default connect(mapStateToProps, { addCourse: actions.projectActions.addProject })(ProjectCreatePage);