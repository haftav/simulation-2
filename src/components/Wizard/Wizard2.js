import React, { Component } from 'react';
import Header from '../Header/Header';
import { connect } from 'react-redux';
import { access } from 'fs';
import { Link } from 'react-router-dom';

import { updateAddress, updateCity, updateState, updateZip } from '../../ducks/reducer';

class Wizard2 extends Component {

    render() {
        console.log(this.props);
        const { updateAddress, updateCity, updateState, updateZip,
                address, city, listingState, zip } = this.props;
        return (
            <div>
                <Header />
                <h1>Wizard 2</h1>
                <div>
                    <h1>Add new listing</h1>
                    <button>Cancel</button>
                </div>
                <h3>Step 2</h3>
                <h2>Address</h2>
                <input value={address} onChange={(e) => updateAddress(e.target.value)}/>
                <h2>City</h2>
                <input value={city} onChange={(e) => updateCity(e.target.value)}/>
                <h2>State</h2>
                <input value={listingState} onChange={(e) => updateState(e.target.value)}/>
                <h2>Zip</h2>
                <input value={zip} onChange={(e) => updateZip(e.target.value)}/>
                <div>
                    <Link to="/wizard/1"><button>Previous Step</button></Link>
                    <Link to="/wizard/3"><button>Next Step</button></Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { address, city, listingState, zip } = state;
    return {
        address,
        city,
        listingState,
        zip
    }
}

let actions = {
    updateAddress,
    updateCity,
    updateState,
    updateZip
}

export default connect(mapStateToProps, actions)(Wizard2);