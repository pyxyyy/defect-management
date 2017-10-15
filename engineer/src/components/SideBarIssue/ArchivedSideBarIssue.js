import React, { Component } from 'react';
import './SideBarIssue.css';
import { connect } from 'react-redux';

class ArchivedSideBarIssue extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPending : true
        }
    }
    toggleShowPending() {
        this.props.color(true);
        this.setState({
            showPending : !this.state.showPending
        });
        this.forceUpdate();
    }
    render() {
        const markPendingComponent = (this.props.pending) ? <span /> :
            <div className={this.state.showPending ? "SideBarIssue-header-mark-pending-hide" : "SideBarIssue-header-mark-pending-hide"} onClick={() => {this.toggleShowPending()}}>Defer</div>;

        return (
            <div className="SideBarIssue">
                <div className="SideBarIssue-header">
                    <div className="SideBarIssue-header-title">{this.props.title}</div>
                    <div className="SideBarIssue-header-mark">
                        {markPendingComponent}
                        <div className="SideBarIssue-header-mark-restore">Restore</div>
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
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ArchivedSideBarIssue);
