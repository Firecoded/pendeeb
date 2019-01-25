import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import MobileNav from './SideNav';
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
                to: '/dashboard'
            },
            {
                text: 'Profile',
                to: '/account'
            },
            {
                text: 'Add',
                to: '/dashboard/add'
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
            <button className = "btn waves-effect waves grey darken-3 " 
            onClick = { () => console.log('signout click')}>
            Sign Out
            </button>
        )
    }

    buildLink = (link) => {
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
        const commonLinks = common.map(this.buildLink);
        if(auth){
            authLinks = navAuth.map(this.buildLink);
            authLinks.push(<li key = "/sign-out" className = "sign-out-btn">{this.renderSignout()}</li>)
        } else {
            authLinks = nonAuth.map(this.buildLink);
        }
        return [...commonLinks, ...authLinks];
    }
  
    render() {
        return (
            <Fragment>
                <nav className = "black">
                    <div className = "nav-wrapper">
                        <Link to = "/" className = "brand-logo">PenDeeb</Link>
                        <Link to = "" data-target="side-nav" className = "sidenav-trigger">
                            <i className = "material-icons">menu</i>
                        </Link>
                        <ul className = "right hide-on-med-and-down">
                            {this.renderLinks()}
                        </ul>
                    </div>
                </nav>
                <MobileNav renderLinks = {this.renderLinks}/>   
            </Fragment>
            
        )
    }
}

export default Nav;
