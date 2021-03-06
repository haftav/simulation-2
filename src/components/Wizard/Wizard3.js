import React, { Component } from 'react';
import Header from '../Header/Header';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { updateImage, resetState } from '../../ducks/reducer';

class Wizard3 extends Component {

    componentDidMount() {
        if (!this.props.user.username) {
            this.props.history.push('/');
        }
    }

    render() {
        console.log(this.props);
        const { updateImage, image, user } = this.props;
        return (
            <div>
                <Header />
                <div className="wizard">
                    <div className="wizard-top">
                        <h1>Add new listing</h1>
                        <Link to="/dashboard" className="cancel-button"><button onClick={() => resetState(user)}>Cancel</button></Link>
                    </div>
                    <h3>Step 3</h3>
                    <div className="circle-div">
                        <div className="circle"><div className="circle-complete"></div></div>
                        <div className="circle"><div className="circle-complete"></div></div>
                        <div className="circle"><div className="circle-complete"></div></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                    </div>
                    <div className="wizard-content">
                        <div className="wizard-image">

                        </div>
                        <h2>Image URL</h2>
                        <input value={image} onChange={(e) => updateImage(e.target.value)} />
                    </div>

                    <div className="wizard-buttons">
                        <Link to="/wizard/2"><button>Previous Step</button></Link>
                        <Link to="/wizard/4"><button>Next Step</button></Link>
                    </div>
                </div>
            </div>

        )
    }
}

function mapStateToProps(state) {
    const { image, user } = state;
    return {
        image,
        user
    }
}

let actions = {
    updateImage,
    resetState
}

export default connect(mapStateToProps, actions)(Wizard3);