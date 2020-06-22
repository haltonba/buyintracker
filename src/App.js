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

  names = () => {
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
    let filtered = [];
    array.forEach(function(item){
      let i = filtered.findIndex(x => x.name == item.name);
      if(i <= -1 && item.name != ""){
        filtered.push({name: item.name, in: item.in, out: item.out, owed: item.owed});
      }
    })
    return filtered
  }

  tracker = () => {
    let names = this.names()
    for(let i = 0; i < this.state.items.length; i++) {
      let split = this.state.items[i].split(" ")
      if (split[1] === "participation") {
        let person = names.find(x => x.name === split[0])
        let amount = split[6].replace(",", "")
        person.in += (parseInt(amount) / 10)
        let index = names.findIndex(x => x.name == split[0])
        names.splice(index, 1, person)
      }
      else if (split[1] === "quits") {
        let person = names.find(x => x.name === split[0])
        let amount = split[8].replace(",", "")
        person.out += (parseInt(amount) / 10)
        let index = names.findIndex(x => x.name == split[0])
        names.splice(index, 1, person)
      }
      else if (split[1] === "created") {
        let person = names.find(x => x.name === split[0])
        let amount = split[8].replace(",", "")
        person.in += (parseInt(amount) / 10)
        let index = names.findIndex(x => x.name == split[0])
        names.splice(index, 1, person)
      }
      else if (split[1] === "stack") {
        let person = names.find(x => x.name === split[0])
        let rAmount = split[5].replace(",", "")
        let lAmount = split[3]
        let amount = rAmount - lAmount
        person.in += (parseInt(amount) / 10)
        let index = names.findIndex(x => x.name == split[0])
        names.splice(index, 1, person)
      }
    }
    names.forEach(person => {
      person.owed = person.out - person.in
    })
    return names
  }


  render() {
    return (
      <div>
          <Input handleSubmit={this.handleSubmit}/>
          <Table people={this.tracker()}/>
      </div>
    )
  }
}


