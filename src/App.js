import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Component } from 'react';


class App extends Component {

  constructor() {
    super(); // call the super in componet 

    // this.state exist
    this.state = {
      monsters: [{
        name: "satish"
      }, {
        name: "tarun"
      }, {
        name: "shital"
      }, {
        name: "muthu"
      }]
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p> {this.state.string} </p>

          <button onClick={() => this.setState({ string: 'hello Poonam' })} >click me</button>

          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div >
    );
  }
}


export default App;
