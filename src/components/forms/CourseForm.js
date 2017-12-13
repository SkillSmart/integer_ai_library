import React from 'react';
import { reduxForm, Field } from 'redux-form';


let CourseForm = props => {

    const { handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit}>
            <div className="input-group">
                <label htmlFor="title">Course Title</label>
                <Field name="title" type="text" label="Title" component="input" />
            </div>
            <div className="input-group">
                <label htmlFor="slug">Course Slug</label>
                <Field name="slug" type="text" label="Slug" component="input" />
            </div>
            <div className="input-group">
                <label htmlFor="institution">Provider / Institution</label>
                <Field name="institution" type="text" label="Institution" component="input" />
            </div>
            <div className="input-group">
                <label htmlFor="teacher">Teacher</label>
                <Field name="teacher" type="text" label="Teacher" component="input" />
            </div>
            <div className="input-group">
                <label htmlFor="headline">Quick Summary Headline</label>
                <Field name="headline" type="text" label="Headline" component="input" />
            </div>

            <div className="input-group">
                <label htmlFor="summary">Course Summary</label>
                <Field name="summary" type="text" label="Summary" component="input" />
            </div>
            <div className="input-group">
                <label htmlFor="noModules">Number of Modules</label>
                <Field name="noModules" type="numeric" label="Number of Modules" component="input" />
            </div>
            <div className="input-group">
                <label htmlFor="noLessons">Number of Lessons</label>
                <Field name="noLessons" type="numeric" label="Number of Lessons" component="input" />
            </div>
            <div className="input-group">
                <label htmlFor="noProjects">Number of Projects</label>
                <Field name="noProjects" type="numeric" label="Number of Projects" component="input" />
            </div>
            <div className="input-group">
                <label htmlFor="duration">Duration</label>
                <Field name="duration" type="text" label="Duration" component="input" />
            </div>

            <button type="submit">Save</button>
        </form>
    )
};


export default reduxForm({
    form: 'CreateCourseForm',
})(CourseForm);
