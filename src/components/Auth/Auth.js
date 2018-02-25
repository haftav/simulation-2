import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';

import { connect } from 'react-redux';
import { updateUser } from '../../ducks/reducer'

import './Auth.css'


class Auth extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
            // redirect: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleChange(prop, val) {
        this.setState({ 
            [prop]: val
         })
    }

    handleRegister() {
        const { username, password } = this.state;
        axios.post('/api/auth/register', { username, password }).then(res => {
            if (res.data) {
                this.props.updateUser({ username: res.data.username, id: res.data.id })
                this.props.history.push('/dashboard')
                // this.setState({ redirect: true })
            }
        })
    }

    handleLogin() {
        const { username, password } = this.state;
        axios.post('/api/auth/login', { username, password }).then(res => {
            if (res.data) {
                this.props.updateUser({ username: res.data.username, id: res.data.id })
                this.props.history.push('/dashboard')
                // this.setState({ redirect: true })
            }
        })
    }

    render() {
        console.log(this.props.user);

        return (
            <div className="auth">
                <div className="auth-content">
                    <img src="https://raw.githubusercontent.com/DevMountain/simulation-2/master/assets/auth_logo.png" alt="" />
                    <h2>Username</h2>
                    <input onChange={(e) => this.handleChange("username", e.target.value)}/>
                    <h2>Password</h2>
                    <input onChange={(e) => this.handleChange("password", e.target.value)}/>
                    <div className="auth-buttons">
                        <button onClick={this.handleLogin}>Login</button>
                        <button onClick={this.handleRegister}>Register</button>
                    </div>
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
    updateUser
}

export default connect(mapStateToProps, actions)(Auth);


