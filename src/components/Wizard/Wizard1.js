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
                    <div className="wizard-top">
                        <h1>Add new listing</h1>
                        <Link className="cancel-button" to="/dashboard"><button onClick={() => resetState(user)}>Cancel</button></Link>
                    </div>
                    <h3>Step 1</h3>
                    <div className="circle-div">
                        <div className="circle"><div className="circle-complete"></div></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                    </div>
                    <div className="wizard-content">
                        <h2>Property Name</h2>
                        <input value={propName} onChange={(e) => updatePropName(e.target.value)} />
                        <h2>Property Description</h2>
                        <input className="wizard-prop-description" value={propDescription} onChange={(e) => updatePropDescription(e.target.value)} />
                    </div>
                    <div className="wizard-buttons" style={{justifyContent: "center"}}>
                        <Link to="/wizard/2"><button>Next Step</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { propName, propDescription, user } = state;
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