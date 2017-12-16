import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Aux } from 'react-aux';

const InstitutionBox = ({ institutions, institutionID }) => {
    let institution = institutions.find(inst => inst.name === institutionID)
    let { name, location, founded, founders } = institution;
    return (
        <div>
            <h2>Institution</h2>
            <div className="Header">
                <span>LOGO</span>
                <h3>{name}</h3>
                <ul>
                    {location && <li>Location: {location}</li>}
                    {founded && <li>Founded in: {founded}</li>}
                </ul>
                <div>
                    <h3>Founders</h3>
                    {founders.map(founder => <div key={founder}>{founder}</div>)}
                </div>
            </div>
            <div className="Body">
                <span>Facts Sheet</span>
                <ul>
                    <li>Students</li>
                    <li>Courses</li>
                    <li>Level</li>
                </ul>
            </div>
            <div className="Footer">
            </div>
        </div>
    )
};

const mapStateToProps = (state) => ({
    institutions: state.institutions
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({

    }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(InstitutionBox);