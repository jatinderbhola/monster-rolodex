import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Component } from 'react';


class App extends Component {

  constructor() {
    super(); // call the super in componet 

    // this.state exist
    this.state = {
      monsters: [{ id: 1, name: "Satish" }, { id: 2, name: "Satish" }, { id: 3, name: "Satish" }, { id: 4, name: "Satish" }]
    }

  }

  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map(monster => <h1 key={monster.id}> {monster.name}</h1>)
        }
      </div >
    );
  }
}


export default App;
