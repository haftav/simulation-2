import React, { Component } from 'react';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';

import "./Dashboard.css";

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            properties: [],
            query: null
        }

        this.filterProperties = this.filterProperties.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.resetProperties = this.resetProperties.bind(this);
        this.deleteProperty = this.deleteProperty.bind(this);
    }

    componentDidMount() {
        axios.get('/api/properties').then(res => {
            console.log(res.data);
            this.setState({ properties: res.data })
        })
    }

    filterProperties() {
        axios.get(`/api/properties?rent=${Number(this.state.query)}`).then(res => {
            console.log(res.data);
            this.setState({ properties: res.data })
        })
    }

    resetProperties() {
        axios.get('/api/properties').then(res => {
            console.log(res.data);
            this.setState({ properties: res.data })
        })
    }

    deleteProperty(val) {
        console.log(val);
        axios.delete(`/api/properties/${val}`).then(res => {
            console.log(res.data);
            this.setState({properties: res.data})
        })
    }

    handleChange(val) {
        console.log(val);
        this.setState({ query: val })
    }

    render() {
        console.log(this.props);
        console.log(this.state.properties);
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
                        <button value={propid} onClick={(e) => this.deleteProperty(e.target.value)}>X</button>
                        <h2>Loan: {loanamount}</h2>
                        <h2>Monthly Mortgage: {monthlymortgage}</h2>
                        <h2>Recommended Rent: {Number(monthlymortgage) + Number(monthlymortgage / 4)}</h2>
                        <h2>Desired Rent: {desiredrent}</h2>
                        <h2>Address: {address}</h2>
                        <h2>City: {city}</h2>
                    </div>
                </div>
            )
        })
        return (
            <div>
                <Header />
                <div className="dashboard">
                    <Link to="/wizard/1" ><button className="add-new">Add new property</button></Link>
                    <span>
                        <p>List properties with "desired rent" greater than: $
                            <span className="filter-span">
                                <input type="number" onChange={(e) => this.handleChange(e.target.value)}/>
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

export default connect(mapStateToProps)(Dashboard);