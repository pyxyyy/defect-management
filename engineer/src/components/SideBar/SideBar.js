import React, { Component } from 'react';
import './SideBar.css';
import SideBarIssue from "../SideBarIssue/SideBarIssue";
import { connect } from 'react-redux';

class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bloobed : false
        }
    }
    timeToBloob() {
        this.setState({
            bloobed : true
        });
        this.forceUpdate();
    }

    render() {
        const bloobieClassname = (this.state.bloobed) ? "bloob" : "nobloob";
        const threefourbee =
            <div>
                <SideBarIssue title="Meal Tray" time="23:41, 8 September 2017" logger="Passenger" commentsTS={false} commentsCA={false} pending={false} />
                <SideBarIssue title="Audio Port" time="23:40, 8 September 2017" logger="Passenger" commentsTS={true} commentsCA={false} pending={false} />
                <SideBarIssue title="Reading Light" time="07:10, 8 September 2017" logger="Cabin Crew" commentsTS={false} commentsCA={true} pending={true} />
            </div>;
        const otherIssues =
            <div>
                <SideBarIssue title="Chair" time="23:41, 8 September 2017" logger="Passenger" commentsTS={true} commentsCA={false} pending={false} />
                <SideBarIssue title="Seat Belt" time="07:10, 8 September 2017" logger="Cabin Crew" commentsTS={false} commentsCA={true} pending={true} />
            </div>;

        return (
            <div className="SideBar">
                <div className="SideBar-header">
                <div className="SideBar-header-unit">{this.props.seatNumber}</div>
                    <div className="SideBar-header-progress">
                        <div className="SideBar-header-progress-circ1" />
                        <div className={this.props.color ? "SideBar-header-progress-line1" : "SideBar-header-progress-line"} />
                        <div className={this.props.color ? "SideBar-header-progress-circ1" : "SideBar-header-progress-circ"} />
                        <div className={this.props.disappear ? "SideBar-header-progress-line-hidden" : "SideBar-header-progress-line"} />
                        <div className={this.props.disappear ? "SideBar-header-progress-circ-hidden" : "SideBar-header-progress-circ"} />
                    </div>
                </div>
                {this.props.seatNumber === "34B" ? threefourbee: otherIssues}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        color: state.color,
        disappear: state.disappear
    }
};

export default connect(mapStateToProps)(SideBar);
