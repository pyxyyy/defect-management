import React, { Component } from 'react';
import './App.css';
import LandingPage from "./pages/LandingPage/LandingPage";
import ArchivePage from "./pages/ArchivePage/ArchivePage";
import FlightPage from "./pages/FlightPage/FlightPage";
import NavBar from "./components/NavBar/NavBar";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            page: "Flight", // set your page here to see it displayed
        }
    }

    render() {

        let pageComponent = "";
        if (this.state.page === "Archive") {
            pageComponent = <ArchivePage/>
        } else if (this.state.page === "Flight") {
            pageComponent = <FlightPage/>
        } else {
            pageComponent = <LandingPage/>
        }

        return (
            <div className="App">
                <NavBar />
                {pageComponent}
            </div>
        );
    }

}

export default App;
