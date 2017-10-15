import React, { Component } from 'react';
import './SideBar.css';
import ArchivedSideBarIssue from "../SideBarIssue/ArchivedSideBarIssue";

class ArchivedSideBar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="SideBar">
                <div className="SideBar-header">
                    <div className="SideBar-header-unit">Summary: {this.props.date}</div>
                </div>
                <ArchivedSideBarIssue title="Chair" time="10 defects reported" logger="10 defects resolved" commentsTS={true} commentsCA={false} pending={true}/>
                <ArchivedSideBarIssue title="In-Flight Entertainment" time="72 defects reported" logger="71 defects resolved" commentsTS={false} commentsCA={false} pending={false}/>
                <ArchivedSideBarIssue title="Audio Jack" time="34 defects reported" logger="30 defects resolved" commentsTS={false} commentsCA={true} pending={false}/>
                <ArchivedSideBarIssue title="Meal Tray" time="74 defects reported" logger="74 defects resolved" commentsTS={false} commentsCA={true} pending={true}/>
                <ArchivedSideBarIssue title="Reading Light" time="15 defects reported" logger="15 defects resolved" commentsTS={false} commentsCA={true} pending={true}/>
                <ArchivedSideBarIssue title="Overhead Storage" time="7 defects reported" logger="7 defects resolved" commentsTS={false} commentsCA={true} pending={true}/>
                <ArchivedSideBarIssue title="Toilet" time="1 defect reported" logger="1 defect resolved" commentsTS={false} commentsCA={true} pending={true}/>
                <ArchivedSideBarIssue title="Others" time="3 defects reported" logger="2 defects resolved" commentsTS={false} commentsCA={true} pending={false}/>
            </div>
        );
    }
}

export default ArchivedSideBar;
