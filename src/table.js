import React, {Component} from 'react';
import Row from "./row"

export default class Table extends Component {

  render() {
    return (
        <div>
            <table>
                <tr>
                    <th style={{padding: "0 100px 0 100px"}}>Name</th>
                    <th style={{padding: "0 100px 0 100px"}}>In</th>
                    <th style={{padding: "0 100px 0 100px"}}>Out</th>
                    <th style={{padding: "0 100px 0 100px"}}>Owed</th>
                </tr>
                <Row/>
            </table>
        </div>
    )
  }
}