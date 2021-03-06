import React, { Component } from 'react';
import './AnalyticsPage.css';

import CountUp from 'react-countup';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

class AnalyticsPage extends Component {

    constructor(props) {
        super(props);
        {/*
        this.state = {
            value: false
        }
        */}
    }

   render() {

        const data = [
            {name: '30 Aug', "SQ 31": 2400},
            {name: '31 Aug', "SQ 31": 3256},
            {name: '1 Sept', "SQ 31": 1462},
            {name: '2 Sept', "SQ 31": 6422},
            {name: '3 Sept', "SQ 31": 7231},
            {name: '4 Sept', "SQ 31": 8350},
            {name: '5 Sept', "SQ 31": 5329},
            {name: '6 Sept', "SQ 31": 8051},
            {name: '7 Sept', "SQ 31": 1490},
            {name: '8 Sept', "SQ 31": 1018},
        ];

        return (
            <div className="AnalyticsPage">
                <div className="Analytics-One-Flight">
                    <div className="Header">
                        {/*
                        <div className="Toggle">
                            <label className="switch">
                                <input type="checkbox" />
                                <span className="slider round"></span>
                            </label>
                        </div>
                        */}
                        <div className="TotalNumDefects">
                            <CountUp className="TotalNumDefects-Num" start={0} end={1018} duration={2}/>
                            <span className="TotalNumDefects-Words">Total Defects</span>
                        </div>
                    </div>
                    <div className="Analytics-Graph-label-y">Total Number of Defects</div><br/>
                    <div className="Analytics-Graph">
                        <LineChart width={1000} height={300} data={data}
                                   margin={{ top: 5, right: 55, left: 5, bottom: 5 }}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip/>
                            <Legend />
                            <Line type="monotone" dataKey="SQ 31" stroke="#fcb130" activeDot={{r: 8}}/>
                        </LineChart>
                        <br/>
                       <div className="Analytics-Graph-label-x">Day</div>
                    </div>
                    <div className="Analytics-DefectTypes">
                        <div className="SeatDefects">
                            <CountUp className="SeatDefects-Num" start={0} end={372} duration={2}/>
                            <span className="SeatDefects-Words">Seats</span>
                        </div>
                        <div className="WashroomDefects">
                            <CountUp className="WashroomDefects-Num" start={0} end={4} duration={2}/>
                            <span className="WashroomDefects-Words">Washrooms</span>
                        </div>
                        <div className="OverheadBinDefects">
                            <CountUp className="OverheadBinDefects-Num" start={0} end={642} duration={2}/>
                            <span className="OverheadBinDefects-Words">Overhead Bins</span>
                        </div>
                    </div>
                </div>
                <div className="Analytics-All-Flights">

                </div>
            </div>
        );

    }
}

export default AnalyticsPage;
