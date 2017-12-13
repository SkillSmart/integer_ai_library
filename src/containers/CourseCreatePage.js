import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

import actions from '../actions';

import CourseListItem from '../components/CourseListItem';
import CourseForm from '../components/forms/CourseForm';

class CourseCreatePage extends Component {
  constructor(props) {
    super(props)
  }

  handleSubmit = (values) => {
    this.props.addCourse(values);
    // Validate information

    // this.props.history.push('/courses');
    console.log(values);
  }
  render() {
    return (
      <div className="Header">
        <h3>Courses</h3>
        <div>
          <h2>Add a course Review</h2>
          <CourseForm
            onSubmit={this.handleSubmit}
          />
        </div>
      </div>
    )
  }
};

const mapStateToProps = (state) => ({
  courses: state.courses
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addCourse: actions.courseActions.addCourse
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseCreatePage);
