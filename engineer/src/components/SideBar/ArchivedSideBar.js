import React, { Component } from 'react';
import './SideBar.css';
import ArchivedSideBarIssue from "../SideBarIssue/ArchivedSideBarIssue";
import { connect } from 'react-redux';

class ArchivedSideBar extends Component {
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

        const bloobieIssue = (this.state.bloobed) ? "<div><ArchivedSideBarIssue title=\"Audio Port\" time=\"23:40, 8 September 2017\" logger=\"Passenger\" commentsTS={false} commentsCA={false} pending={false}/></ArchivedSideBarIssue>" : "";

        return (
            <div className="SideBar">
                <div className="SideBar-header">
                    <div className="SideBar-header-unit">34B</div>
                    <div className="SideBar-header-progress">
                        <div className="SideBar-header-progress-circ1" />
                        <div className={this.props.color ? "SideBar-header-progress-line1" : "SideBar-header-progress-line"} />
                        <div className={this.props.color ? "SideBar-header-progress-circ1" : "SideBar-header-progress-circ"} />
                        <div className="SideBar-header-progress-line" />
                        <div className="SideBar-header-progress-circ" />
                    </div>
                </div>
                <ArchivedSideBarIssue title="Meal Tray" time="23:41, 8 September 2017" logger="Passenger" commentsTS={false} commentsCA={false} pending={false}/>
                <ArchivedSideBarIssue title="Audio Port" time="23:40, 8 September 2017" logger="Passenger" commentsTS={false} commentsCA={false} pending={false}/>
                <ArchivedSideBarIssue title="Reading Light" time="07:10, 8 September 2017" logger="Cabin Crew" commentsTS={false} commentsCA={true} pending={true}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        color: state.color
    }
};

export default connect(mapStateToProps)(ArchivedSideBar);
