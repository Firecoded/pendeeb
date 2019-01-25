import React, { Component } from 'react';
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
  
    render() {
        return (
            <nav className = "black">

            </nav>
        )
    }
}

export default Nav;
