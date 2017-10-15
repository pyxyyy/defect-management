import React, { Component } from 'react';
import './Flight.css';
import Seat from '../../img/seat.svg';
import ToiletSvg from '../../img/toilet.svg';


class ArchivedFlight extends Component {

    constructor() {
        super();
        this.state = {
            seat: [],
            seat1: [],
            seat2: [],
            seat3: [],
            seat4: [],
            seat5: [],
            seat6: [],
            seat7: [],
            seat8: [],
            seat9: [],
            seat10: [],
            seat11: [],
            incomplete: ['12', '42', '69', '88', '122'],
            complete: ['29', '50']
        };
        for (let i = 0; i < 10; i++) {
            this.state.seat.push('' + i);
        }
        for (let i = 10; i < 25; i++) {
            this.state.seat1.push('' + (i));
        }
        for (let i = 25; i < 35; i++) {
            this.state.seat2.push('' + (i));
        }
        for (let i = 35; i < 45; i++) {
            this.state.seat3.push('' + i);
        }
        for (let i = 45; i < 60; i++) {
            this.state.seat4.push('' + (i));
        }
        for (let i = 60; i < 70; i++) {
            this.state.seat5.push('' + (i));
        }
        for (let i = 70; i < 80; i++) {
            this.state.seat6.push('' + i);
        }
        for (let i = 80; i < 95; i++) {
            this.state.seat7.push('' + (i));
        }
        for (let i = 95; i < 105; i++) {
            this.state.seat8.push('' + (i));
        }
        for (let i = 105; i < 115; i++) {
            this.state.seat9.push('' + i);
        }
        for (let i = 115; i < 130; i++) {
            this.state.seat10.push('' + (i));
        }
        for (let i = 130; i < 140; i++) {
            this.state.seat11.push('' + (i));
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
                    seat2 = {this.state.seat2 }
                    complete = { this.state.complete }
                    incomplete = { this.state.incomplete }
                    onClickData = { this.onClickData.bind(this) }
                />
                <DrawGrid
                    class = "section1"
                    seat = { this.state.seat3 }
                    seat1 = { this.state.seat4 }
                    seat2 = {this.state.seat5 }
                    complete = { this.state.complete }
                    incomplete = { this.state.incomplete }
                    onClickData = { this.onClickData.bind(this) }
                />
                <Toilet
                    class = "section2"
                    onClickData = { this.onClickData.bind(this) }
                    complete = { this.state.complete }
                    incomplete = { this.state.incomplete }
                />
                <DrawGrid
                    class = "section1"
                    seat = { this.state.seat6 }
                    seat1 = { this.state.seat7 }
                    seat2 = {this.state.seat8 }
                    complete = { this.state.complete }
                    incomplete = { this.state.incomplete }
                    onClickData = { this.onClickData.bind(this) }
                />
                <DrawGrid
                    class = "section1"
                    seat = { this.state.seat9 }
                    seat1 = { this.state.seat10 }
                    seat2 = {this.state.seat11 }
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
                        <td className={this.props.complete.indexOf('toilet1') > -1 ? 'complete':
                            this.props.incomplete.indexOf('toilet1') > -1 ? 'incomplete': 'pending'}
                            key={'toilet1'} >
                            <img className="toilet-svg" src={ToiletSvg} />
                        </td>
                    </tr>
                    <tr><td> </td></tr>
                    <tr><td> </td></tr>
                    <tr>
                        <td className={this.props.complete.indexOf('toilet2') > -1 ? 'complete':
                            this.props.incomplete.indexOf('toilet2') > -1 ? 'incomplete': 'pending'}
                            key={'toilet2'} >
                            <img className="toilet-svg" src={ToiletSvg} />
                        </td>
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

class DrawGrid extends Component {
    render() {
        return (
            <div className={this.props.class }>
                <table className="grid">
                    <tbody>
                    <tr>
                        { this.props.seat.map( row =>
                            <td className={this.props.complete.indexOf(row) > -1 ? 'complete':
                                this.props.incomplete.indexOf(row) > -1 ? 'incomplete': 'pending'}
                                key={row} >
                                <img className="seat" src={Seat} />
                            </td>) }
                    </tr>
                    <tr><td> </td></tr>
                    <tr>
                        { this.props.seat1.map( row =>
                            <td className={this.props.complete.indexOf(row) > -1 ? 'complete':
                                this.props.incomplete.indexOf(row) > -1 ? 'incomplete': 'pending'}
                                key={row} >
                                <img className="seat" src={Seat} />
                            </td>) }
                    </tr>
                    <tr><td> </td></tr>
                    <tr>
                        { this.props.seat2.map( row =>
                            <td className={this.props.complete.indexOf(row) > -1 ? 'complete':
                                this.props.incomplete.indexOf(row) > -1 ? 'incomplete': 'pending'}
                                key={row} >
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

export default ArchivedFlight;