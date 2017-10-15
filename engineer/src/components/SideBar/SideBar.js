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

        const bloobieIssue = (this.state.bloobed) ? "<div><SideBarIssue title=\"Audio Port\" time=\"23:40, 8 September 2017\" logger=\"Passenger\" commentsTS={false} commentsCA={false} pending={false}/></SideBarIssue>" : "";

        return (
            <div className="SideBar">
                <div className="SideBar-header">
                <div className="SideBar-header-unit">{this.props.seatNumber}</div>
                    <div className="SideBar-header-progress">
                        <div className="SideBar-header-progress-circ1" />
                        <div className={this.props.color ? "SideBar-header-progress-line1" : "SideBar-header-progress-line"} />
                        <div className={this.props.color ? "SideBar-header-progress-circ1" : "SideBar-header-progress-circ"} />
                        <div className="SideBar-header-progress-line" />
                        <div className="SideBar-header-progress-circ" />
                    </div>
                </div>
                {this.props.issues.length > 0 ? <div>
                <SideBarIssue title="Meal Tray" time="23:41, 8 September 2017" logger="Passenger" commentsTS={false} commentsCA={false} pending={false}/>
                <SideBarIssue title="Audio Port" time="23:40, 8 September 2017" logger="Passenger" commentsTS={false} commentsCA={false} pending={false}/>
                <SideBarIssue title="Reading Light" time="07:10, 8 September 2017" logger="Cabin Crew" commentsTS={false} commentsCA={true} pending={true}/>
                </div> : <div />};
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        color: state.color
    }
};

export default connect(mapStateToProps)(SideBar);
