import React from 'react';
import {connect} from 'react-redux';

const ProjectLibrary = (props) => {
    return (
        <div>
        <img src="https://picsum.photos/1280/360" alt="header image"/>    
        <h2>Project Library</h2>

        </div>
    )
};

export default connect()(ProjectLibrary);