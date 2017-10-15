import React, { Component } from 'react';
import './Type.css';


class ContactRow extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <tr>
                <td>{this.props.defect.number}</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>{this.props.defect.type}</td>
            </tr>
        );
    }
}

class ContactTable extends Component {
    render() {
        var rows = [];
        this.props.defect.forEach((defect) => {
            rows.push(<ContactRow defect={defect} />);
        });
        return (
            <table className='table'>
                <thead>
                <tr className='table-row'>
                    <th>Seat Number</th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th>Defect Type</th>
                </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}

export default ContactTable;