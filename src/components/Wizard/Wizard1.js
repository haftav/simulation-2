import React, { Component } from 'react';
import Header from '../Header/Header';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './Wizard.css';

import { updatePropName, updatePropDescription, resetState } from '../../ducks/reducer'

class Wizard1 extends Component {

    componentDidMount() {
        if (!this.props.user.username) {
            this.props.history.push('/');
        }
    }

    render() {
        console.log(this.props);
        const { updatePropDescription, updatePropName, propName, propDescription, resetState, user } = this.props;
        return (
            <div>
                <Header />
                <div className="wizard">
                    <div>
                        <h1>Step 1</h1>
                        <h1>Add new listing</h1>
                        <Link to="/dashboard"><button onClick={() => resetState(user)}>Cancel</button></Link>
                    </div>
                    <h3>Step 1</h3>
                    <h2>Property Name</h2>
                    <input value={propName} onChange={(e) => updatePropName(e.target.value)} />
                    <h2>Property Description</h2>
                    <input value={propDescription} onChange={(e) => updatePropDescription(e.target.value)} />
                    <Link to="/wizard/2"><button>Next Step</button></Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { propName, propDescription, user} = state;
    return {
        propName,
        propDescription,
        user
    }
}

let actions = {
    updatePropName,
    updatePropDescription,
    resetState

}

export default connect(mapStateToProps, actions)(Wizard1);