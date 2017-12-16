import React from 'react';
import {connect} from 'react-redux';

const PublisherBox = ({ publisherId, publishers }) => {
    let publisher = publishers.find( publisher => publisher.id === publisherId);
    // if(!bookPublisher) return null;

    return (
        <div>
            <h2>Publisher</h2>
            <h3>{publisher.name}</h3>
            <ul>
                {publisher.locations.map( location => <li key={location}>{location}</li>)}
            </ul>
        </div>
    )
};

const mapStateToProps = (state) => ({
    publishers: state.publisher
})

export default connect(mapStateToProps)(PublisherBox);
