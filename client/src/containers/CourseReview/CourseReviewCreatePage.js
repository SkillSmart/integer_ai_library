import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

// Import Action Creators
import actions from '../../actions';

import CourseListItem from '../../components/CourseListItem';
import CourseForm from '../../components/forms/CourseForm';

class CourseCreatePage extends Component {
  constructor(props) {
    super(props)
  }

  handleSubmit = (values) => {
    this.props.addCourseReview(values);
    // Validate information

    this.props.history.push('/courses/reviews');
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
  reviewedCourses: state.reviewedCourses
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addCourseReview: actions.courseReviewActions.addCourseReview
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseCreatePage);
