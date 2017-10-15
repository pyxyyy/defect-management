import React, { Component } from 'react';
import logo from '../../img/logo.svg';
import './NavBar.css';

class NavBar extends Component {
    render() {
        return (
            <div className="NavBar">
                <div className="NavBar-home">Home</div>
                <div className="NavBar-archive">Archive</div>
                <img src={logo} className="NavBar-logo" alt="logo" />
            </div>
        );
    }
}

export default NavBar;
