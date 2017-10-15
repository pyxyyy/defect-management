import React, { Component } from 'react';
import './DefectsPage.css';
import SideBar from "../../components/SideBar/SideBar";
import Flight from "../../components/Flight/Flight";

class DefectsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seatNumber: "34B",
            location : true,
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
            complete: ['29', '50'],
            issues: [
                {
                    "title": "Meal Tray",
                    "time": "23:41, 8 September 2017",
                    "logger": "Passenger",
                    "commentsTS": false,
                    "commentsCA": true,
                    "pending": true
                },
                {
                    "title": "Seat Belt",
                    "time": "8:41, 18 September 2017",
                    "logger": "Cabin Crew",
                    "commentsTS": true,
                    "commentsCA": false,
                    "pending": false
                },
            ]
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
    render() {
        const locationStyle = (this.state.location) ? "DefectsPage-display-header-selected" : "DefectsPage-display-header-unselected";
        const typeStyle = (!this.state.location) ? "DefectsPage-display-header-selected" : "DefectsPage-display-header-unselected";
        return (
            <div className="DefectsPage">
                <div className="DefectsPage-display">
                    <div className="DefectsPage-display-header">
                        <div className={locationStyle} onClick={() => {this.setState({location:true})}}>
                            <span>By Location</span>
                        </div>
                        <div className={typeStyle} onClick={() => {this.setState({location:false})}}>
                            <span>By Type</span>
                        </div>
                    </div>
                    <div className="DefectsPage-display-blueprint">
                        <Flight className="DefectsPage-body"
                                onClickData = { this.onClickData.bind(this) }
                                { ...this.state }
                                // seat = { this.state.seat }
                                // seat1 = { this.state.seat1 }
                                // seat2 = {this.state.seat2 }
                                // sea3 = { this.state.seat3 }
                                // seat4 = { this.state.seat4 }
                                // seat5 = {this.state.seat5 }
                                // seat6= { this.state.seat6 }
                                // seat7 = { this.state.seat7 }
                                // seat8 = {this.state.seat8 }
                                // seat9 = { this.state.seat9 }
                                // seat10 = {this.state.seat10 }
                                // seat11 = { this.state.seat11 }
                                // complete = { this.state.complete }
                                // incomplete = { this.state.incomplete }
                        />
                    </div>
                </div>
                <div className="DefectsPage-SideBar"><SideBar
                    seatNumber = {this.state.seatNumber }
                    issues = {this.state.issues }
                /></div>
            </div>
        );
    }
    onClickData(seat) {
        const alphabets = 'ABCDEFGHI';
        this.setState({
            seatNumber: seat + alphabets.charAt(seat % 9)
        });
        //
        // if(this.state.seatSele.indexOf(seat) > -1 ) {
        //     this.setState({
        //         seatAvailable: this.state.seatAvailable.concat(seat),
        //         seatReserved: this.state.seatReserved.filter(res => res != seat)
        //     })
        // } else {
        //     this.setState({
        //         seatReserved: this.state.seatReserved.concat(seat),
        //         seatAvailable: this.state.seatAvailable.filter(res => res != seat)
        //     })
        // }
    }
}

export default DefectsPage;
