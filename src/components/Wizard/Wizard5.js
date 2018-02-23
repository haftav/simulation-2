import React, { Component } from 'react';
import Header from '../Header/Header';

export default class Wizard5 extends Component {

    render() {
        return (
            <div>
                <h1>Wizard 5</h1>
                <Header />
                <div>
                    <h1>Add new listing</h1>
                    <button>Cancel</button>
                </div>
                <h3>Step 5</h3>
                <h4>Recommended Rent: $</h4>
                <h2>Desired Rent</h2>
                <input />
                <div>
                    <button>Previous Step</button>
                    <button>Complete</button>
                </div>
            </div>
        )
    }
}