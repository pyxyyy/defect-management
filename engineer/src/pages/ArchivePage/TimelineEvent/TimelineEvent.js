import React, {Component} from 'react'
import './TimelineEvent.css';

class TimelineEvent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="timeline">
                <div className="timeline-shapes">
                    <div className="timeline-progress-line" />
                    <div className="timeline-progress-circ1" />
                    <div className="timeline-progress-line2" />
                </div>

                <div className="timeline-content">
                    <span className="defect-date">{this.props.timelineDate}</span><span className="num-of-defects">{this.props.defects} <i className="fa fa-wrench"></i></span>
                </div>
            </div>
        )
    }
}

export default TimelineEvent;