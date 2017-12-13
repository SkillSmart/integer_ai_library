import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// Include Utils
import { getBookBySlug } from '../selectors/book';
import BookForm from '../components/forms/BookForm';

class BookUpdatePage extends Component {

    handleSubmit = (values) => {
        // console.log(this.values);
    };

    render() {
        const { book } = this.props;
        console.log(book)
        return (
            <div>
                <h2>Edit your Book Review</h2>
                <Link to="/books">back to Book List</Link>
                <BookForm
                    initialValues={book}
                    onSubmit={this.handleSubmit}
                />
            </div>
        )
    }
};

const mapStateToProps = (state, props) => ({
    book: getBookBySlug(props.match.params.slug, state.books)
});

export default connect(mapStateToProps)(BookUpdatePage);
