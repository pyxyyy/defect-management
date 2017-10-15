import React, { Component } from 'react';
import './SideBarIssue.css';
import SideBarIssueComment from "../SideBarIssueComment/SideBarIssueComment";

class ArchivedSideBarIssue extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const markPendingComponent = (this.props.pending) ? <span /> : <span/>;

        const commentsTSComponent =
            <div>
                <SideBarIssueComment new={false} avatar="TS" text="idk what to put" time="02:30, 9 September 2017"/>
                <SideBarIssueComment new={false} avatar="TS" text="contacted my minions to fix this stupid shit because I'm rich" time="02:30, 9 September 2017" />
            </div>;
        const commentsCAComponent =
                <SideBarIssueComment new={false} avatar="CA" text="i am captain america and i have hacked your site" time="02:30, 9 September 2230"/>;
        const commentsNoneComponent = <div className="blank" />;

        const isCommentsNoneComponent = (!this.props.commentsTS && !this.props.commentsCA);
        let displayComponent = "";
        if (isCommentsNoneComponent) {
            displayComponent = commentsNoneComponent;
        } else if (this.props.commentsTS) {
            displayComponent = commentsTSComponent;
        } else if (this.props.commentsCA) {
            displayComponent = commentsCAComponent;
        }

        return (
            <div className="SideBarIssue">
                <div className="SideBarIssue-header">
                    <div className="SideBarIssue-header-title">{this.props.title}</div>
                    <div className="SideBarIssue-header-mark">
                        {markPendingComponent}
                    </div>
                </div>
                <div className="SideBarIssue-info">
                    <span className="SideBarIssue-info-time">{this.props.time}</span>
                    <span className="SideBarIssue-info-logger">{this.props.logger}</span>
                </div>
            </div>
        );
    }
}

export default ArchivedSideBarIssue;
