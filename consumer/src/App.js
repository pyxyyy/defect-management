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
      let styleButtonA = this.state.buttonA ? "SelectDefect-button-clicked" : "SelectDefect-button-unclicked";
      let styleButtonB = this.state.buttonB ? "SelectDefect-button-clicked" : "SelectDefect-button-unclicked";
      let styleButtonC = this.state.buttonC ? "SelectDefect-button-clicked" : "SelectDefect-button-unclicked";

      return (
        <div className="Defects">
            <span className="Instructions">
                We are sorry something is broken.
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
        </div>
    );
  }
}

export default App;
