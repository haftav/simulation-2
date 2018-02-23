import React, { Component } from 'react';
import Header from '../Header/Header';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { updatePropName, updatePropDescription } from '../../ducks/reducer'

class Wizard1 extends Component {

    render() {
        console.log(this.props);
        const { updatePropDescription, updatePropName, propName, propDescription } = this.props;
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
                <input value={propName}onChange={(e) => updatePropName(e.target.value)}/>
                <h2>Property Description</h2>
                <input value={propDescription}onChange={(e) => updatePropDescription(e.target.value)}/>
                <Link to="/wizard/2"><button>Next Step</button></Link>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { propName, propDescription } = state;
    return {
        propName,
        propDescription
    }
}

let actions = {
    updatePropName,
    updatePropDescription
}

export default connect(mapStateToProps, actions)(Wizard1);