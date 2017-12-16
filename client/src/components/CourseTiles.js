import React, { Component } from 'react'

import CourseTile from './CourseTile';

class CourseTiles extends Component {
    state = {
        selectedCard: undefined
    }

    onSelect = (courseId) => {
        console.log('Course was selected', courseId);
    };

    render() {
        return (
            <div>
                {this.props.courses.map(
                    course => <CourseTile
                        onClick={() => this.onSelect(course.id)}
                        key={course.id} 
                        course={course} />
                )}
            </div>
        )
    }
}

// const mapStateToProps = (state) => ({
//    courses: state.courses 
// });

export default CourseTiles;