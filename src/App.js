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

  // tracker = () => {
  //   let names = names()
  //   console.log(names)
  // }



  render() {
    console.log(this.names())
    return (
      <div>
          <Input handleSubmit={this.handleSubmit}/>
          <Table/>
      </div>
    )
  }
}


