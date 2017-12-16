import React, { Component } from 'react'
import { connect } from 'react-redux';

import actions from '../../actions';

import CourseForm from '../../components/forms/CourseForm';

class CourseUpdatePage extends Component {

    
    componentWillMount () {
        if(!this.props.courseReviews) actions.courseReviewActions.fetchCourseReviews();
    }
    

    handleSubmit = (values) => {
        this.props.updateCourseReview(this.props.courseReview._id, values);
        this.props.history.push(`/courses/reviews/${values.slug}`)
    }

    render() {
        if (!this.props.courseReview) return <div>Loading Review Data...</div>
        return (
            <div>
                <h2>Update your Review</h2>
                <h3>{this.props.courseReview.title}</h3>
                <CourseForm
                    initialValues={this.props.courseReview}
                    onSubmit={this.handleSubmit} />
            </div>
        )
    }
}
const mapStateToProps = (state, props) => {
    return {
        courseReview: state.courseReviews.reviews.find(courseReview => courseReview.slug === props.match.params.slug)
    }
}

export default connect(mapStateToProps, { updateCourseReview: actions.courseReviewActions.updateCourseReview })(CourseUpdatePage);