import React, { Component } from 'react';


export default class Auth extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        }
    }

    render() {
        return (
            <div>
                <div>
                    <h1>Auth</h1>
                    <h2>Username</h2>
                    <input />
                    <h2>Password</h2>
                    <input />
                    <div className="auth-buttons">
                        <button>Login</button>
                        <button>Register</button>
                    </div>
                </div>
            </div>
        )
    }
}

