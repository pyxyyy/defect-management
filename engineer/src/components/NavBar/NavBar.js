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
                <div className="NavBar-flight">SQ666</div>
                <div className="NavBar-menu">
                    <div className="NavBar-defects">Defects</div>
                    <div className="NavBar-analytics">Analytics</div>
                    <div className="NavBar-archive">Archive</div>
                    <img src={logo} className="NavBar-logo" alt="logo" />
                </div>
            </div>
        );
    }
}

export default NavBar;
