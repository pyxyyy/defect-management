import React, { Component } from 'react';
import './SideBarIssueComment.css';

class SideBarIssueComment extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const avatarStyle = (this.props.avatar === "TS") ? "SideBarIssueComment-avatar-gold" : "SideBarIssueComment-avatar-blue";
        const addNewCommentStyle =
        <div className="SideBarIssueComment-new">
            <textarea className="SideBarIssueComment-new-input" placeholder="Add a comment" />
        </div>;
        const existingCommentStyle =
        <div className="SideBarIssueComment-details">
            <span className="SideBarIssueComment-details-text">{this.props.text}</span>
            <span className="SideBarIssueComment-details-time">{this.props.time}</span>
        </div>;
        return (
            <div className="SideBarIssueComment">
                <div className={avatarStyle}>{this.props.avatar}</div>
                {this.props.new ? addNewCommentStyle : existingCommentStyle}
            </div>
        );
    }
}

export default SideBarIssueComment;
