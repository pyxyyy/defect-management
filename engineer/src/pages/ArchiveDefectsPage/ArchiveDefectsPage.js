import React, { Component } from 'react';
import './ArchiveDefectsPage.css';
import ArchivedSideBar from "../../components/SideBar/ArchivedSideBar";
import ArchivedFlight from "../../components/Flight/ArchivedFlight";

class ArchiveDefectsPage extends Component {
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
                        <ArchivedFlight className="DefectsPage-body" />
                    </div>
                </div>
                <div className="DefectsPage-SideBar"><ArchivedSideBar /></div>
            </div>
        );
    }
}

export default ArchiveDefectsPage;
