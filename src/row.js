import React, {Component} from 'react';

export default class Row extends Component {

  render() {
    return (
        <tr>
            <td>{this.props.person.name}</td>
            <td>${this.props.person.in}</td>
            <td>${this.props.person.out}</td>
            <td style={this.props.person.owed > 0 ? {color: "green"} : {color: "red"}}>${this.props.person.owed}</td>
        </tr>
    )
  }
}