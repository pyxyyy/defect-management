import React, { Component } from 'react';
import './DefectsPage.css';
import SideBar from "../../components/SideBar/SideBar";
import Flight from "../../components/Flight/Flight";

class DefectsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location : true
        }
    }
    render() {
        const locationStyle = (this.state.location) ? "DefectsPage-display-header-selected" : "DefectsPage-display-header-unselected";
        const typeStyle = (!this.state.location) ? "DefectsPage-display-header-selected" : "DefectsPage-display-header-unselected";
        return (
            <div className="DefectsPage">
                <div className="DefectsPage-display">
                    <div className="DefectsPage-display-header">
                        <div className={locationStyle} onClick={() => {this.setState({location:true})}}>
                            <span>By Location</span>
                        </div>
                        <div className={typeStyle} onClick={() => {this.setState({location:false})}}>
                            <span>By Type</span>
                        </div>
                    </div>
                    <div className="DefectsPage-display-blueprint">
                        <Flight className="DefectsPage-body" />
                    </div>
                </div>
                <div className="DefectsPage-SideBar"><SideBar /></div>
            </div>
        );
    }
}

export default DefectsPage;
