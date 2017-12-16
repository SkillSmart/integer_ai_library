import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions';

import SearchBarForm from './forms/SearchBarForm';
import CourseTiles from './CourseTiles';

function handleSubmit(values) {
    values.nativeEvent.preventDefault();
    console.log(values);

};

const SearchBar = ({ queryResult }) => (
    <div>
        <SearchBarForm
            onSubmit={handleSubmit}
        />
      
    </div>
);

const mapStateToProps = (state) => ({
    queryResult: state.courses.courses
});

export default connect(mapStateToProps, {
    updateCourseQueryResults: actions.courseActions.update
})(SearchBar);