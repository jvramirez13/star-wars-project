import React, { Component } from 'react'
import './App.css'
import logo from './logo.png'

import axios from 'axios'

class App extends Component {
  constructor () {
    super()
    this.state = {
      character: "Click the button below to output a Star Wars character!",
      index: 0,
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    axios.get('https://swapi.co/api/people/' + this.state.index)
      .then(response => this.setState({character: response.data.name}));
      this.setState({index: this.state.index + 1});
  }

  render () {
    return (
      <div className='button__container'>
      <img src={logo} height="500" width="500" ></img>
      <h1>STAR WARS CHARACTERS:</h1>
      <h3>{this.state.character}</h3>
        <button className='button' onClick={this.handleClick}>Click Me For A Star Wars Character!</button>
      </div>
    );
  }
}
export default App