import React, { Component } from 'react';
import './App.css';

import seat from './img/seat.svg';
import popcorn from './img/popcorn.svg';
import headphones from './img/headphones.svg';
import t from './img/t.svg';
import light from './img/light.svg';
import o from './img/o.svg';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFirstPage : true,
        }

        this.changeCrewState = this.changeCrewState.bind(this);
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

    changeCrewState() {
        this.setState({
            isFirstPage: !this.state.isFirstPage
        })
    }

    render() {
        let styleButtonA = this.state.buttonA ? "SelectDefect-button-clicked" : "SelectDefect-button-unclicked";
        let styleButtonB = this.state.buttonB ? "SelectDefect-button-clicked" : "SelectDefect-button-unclicked";
        let styleButtonC = this.state.buttonC ? "SelectDefect-button-clicked" : "SelectDefect-button-unclicked";

        const page1 =
                <div className="InputForm">
                    <div className="InputNum">Enter the defect's location:</div>
                    <div className="InputGroup">
                    <input className="Input-input"type="text" name="name" />
                    <input className="btnCrewSubmit" type="submit" onClick={this.changeCrewState} />
                    </div>
                </div>;

        const page2 = <div className="Defects">
                        <span className="Instructions">
                            We are sorry something is broken. <br/>
                            You can notify us of the defect(s) by tapping on one or more of the options below. <br/>
                            Logging this defect will ensure that your journey with us will be a great one.<br/>
                        </span>
                     <div className="SelectDefect">
                         <div className="SelectDefect-1">

                        <div className={styleButtonA} onClick={() => { this.markClickedA() }}>
                            <img src={seat} alt="Chair" />
                            <span>Chair</span>
                        </div>

                        <div className="SelectDefect-button">
                            <img src={popcorn} alt="In-Flight Entertainment" />
                            <span>In-Flight Entertainment</span>
                        </div>

                        <div className={styleButtonB} onClick={() => { this.markClickedB() }}>
                            <img src={headphones} alt="Audio Jack" />
                            <span>Audio Jack</span>
                        </div>
                         </div>
                        <div className="SelectDefect-2">
                            <div className={styleButtonC} onClick={() => { this.markClickedC() }}>
                            <img src={t} alt="Meal tray" />
                            <span>Meal Tray</span>
                        </div>
                        <div className="SelectDefect-button">
                            <img src={light} alt="Reading Light" />
                            <span>Reading Light</span>
                        </div>
                        <div className="SelectDefect-button">
                            <img src={o} alt="Others" />
                            <span>Others</span>
                        </div>
                        </div>
                        </div>
                        <input className="btnCrewSubmit" type="submit" onClick={this.changeCrewState} />
                        </div>;

        let changePage = this.state.isFirstPage ? page1 : page2;

        return (
            changePage
        );
    }
}

export default App;
