import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getCourseBySlug } from '../selectors/course';
import { getAuthorByName } from '../selectors/author';
import { Link } from 'react-router-dom';

import CourseDisplay from '../components/CourseDisplay';
import CourseTiles from '../components/CourseTiles';
import InstitutionBox from '../components/InstitutionBox';
import AuthorBox from '../components/AuthorBox';

class CourseDetailPage extends Component {

  state = {
    author: getAuthorByName(this.props.authors, this.props.course.author) || {},
  }


  render() {
    // Destructuring the varibles from the props object
    let { course, courses, author, authors } = this.props;

    return (
      <div>
        <div className="sidebar">
          <AuthorBox
            author={this.author} />
          <InstitutionBox
            institutionID={course.institution} />
        </div>
        <div className="main">
        <span><Link to="/courses">back to Course Library</Link></span>
        <Link to={`/courses/${course.slug}/edit`}>Edit Course</Link>
          <CourseDisplay
            course={course} />
          <CourseTiles
            courses={courses}
          />
        </div>
      </div>
    )
  }
}

// Move the creation and selection of all props down here, instead of extracting
// them in the constructor call 
const mapStateToProps = (state, props) => ({
  courses: state.courses,
  course: getCourseBySlug(state.courses, props.match.params.slug) || {},
  authors: state.authors,
});



export default connect(mapStateToProps)(CourseDetailPage);
