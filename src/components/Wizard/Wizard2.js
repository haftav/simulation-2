import React, { Component } from 'react';
import Header from '../Header/Header';
import { connect } from 'react-redux';
import { access } from 'fs';
import { Link } from 'react-router-dom';

import { updateAddress, updateCity, updateState, updateZip, user, resetState } from '../../ducks/reducer';

class Wizard2 extends Component {

    render() {
        console.log(this.props);
        const { updateAddress, updateCity, updateState, updateZip, resetState,
            address, city, listingState, zip, user } = this.props;
        return (
            <div>
                <Header />
                <div className="wizard">
                    <h1>Step 2</h1>
                    <div>
                        <h1>Add new listing</h1>
                        <Link to="/dashboard"><button onClick={() => resetState(user)}>Cancel</button></Link>
                    </div>
                    <h3>Step 2</h3>
                    <h2>Address</h2>
                    <input value={address} onChange={(e) => updateAddress(e.target.value)} />
                    <h2>City</h2>
                    <input value={city} onChange={(e) => updateCity(e.target.value)} />
                    <h2>State</h2>
                    <input value={listingState} onChange={(e) => updateState(e.target.value)} />
                    <h2>Zip</h2>
                    <input value={zip} onChange={(e) => updateZip(e.target.value)} />
                    <div>
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