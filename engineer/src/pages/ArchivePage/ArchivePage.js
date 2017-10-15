import React, { Component } from 'react';
import './ArchivePage.css';
import {FontAwesome} from 'react-fontawesome';
import {Row, Col} from 'react-bootstrap';
import TimelineEvent from "./TimelineEvent/TimelineEvent";
import ScrollAnimation from 'react-animate-on-scroll';
import ArchiveDefectsPage from '../ArchiveDefectsPage/ArchiveDefectsPage';
import { connect } from 'react-redux';

class ArchivePage extends Component {

    render() {
        return (
            <div className="ArchivePage">
                <div className="archive-header">
                </div>
                <div className="div-row">
                    <div className="div-col-10 timeline-list">
                        <ul>
                            <li id="2017" onClick={() => {this.props.nav("ArchivedDefects")}}>
                                <ScrollAnimation animateIn='fadeIn' animateOnce="true">
                                    <TimelineEvent timelineDate="1 September 2017, Friday" defects="83" />
                                </ScrollAnimation>
                            </li>
                            <li>
                                <ScrollAnimation animateIn='fadeIn' animateOnce="true" delay="100">
                                    <TimelineEvent timelineDate="26 August 2017, Saturday" defects="35"/>
                                </ScrollAnimation>
                            </li>
                            <li>
                                <ScrollAnimation animateIn='fadeIn' animateOnce="true" delay="200">
                                    <TimelineEvent timelineDate="3 June 2017, Saturday" defects="27"/>
                                </ScrollAnimation>
                            </li>
                            <li>
                                <ScrollAnimation animateIn='fadeIn' animateOnce="true" delay="300">
                                    <TimelineEvent timelineDate="26 May 2017, Friday" defects="58"/>
                                </ScrollAnimation>
                            </li>
                            <li>
                                <ScrollAnimation animateIn='fadeIn' animateOnce="true" delay="400">
                                    <TimelineEvent timelineDate="22 April 2017, Saturday" defects="17"/>
                                </ScrollAnimation>
                            </li>
                            <li>
                                <ScrollAnimation animateIn='fadeIn' animateOnce="true" delay="500">
                                    <TimelineEvent timelineDate="16 April 2017, Sunday" defects="88"/>
                                </ScrollAnimation>
                            </li>
                            <li>
                                <ScrollAnimation animateIn='fadeIn' animateOnce="true" delay="600">
                                    <TimelineEvent timelineDate="1 April 2017, Saturday" defects="16"/>
                                </ScrollAnimation>
                            </li>
                            <li>
                                <ScrollAnimation animateIn='fadeIn' animateOnce="true" delay="700">
                                    <TimelineEvent timelineDate="24 February 2017, Friday" defects="85"/>
                                </ScrollAnimation>
                            </li>
                            <li id="2016">
                                <ScrollAnimation animateIn='fadeIn' animateOnce="true" delay="800">
                                    <TimelineEvent timelineDate="15 Oct 2017, Sunday" defects="66"/>
                                </ScrollAnimation>
                            </li>
                            <li>
                                <ScrollAnimation animateIn='fadeIn' animateOnce="true" delay="900">
                                    <TimelineEvent timelineDate="28 December 2016, Wednesday" defects="77"/>
                                </ScrollAnimation>
                            </li>
                            <li>
                                <ScrollAnimation animateIn='fadeIn' animateOnce="true" delay="1000">
                                    <TimelineEvent timelineDate="27 December 2016, Tuesday" defects="18"/>
                                </ScrollAnimation>
                            </li>
                            <li>
                                <ScrollAnimation animateIn='fadeIn' animateOnce="true" delay="1000">
                                    <TimelineEvent timelineDate="26 December 2016, Monday" defects="22"/>
                                </ScrollAnimation>
                            </li>
                        </ul>
                    </div>
                    <div className="div-col-2 timeline-nav">
                        <ul className="timeline-year">
                            <li>
                                <ul className="inner">
                                    <li><a href="#2017">2017</a></li>
                                    <li><a href="#2016">2016</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        )
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

export default connect(mapStateToProps, mapDispatchToProps)(ArchivePage);
