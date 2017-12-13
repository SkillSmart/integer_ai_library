import React, { Component } from 'react';
import { connect } from 'react-redux';

import actions from '../actions';
import ProjectForm from '../components/forms/ProjectForm';

class ProjectCreatePage extends Component {

    handleSubmit = (values) => {
        this.props.addCourse(values);
    };

    render() {
        return (
            <div>
                <h2>Create a new Project Review</h2>
                <ProjectForm 
                    onSubmit={this.handleSubmit}
                    />
            </div>
        )
    };
};


export default connect(null, { addCourse: actions.projectActions.addProject })(ProjectCreatePage);