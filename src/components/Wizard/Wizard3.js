import React, { Component } from 'react';
import Header from '../Header/Header';

export default class Wizard3 extends Component {

    render() {
        return (
            <div>
                <h1>Wizard 3</h1>
                <Header />
                <div>
                    <h1>Add new listing</h1>
                    <button>Cancel</button>
                </div>
                <h3>Step 3</h3>

                <div>

                </div>
                <h2>Image URL</h2>
                <input />

                <div>
                    <button>Previous Step</button>
                    <button>Next Step</button>
                </div>
            </div>

        )
    }
}