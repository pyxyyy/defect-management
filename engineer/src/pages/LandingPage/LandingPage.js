import React, { Component } from 'react';
import './LandingPage.css';
import { connect } from 'react-redux';

import CountUp from 'react-countup';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

class LandingPage extends Component {
    render() {
        return (
            <div className="LandingPage">
                <button onClick={() => {this.props.nav("Defects")}}>click</button>
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

