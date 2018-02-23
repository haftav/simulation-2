import React, { Component } from 'react';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';

export default class Dashboard extends Component {

    render() {
        return (
            <div>
                <h1>Dashboard</h1>
                <Header />
                <div>
                    <Link to="/wizard/1" ><button>Add new property</button></Link>
                    <span>
                        <p>List properties with "desired rent" greater than: $
                            <span>
                                <input /><button>Filter</button><button>Reset</button>
                            </span>
                        </p>
                    </span>
                    <hr />

                </div>
            </div>
        )
    }
}