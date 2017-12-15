import React from 'react';
import reduxForm from 'redux-form';

const SearchBar = () => {
  return (
    <form onSubmit={onSubmit}>
      <Field type="text" component="search" />
      <button>Search</button>
    </form>
  )
}


export default reduxForm()(SearchBar)
