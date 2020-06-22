import React, {Component} from 'react';

export default class Row extends Component {

  render() {
    return (
        <tr>
            <td>{this.props.person.name}</td>
            <td>${this.props.person.in.toFixed(2)}</td>
            <td>${this.props.person.out.toFixed(2)}</td>
            <td style={this.props.person.owed > 0 ? {color: "green"} : {color: "red"}}>${this.props.person.owed.toFixed(2)}</td>
        </tr>
    )
  }
}