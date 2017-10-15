import React, { Component } from 'react';
import './LandingPage.css';

import CountUp from 'react-countup';
import Switch from 'react-toggle-switch'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

class LandingPage extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

   render() {

        const data = [
            {name: '30 Aug', SQ666: 2400},
            {name: '31 Aug', SQ666: 3256},
            {name: '1 Sept', SQ666: 1462},
            {name: '2 Sept', SQ666: 6422},
            {name: '3 Sept', SQ666: 7231},
            {name: '4 Sept', SQ666: 8350},
            {name: '5 Sept', SQ666: 5329},
            {name: '6 Sept', SQ666: 8051},
            {name: '7 Sept', SQ666: 1490},
            {name: '8 Sept', SQ666: 1018},
        ];

        return (
            <div className="LandingPage">
                <div className="Analytics-One-Flight">
                    <div className="header">
                        <div className="Toggle">
                        </div>
                        <div className="TotalNumDefects">
                            <CountUp className="TotalNumDefects-Num" start={0} end={1018} duration={2}/>
                            <span className="TotalNumDefects-Words">Total Defects</span>
                        </div>
                    </div>
                   <div className="Analytics-Graph">
                        <LineChart width={1000} height={400} data={data}
                                   margin={{ top: 5, right: 55, left: 5, bottom: 5 }}>
                            <XAxis hide={false} dataKey="name" />
                            <YAxis hide={false}/>
                            <CartesianGrid strokeDasharray="3 3"/>
                            <Tooltip/>
                            <Legend />
                            <Line type="monotone" dataKey="SQ666" stroke="#8884d8" activeDot={{r: 8}}/>
                        </LineChart>
                    </div>
                    <div className="Analytics-DefectTypes">
                        <div className="SeatDefects">
                            <CountUp className="SeatDefects-Num" start={0} end={353} duration={2}/>
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

export default LandingPage;
