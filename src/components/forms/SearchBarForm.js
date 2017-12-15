import React from 'react';
import {reduxForm, Field} from 'redux-form';

const SearchBar = ({onSubmit}) => {
  return (
    <form onSubmit={onSubmit}>
      <Field name="searchquery" type="text" component="input" />
      <button type="submit">Search</button>
    </form>
  )
}


export default reduxForm({
  form: "SearchBarForm"
})(SearchBar)
