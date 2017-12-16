import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getCourseReviewBySlug } from '../../selectors/courseReview';
import { getAuthorByName } from '../../selectors/author';
import { Link } from 'react-router-dom';

import actions from '../../actions';

import CourseReviewDisplay from '../../components/CourseReviewDisplay';
import CourseReviewTiles from '../../components/CourseReviewTiles';
import InstitutionBox from '../../components/InstitutionBox';
import AuthorBox from '../../components/AuthorBox';

class CourseDetailPage extends Component {

  componentWillMount() {
    if(! this.props.courseReviews) this.props.history.push('/courses/reviews');
  }


  render() {
    if(!this.props.courseReviews) return <div>Loading.....</div>
    // Destructuring the varibles from the props object
    let {  courseReviews, authors } = this.props;
    let review = getCourseReviewBySlug(this.props.courseReviews, this.props.match.params.slug)
    console.log(review)


    return (
      <div>
        <div className="sidebar">
          <h1>Course Detail Page</h1>
          <AuthorBox
            review={review.author} />
          <InstitutionBox
            institutionID={review.institution} />
        </div>
        <div className="main">
          <span><Link to={`/courses/reviews`}>back to Course Library</Link></span>
          <Link to={`/courses/reviews/${review.slug}/edit`}>Edit Course</Link>
        <CourseReviewDisplay
            course={review} />
          <CourseReviewTiles
            courses={courseReviews}
          />
        </div>
      </div>
    )
  }
}

// Move the creation and selection of all props down here, instead of extracting
// them in the constructor call 
const mapStateToProps = (state, props) => {
  return {
    courseReviews: state.courseReviews.reviews,
    authors: state.authors,
  }
};



export default connect(mapStateToProps)(CourseDetailPage);
