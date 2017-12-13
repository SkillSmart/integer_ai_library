import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import actions from '../actions';

import CourseList from '../components/CourseList';
import CourseDisplay from '../components/CourseDisplay';
import CourseTiles from '../components/CourseTiles';


class CourseListPage extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        console.log(this.props)
        let { selectCourse, activeCourse, courses } = this.props;
        return (
            <div>
                <Link to={'/courses/new'}>Add Review</Link>
                <div className="sidebar">
                    <h3>The Course List Page</h3>
                    <CourseList
                        onSelect={selectCourse}
                        courses={courses} />
                </div>
                <div className="main">
                    <h3>Course Detail</h3>
                    <CourseDisplay course={activeCourse} />
                    <CourseTiles courses={courses} />
                </div>
            </div>
        )
    }
};

const mapStateToProps = (state) => ({
    courses: state.courses,
    activeCourse: state.activeCourse,
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        selectCourse: actions.courseActions.selectCourse,
    }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseListPage);
