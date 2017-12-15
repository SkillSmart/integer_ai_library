import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import actions from '../../actions';
import {getCourseById} from '../../selectors/course';

import CourseList from '../../components/CourseList';
import CourseDisplay from '../../components/CourseDisplay';
import CourseTiles from '../../components/CourseTiles';


class CourseListPage extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        console.log(this.props)
        let { selectReview, review, reviewedCourses } = this.props;
        return (
            <div>
                <Link to={'/courses/new'}>Add Review</Link>
                <div className="sidebar">
                    <h3>Our Course Reviews</h3>
                    <CourseList
                        onClick={selectReview}
                        courses={reviewedCourses} />
                </div>
                <div className="main">
                    <h3>Course Review in Detail</h3>
                    <CourseDisplay course={review} />
                    <CourseTiles courses={reviewedCourses} />
                </div>
            </div>
        )
    }
};

const mapStateToProps = (state) => ({
    reviewedCourses: state.courses.reviewedCourses,
    review: getCourseById(state.courses.reviewedCourses, state.courses.selectedReview),
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        selectReview: actions.courseActions.selectCourseReview
    }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseListPage);
