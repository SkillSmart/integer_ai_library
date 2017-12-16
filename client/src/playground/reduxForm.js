import React, {Component} from 'react';
import {reduxForm} from 'redux-form';

class PostsNew extends Component {

    render() {
        const { fields:{title, categories,content, handleSubmit} = this.props};
        return (
            <form>
                <h3>Create a new Post</h3>
                <div>
                    <label>Title</label>
                    <input type="text" className="form-control" {...fields.title}/>
                </div>
                <div>
                    <label>Categories</label>
                    <input type="text" className="form-control" {...fields.categories}/>
                </div>
                <div>
                    <label>Content</label>
                    <input type="text" className="form-control" {...fields.content}/>
                </div>
                <button>Submit</button>
            </form>
        );
    };
};

export default reduxForm({
    form: 'PostsNewForm',
    fields: ['title', 'categories', 'content']
})(PostsNew);