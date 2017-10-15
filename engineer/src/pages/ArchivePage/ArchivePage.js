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
                    <div className="div-col-10 timeline-list">
                        <ul>
                            <li id="2017"><TimelineEvent timelineDate="1 September 2017, Friday" defects="3"/></li>
                            <li><TimelineEvent timelineDate="26 August 2017, Saturday" defects="35"/></li>
                            <li><TimelineEvent timelineDate="3 June 2017, Saturday" defects="27"/></li>
                            <li><TimelineEvent timelineDate="26 May 2017, Friday" defects="58"/></li>
                            <li><TimelineEvent timelineDate="22 April 2017, Saturday" defects="17"/></li>
                            <li><TimelineEvent timelineDate="16 April 2017, Sunday" defects="88"/></li>
                            <li><TimelineEvent timelineDate="1 April 2017, Saturday" defects="16"/></li>
                            <li><TimelineEvent timelineDate="24 February 2017, Friday" defects="85"/></li>
                            <li id="2016"><TimelineEvent timelineDate="15 Oct 2017, Sunday" defects="66"/></li>
                            <li><TimelineEvent timelineDate="28 December 2016, Wednesday" defects="77"/></li>
                            <li><TimelineEvent timelineDate="27 December 2016, Tuesday" defects="18"/></li>
                            <li><TimelineEvent timelineDate="26 December 2016, Monday" defects="22"/></li>
                        </ul>
                    </div>
                    <div className="div-col-2 timeline-nav">
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
