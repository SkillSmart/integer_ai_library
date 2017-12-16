import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getCourseBySlug } from '../../selectors/course';
import { getAuthorByName } from '../../selectors/author';
import { Link } from 'react-router-dom';

import CourseDisplay from '../../components/CourseDisplay';
import CourseTiles from '../../components/CourseTiles';
import InstitutionBox from '../../components/InstitutionBox';
import AuthorBox from '../../components/AuthorBox';

class CourseDetailPage extends Component {

  state = {
    author: getAuthorByName(this.props.authors, this.props.review.author) || {},
  }


  render() {
    // Destructuring the varibles from the props object
    let { review, reviewedCourses, author, authors } = this.props;

    return (
      <div>
        <div className="sidebar">
          <h1>Course Detail Page</h1>
          <AuthorBox
            author={this.author} />
          <InstitutionBox
            institutionID={review.institution} />
        </div>
        <div className="main">
        <span><Link to={`/courses/reviews`}>back to Course Library</Link></span>
        <Link to={`/courses/reviews/${review.slug}/edit`}>Edit Course</Link>
          <CourseDisplay
            course={review} />
          <CourseTiles
            courses={reviewedCourses}
          />
        </div>
      </div>
    )
  }
}

// Move the creation and selection of all props down here, instead of extracting
// them in the constructor call 
const mapStateToProps = (state, {match}) => ({
  reviewedCourses: state.courses.reviewedCourses,
  review: getCourseBySlug(state.courses.reviewedCourses, match.params.slug) || {},
  authors: state.authors,
});



export default connect(mapStateToProps)(CourseDetailPage);
