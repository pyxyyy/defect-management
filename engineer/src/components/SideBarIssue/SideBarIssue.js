import React, { Component } from 'react';
import './SideBarIssue.css';
import SideBarIssueComment from "../SideBarIssueComment/SideBarIssueComment";
import { connect } from 'react-redux';

class SideBarIssue extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPending : true,
            isResolved : false
        }
    }
    toggleShowPending() {
        this.props.color(true);
        this.setState({
            showPending : !this.state.showPending
        });
        this.forceUpdate();
    }
    resolveThisShit() {
        this.props.disappear(true);
        this.setState({
            isResolved : true
        });
        this.forceUpdate();
    }
    render() {

        const sideBarIssueStyle = (this.state.isResolved) ?  "SideBarIssue-hidden" : "SideBarIssue" ;

        const markPendingComponent = (this.props.pending) ? <span /> :
            <div className={this.state.showPending ? "SideBarIssue-header-mark-pending" : "SideBarIssue-header-mark-pending-hide"} onClick={() => {this.toggleShowPending()}}>Defer</div>;

        const commentsTSComponent =
            <div>
                <SideBarIssueComment new={false} avatar="TS" text="James will fix it by 10 Sep 2017" time="02:32, 9 September 2017"/>
                <SideBarIssueComment new={false} avatar="TS" text="Assigned to James for fix" time="02:30, 9 September 2017" />
            </div>;
        const commentsCAComponent =
                <SideBarIssueComment new={false} avatar="CA" text="Waiting for spare parts to arrive" time="02:30, 9 September 2230"/>;
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
            <div className={sideBarIssueStyle}>
                <div className="SideBarIssue-header">
                    <div className="SideBarIssue-header-title">{this.props.title}</div>
                    <div className="SideBarIssue-header-mark">
                        {markPendingComponent}
                        <div className="SideBarIssue-header-mark-resolved" onClick={() => {this.resolveThisShit()}}>Resolve</div>
                    </div>
                </div>
                <div className="SideBarIssue-info">
                    <span className="SideBarIssue-info-time">{this.props.time}</span>
                    <span className="SideBarIssue-info-logger">{this.props.logger}</span>
                </div>
                <div className="SideBarIssue-comments">
                    <SideBarIssueComment new={true} avatar="TS"/>
                    {displayComponent}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        color: state.color
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        color: (boolean) => {
            dispatch({
                type: 'color',
                page: boolean
            });
        },

        disappear: (boolean) => {
            dispatch({
                type: 'disappear',
                page: boolean
            });
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBarIssue);
