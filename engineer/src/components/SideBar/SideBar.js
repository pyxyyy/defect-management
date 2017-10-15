import React, { Component } from 'react';
import './SideBar.css';
import SideBarIssue from "../SideBarIssue/SideBarIssue";

class SideBar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="SideBar">
                <div className="SideBar-header">
                <div className="SideBar-header-unit">34B</div>
                    <div className="SideBar-header-progress">
                        <div className="SideBar-header-progress-circ1" />
                        <div className="SideBar-header-progress-line" />
                        <div className="SideBar-header-progress-circ" />
                        <div className="SideBar-header-progress-line" />
                        <div className="SideBar-header-progress-circ" />
                    </div>
                </div>
                <SideBarIssue title="Meal Tray" time="23:41, 8 September 2017" logger="Passenger" commentsTS={true} commentsCA={false} pending={false}/>
                <SideBarIssue title="Audio Port" time="23:40, 8 September 2017" logger="Passenger" commentsTS={false} commentsCA={false} pending={false}/>
                <SideBarIssue title="Reading Light" time="07:10, 8 September 2017" logger="Cabin Crew" commentsTS={false} commentsCA={true} pending={true}/>
            </div>
        );
    }
}

export default SideBar;
