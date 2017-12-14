import React from 'react';
import { reduxForm, Field } from 'redux-form';
import _ from 'lodash';

// Component imports
import TextInput from '../inputs/TextInput';
import TextArea from '../inputs/TextArea';

const FIELDS = {
    title: {
        label: "Title",
        type: "text",
        component: TextInput
    },
    slug: {
        label: "Slug",
        type: "text",
        component: TextInput
    },
    headline: {
        label: "Summary Headline",
        type: "text",
        component: TextArea
    },
    summary: {
        label: "Summary",
        type: "text",
        component: TextArea
    },
    publisher: {
        label: "Publisher",
        type: "text",
        component: TextInput
    },
    isbn: {
        label: "ISBN Number",
        type: "text",
        component: TextInput
    }
};


const renderField = (fieldConfig, field) => {
    let { label, type, component } = fieldConfig;
    return (
        <div>
            <label htmlFor={field}>{label}</label>
            <Field name={field} type={type} component={component} />
        </div>
    )
};


const BookForm = (props) => {

    const { handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit}>
            {_.map(FIELDS, renderField)}
            <button type="submit">Save Review</button>
        </form>
    )
};

function validate(values) {
    const errors = {};

    _.each(FIELDS, (type, field) => {
        if (!values[field]) {
            errors[field] = `Enter a valid ${field}`;
        }
    });

    return errors;
}


const mapStateToProps = (state) => ({

});


export default reduxForm({
    form: 'BookForm'
})(BookForm);