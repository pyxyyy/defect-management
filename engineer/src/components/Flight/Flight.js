import React, { Component } from 'react';
import './Flight.css';
import Seat from '../../img/seat.svg';
import ToiletSvg from '../../img/toilet.svg';

class Flight extends Component {

    constructor(props) {
        super(props);
    }

    onClickData(seat) {
        this.props.onClickData(seat);
    }

    render() {
        return (
            <div className="aeroplane">
                <DrawGrid
                    class = "section"
                    seat = { this.props.seat }
                    seat1 = { this.props.seat1 }
                    seat2 = {this.props.seat2 }
                    complete = { this.props.complete }
                    incomplete = { this.props.incomplete }
                    selected = { this.props.selected }
                    onClickData = { this.onClickData.bind(this) }
                />
                <DrawGrid
                    class = "section1"
                    seat = { this.props.seat3 }
                    seat1 = { this.props.seat4 }
                    seat2 = {this.props.seat5 }
                    complete = { this.props.complete }
                    incomplete = { this.props.incomplete }
                    selected = { this.props.selected }
                    onClickData = { this.onClickData.bind(this) }
                />
                <Toilet
                    class = "section2"
                    onClickData = { this.onClickData.bind(this) }
                    complete = { this.props.complete }
                    incomplete = { this.props.incomplete }
                />
                <DrawGrid
                    class = "section1"
                    seat = { this.props.seat6 }
                    seat1 = { this.props.seat7 }
                    seat2 = {this.props.seat8 }
                    complete = { this.props.complete }
                    incomplete = { this.props.incomplete }
                    selected = { this.props.selected }
                    onClickData = { this.onClickData.bind(this) }
                />
                <DrawGrid
                    class = "section1"
                    seat = { this.props.seat9 }
                    seat1 = { this.props.seat10 }
                    seat2 = {this.props.seat11 }
                    complete = { this.props.complete }
                    incomplete = { this.props.incomplete }
                    selected = { this.props.selected }
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
                        <td className={
                            this.props.complete.indexOf('toilet1') > -1 ? 'complete':
                            this.props.incomplete.indexOf('toilet1') > -1 ? 'incomplete': 'pending'}
                            key={'toilet1'} onClick = {e => this.onClickSeat('toilet1')}>
                            <img className="toilet-svg" src={ToiletSvg} />
                        </td>
                    </tr>
                    <tr><td> </td></tr>
                    <tr><td> </td></tr>
                    <tr>
                        <td className={this.props.complete.indexOf('toilet2') > -1 ? 'complete':
                            this.props.incomplete.indexOf('toilet2') > -1 ? 'incomplete': 'pending'}
                            key={'toilet2'} onClick = {e => this.onClickSeat('toilet2')}>
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
                            <td className={
                                this.props.selected.indexOf(row) > -1 ? 'selected':
                                this.props.complete.indexOf(row) > -1 ? 'complete':
                                this.props.incomplete.indexOf(row) > -1 ? 'incomplete': 'pending'}
                                key={row} onClick = {e => this.onClickSeat(row)}>
                                <img className="seat" src={Seat} />
                            </td>) }
                    </tr>
                    <tr><td> </td></tr>
                    <tr>
                        { this.props.seat1.map( row =>
                            <td
                                className={
                                    this.props.selected.indexOf(row) > -1 ? 'selected':
                                    this.props.complete.indexOf(row) > -1 ? 'complete':
                                    this.props.incomplete.indexOf(row) > -1 ? 'incomplete': 'pending'}
                                key={row} onClick = {e => this.onClickSeat(row)}>
                                <img className="seat" src={Seat} />
                            </td>) }
                    </tr>
                    <tr><td> </td></tr>
                    <tr>
                        { this.props.seat2.map( row =>
                            <td className={
                                this.props.selected.indexOf(row) > -1 ? 'selected':
                                this.props.complete.indexOf(row) > -1 ? 'complete':
                                this.props.incomplete.indexOf(row) > -1 ? 'incomplete': 'pending'}
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