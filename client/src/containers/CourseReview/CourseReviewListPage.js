import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import actions from '../../actions';
import { getCourseReviewById } from '../../selectors/courseReview';

import CourseList from '../../components/CourseList';
import CourseReviewDisplay from '../../components/CourseReviewDisplay';
import CourseReviewTiles from '../../components/CourseReviewTiles';
import { fetchCourseReviews } from '../../actions/courseReviews';


class CourseListPage extends Component {
    constructor(props) {
        super(props);
    };

    componentWillMount() {
        if (!this.props.courseReviews) {
            this.props.fetchReviews()
        }
    };


    render() {
        let { selectReview, selectedReview, courseReviews, match } = this.props;
        return (
            <div>
                <Link to={`${match.url}/new`}>Add Review</Link>
                <div className="sidebar">
                    <h3>Our Course Reviews</h3>
                    <CourseList
                        onClick={selectReview}
                        courses={courseReviews} />
                </div>

                {courseReviews ? (
                    <div className="main">
                        <h3>Course Review in Detail</h3>
                        <CourseReviewTiles courses={courseReviews} />
                        <CourseReviewDisplay course={getCourseReviewById(courseReviews, selectedReview)} />
                    </div>
                ) : (
                        <div className="main">
                            <h2>Start up the Course Review Section</h2>
                            <p>Currently there are no Reviews available</p>
                        </div>
                    )
                }
            </div>
        )
    };
};

const mapStateToProps = (state) => ({
    courseReviews: state.courseReviews.reviews,
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        selectReview: actions.courseReviewActions.selectCourseReview,
        fetchReviews: actions.courseReviewActions.fetchCourseReviews,
    }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseListPage);
