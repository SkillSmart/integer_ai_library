import React from 'react';
import { Field, reduxForm } from 'redux-form';
import _ from 'lodash';
import Aux from 'react-aux';

const FIELDS = {
    feeType: {
        label: 'Fee Types',
        type: 'select',
        component: 'select',
        multiple: true,
        options: [
            { value: 'free', label: 'Free' },
            { value: 'certificationFee', label: 'Certification Fee' },
            { value: 'individual', label: 'Individual License' },
            { value: 'subscription', label: 'Subscription based' },
        ],
    },
    duration: {
        label: 'Course duration',
        type: 'select',
        component: 'select',
        multiple: true,
        options: [
            { value: 'days', label: '0 - 6 Days' },
            { value: 'weeklong', label: '1 - 4 Weeks' },
            { value: 'monthlong', label: '1 - 6 Months' },
            { value: 'yearlong', label: '6 - 12 Months' },
            { value: 'multiyear', label: '1 - many Years' },
        ]
    },
    topics: {
        label: 'Topics',
        type: 'select',
        multiple: true,
        component: 'select',
        options: [
            { value: 'first', label: 'first' },
            { value: 'second', label: 'first' },
            { value: 'third', label: 'first' },
            { value: 'fourth', label: 'first' },
        ]
    },
    values: {
        label: 'Best so far',
        type: 'checkbox',
        component: 'input',
        options: [
            { id: 'first', name: 'first' },
            { id: 'second', name: 'second' },
            { id: 'third', name: 'third' },
            { id: 'fourth', name: 'fourth' },
        ]
    },
    name: {
        label: 'Label',
        type: 'text',
        component: 'input',
    },
};

// Render the Fields to the Form
const renderField = (field, name) => {
    let { label, type, component, options, multiple } = field;
    switch (type) {
        case "input":
            return (
                <div key={name} className="input-group">
                    <label htmlFor={name}>{label}</label>
                    <Field name={name} type={type} component={component} />
                </div>
            );
        case "select":
            let multiple = multiple && "multiple";
            return (
                <div className="input-group">
                    <label htmlFor={name}>{label}</label>
                    <Field name={name} component={component} multiple>
                        {_.map(options, (option => (
                            <option value={option.value}>{option.label}</option>
                        )))}
                    </Field>
                </div>
            );

        case "checkbox":
            return (
                <div className="input-group">
                    <label>{label}</label>
                    <div>
                        {_.map(options, (option => (
                            <div className="input-group">
                                <Field
                                    name={option.name}
                                    id={option.id}
                                    component={component}
                                    type={type}
                                />
                                <label htmlFor={option.id}>{option.name}</label>
                            </div>
                        )))}
                    </div>
                </div>
            );

        case "radio":
            return (
                <div className="input-group">
                    <label htmlFor={name}>{label}</label>
                    {_.map(options, (option => (
                        <label htmlFor>
                            <Field name={name} component={component} type={type} value={option.value} />
                            {option.label}
                        </label>)))}
                </div>
            );

        default:
            return (
                <div key={name} className="input-group">
                    <label htmlFor={name}>{label}</label>
                    <Field name={name} type={type} component={component} />
                </div>
            );
    }

};

// Render the FORM
const CourseSearchFilterForm = ({ onSubmit, reset, submitLabel, resetLabel }) => (
    <form onSubmit={onSubmit}>
        <button type="submit">{submitLabel}</button>
        <button
            type="button"
            onClick={reset}>{resetLabel}</button>
        {_.map(FIELDS, renderField)}
    </form>
)

export default reduxForm({
    form: 'CourseSearchFilterForm'
})(CourseSearchFilterForm)
