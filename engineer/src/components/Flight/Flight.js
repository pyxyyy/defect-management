import React, { Component } from 'react';
import './Flight.css';
import Seat from '../../img/seat.svg';
import ToiletSvg from '../../img/toilet.svg';

class Flight extends Component {

    constructor() {
        super();
        this.state = {
            seat: [
            ],
            seat1: [
            ],
            seat2: [''],
            seat3: [],
            incomplete: [
            ],
            complete: []
        };
        for (let i = 0; i < 10; i++) {
            this.state.seat.push('');
        }
        for (let i = 0; i < 15; i++) {
            this.state.seat1.push('');
        }
    }

    onClickData(seat) {
        if(this.state.complete.indexOf(seat) > -1 ) {
            this.setState({
                incomplete: this.state.incomplete.concat(seat),
                complete: this.state.complete.filter(res => res != seat)
            })
        } else {
            this.setState({
                complete: this.state.complete.concat(seat),
                incomplete: this.state.incomplete.filter(res => res != seat)
            })
        }
    }

    render() {
        return (
            <div className="aeroplane">
                <DrawGrid
                    class = "section"
                    seat = { this.state.seat }
                    seat1 = { this.state.seat1 }
                    complete = { this.state.complete }
                    incomplete = { this.state.incomplete }
                    onClickData = { this.onClickData.bind(this) }
                />
                <DrawGrid
                    class = "section1"
                    seat = { this.state.seat }
                    seat1 = { this.state.seat1 }
                    complete = { this.state.complete }
                    incomplete = { this.state.incomplete }
                    onClickData = { this.onClickData.bind(this) }
                />
                <Toilet
                    class = "section2"
                    onClickData = { this.onClickData.bind(this) }
                />
                <DrawGrid
                    class = "section1"
                    seat = { this.state.seat }
                    seat1 = { this.state.seat1 }
                    complete = { this.state.complete }
                    incomplete = { this.state.incomplete }
                    onClickData = { this.onClickData.bind(this) }
                />
                <DrawGrid
                    class = "section1"
                    seat = { this.state.seat }
                    seat1 = { this.state.seat1 }
                    complete = { this.state.complete }
                    incomplete = { this.state.incomplete }
                    onClickData = { this.onClickData.bind(this) }
                />
            </div>
        )
    }
}

class Toilet extends Component {
    render() {
        return (
            <div className={this.props.class}>
                <table className="grid1">
                    <tbody>
                    <tr>
                        <td className='toilet'>
                            <img className="toilet-svg" src={ToiletSvg} />
                        </td>
                    </tr>
                    <tr><td> </td></tr>
                    <tr>
                        <td className='toilet'>
                            <img className="toilet-svg" src={ToiletSvg} />
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

class DrawGrid extends Component {
    render() {
        return (
            <div className={this.props.class }>
                <table className="grid">
                    <tbody>
                    <tr>
                        { this.props.seat.map( row =>
                            <td className={this.props.complete.indexOf(row) > -1? 'complete': 'incomplete'}
                                key={row} onClick = {e => this.onClickSeat(row)}>
                                <img className="seat" src={Seat} />
                            </td>) }
                    </tr>
                    <tr><td> </td></tr>
                    <tr>
                        { this.props.seat1.map( row =>
                            <td className={this.props.complete.indexOf(row) > -1? 'complete': 'incomplete'}
                                key={row} onClick = {e => this.onClickSeat(row)}>
                                <img className="seat" src={Seat} />
                            </td>) }
                    </tr>
                    <tr><td> </td></tr>
                    <tr>
                        { this.props.seat.map( row =>
                            <td className={this.props.complete.indexOf(row) > -1? 'complete': 'incomplete'}
                                key={row} onClick = {e => this.onClickSeat(row)}>
                                <img className="seat" src={Seat} />
                            </td>) }
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }

    onClickSeat(seat) {
        this.props.onClickData(seat);
    }
}

export default Flight;