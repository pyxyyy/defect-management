import React, { Component } from 'react';
import logo from '../../img/trans-logo.svg';
import './NavBar.css';
import { connect } from 'react-redux';

class NavBar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="NavBar">
                <div className="NavBar-flight" onClick={() => {this.props.nav("Landing")}}>SQ666</div>
                <div className="NavBar-menu">
                    <div className="NavBar-defects" onClick={() => this.props.nav("Defects")}>Defects</div>
                    <div className="NavBar-analytics" onClick={() => {this.props.nav("Analytics")}}>Analytics</div>
                    <div className="NavBar-archive" onClick={() => {this.props.nav("Archive")}}>Archive</div>
                    <img src={logo} className="NavBar-logo" alt="logo" />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        page: state.page
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        nav: (page) => {
            dispatch({
                type: 'nav',
                page: page
            });
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
