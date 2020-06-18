import React, {Component} from 'react';

export default class Input extends Component {

  state = {
    items: ""
  }

  handleChange = (event) => {
    let items = event.target.value.split(".")
    let final = items.map(item => {
        return item.split("player ").pop();
    })
    this.setState({
        items: final
    })
  }

  handleFormReset = () => {
    this.setState({items: null})
  }

  render() {
    return (
      <div>
          <h1>Enter Buyins</h1>
          <form onReset={this.handleFormReset} onSubmit={(event, items) => this.props.handleSubmit(event, this.state.items)}>
              <textarea value={this.state.items} onChange={this.handleChange} rows="10" cols="77"/>
              <input type="submit"/>
          </form>
      </div>
    )
  }
}