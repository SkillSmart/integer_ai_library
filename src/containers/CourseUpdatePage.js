import React, { Component } from 'react'
import { connect } from 'react-redux';

import actions from '../actions';

import CourseForm from '../components/forms/CourseForm';

class CourseUpdatePage extends Component {

    handleSubmit = (values) => {
        this.props.updateCourse(values.id, values);
        this.props.history.push(`/courses/${values.slug}`)
    }

    render() {
        return (
            <div>
                <h2>Update your Review</h2>
                <h3>{this.props.course.title}</h3>
                <CourseForm 
                    initialValues={this.props.course} 
                    onSubmit={this.handleSubmit}/>
            </div>
        )
    }
}
const mapStateToProps = (state, props) => ({
    course: state.courses.find(course => course.slug === props.match.params.slug)
})

export default connect(mapStateToProps, { updateCourse: actions.courseActions.updateCourse })(CourseUpdatePage);