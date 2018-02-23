import React, { Component } from 'react';
import Header from '../Header/Header';

export default class Wizard2 extends Component {

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