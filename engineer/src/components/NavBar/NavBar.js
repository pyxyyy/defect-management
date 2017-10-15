import React, { Component } from 'react';
import logo from '../../img/logo.svg';
import './NavBar.css';

class NavBar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="NavBar">
                <div className="NavBar-home">Defects</div>
                <div className="NavBar-home">Analytics</div>
                <div className="NavBar-archive">Archive</div>
                <img src={logo} className="NavBar-logo" alt="logo" />
            </div>
        );
    }
}

export default NavBar;
