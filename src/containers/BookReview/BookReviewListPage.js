import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// Redux imports
import actions from '../../actions';
import { bookActions } from '../../actions';
// Component Imports
import BookList from '../../components/BookList';
import BookListItem from '../../components/BookListItem';
import BookDisplay from '../../components/BookDisplay';


class BookListPage extends Component {
  render() {
    return (
      <div>
        <div>
          <BookList
            books={this.props.books}
            selectBook={this.props.selectBook} />
        </div>
        <div>
          <BookDisplay book={this.props.activeBook} />
        </div>
      </div>
    );
  };
};


const mapStateToProps = ({ books, activeBook }) => ({
  books,
  activeBook
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    selectBook: actions.bookActions.selectBook,
    addBook: actions.bookActions.addBook,
  }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(BookListPage);