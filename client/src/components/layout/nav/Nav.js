import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./nav.css";

class Nav extends Component {
    state = {
        common: [
            {
                text: 'Home',
                to: '/'
            }
        ],
        auth: [
            {
                text: "View All",
                to: '/account/dashboard'
            },
            {
                text: 'Profile',
                to: '/account'
            },
            {
                text: 'Add',
                to: '/account/dashboard/add'
            }
                
        ],
        nonAuth: [
            {
                text: 'Sign In',
                to: '/account/sign-in'
            },
            {
                text: 'Sign Up',
                to: '/account/sign-up'
            }
        ]
    }

    renderSignout = () =>{
        return(
            <button className = "btn waves-effect waves grey darken-3 sign-out-btn" 
            onClick = { () => console.log('signout click')}>
            Sign Out
            </button>
        )
    }

    buildLinks = (link) => {
        return (
            <li key = {link.to} >
                <Link to= {link.to}>
                    {link.text}
                </Link>
            </li>
        )
    }

    renderLinks = () => {
        const auth = true;
        let authLinks = [];
        const {auth: navAuth, common, nonAuth} = this.state;
        const commonLinks = common.map(this.buildLinks);
        if(auth){
            authLinks = navAuth.map(this.buildLinks);
            authLinks.push(<li key = "/sign-out">{this.renderSignout()}</li>)
        } else {
            authLinks = nonAuth.map(this.buildLinks);
        }
        return [...commonLinks, ...authLinks];
    }
  
    render() {
        return (
            <nav className = "black">
                <div className = "nav-wrapper">
                    <Link to = "/" className = "brand-logo">PenDeeb</Link>
                    <ul className = "right">
                        {this.renderLinks()}
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Nav;
