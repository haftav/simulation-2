import React, { Component } from 'react';
import axios from 'axios';

export default class Auth extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
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
        const { username, password } = this.state
        axios.post('/api/auth/register', { username, password }).then(res => {
            console.log(res.data);
        })
    }

    handleLogin() {

    }

    render() {
        console.log(this.state);
        return (
            <div>
                <div>
                    <h1>Auth</h1>
                    <h2>Username</h2>
                    <input onChange={(e) => this.handleChange("username", e.target.value)}/>
                    <h2>Password</h2>
                    <input onChange={(e) => this.handleChange("password", e.target.value)}/>
                    <div className="auth-buttons">
                        <button>Login</button>
                        <button>Register</button>
                    </div>
                </div>
            </div>
        )
    }
}

