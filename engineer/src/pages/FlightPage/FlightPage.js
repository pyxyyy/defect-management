import React, { Component } from 'react';
import './FlightPage.css';
import SideBar from "../../components/SideBar/SideBar";

class FlightPage extends Component {
    render() {
        return (
            <div className="FlightPage">
                <div className="FlightPage-display">
                    <div className="FlightPage-display-header">
                        <span className="FlightPage-display-header-location">By Location</span>
                        <span className="FlightPage-display-header-type">By Type</span>

                    </div>
                </div>
                <div className="FlightPage-SideBar"><SideBar /></div>
            </div>
        );
    }
}

export default FlightPage;
