import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { logout } from '../../ducks/reducer';

import './Header.css';

class Header extends Component {
    constructor() {
        super();

        this.state = {
            redirect: false
        }

        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout() {
        axios.post('/api/auth/logout', {}).then(res => {
            this.props.logout();
            this.setState({ redirect: true })
        })
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to="/" />
        }
        return (
            <div className="header">
                <div className="header-content">
                    <div className="header-left">
                        <img src="https://raw.githubusercontent.com/DevMountain/simulation-2/master/assets/auth_logo.png" alt="house" />
                        <h1>Houser Dashboard</h1>
                    </div>
                    <button onClick={this.handleLogout}>Log Out</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { user } = state;
    return {
        user
    }
}

let actions = {
    logout
}

export default connect(mapStateToProps, actions)(Header);