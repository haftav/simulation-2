import React, { Component } from 'react';
import Header from '../Header/Header';
import { connect } from 'react-redux';
import { access } from 'fs';
import { Link } from 'react-router-dom';

import { updateAddress, updateCity, updateState, updateZip, user, resetState } from '../../ducks/reducer';

class Wizard2 extends Component {

    componentDidMount() {
        if (!this.props.user.username) {
            this.props.history.push('/');
        }
    }

    render() {
        console.log(this.props);
        const { updateAddress, updateCity, updateState, updateZip, resetState,
            address, city, listingState, zip, user } = this.props;
        return (
            <div>
                <Header />
                <div className="wizard">
                    <div className="wizard-top">
                        <h1>Add new listing</h1>
                        <Link to="/dashboard" className="cancel-button"><button onClick={() => resetState(user)}>Cancel</button></Link>
                    </div>
                    <h3>Step 2</h3>
                    <div className="circle-div">
                        <div className="circle"><div className="circle-complete"></div></div>
                        <div className="circle"><div className="circle-complete"></div></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                    </div>
                    <div className="wizard-content">
                        <h2>Address</h2>
                        <input value={address} onChange={(e) => updateAddress(e.target.value)} />
                        <span className="wizard-content-span">

                            <div className="wizard-city">
                                <h2>City</h2>
                                <input value={city} onChange={(e) => updateCity(e.target.value)} />
                            </div>
                            <div className="wizard-state">
                                <h2>State</h2>
                                <input value={listingState} onChange={(e) => updateState(e.target.value)} />
                            </div>
                        </span>
                        <div className="wizard-zip">
                            <h2>Zip</h2>
                            <input value={zip} onChange={(e) => updateZip(e.target.value)} />
                        </div>
                    </div>
                    <div className="wizard-buttons">
                        <Link to="/wizard/1"><button>Previous Step</button></Link>
                        <Link to="/wizard/3"><button>Next Step</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { address, city, listingState, zip, user } = state;
    return {
        address,
        city,
        listingState,
        zip,
        user
    }
}

let actions = {
    updateAddress,
    updateCity,
    updateState,
    updateZip,
    resetState
}

export default connect(mapStateToProps, actions)(Wizard2);