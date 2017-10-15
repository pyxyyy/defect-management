import React, { Component } from 'react';
import './Flight.css';
import Seat from '../../img/seat.svg';


class Flight extends Component {

    constructor() {
        super();
        this.state = {
            seat: [
            ],
            seat1: [
            ],
            incomplete: [
            ],
            complete: []
        };
        for (let i = 0; i < 34; i++) {
            this.state.seat.push('');
        }
        for (let i = 0; i < 51; i++) {
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
                    class = "section1"
                    seat = { this.state.seat }
                    complete = { this.state.complete }
                    incomplete = { this.state.incomplete }
                    onClickData = { this.onClickData.bind(this) }
                />
                <DrawGrid
                    class = "section3"
                    seat = { this.state.seat }
                    complete = { this.state.complete }
                    incomplete = { this.state.incomplete }
                    onClickData = { this.onClickData.bind(this) }
                />
                <DrawGrid
                    class = "section3"
                    seat = { this.state.seat }
                    complete = { this.state.complete }
                    incomplete = { this.state.incomplete }
                    onClickData = { this.onClickData.bind(this) }
                />
                <DrawGrid
                    class = "section2"
                    seat = { this.state.seat1 }
                    complete = { this.state.complete }
                    incomplete = { this.state.incomplete }
                    onClickData = { this.onClickData.bind(this) }
                />
                <DrawGrid
                    class = "section4"
                    seat = { this.state.seat1 }
                    complete = { this.state.complete }
                    incomplete = { this.state.incomplete }
                    onClickData = { this.onClickData.bind(this) }
                />
                <DrawGrid
                    class = "section4"
                    seat = { this.state.seat1 }
                    complete = { this.state.complete }
                    incomplete = { this.state.incomplete }
                    onClickData = { this.onClickData.bind(this) }
                />
                <DrawGrid
                    class = "section2"
                    seat = { this.state.seat }
                    complete = { this.state.complete }
                    incomplete = { this.state.incomplete }
                    onClickData = { this.onClickData.bind(this) }
                />
                <DrawGrid
                    class = "section4"
                    seat = { this.state.seat }
                    complete = { this.state.complete }
                    incomplete = { this.state.incomplete }
                    onClickData = { this.onClickData.bind(this) }
                />
                <DrawGrid
                    class = "section4"
                    seat = { this.state.seat }
                    complete = { this.state.complete }
                    incomplete = { this.state.incomplete }
                    onClickData = { this.onClickData.bind(this) }
                />
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