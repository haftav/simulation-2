import React, { Component } from 'react';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { resetState, logout } from '../../ducks/reducer';
import { Redirect } from 'react-router';

import "./Dashboard.css";

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            properties: [],
            query: null,
            logout: false
        }

        this.filterProperties = this.filterProperties.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.resetProperties = this.resetProperties.bind(this);
        this.deleteProperty = this.deleteProperty.bind(this);
    }

    componentDidMount() {
        if (this.props.user.username) {
            axios.get('/api/properties').then(res => {
                this.setState({ properties: res.data })
            })
        } else {
            this.props.history.push('/')
        }
    }

    filterProperties() {
        axios.get(`/api/properties?rent=${Number(this.state.query)}`).then(res => {
            this.setState({ properties: res.data })
        })
    }

    resetProperties() {
        axios.get('/api/properties').then(res => {
            this.setState({ properties: res.data })
        })
    }

    deleteProperty(val) {
        axios.delete(`/api/properties/${val}`).then(res => {
            this.setState({ properties: res.data })
        })
    }

    handleChange(val) {
        this.setState({ query: val })
    }

    render() {

        if (this.state.logout) {
            console.log(true);
            return <Redirect to="/" />
        }
        // console.log(this.props.match);
        // console.log(this.state.properties);
        let properties = this.state.properties.filter((el) => el.userid == this.props.user.id)
        properties = properties.map((el, idx) => {
            const { propid, propname, propdescription, address, city, state, zip,
                image, loanamount, monthlymortgage, desiredrent, userid } = el;
            return (
                <div className="property-div">
                    <img src={image} alt="" />
                    <div className="property-div-middle">
                        <h2>Name: {propname}</h2>
                        <p>{propdescription}</p>
                    </div>
                    <div className="property-div-right">
                        <div>
                            <button value={propid} onClick={(e) => this.deleteProperty(e.target.value)}>X</button>
                            <h2>Loan: {loanamount}</h2>
                            <h2>Monthly Mortgage: {monthlymortgage}</h2>
                            <h2>Recommended Rent: {Number(monthlymortgage) + Number(monthlymortgage / 4)}</h2>
                            <h2>Desired Rent: {desiredrent}</h2>
                            <h2>Address: {address}</h2>
                            <h2>City: {city}</h2>
                        </div>
                    </div>
                </div>
            )
        })
        return (
            <div>
                <Header />
                <div className="dashboard">
                    <Link to="/wizard/1" ><button className="add-new">Add new property</button></Link>
                    <span className="filter-span">
                        <p>List properties with "desired rent" greater than: $
                            <span className="filter-span">
                                <input type="number" onChange={(e) => this.handleChange(e.target.value)} />
                                <button onClick={this.filterProperties}>Filter</button>
                                <button onClick={this.resetProperties}>Reset</button>
                            </span>
                        </p>
                    </span>
                    <hr />
                    {properties}
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
    resetState,
    logout
}

export default connect(mapStateToProps, actions)(Dashboard);