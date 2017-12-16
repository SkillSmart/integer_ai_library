import React from 'react';
import { reduxForm, Field } from 'redux-form';
import _ from 'lodash';

// Set the Fields
const FIELDS = {
    title: {
        label: "Project Title",
        type: "text",
        component: "input"
    },
    slug: {
        label: "Project Slug",
        type: "text",
        component: 'input'
    },
    headline: {
        label: 'Project Headline',
        type: 'text',
        component: 'input'
    },
    situation: {
        label: 'Initial Situation',
        type: 'text',
        component: 'textarea'
    },
    usecase: {
        label: 'UseCase Description',
        type: 'text',
        component: 'textarea'
    },
    tags: {
        label: 'Tags',
        type: 'text',
        component: 'input'
    },
    stack: {
        label: 'Technologies used',
        type: 'text',
        component: 'input'
    },
    status: {
        label: 'Current Project Status',
        type: 'text',
        component: 'input'
    },
    url: {
        label: 'Project url (if applicable)',
        type: 'text',
        component: 'input'
    },
    startDate: {
        label: 'Project Start Date',
        type: 'date',
        component: 'date'
    },
    endDate: {
        label: 'Project End Date',
        type: 'date',
        component: 'date'
    }
};

// Render the FormFields
const renderField = ({ label, type, component }, name) => (
    <div className="input-group">
        <label htmlFor={name} className="input-label">{label}</label>
        <Field name={name} type={type} component={component} />
    </div>
);

// Construct the Form
const ProjectForm = (props) => {
    let { handleSubmit, submitLabel } = props;
    return (
        <form onSubmit={handleSubmit}>
            {_.map(FIELDS, renderField)}
            <button type="submit">{submitLabel}</button>
        </form>
    )
};

// Set validation rules
const validate = (values) => {
    let errors = {};

    return errors
};

export default reduxForm({
    form: 'ProjectForm',
    validate
}, )(ProjectForm);