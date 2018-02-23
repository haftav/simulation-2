import React, { Component } from 'react';
import Header from '../Header/Header';

export default class Wizard1 extends Component {

    render() {
        return (
            <div>
                <h1>Wizard 1</h1>
                <Header />
                <div>
                    <h1>Add new listing</h1>
                    <button>Cancel</button>
                </div>
                <h3>Step 1</h3>
                <h2>Property Name</h2>
                <input />
                <h2>Property Description</h2>
                <input />
                <button>Next Step</button>
            </div>
        )
    }
}