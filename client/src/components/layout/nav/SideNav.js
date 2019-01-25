import React, { Component } from 'react';
import M from "materialize-css/dist/js/materialize.min.js";

class SideNav extends Component{
    

    componentDidMount = () => {
        this.instance = M.Sidenav.init(this.sideNav);
    }
    
    render(){
        return (
            <ul ref = { (el) => this.sideNav = el} className = 'sidenav' id = "side-nav">
                {this.props.renderLinks()}
            </ul>
        )
    }
    
}

export default SideNav;

