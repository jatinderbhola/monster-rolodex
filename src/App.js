import React, { Component } from 'react';
import logo from './logo.svg';
import { CardList } from './components/card-list/card-list.component';
import './App.css';
import { Component } from 'react';


class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [
        { id: 1, name: "Satish" }, { id: 2, name: "Satish" },
        { id: 3, name: "Satish" }, { id: 4, name: "Satish" }
      ]
    }

  }
  // mounting: react put comp. on the page, render first time on the view 
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({ monsters: users }))
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