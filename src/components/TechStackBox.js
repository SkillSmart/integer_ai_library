import React from 'react';

export default ({stack}) => (
    <div>
        {stack.map( technology => (
            <div>
                <img src="https://placehold.it/120x90" alt={technology}/>
                <p>{technology}</p>
            </div>
        ))}
    </div>
);