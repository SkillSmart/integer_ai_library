import React, { Component } from 'react'
import uuid from 'uuid';
// Redux imports
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../actions';

// Formhelper imports
import TextInput from './inputs/TextInput';
import TextArea from './inputs/TextArea';
import NumericInput from './inputs/NumericInput';

const initialState = {
    title: '',
    slug: '',
    institution: '',
    teacher: '',
    headline: '',
    summary: '',
    noLessons: null,
    noProjects: null,
    noModules: null,
    duration: ''
};


class CourseForm extends Component {
    // Initialize the form for both new and editing Form versions
    constructor(props) {
        super(props)
        {
            props.course ?
                this.state = { ...props.course }
                :
                this.state = { ...initialState }
        }
    }



    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };


    render() {
        return (
            <form onSubmit={this.props.onSubmit}>
                <TextInput label="Title" name="title" value={this.title} onChange={this.handleChange} />
                <TextInput label="Slug" name="slug" value={this.slug} onChange={this.handleChange} />
                <TextInput label="Institution" name="institution" value={this.institution} onChange={this.handleChange} />
                <TextInput label="Teacher" name="teacher" value={this.teacher} onChange={this.handleChange} />
                <TextArea label="Headline" name="headline" value={this.headline} onChange={this.handleChange} />
                <TextArea label="Summary" name="summary" value={this.summary} onChange={this.handleChange} />
                <NumericInput label="Number of Modules" name="noModules" value={this.noModules} onChange={this.handleChange} />
                <NumericInput label="Number of Lessons" name="noLessons" value={this.noLessons} onChange={this.handleChange} />
                <NumericInput label="Number of Projects" name="noProjects" value={this.noProjects} onChange={this.handleChange} />
                <TextInput label="Duration" name="duration" value={this.duration} onChange={this.handleChange} />

                <button type="submit">Save</button>
            </form>
        )
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addCourse: actions.courseActions.addCourse
    }, dispatch);
};

export default connect(null, mapDispatchToProps)(CourseForm);
