import React, { Component } from 'react';
import Header from '../Header/Header';

export default class Wizard4 extends Component {

    render() {
        return (
            <div>
                <h1>Wizard 4</h1>
                <Header />
                <div>
                    <h1>Add new listing</h1>
                    <button>Cancel</button>
                </div>
                <h3>Step 4</h3>
                <h2>Loan Amount</h2>
                <input />
                <h2>Monthly Mortgage</h2>
                <input />
                <div>
                    <button>Previous Step</button>
                    <button>Next Step</button>
                </div>
            </div>
        )
    }
}