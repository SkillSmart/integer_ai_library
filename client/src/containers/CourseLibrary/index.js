import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../actions';
import axios from 'axios';

import CourseSearch from '../../components/CourseSearch';
import CourseSearchFilter from '../CourseSearchFilter';

class LibraryDashboard extends Component {

  componentWillMount() {
    // if(!thicos.props.)
  }  

  render() {
    return (
      <div>
        <div>
          <CourseSearchFilter
            submitLabel="Filter courses"
            resetLabel="clear Filter"
          />
        </div>
        <div>
          <h2>Course Library Dashboard</h2>
          <CourseSearch />
        </div>
      </div>
    )
  }
};

const mapStateToProps = (state) => ({
  courses: state.courses.queryResults,

});

export default connect(mapStateToProps, actions)(LibraryDashboard);
