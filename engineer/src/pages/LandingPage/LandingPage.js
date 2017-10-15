import React, { Component } from 'react';
import './LandingPage.css';

import CountUp from 'react-countup';

class LandingPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            buttonA : false,
            buttonB : false,
            buttonC : false,
        }
    }

    markClickedA(){
        this.setState({
            buttonA : !this.state.buttonA
        })
    }
    markClickedB(){
        this.setState({
            buttonB : !this.state.buttonB
        })
    }
    markClickedC(){
        this.setState({
            buttonC : !this.state.buttonC
        })
    }
    render() {
        let styleButtonA = this.state.buttonA ? "SelectFlight-button-clicked" : "SelectFlight-button-unclicked";
        let styleButtonB = this.state.buttonB ? "SelectFlight-button-clicked" : "SelectFlight-button-unclicked";
        let styleButtonC = this.state.buttonC ? "SelectFlight-button-clicked" : "SelectFlight-button-unclicked";

        return (
            <div className="LandingPage">
                <div className="SelectFlight">
                    <div className="SelectFlight-1">
                        <button className={styleButtonA} onClick={() => { this.markClickedA() }}>Flight SQ1370</button>
                        <button className="SelectFlight-button">Flight SQ0000</button>
                        <button className={styleButtonB} onClick={() => { this.markClickedB() }}>Flight SQ1438</button>
                        <button className="SelectFlight-button">Flight SQ6666</button>
                    </div>
                    <div className="SelectFlight-2"><button className={styleButtonC} onClick={() => { this.markClickedC() }}>Flight SQ1406</button>
                        <button className="SelectFlight-button">Flight SQ3467</button>
                        <button className="SelectFlight-button">Flight SQ1420</button>
                        <button className="SelectFlight-button">Flight SQ1</button>
                    </div>
                </div>
                <div className="Analytics">
                    <div className="Analytics-Num">
                        <div className="TotalNumDefects">
                            <CountUp className="TotalNumDefects-Num" start={0} end={1018} duration={2}/>
                            <p>Total number of defects</p>
                        </div>
                        <div className="SeatDefects">
                            <CountUp className="SeatDefects-Num" start={0} end={50} duration={2}/>
                            <p>Seat Defects</p>
                        </div>
                        <div className="TrayDefects">
                            <CountUp className="TrayDefects-Num" start={0} end={120} duration={2}/>
                            <p>Meal Tray Defects</p>
                        </div>
                        <div className="AudioDefects">
                            <CountUp className="AudioDefects-Num" start={0} end={325} duration={2}/>
                            <p>Audio Jack Defects</p>
                        </div>
                        <div className="ReadingLightDefects">
                            <CountUp className="ReadingLightDefects-Num" start={0} end={672} duration={2}/>
                            <p>Reading Light Defects</p>
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}

export default LandingPage;
