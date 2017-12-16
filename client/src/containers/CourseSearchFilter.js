import React from 'react';
import { connect } from 'react-redux';

import CourseSearchFilterForm from '../components/forms/CourseSearchFilterForm'

const handleSubmit = (values) => {
    values.nativeEvent.preventDefault();
};

const handleReset = (values) => {
    values = {}
}

const CourseSearchFilter = ({handleSubmit, submitLabel, resetLabel}) => {
    return (
        <div>
            <h3>Search Filter</h3>
            <CourseSearchFilterForm
                submitLabel={submitLabel}
                resetLabel={resetLabel}
                reset={handleReset}
                onSubmit={handleSubmit}
            />
        </div>
    )
}

export default connect()(CourseSearchFilter);