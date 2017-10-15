import React, { Component } from 'react';
import './FlightPage.css';
import SideBar from "../../components/SideBar/SideBar";
import Flight from "../../components/Flight/Flight";

class FlightPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location : true
        }
    }
    render() {
        const locationStyle = (this.state.location) ? "FlightPage-display-header-selected" : "FlightPage-display-header-unselected";
        const typeStyle = (!this.state.location) ? "FlightPage-display-header-selected" : "FlightPage-display-header-unselected";
        return (
            <div className="FlightPage">
                <div className="FlightPage-display">
                    <div className="FlightPage-display-header">
                        <div className={locationStyle}><span>By Location</span></div>
                        <div className={typeStyle}><span>By Type</span></div>
                    </div>
                    <div className="FlightPage-display-blueprint">
                        <Flight className="FlightPage-body" />
                    </div>
                </div>
                <div className="FlightPage-SideBar"><SideBar /></div>
            </div>
        );
    }
}

export default FlightPage;
