import React, { Component } from 'react'
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

// Local imports
import BookDisplay from '../../components/BookDisplay';
import AuthorBox from '../../components/AuthorBox';
import PublisherBox from '../../components/PublisherBox';

class BookDetailPage extends Component {
  constructor(props) {
    super(props)
    this.book = this.props.books.find((book) => book.slug === this.props.match.params.slug);
    this.author = this.props.authors.find(author => author.authorId == this.book.authorId) || {};
  }

  render() {
    return (
      <div>
        <div className="Sidebar">
          <AuthorBox
            author={this.author} />
          <PublisherBox 
            publisherId={this.book.publisherId} />
        </div>
        <div className="Main">
          <Link to="/books">back to Book Library</Link>
          <h2>Book Details Page</h2>
          <BookDisplay book={this.book} />
        </div>
      </div>
    )
  }
};

const mapStateToProps = (state) => ({
  books: state.books,
  authors: state.authors
});

export default connect(mapStateToProps)(BookDetailPage);