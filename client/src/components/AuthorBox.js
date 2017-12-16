import React from 'react';
import {connect} from 'react-redux';

import BookList from './BookList';


const AuthorBox = ({ authorId, authors }) => {
    if(!authors || !authorId) return null;
    
    let author = authors.find( author => author.id === authorId);
    return (
        <div>
            <div className="Header">
                <h3>Author</h3>
                <h4>{author.name}</h4>
                <ul>
                    <li>{author.location}</li>
                    <li>{author.mainLanguage}</li>
                </ul>
            </div>
            <div className="Body">
                {author.publishedIn &&
                    author.publishedIn.map(publisher => <div>{publisher.name}</div>
                    )}
            </div>
        </div>
    )
};

const mapStateToProps= (state) => ({
    authors: state.authors
})


export default connect(mapStateToProps)(AuthorBox);
