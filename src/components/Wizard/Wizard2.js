import React, { Component } from 'react';
import Header from '../Header/Header';
import { connect } from 'react-redux';
import { updateAddress, updateCity, updateState, updateZip } from '../../ducks/reducer';
import { access } from 'fs';

class Wizard2 extends Component {

    render() {
        return (
            <div>
                <h1>Wizard 2</h1>
                <Header />
                <div>
                    <h1>Add new listing</h1>
                    <button>Cancel</button>
                </div>
                <h3>Step 2</h3>
                <h2>Address</h2>
                <input />
                <h2>City</h2>
                <input />
                <h2>State</h2>
                <input />
                <h2>Zip</h2>
                <input />
                <div>
                    <button>Previous Step</button>
                    <button>Next Step</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { address, city, state, zip } = state;
    return {
        address,
        city,
        state,
        zip
    }
}

let actions = {
    updateAddress,
    updateCity,
    updateState,
    updateZip
}

export default connect(mapStateToProps, action)(Wizard2);