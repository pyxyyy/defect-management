import React, { Component } from 'react';
import './LandingPage.css';
import { connect } from 'react-redux';

import CountUp from 'react-countup';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

class LandingPage extends Component {
    render() {
        return (
            <div className="LandingPage">
                <span className="LandingPage-header">These are your flights for today: </span>
                <span className="LandingPage-subheader">Select a flight to view and manage its defects.</span>
                <div className="LandingPage-row">
                    <div className="LandingPage-col">
                        <div>03:40</div>
                        <div className="LandingPage-row-flight1"></div>
                        <span>SQ 634</span>
                    </div>
                    <div className="LandingPage-col">
                        <div>03:52</div>
                        <div className="LandingPage-row-flight2" onClick={() => {this.props.nav("Defects")}}></div>
                        <span>SQ 31</span>
                    </div>
                    <div className="LandingPage-col">
                        <div>07:22</div>
                        <div className="LandingPage-row-flight3"></div>
                        <span>SQ 5906</span>
                    </div>
                    <div className="LandingPage-col">
                        <div>08:55</div>
                        <div className="LandingPage-row-flight4"></div>
                        <span>SQ 636</span>
                    </div>
                    <div className="LandingPage-col">
                        <div>08:55</div>
                        <div className="LandingPage-row-flight5"></div>
                        <span>SQ 12</span>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        page: state.page
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        nav: (page) => {
            dispatch({
                type: 'nav',
                page: page
            });
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);

