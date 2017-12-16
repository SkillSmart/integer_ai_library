import React, { Component } from 'react'
import { connect } from 'react-redux';

import actions from '../../actions';
import BookForm from '../../components/BookForm';

class BookCreatePage extends Component {
    constructor (props) {
        super(props)
    };

    handleSubmit = (values) => {
        console.log(values);
    };

    render() {
        return (
            <div>
                <h2>Add a new Book Review</h2>
                <BookForm 
                    onSubmit={this.handleSubmit}
                />
            </div>
        )
    }
};


const mapStateToProps = (state) => {

};

export default connect(mapStateToProps, {})(BookCreatePage)
