import React, { Component } from 'react';
import './ArchivePage.css';
import {Timeline, TimelineEvent} from 'react-event-timeline';
import {FontAwesome} from 'react-fontawesome';
import {Row, Col} from 'react-bootstrap';

class ArchivePage extends Component {

    toggleNav(e) {
        alert(e.target);
        // alert("hello");
        // if (e.next().hasClass('show')) {
        //     e.next().removeClass('show');
        //     e.next().slideUp(350);
        // } else {
        //     e.parent().parent().find('li .inner').removeClass('show');
        //     e.parent().parent().find('li .inner').slideUp(350);
        //     e.next().toggleClass('show');
        //     e.next().slideToggle(350);
        // }
    }

    render() {
        return (
            <div className="ArchivePage">
                <div className="archive-header">
                </div>
                <div className="div-row">
                    <div className="div-col-10">
                        <Timeline className="timeline">
                            <TimelineEvent id="archive-2017" className="timeline-event" icon={<i className="fa fa-circle" />} iconColor="#fcb130" >
                                <p>5 October 2017, Thursday</p>
                                <span><i className="fa fa-hotel fa-2x"></i><label>2</label></span>
                                <span><i className="fa fa-spoon fa-2x"></i><label>27</label></span>
                                <span><i className="fa fa-tv fa-2x"></i><label>0</label></span>
                                <span><i className="fa fa-lightbulb-o fa-2x"></i><label>0</label></span>
                            </TimelineEvent>
                            <TimelineEvent className="timeline-event" icon={<i className="fa fa-circle" />} iconColor="#fcb130" >
                                <p>15 September 2017, Friday</p>
                                <span><i className="fa fa-hotel fa-2x"></i><label>2</label></span>
                                <span><i className="fa fa-spoon fa-2x"></i><label>27</label></span>
                                <span><i className="fa fa-tv fa-2x"></i><label>0</label></span>
                                <span><i className="fa fa-lightbulb-o fa-2x"></i><label>0</label></span>
                            </TimelineEvent>
                            <TimelineEvent className="timeline-event" icon={<i className="fa fa-circle" />} iconColor="#fcb130" >
                                <p>17 July 2017, Monday</p>
                                <span><i className="fa fa-hotel fa-2x"></i><label>2</label></span>
                                <span><i className="fa fa-spoon fa-2x"></i><label>27</label></span>
                                <span><i className="fa fa-tv fa-2x"></i><label>0</label></span>
                                <span><i className="fa fa-lightbulb-o fa-2x"></i><label>0</label></span>
                            </TimelineEvent>
                            <TimelineEvent className="timeline-event" icon={<i className="fa fa-circle" />} iconColor="#fcb130" >
                                <p>30 May 2017, Tuesday</p>
                                <span><i className="fa fa-hotel fa-2x"></i><label>2</label></span>
                                <span><i className="fa fa-spoon fa-2x"></i><label>27</label></span>
                                <span><i className="fa fa-tv fa-2x"></i><label>0</label></span>
                                <span><i className="fa fa-lightbulb-o fa-2x"></i><label>0</label></span>
                            </TimelineEvent>
                            <TimelineEvent className="timeline-event" icon={<i className="fa fa-circle" />} iconColor="#fcb130" >
                                <p>5 May 2017, Friday</p>
                                <span><i className="fa fa-hotel fa-2x"></i><label>2</label></span>
                                <span><i className="fa fa-spoon fa-2x"></i><label>27</label></span>
                                <span><i className="fa fa-tv fa-2x"></i><label>0</label></span>
                                <span><i className="fa fa-lightbulb-o fa-2x"></i><label>0</label></span>
                            </TimelineEvent>
                            <TimelineEvent className="timeline-event" icon={<i className="fa fa-circle" />} iconColor="#fcb130" >
                                <p>11 April 2017, Tuesday</p>
                                <span><i className="fa fa-hotel fa-2x"></i><label>2</label></span>
                                <span><i className="fa fa-spoon fa-2x"></i><label>27</label></span>
                                <span><i className="fa fa-tv fa-2x"></i><label>0</label></span>
                                <span><i className="fa fa-lightbulb-o fa-2x"></i><label>0</label></span>
                            </TimelineEvent>
                            <TimelineEvent className="timeline-event" icon={<i className="fa fa-circle" />} iconColor="#fcb130" >
                                <p>13 February 2017, Monday</p>
                                <span><i className="fa fa-hotel fa-2x"></i><label>2</label></span>
                                <span><i className="fa fa-spoon fa-2x"></i><label>27</label></span>
                                <span><i className="fa fa-tv fa-2x"></i><label>0</label></span>
                                <span><i className="fa fa-lightbulb-o fa-2x"></i><label>0</label></span>
                            </TimelineEvent>
                            <TimelineEvent className="timeline-event" icon={<i className="fa fa-circle" />} iconColor="#fcb130" >
                                <p>13 January 2017, Friday</p>
                                <span><i className="fa fa-hotel fa-2x"></i><label>2</label></span>
                                <span><i className="fa fa-spoon fa-2x"></i><label>27</label></span>
                                <span><i className="fa fa-tv fa-2x"></i><label>0</label></span>
                                <span><i className="fa fa-lightbulb-o fa-2x"></i><label>0</label></span>
                            </TimelineEvent>
                            <TimelineEvent id="archive-2016" className="timeline-event" icon={<i className="fa fa-circle" />} iconColor="#fcb130" >
                                <p>26 December 2016, Monday</p>
                                <span><i className="fa fa-hotel fa-2x"></i><label>2</label></span>
                                <span><i className="fa fa-spoon fa-2x"></i><label>27</label></span>
                                <span><i className="fa fa-tv fa-2x"></i><label>0</label></span>
                                <span><i className="fa fa-lightbulb-o fa-2x"></i><label>0</label></span>
                            </TimelineEvent>
                            <TimelineEvent className="timeline-event" icon={<i className="fa fa-circle" />} iconColor="#fcb130" >
                                <p>17 October 2016, Monday</p>
                                <span><i className="fa fa-hotel fa-2x"></i><label>2</label></span>
                                <span><i className="fa fa-spoon fa-2x"></i><label>27</label></span>
                                <span><i className="fa fa-tv fa-2x"></i><label>0</label></span>
                                <span><i className="fa fa-lightbulb-o fa-2x"></i><label>0</label></span>
                            </TimelineEvent>
                        </Timeline>
                    </div>
                    <div className="div-col-2">
                        <ul className="accordion">
                            <li>
                                <a className="toggle">2017</a>
                                <ul className="inner">
                                    <li><a href="#archive-2017-oct">October</a></li>
                                    <li><a href="#archive-2017-sep">September</a></li>
                                    <li><a href="#archive-2017-jul">July</a></li>
                                    <li><a href="#archive-2017-may">May</a></li>
                                    <li><a href="#archive-2017-apr">April</a></li>
                                    <li><a href="#archive-2017-feb">February</a></li>
                                    <li><a href="#archive-2017-jan">January</a></li>
                                </ul>
                            </li>
                            <li>
                                <a className="toggle">2016</a>
                                <ul className="inner">
                                    <li><a href="#archive-2016-dec">December</a></li>
                                    <li><a href="#archive-2016-oct">October</a></li>
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
