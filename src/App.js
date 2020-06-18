import React, {Component} from 'react';
import Input from "./input"
import Table from "./table"
import './App.css';

export default class App extends Component {

  state = {
    items: []
  }

  handleSubmit = (event, items) => {
    event.preventDefault()
    this.setState({
      items: items
    })
  }

  parsed = () => {
    let array = []
      for(let i = 0; i < this.state.items.length; i++) {
          let player = {
            "name": this.state.items[i].split(" ")[0],
            "in": 0,
            "out": 0,
            "owed": 0
          }
          array.push(player)
      }

    let filtered = []
    for(let i = 0; i < array.length; i++) {
      for(let j = 0; j <= filtered.length; j++) {
        if(!filtered[j].name === array[i].name || filtered.length === 0) {
          filtered.push(array[i])
        }
      }
    }
    return filtered
  }

  render() {
    console.log(this.parsed())
    return (
      <div>
          <Input handleSubmit={this.handleSubmit}/>
          <Table parsed={this.parsed}/>
      </div>
    )
  }
}


