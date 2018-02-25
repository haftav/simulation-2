import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateLoanAmount, updateMonthlyMortgage, resetState } from '../../ducks/reducer';
import Header from '../Header/Header';

class Wizard4 extends Component {

    componentDidMount() {
        if (!this.props.user.username) {
            this.props.history.push('/');
        }
    }

    render() {
        console.log(this.props);
        const { updateLoanAmount, updateMonthlyMortgage, loanAmount, monthlyMortgage, resetState, user } = this.props;
        return (
            <div>
                <Header />
                <div className="wizard">
                    <div className="wizard-top">
                        <h1>Add new listing</h1>
                        <Link to="/dashboard" className="cancel-button"><button onClick={() => resetState(user)}>Cancel</button></Link>
                    </div>
                    <h3>Step 4</h3>
                    <div className="circle-div">
                        <div className="circle"><div className="circle-complete"></div></div>
                        <div className="circle"><div className="circle-complete"></div></div>
                        <div className="circle"><div className="circle-complete"></div></div>
                        <div className="circle"><div className="circle-complete"></div></div>
                        <div className="circle"></div>
                    </div>
                    <div className="wizard-content">
                        <h2>Loan Amount</h2>
                        <input value={loanAmount} onChange={(e) => updateLoanAmount(e.target.value)} />
                        <h2>Monthly Mortgage</h2>
                        <input value={monthlyMortgage} onChange={(e) => updateMonthlyMortgage(e.target.value)} />
                    </div>
                    <div className="wizard-buttons">
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