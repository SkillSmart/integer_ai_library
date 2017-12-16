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
        component: "input"
    },
    slug: {
        label: "Slug",
        type: "text",
        component: "input"
    },
    headline: {
        label: "Summary Headline",
        type: "text",
        component: "textarea"
    },
    summary: {
        label: "Summary",
        type: "text",
        component: "textarea"
    },
    publisher: {
        label: "Publisher",
        type: "text",
        component: "input"
    },
    isbn: {
        label: "ISBN Number",
        type: "text",
        component: "input"
    }
};


const renderField = (fieldConfig, field) => {
    let { label, type, component, options } = fieldConfig;
    return (
        <div key={field}>
            <label htmlFor={field}>{label}</label>
            <Field name={field} type={type} options={options} component={component} />
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