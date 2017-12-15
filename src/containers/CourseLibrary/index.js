import React, { Component } from 'react';
import {connect} from 'react-redux';

import SearchBar from '../../components/SearchBar';

class LibraryDashbaord extends Component {
  render() {
    return (
      <div>
        <h2>Course Library Dashboard</h2>
        <img src="https://placehold.it/1200x350" alt="header Image" />
        <SearchBar />
      </div>
    )
  }
};

const mapStateToProps = (state) => ({
    courses: state.courses.queryResults,

});

export default connect(mapStateToProps)(LibraryDashbaord);
