import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateDesiredRent, resetState } from '../../ducks/reducer';

import Header from '../Header/Header';

class Wizard5 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            redirect: false
        }

        this.addToDatabase = this.addToDatabase.bind(this);
    }

    addToDatabase() {
        this.props.resetState(this.props.user);
    }

    render() {
        const { updateDesiredRent, resetState, desiredRent, monthlyMortgage, user } = this.props;
        console.log(this.props);
        return (
            <div>
                <h1>Wizard 5</h1>
                <Header />
                <div>
                    <h1>Add new listing</h1>
                    <button>Cancel</button>
                </div>
                <h3>Step 5</h3>
                <h4>Recommended Rent: ${Number(monthlyMortgage) + Number((monthlyMortgage / 4))}</h4>
                <h2>Desired Rent</h2>
                <input value={desiredRent} onChange={(e) => updateDesiredRent(e.target.value)}/>
                <div>
                    <Link to="/wizard/4"><button>Previous Step</button></Link>
                    <button onClick={this.addToDatabase}>Complete</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { monthlyMortgage, desiredRent, user } = state;
    return {
        monthlyMortgage,
        desiredRent,
        user
    }
}

let actions = {
    updateDesiredRent,
    resetState
}

export default connect(mapStateToProps, actions)(Wizard5);