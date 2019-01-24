import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import "./landing.css";

export default class Landing extends Component {
  
  
    componentDidMount = async () => {
        const resp = await axios.get('/api/test');
        console.log(resp)
    }
    
    render() {
        return (
            <div className = "landing-cont">
                <div className = "logo-cont">
                    <h1>PenDeeb</h1>
                    <p>app tagline</p>
                    <Link to = "/dashboard" className = "landing-link btn center">Dashboard</Link>
                </div>
            </div>
        )
    }
}
