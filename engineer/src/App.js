import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import AnalyticsPage from "./pages/AnalyticsPage/AnalyticsPage";
import ArchivePage from "./pages/ArchivePage/ArchivePage";
import DefectsPage from "./pages/Defects/DefectsPage";
import NavBar from "./components/NavBar/NavBar";
import LandingPage from "./pages/LandingPage/LandingPage";

class App extends Component {

    render() {

        let page = "";
        switch(this.props.page) {
            case ('Landing'):
                page = <LandingPage />;
                break;
            case ('Defects'):
                page = <DefectsPage />;
                break;
            case ('Archive'):
                page = <ArchivePage />;
                break;
            case ('Analytics'):
                page = <AnalyticsPage />;
                break;
            default:
                page = <LandingPage />;
        }
        const display = (this.props.page === "Landing")
            ?
            <div>
                {page}
            </div>
            :
            <div>
                <NavBar/>
                {page}
            </div>;

        return (
            <div className="App">
                {display}
            </div>
        );
    }

}
const mapStateToProps = (state) => {
    return {
        page: state.page
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        nav: (page) => {
            dispatch({
                type: 'nav',
                page: page
            });
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

