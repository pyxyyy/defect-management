import React, { Component } from 'react';
import './ArchivePage.css';
import {FontAwesome} from 'react-fontawesome';
import {Row, Col} from 'react-bootstrap';
import TimelineEvent from "./TimelineEvent/TimelineEvent";

class ArchivePage extends Component {

    render() {
        return (
            <div className="ArchivePage">
                <div className="archive-header">
                </div>
                <div className="div-row">
                    <div className="div-col-9 timeline-list">
                        <ul>
                            <li id="2017"><TimelineEvent timelineDate="1 September 2017, Friday"/></li>
                            <li><TimelineEvent timelineDate="26 August 2017, Saturday"/></li>
                            <li><TimelineEvent timelineDate="3 June 2017, Saturday"/></li>
                            <li><TimelineEvent timelineDate="26 May 2017, Friday"/></li>
                            <li><TimelineEvent timelineDate="22 April 2017, Saturday"/></li>
                            <li><TimelineEvent timelineDate="16 April 2017, Sunday"/></li>
                            <li><TimelineEvent timelineDate="1 April 2017, Saturday"/></li>
                            <li><TimelineEvent timelineDate="24 February 2017, Friday"/></li>
                            <li id="2016"><TimelineEvent timelineDate="15 Oct 2017, Sunday"/></li>
                            <li><TimelineEvent timelineDate="28 December 2016, Wednesday"/></li>
                            <li><TimelineEvent timelineDate="27 December 2016, Tuesday"/></li>
                            <li><TimelineEvent timelineDate="26 December 2016, Monday"/></li>
                        </ul>
                    </div>
                    <div className="div-col-3 timeline-nav">
                        <ul class="timeline-year">
                            <li>
                                <ul class="inner">
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

export default ArchivePage;
