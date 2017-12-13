import React from 'react';
import { reduxForm, Field } from 'redux-form';

const BookForm = (props) => {

    const { handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Title</label>
                <Field name="title" type="text" component="input" />
            </div>
            <div>
                <label htmlFor="slug">Slug</label>
                <Field name="slug" type="text" component="input" />
            </div>
            <div>
                <label htmlFor="headline">Headline</label>
                <Field name="headline" type="text" component="input" />
            </div>
            <div>
                <label htmlFor="summary">Summary</label>
                <Field name="summary" type="text" component="input" />
            </div>
            <div>
                <label htmlFor="author">Author</label>
                <Field name="author" type="text" component="input" />
            </div>
            <div>
                <label htmlFor="publisher">Publisher</label>
                <Field name="publisher" type="text" component="input" />
            </div>
            <div>
                <label htmlFor="isbn">ISBN</label>
                <Field name="isbn" type="text" component="input" />
            </div>
            <button type="submit">Save Review</button>
        </form>
    )
};


const mapStateToProps = (state) => ({

});


export default reduxForm({
    form: 'BookForm'
})(BookForm);