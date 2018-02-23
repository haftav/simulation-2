import React, { Component } from 'react';
import Header from '../Header/Header';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { updateImage } from '../../ducks/reducer';

class Wizard3 extends Component {

    render() {
        console.log(this.props);
        const { updateImage, image } = this.props;
        return (
            <div>
                <Header />
                <h1>Wizard 3</h1>
                <div>
                    <h1>Add new listing</h1>
                    <button>Cancel</button>
                </div>
                <h3>Step 3</h3>

                <div>

                </div>
                <h2>Image URL</h2>
                <input value={image} onChange={(e) => updateImage(e.target.value)}/>

                <div>
                    <Link to="/wizard/2"><button>Previous Step</button></Link>
                    <Link to="/wizard/4"><button>Next Step</button></Link>
                </div>
            </div>

        )
    }
}

function mapStateToProps(state) {
    const { image } = state;
    return {
        image
    }
}

let actions = {
    updateImage
}

export default connect(mapStateToProps, actions)(Wizard3);