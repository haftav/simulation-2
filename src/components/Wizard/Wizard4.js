import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateLoanAmount, updateMonthlyMortgage, resetState } from '../../ducks/reducer';
import Header from '../Header/Header';

class Wizard4 extends Component {

    render() {
        console.log(this.props);
        const { updateLoanAmount, updateMonthlyMortgage, loanAmount, monthlyMortgage, resetState, user } = this.props;
        return (
            <div>
                <Header />
                <div className="wizard">
                    <h1>Step 4</h1>
                    <div>
                        <h1>Add new listing</h1>
                        <Link to="/dashboard"><button onClick={() => resetState(user)}>Cancel</button></Link>
                    </div>
                    <h3>Step 4</h3>
                    <h2>Loan Amount</h2>
                    <input value={loanAmount} onChange={(e) => updateLoanAmount(e.target.value)} />
                    <h2>Monthly Mortgage</h2>
                    <input value={monthlyMortgage} onChange={(e) => updateMonthlyMortgage(e.target.value)} />
                    <div>
                        <Link to="/wizard/3"><button>Previous Step</button></Link>
                        <Link to="/wizard/5"><button>Next Step</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { loanAmount, monthlyMortgage, user } = state;
    return {
        loanAmount,
        monthlyMortgage,
        user
    }
}

let actions = {
    updateLoanAmount,
    updateMonthlyMortgage,
    resetState
}

export default connect(mapStateToProps, actions)(Wizard4);