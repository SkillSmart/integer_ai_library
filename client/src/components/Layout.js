import React from 'react'
import Aux from 'react-aux';

// Local imports
import NavigationBar from './NavigationBar';
import Footer from './Footer';

export default (props) => (
    <Aux>
        <NavigationBar />
        {props.children}
        <Footer />
    </Aux>
);